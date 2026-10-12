import { Project } from "@/types/project";

export interface StoreInfo {
  name: string;
  genre: string;
  rating: number;
  ratingCount: number;
  version: string;
  updatedAt: string;
  releasedAt: string;
  minimumOs: string;
  seller: string;
  price: string;
  contentRating: string;
  url: string;
}

export type StoreDataMap = Record<string, StoreInfo>;

interface ITunesResult {
  trackId: number;
  trackName: string;
  primaryGenreName: string;
  averageUserRating?: number;
  userRatingCount?: number;
  version: string;
  currentVersionReleaseDate: string;
  releaseDate: string;
  minimumOsVersion: string;
  sellerName: string;
  formattedPrice?: string;
  contentAdvisoryRating?: string;
  trackViewUrl: string;
}

const REVALIDATE_SECONDS = 60 * 60 * 24;

export function appStoreId(url?: string) {
  return url?.match(/id(\d+)/)?.[1];
}

async function lookup(ids: string[], country: string): Promise<ITunesResult[]> {
  if (!ids.length) return [];
  const res = await fetch(
    `https://itunes.apple.com/lookup?id=${ids.join(",")}&country=${country}&entity=software`,
    { next: { revalidate: REVALIDATE_SECONDS } }
  );
  if (!res.ok) return [];
  const json = (await res.json()) as { results?: ITunesResult[] };
  return json.results ?? [];
}

export async function getAppStoreData(projects: Project[]): Promise<StoreDataMap> {
  const slugById = new Map<string, string>();
  for (const p of projects) {
    const id = appStoreId(p.appLink?.ios);
    if (id) slugById.set(id, p.slug);
  }
  const ids = [...slugById.keys()];

  try {
    const results = await lookup(ids, "in");
    const found = new Set(results.map((r) => String(r.trackId)));
    const missing = ids.filter((id) => !found.has(id));
    results.push(...(await lookup(missing, "us")));

    const map: StoreDataMap = {};
    for (const r of results) {
      const slug = slugById.get(String(r.trackId));
      if (!slug) continue;
      map[slug] = {
        name: r.trackName,
        genre: r.primaryGenreName,
        rating: Math.round((r.averageUserRating ?? 0) * 10) / 10,
        ratingCount: r.userRatingCount ?? 0,
        version: r.version,
        updatedAt: r.currentVersionReleaseDate,
        releasedAt: r.releaseDate,
        minimumOs: r.minimumOsVersion,
        seller: r.sellerName,
        price: r.formattedPrice ?? "Free",
        contentRating: r.contentAdvisoryRating ?? "",
        url: r.trackViewUrl.split("?")[0],
      };
    }
    return map;
  } catch {
    return {};
  }
}
