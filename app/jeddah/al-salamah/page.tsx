import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي السلامة بجدة",
  description: "تنظيف في حي السلامة.",
  alternates: { canonical: `${site.url}/jeddah/al-salamah` },
};

export default function AlSalamahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي السلامة", url: "/jeddah/al-salamah" }]} />
      <Hero title="تنظيف السلامة" subtitle="حي السلامة" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف السلامة" context={{ area: "السلامة" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف السلامة</h2><p className="text-lg">نخدم السلامة.</p></div>
      </section>
      <CTASection context={{ area: "السلامة" }} />
    </>
  );
}

