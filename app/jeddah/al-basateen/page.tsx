import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي البساتين بجدة",
  description: "تنظيف في حي البساتين.",
  alternates: { canonical: `${site.url}/jeddah/al-basateen` },
};

export default function AlBasateenPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي البساتين", url: "/jeddah/al-basateen" }]} />
      <Hero title="تنظيف البساتين" subtitle="حي البساتين" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف البساتين" context={{ area: "البساتين" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف البساتين</h2><p className="text-lg">نخدم البساتين.</p></div>
      </section>
      <CTASection context={{ area: "البساتين" }} />
    </>
  );
}

