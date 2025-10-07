import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي النعيم بجدة",
  description: "تنظيف في حي النعيم.",
  alternates: { canonical: `${site.url}/jeddah/al-naeem` },
};

export default function AlNaeemPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي النعيم", url: "/jeddah/al-naeem" }]} />
      <Hero title="تنظيف النعيم" subtitle="حي النعيم" description="خدمات تنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف النعيم" context={{ area: "النعيم" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 max-w-4xl"><h2 className="mb-6 text-3xl font-bold">تنظيف النعيم</h2><p className="text-lg">نخدم النعيم.</p></div>
      </section>
      <CTASection context={{ area: "النعيم" }} />
    </>
  );
}

