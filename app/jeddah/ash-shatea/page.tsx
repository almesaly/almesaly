import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الشاطئ بجدة",
  description: "تنظيف في حي الشاطئ.",
  alternates: { canonical: `${site.url}/jeddah/ash-shatea` },
};

export default function AshShateaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الشاطئ", url: "/jeddah/ash-shatea" }]} />
      <Hero title="تنظيف الشاطئ" subtitle="حي الشاطئ" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف الشاطئ" context={{ area: "الشاطئ" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف الشاطئ</h2><p className="text-lg">نخدم الشاطئ.</p></div>
      </section>
      <CTASection context={{ area: "الشاطئ" }} />
    </>
  );
}

