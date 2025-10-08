import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في الربوة جدة - خدمات تنظيف ممتازة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الربوة بجدة. تنظيف منازل بجودة عالية. فريق محترف وأسعار مناسبة.",
  alternates: { canonical: `${site.url}/jeddah/ar-rabwah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الربوة", url: "/jeddah/ar-rabwah" },
];

const faqs = [
  {
    question: "ما خدماتكم في الربوة؟",
    answer:
      "نقدم تنظيف شامل، تنظيف عميق، تنظيف مفروشات، جلي رخام، وتعقيم. جميع الخدمات بجودة عالية.",
  },
  {
    question: "كم الأسعار؟",
    answer:
      "تبدأ من 250 ريال للشقق و480 ريال للفلل. خصومات على العقود الدورية.",
  },
];

export default function ArRabwahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الربوة جدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الربوة - خدمة ممتازة"
        subtitle="خدمات التنظيف في الربوة"
        description="تنظيف احترافي في الربوة بأسعار منافسة."
        image="villa cleaning service.jpg"
        imageAlt="تنظيف في الربوة"
        context={{ area: "الربوة" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">تنظيف في الربوة</h2>
              <p className="text-lg">خدمات تنظيف متميزة من <strong>شركة المثالي</strong>.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="font-bold">تنظيف منازل</h3>
              </div>
              <div className="rounded-lg bg-green-50 p-6">
                <h3 className="font-bold">تنظيف مفروشات</h3>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <h2 className="mb-4 text-2xl font-bold">الأسعار</h2>
              <ul className="list-disc list-inside">
                <li>شقة: 250 ريال</li>
                <li>فيلا: 480 ريال</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "الربوة" }} />
    </>
  );
}

