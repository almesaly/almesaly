import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في المحمدية جدة - خدمات تنظيف شاملة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي المحمدية بجدة. خدمات تنظيف بجودة عالية وأسعار ممتازة. فريق محترف، خدمة سريعة.",
  alternates: { canonical: `${site.url}/jeddah/al-muhammadiyah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي المحمدية", url: "/jeddah/al-muhammadiyah" },
];

const faqs = [
  {
    question: "ما أسعاركم في المحمدية؟",
    answer:
      "الأسعار تبدأ من 240 ريال للشقق الصغيرة و450 ريال للفلل. خصومات خاصة على العقود الدورية.",
  },
  {
    question: "هل متاحون في عطلة نهاية الأسبوع؟",
    answer:
      "نعم، نعمل 7 أيام في الأسبوع بما في ذلك العطلات والأعياد.",
  },
  {
    question: "كم فريق لديكم؟",
    answer:
      "لدينا عدة فرق متخصصة في جميع أنحاء جدة لضمان استجابة سريعة.",
  },
];

export default function AlMuhammadiyahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي المحمدية جدة",
    description: "خدمات تنظيف شاملة في حي المحمدية بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "المحمدية، جدة",
        addressCountry: "SA",
      },
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في المحمدية - جودة وسعر مناسب"
        subtitle="خدمات التنظيف في حي المحمدية"
        description="خدمات تنظيف شاملة في المحمدية. فريق محترف وأسعار تنافسية."
        image="home cleaning Jeddah.jpg"
        imageAlt="شركة تنظيف في المحمدية"
        context={{ area: "المحمدية" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8">
            <div>
              <h2 className="mb-4 text-3xl font-bold">تنظيف في المحمدية</h2>
              <p className="text-lg">
                <strong>شركة المثالي</strong> تقدم خدمات تنظيف متميزة في المحمدية.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-6">
                <h3 className="mb-2 text-xl font-bold">تنظيف شامل</h3>
                <p>لجميع أنواع المنازل.</p>
              </div>
              <div className="rounded-lg bg-green-50 p-6">
                <h3 className="mb-2 text-xl font-bold">تنظيف مفروشات</h3>
                <p>بالبخار الساخن.</p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-2xl font-bold">الأسعار</h2>
              <ul className="list-disc list-inside">
                <li>شقة: من 240 ريال</li>
                <li>فيلا: من 450 ريال</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "المحمدية" }} />
    </>
  );
}

