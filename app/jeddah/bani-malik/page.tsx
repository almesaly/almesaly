import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "شركة تنظيف في بني مالك جدة - خدمات تنظيف احترافية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي بني مالك بجدة. خدمات تنظيف شاملة بأسعار مناسبة.",
  alternates: { canonical: `${site.url}/jeddah/bani-malik` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي بني مالك", url: "/jeddah/bani-malik" },
];

const faqs = [
  {
    question: "ما خدماتكم في بني مالك؟",
    answer:
      "نقدم تنظيف منازل، فلل، مفروشات، وتعقيم شامل.",
  },
  {
    question: "كم الأسعار؟",
    answer:
      "تبدأ من 240 ريال.",
  },
];

export default function BaniMalikPage() {
  return (
    <>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تنظيف في بني مالك",
        provider: { "@type": "LocalBusiness", name: site.brand },
      }} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في بني مالك"
        subtitle="خدمات التنظيف في بني مالك"
        description="تنظيف احترافي بأسعار مناسبة."
        image="home cleaning Jeddah.jpg"
        imageAlt="تنظيف في بني مالك"
        context={{ area: "بني مالك" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">تنظيف في بني مالك</h2>
              <p className="text-lg">خدمات تنظيف من <strong>شركة المثالي</strong>.</p>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">خدماتنا</h2>
              <ul className="list-disc list-inside">
                <li>تنظيف منازل</li>
                <li>تنظيف مفروشات</li>
                <li>جلي رخام</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "بني مالك" }} />
    </>
  );
}
