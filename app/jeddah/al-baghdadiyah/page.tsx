import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي البغدادية بجدة",
  description: "تنظيف في حي البغدادية.",
  alternates: { canonical: `${site.url}/jeddah/al-baghdadiyah` },
};

export default function AlBaghdadiyahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي البغدادية", url: "/jeddah/al-baghdadiyah" }]} />
      <Hero title="تنظيف البغدادية" subtitle="حي البغدادية" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف البغدادية" context={{ area: "البغدادية" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف البغدادية</h2><p className="text-lg">نخدم البغدادية.</p></div>
      </section>
      <CTASection context={{ area: "البغدادية" }} />
    </>
  );
}

