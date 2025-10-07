import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الزهراء بجدة",
  description: "خدمات تنظيف المنازل والفلل في حي الزهراء بجدة. نظافة احترافية بأفضل الأسعار.",
  alternates: { canonical: `${site.url}/jeddah/al-zahraa` },
};

export default function AlZahraaPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الزهراء", url: "/jeddah/al-zahraa" }]} />
      <Hero title="خدمات التنظيف في حي الزهراء" subtitle="حي الزهراء" description="نخدم سكان حي الزهراء بجميع خدمات التنظيف." image="home cleaning Jeddah.jpg" imageAlt="تنظيف في حي الزهراء" context={{ area: "حي الزهراء" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">شركة تنظيف في حي الزهراء بجدة</h2>
            <p className="text-lg">نخدم حي الزهراء بخدمات تنظيف شاملة: منازل، فلل، شقق، كنب، وسجاد. احجز الآن.</p>
          </div>
        </div>
      </section>
      <CTASection context={{ area: "حي الزهراء" }} />
    </>
  );
}

