import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي النزهة بجدة",
  description: "تنظيف في حي النزهة.",
  alternates: { canonical: `${site.url}/jeddah/al-nuzha` },
};

export default function AlNuzhaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي النزهة", url: "/jeddah/al-nuzha" }]} />
      <Hero title="تنظيف النزهة" subtitle="حي النزهة" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف النزهة" context={{ area: "النزهة" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف النزهة</h2><p className="text-lg">نخدم النزهة.</p></div>
      </section>
      <CTASection context={{ area: "النزهة" }} />
    </>
  );
}

