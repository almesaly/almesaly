import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2, Star, Award, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في الزهراء جدة - خدمات تنظيف متميزة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الزهراء بجدة. خدمات تنظيف شاملة للمنازل والفلل. فريق محترف، أسعار مناسبة، نتائج مذهلة.",
  alternates: { canonical: `${site.url}/jeddah/az-zahra` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الزهراء", url: "/jeddah/az-zahra" },
];

const faqs = [
  {
    question: "ما الذي يميزكم في حي الزهراء؟",
    answer:
      "نوفر خدمات تنظيف احترافية بأعلى جودة وأسعار منافسة. فريقنا المدرب يصل بسرعة ويعمل بكفاءة، مع ضمان رضا كامل على جميع الخدمات.",
  },
  {
    question: "كم تبلغ تكلفة تنظيف منزل في الزهراء؟",
    answer:
      "الأسعار تبدأ من 280 ريال للشقق الصغيرة و500 ريال للفلل. نقدم عروض خاصة على العقود الشهرية. للحصول على سعر دقيق، اتصل بنا.",
  },
  {
    question: "هل توفرون خدمات تنظيف بعد المناسبات؟",
    answer:
      "نعم، نوفر خدمات تنظيف متخصصة بعد الأفراح والمناسبات. نزيل جميع الأوساخ ونعيد المكان لحالته الأصلية بسرعة وكفاءة.",
  },
  {
    question: "هل تستخدمون مواد آمنة للأطفال؟",
    answer:
      "بالتأكيد! جميع مواد التنظيف التي نستخدمها آمنة 100% على الأطفال والحيوانات الأليفة، معتمدة وصديقة للبيئة.",
  },
];

export default function AzZahraPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الزهراء جدة",
    description: "خدمات تنظيف متميزة في حي الزهراء بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الزهراء، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الزهراء، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الزهراء - جودة عالية وأسعار منافسة"
        subtitle="خدمات التنظيف في حي الزهراء"
        description="نقدم أفضل خدمات التنظيف في حي الزهراء بجدة. نظافة شاملة، فريق محترف، ورضا مضمون."
        image="deep cleaning service.jpg"
        imageAlt="شركة تنظيف في حي الزهراء جدة"
        context={{ area: "الزهراء" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدمات تنظيف احترافية في حي الزهراء
              </h2>
              <p className="text-lg leading-relaxed">
                حي الزهراء من الأحياء السكنية المميزة في جدة، ونحن في <strong>شركة المثالي</strong>
                نقدم خدمات تنظيف متكاملة تليق بسكان هذا الحي. من التنظيف اليومي إلى العميق المتخصص،
                نضمن لك نظافة استثنائية.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                فريقنا المحترف يستخدم أحدث المعدات ومواد التنظيف الآمنة لضمان نتائج مذهلة. نوفر
                خدمات مرنة تناسب جميع الاحتياجات والميزانيات.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                ما نقدمه في الزهراء
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف شامل</h3>
                  <p>تنظيف كامل لجميع غرف المنزل بعناية فائقة ودقة عالية.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المفروشات</h3>
                  <p>تنظيف الكنب والمجالس بالبخار للحصول على نظافة عميقة.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">جلي الأرضيات</h3>
                  <p>جلي وتلميع الرخام والبلاط لاستعادة اللمعان الأصلي.</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">التعقيم الشامل</h3>
                  <p>تعقيم احترافي للقضاء على الجراثيم وحماية صحتك.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                مميزاتنا في حي الزهراء
              </h2>
              <div className="space-y-3">
                {[
                  "وصول سريع خلال أقل من ساعة",
                  "فريق مدرب ومحترف ومؤمّن",
                  "معدات حديثة ومواد آمنة",
                  "أسعار شفافة بدون رسوم خفية",
                  "خدمة عملاء متاحة 24/7",
                  "ضمان الرضا أو إعادة مجانية",
                  "خصومات على العقود الدورية",
                  "نتائج احترافية مضمونة",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-primary/10 to-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                باقات الزهراء المميزة
              </h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li><strong>باقة الشقة:</strong> تنظيف شامل - من 280 ريال</li>
                <li><strong>باقة الفيلا:</strong> تنظيف كامل - من 550 ريال</li>
                <li><strong>الباقة الدورية:</strong> عقد شهري بخصم 20%</li>
                <li><strong>العميق الشامل:</strong> تنظيف مكثف - من 480 ريال</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدمات مرتبطة
              </h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/villa" className="text-primary hover:underline">
                    تنظيف الفلل
                  </Link>{" "}
                  - خدمة متكاملة
                </li>
                <li>
                  <Link href="/services/carpet" className="text-primary hover:underline">
                    تنظيف السجاد
                  </Link>{" "}
                  - بالبخار الساخن
                </li>
                <li>
                  <Link href="/services/kitchen" className="text-primary hover:underline">
                    تنظيف المطابخ
                  </Link>{" "}
                  - إزالة الدهون
                </li>
                <li>
                  <Link href="/services/windows" className="text-primary hover:underline">
                    تنظيف الزجاج
                  </Link>{" "}
                  - شفافية تامة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="نظافة مثالية في حي الزهراء"
        description="اتصل الآن واحصل على خصم خاص"
        context={{ area: "الزهراء" }}
      />
    </>
  );
}

