import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الخالدية بجدة",
  description: "تنظيف المنازل والفلل في حي الخالدية بجدة.",
  alternates: { canonical: `${site.url}/jeddah/al-khalidiyah` },
};

export default function AlKhalidiyahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الخالدية", url: "/jeddah/al-khalidiyah" }]} />
      <Hero title="تنظيف في حي الخالدية" subtitle="حي الخالدية" description="خدمات تنظيف احترافية." image="home cleaning Jeddah.jpg" imageAlt="تنظيف الخالدية" context={{ area: "الخالدية" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">تنظيف الخالدية</h2>
          <p className="text-lg">نخدم حي الخالدية بجميع خدمات التنظيف.</p>
        </div>
      </section>
      <CTASection context={{ area: "الخالدية" }} />
    </>
  );
}

