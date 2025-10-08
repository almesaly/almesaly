import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "شركة تنظيف في الفيصلية جدة - خدمات تنظيف موثوقة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الفيصلية بجدة. تنظيف شامل بجودة عالية.",
  alternates: { canonical: `${site.url}/jeddah/al-faisaliyah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الفيصلية", url: "/jeddah/al-faisaliyah" },
];

const faqs = [
  {
    question: "ما خدماتكم؟",
    answer: "تنظيف منازل، مفروشات، وتعقيم.",
  },
  {
    question: "الأسعار؟",
    answer: "من 250 ريال.",
  },
];

export default function AlFaisaliyahPage() {
  return (
    <>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تنظيف في الفيصلية",
        provider: { "@type": "LocalBusiness", name: site.brand },
      }} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الفيصلية"
        subtitle="خدمات التنظيف في الفيصلية"
        description="تنظيف احترافي."
        image="villa cleaning service.jpg"
        imageAlt="تنظيف في الفيصلية"
        context={{ area: "الفيصلية" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold">تنظيف في الفيصلية</h2>
            <p className="text-lg">خدمات من <strong>شركة المثالي</strong>.</p>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="text-2xl font-bold">الخدمات</h3>
              <ul className="list-disc list-inside">
                <li>تنظيف منازل</li>
                <li>تنظيف مفروشات</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "الفيصلية" }} />
    </>
  );
}
