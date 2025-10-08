import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "شركة تنظيف في العزيزية جدة - خدمات تنظيف احترافية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي العزيزية بجدة. تنظيف منازل ومحلات بجودة عالية.",
  alternates: { canonical: `${site.url}/jeddah/al-aziziyah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي العزيزية", url: "/jeddah/al-aziziyah" },
];

const faqs = [
  {
    question: "الخدمات في العزيزية؟",
    answer: "تنظيف منازل، محلات، ومكاتب.",
  },
  {
    question: "الأسعار؟",
    answer: "من 250 ريال.",
  },
];

export default function AlAziziyahPage() {
  return (
    <>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تنظيف في العزيزية",
        provider: { "@type": "LocalBusiness", name: site.brand },
      }} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في العزيزية"
        subtitle="خدمات التنظيف في العزيزية"
        description="تنظيف احترافي للمنازل والمحلات."
        image="deep cleaning service.jpg"
        imageAlt="تنظيف في العزيزية"
        context={{ area: "العزيزية" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold">تنظيف في العزيزية</h2>
            <p className="text-lg">خدمات من <strong>شركة المثالي</strong>.</p>

            <div className="rounded-lg bg-blue-50 p-6">
              <ul className="list-disc list-inside">
                <li>تنظيف منازل ومحلات</li>
                <li>تنظيف مكاتب وشركات</li>
                <li>تعقيم شامل</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "العزيزية" }} />
    </>
  );
}
