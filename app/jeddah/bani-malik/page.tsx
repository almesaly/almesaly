import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي بني مالك بجدة",
  description: "تنظيف في حي بني مالك.",
  alternates: { canonical: `${site.url}/jeddah/bani-malik` },
};

export default function BaniMalikPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي بني مالك", url: "/jeddah/bani-malik" }]} />
      <Hero title="تنظيف بني مالك" subtitle="حي بني مالك" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف بني مالك" context={{ area: "بني مالك" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف بني مالك</h2><p className="text-lg">نخدم بني مالك.</p></div>
      </section>
      <CTASection context={{ area: "بني مالك" }} />
    </>
  );
}

