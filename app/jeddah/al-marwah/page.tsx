import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي المروة بجدة",
  description: "تنظيف المنازل والفلل في حي المروة. خدمة سريعة واحترافية.",
  alternates: { canonical: `${site.url}/jeddah/al-marwah` },
};

export default function AlMarwahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي المروة", url: "/jeddah/al-marwah" }]} />
      <Hero title="تنظيف في حي المروة بجدة" subtitle="حي المروة" description="خدمات تنظيف لسكان حي المروة." image="home cleaning Jeddah.jpg" imageAlt="تنظيف حي المروة" context={{ area: "حي المروة" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">تنظيف حي المروة</h2>
          <p className="text-lg">نقدم جميع خدمات التنظيف لسكان حي المروة.</p>
        </div>
      </section>
      <CTASection context={{ area: "حي المروة" }} />
    </>
  );
}

