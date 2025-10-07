import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الفيصلية بجدة",
  description: "تنظيف في حي الفيصلية.",
  alternates: { canonical: `${site.url}/jeddah/al-faisaliyah` },
};

export default function AlFaisaliyahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الفيصلية", url: "/jeddah/al-faisaliyah" }]} />
      <Hero title="تنظيف الفيصلية" subtitle="حي الفيصلية" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف الفيصلية" context={{ area: "الفيصلية" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف الفيصلية</h2><p className="text-lg">نخدم الفيصلية.</p></div>
      </section>
      <CTASection context={{ area: "الفيصلية" }} />
    </>
  );
}

