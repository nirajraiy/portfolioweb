export const RESUME_URL = "/cv/NirajResume.html";

export function openResume(print = true) {
  window.open(print ? `${RESUME_URL}?print=1` : RESUME_URL, "_blank", "noopener");
}
