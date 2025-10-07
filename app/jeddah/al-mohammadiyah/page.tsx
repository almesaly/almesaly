import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي المحمدية بجدة",
  description: "تنظيف في حي المحمدية.",
  alternates: { canonical: `${site.url}/jeddah/al-mohammadiyah` },
};

export default function AlMohammadiyahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي المحمدية", url: "/jeddah/al-mohammadiyah" }]} />
      <Hero title="تنظيف المحمدية" subtitle="حي المحمدية" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف المحمدية" context={{ area: "المحمدية" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">تنظيف المحمدية</h2>
          <p className="text-lg">نخدم المحمدية.</p>
        </div>
      </section>
      <CTASection context={{ area: "المحمدية" }} />
    </>
  );
}

