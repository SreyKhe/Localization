"use client";

import FeatureHome from "@/components/Home/Feature";
import HeroHome from "@/components/Home/Hero";

export default function HomePage() {
  return (
    <>
      {/* Hero Homepage */}
      <section id="" className="container mx-auto bg-pink-50/100 mt-5 h-[70vh] overflow-hidden">
        <HeroHome/>
      </section>

      {/* Feature */}
      <section id="">
        <FeatureHome/>
      </section>
    </>
  );
}
