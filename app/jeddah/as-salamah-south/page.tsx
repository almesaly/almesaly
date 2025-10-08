import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "شركة تنظيف في السلامة الجنوبية جدة - خدمات تنظيف | شركة المثالي",
  description:
    "أفضل شركة تنظيف في السلامة الجنوبية بجدة. خدمات تنظيف شاملة.",
  alternates: { canonical: `${site.url}/jeddah/as-salamah-south` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "السلامة الجنوبية", url: "/jeddah/as-salamah-south" },
];

const faqs = [
  {
    question: "الخدمات؟",
    answer: "تنظيف منازل وفلل.",
  },
  {
    question: "الأسعار؟",
    answer: "من 240 ريال.",
  },
];

export default function AsSalamahSouthPage() {
  return (
    <>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تنظيف في السلامة الجنوبية",
        provider: { "@type": "LocalBusiness", name: site.brand },
      }} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في السلامة الجنوبية"
        subtitle="خدمات التنظيف"
        description="تنظيف احترافي."
        image="home cleaning Jeddah.jpg"
        imageAlt="تنظيف"
        context={{ area: "السلامة الجنوبية" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold">تنظيف في السلامة الجنوبية</h2>
            <p className="text-lg"><strong>شركة المثالي</strong> للتنظيف.</p>

            <div className="rounded-lg bg-blue-50 p-6">
              <ul className="list-disc list-inside">
                <li>تنظيف منازل</li>
                <li>تنظيف مفروشات</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "السلامة الجنوبية" }} />
    </>
  );
}

