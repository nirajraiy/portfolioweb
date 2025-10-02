"use client";
import Hero from "@/components/homePage/Hero";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  return (
    <div className="home-page">
      <Hero key={pathname} />
      <div style={{ height: "60vh" }} /> 
    </div>
  );
}
