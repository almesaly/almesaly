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
  title: "شركة تنظيف في الخالدية جدة - خدمات تنظيف ممتازة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الخالدية بجدة. خدمات تنظيف شاملة بجودة عالية. فريق محترف، أسعار منافسة، رضا مضمون.",
  alternates: { canonical: `${site.url}/jeddah/al-khalidiyah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الخالدية", url: "/jeddah/al-khalidiyah" },
];

const faqs = [
  {
    question: "ما الخدمات المتوفرة في الخالدية؟",
    answer:
      "نقدم تنظيف شامل للمنازل والفلل، تنظيف مفروشات، جلي رخام، تعقيم، وخدمات دورية منتظمة. جميع الخدمات بجودة عالية.",
  },
  {
    question: "كم يستغرق تنظيف فيلا في الخالدية؟",
    answer:
      "فيلا صغيرة تحتاج 5-6 ساعات، متوسطة 7-8 ساعات، كبيرة قد تصل إلى 10 ساعات. التنظيف العميق قد يحتاج وقت إضافي.",
  },
  {
    question: "هل توفرون خدمات طارئة؟",
    answer:
      "نعم، نوفر خدمة تنظيف سريعة للحالات الطارئة. يمكننا الوصول خلال ساعة واحدة في معظم الحالات.",
  },
  {
    question: "ماذا لو لم أكن راضياً عن النتيجة؟",
    answer:
      "نقدم ضمان رضا 100%. إذا لم تكن راضياً، نعيد التنظيف مجاناً. رضاك هو أولويتنا.",
  },
];

export default function AlKhalidiyahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الخالدية جدة",
    description: "خدمات تنظيف ممتازة في حي الخالدية بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الخالدية، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الخالدية، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الخالدية - نظافة احترافية وجودة عالية"
        subtitle="خدمات التنظيف في حي الخالدية"
        description="أفضل خدمات تنظيف في حي الخالدية بجدة. فريق محترف، معدات حديثة، ونتائج مذهلة."
        image="villa cleaning service.jpg"
        imageAlt="شركة تنظيف في حي الخالدية جدة"
        context={{ area: "الخالدية" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                شركة تنظيف موثوقة في الخالدية
              </h2>
              <p className="text-lg leading-relaxed">
                حي الخالدية من الأحياء المميزة في جدة، و<strong>شركة المثالي</strong> تقدم
                خدمات تنظيف احترافية لسكان هذا الحي الراقي. نوفر حلول تنظيف شاملة لجميع
                أنواع المنازل والفلل.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                مع فريق مدرب ومعدات حديثة، نضمن لك نظافة استثنائية. خدماتنا مرنة
                وأسعارنا تنافسية.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدماتنا</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تنظيف عام</h3>
                  <p>تنظيف شامل لجميع المرافق.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تنظيف عميق</h3>
                  <p>تنظيف مكثف للزوايا الصعبة.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">جلي وتلميع</h3>
                  <p>استعادة لمعان الأرضيات.</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تعقيم</h3>
                  <p>حماية صحية شاملة.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">لماذا نحن؟</h2>
              <div className="space-y-3">
                {[
                  "فريق محترف ومؤمّن",
                  "خدمة سريعة وفعالة",
                  "أسعار منافسة",
                  "مواد آمنة",
                  "متاحون دائماً",
                  "ضمان رضا",
                  "خصومات خاصة",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-green-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">الباقات</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li><strong>شقة:</strong> من 280 ريال</li>
                <li><strong>فيلا:</strong> من 520 ريال</li>
                <li><strong>عقد شهري:</strong> خصم 20%</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدمات ذات صلة</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                    التنظيف العميق
                  </Link>
                </li>
                <li>
                  <Link href="/services/villa" className="text-primary hover:underline">
                    تنظيف الفلل
                  </Link>
                </li>
                <li>
                  <Link href="/services/marble" className="text-primary hover:underline">
                    جلي الرخام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="احجز تنظيفك في الخالدية"
        description="تواصل معنا الآن"
        context={{ area: "الخالدية" }}
      />
    </>
  );
}
