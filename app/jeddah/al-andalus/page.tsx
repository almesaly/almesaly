import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الأندلس بجدة",
  description: "تنظيف المنازل في حي الأندلس بجدة.",
  alternates: { canonical: `${site.url}/jeddah/al-andalus` },
};

export default function AlAndalusPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الأندلس", url: "/jeddah/al-andalus" }]} />
      <Hero title="تنظيف في حي الأندلس" subtitle="حي الأندلس" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف الأندلس" context={{ area: "الأندلس" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">تنظيف الأندلس</h2>
          <p className="text-lg">نخدم حي الأندلس.</p>
        </div>
      </section>
      <CTASection context={{ area: "الأندلس" }} />
    </>
  );
}

