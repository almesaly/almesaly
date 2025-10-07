import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الربوة بجدة",
  description: "تنظيف في حي الربوة.",
  alternates: { canonical: `${site.url}/jeddah/al-rabwa` },
};

export default function AlRabwaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الربوة", url: "/jeddah/al-rabwa" }]} />
      <Hero title="تنظيف الربوة" subtitle="حي الربوة" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف الربوة" context={{ area: "الربوة" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف الربوة</h2><p className="text-lg">نخدم الربوة.</p></div>
      </section>
      <CTASection context={{ area: "الربوة" }} />
    </>
  );
}

