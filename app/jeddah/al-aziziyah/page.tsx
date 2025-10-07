import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي العزيزية بجدة",
  description: "تنظيف في حي العزيزية.",
  alternates: { canonical: `${site.url}/jeddah/al-aziziyah` },
};

export default function AlAziziyahPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي العزيزية", url: "/jeddah/al-aziziyah" }]} />
      <Hero title="تنظيف العزيزية" subtitle="حي العزيزية" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف العزيزية" context={{ area: "العزيزية" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف العزيزية</h2><p className="text-lg">نخدم العزيزية.</p></div>
      </section>
      <CTASection context={{ area: "العزيزية" }} />
    </>
  );
}

