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
  title: "شركة تنظيف في الأندلس جدة - خدمات تنظيف متقدمة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الأندلس بجدة. تنظيف منازل وفلل بجودة عالية. فريق محترف، أسعار مناسبة، خدمة سريعة.",
  alternates: { canonical: `${site.url}/jeddah/al-andalus` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الأندلس", url: "/jeddah/al-andalus" },
];

const faqs = [
  {
    question: "ما تكلفة التنظيف في الأندلس؟",
    answer:
      "الأسعار تبدأ من 260 ريال للشقق و500 ريال للفلل. نقدم خصومات على العقود الدورية تصل إلى 20%.",
  },
  {
    question: "هل الفريق مدرب ومؤمّن؟",
    answer:
      "نعم، جميع أفراد فريقنا مدربون احترافياً ومؤمّنون ضد أي أضرار. كما يخضعون لفحوصات أمنية دورية.",
  },
  {
    question: "كم يستغرق الوصول؟",
    answer:
      "عادةً نصل خلال 30-60 دقيقة من طلب الخدمة. للحالات الطارئة، نوفر خدمة أسرع.",
  },
  {
    question: "هل توفرون عقود شهرية؟",
    answer:
      "نعم، نقدم عقود شهرية بخصومات خاصة. مثالية للعائلات والمكاتب التي تحتاج تنظيف دوري منتظم.",
  },
];

export default function AlAndalusPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الأندلس جدة",
    description: "خدمات تنظيف متقدمة في حي الأندلس بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الأندلس، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الأندلس، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الأندلس - نظافة مثالية وخدمة ممتازة"
        subtitle="خدمات التنظيف في حي الأندلس"
        description="خدمات تنظيف احترافية في حي الأندلس. فريق مدرب، أسعار منافسة، ونتائج رائعة."
        image="deep cleaning service.jpg"
        imageAlt="شركة تنظيف في حي الأندلس جدة"
        context={{ area: "الأندلس" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">تنظيف احترافي في الأندلس</h2>
              <p className="text-lg leading-relaxed">
                <strong>شركة المثالي</strong> تقدم خدمات تنظيف متميزة في حي الأندلس بجدة.
                نوفر حلول تنظيف شاملة بجودة عالية وأسعار مناسبة.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدماتنا</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تنظيف منازل</h3>
                  <p>تنظيف شامل لجميع الغرف والمرافق.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تنظيف مفروشات</h3>
                  <p>بخار ساخن للكنب والسجاد.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">جلي رخام</h3>
                  <p>تلميع وجلي احترافي.</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تعقيم</h3>
                  <p>حماية صحية متقدمة.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">المميزات</h2>
              <div className="space-y-3">
                {[
                  "فريق محترف",
                  "خدمة سريعة",
                  "أسعار منافسة",
                  "ضمان جودة",
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-green-600" />
                    <p className="text-lg">{f}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">الأسعار</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>شقة: من 260 ريال</li>
                <li>فيلا: من 500 ريال</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection title="احجز الآن" context={{ area: "الأندلس" }} />
    </>
  );
}
