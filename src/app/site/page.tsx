
// import Hero from "@/components/homePage/Hero";

// export default function HomePage() {
//   return (
//      <>
//       <Hero />
//     </>
//   );
// }
"use client";
import Hero from "@/components/homePage/Hero";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  return (
    <>
      <Hero key={pathname} />
    </>
  );
}
