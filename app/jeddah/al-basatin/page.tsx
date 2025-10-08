import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "شركة تنظيف في البساتين جدة - خدمات تنظيف شاملة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي البساتين بجدة. خدمات تنظيف بجودة عالية وأسعار مناسبة.",
  alternates: { canonical: `${site.url}/jeddah/al-basatin` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي البساتين", url: "/jeddah/al-basatin" },
];

const faqs = [
  {
    question: "ما خدماتكم في البساتين؟",
    answer: "نقدم تنظيف منازل، فلل، مفروشات، جلي رخام، وتعقيم.",
  },
  {
    question: "كم الأسعار؟",
    answer: "تبدأ من 240 ريال للشقق.",
  },
];

export default function AlBasatinPage() {
  return (
    <>
      <SchemaInjector schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "تنظيف في البساتين",
        provider: { "@type": "LocalBusiness", name: site.brand },
      }} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في البساتين"
        subtitle="خدمات التنظيف في البساتين"
        description="تنظيف احترافي بأسعار مناسبة."
        image="deep cleaning service.jpg"
        imageAlt="تنظيف في البساتين"
        context={{ area: "البساتين" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <h2 className="text-3xl font-bold">تنظيف في البساتين</h2>
            <p className="text-lg">خدمات تنظيف من <strong>شركة المثالي</strong>.</p>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-4 text-2xl font-bold">الخدمات</h3>
              <ul className="list-disc list-inside">
                <li>تنظيف منازل وفلل</li>
                <li>تنظيف مفروشات بالبخار</li>
                <li>جلي رخام</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "البساتين" }} />
    </>
  );
}

