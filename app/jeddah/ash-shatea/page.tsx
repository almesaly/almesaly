import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2, Waves, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في الشاطيء جدة - خدمات تنظيف ساحلية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الشاطيء بجدة. خدمات تنظيف متخصصة للمنازل الساحلية مع حلول فعالة للرطوبة والملوحة. فريق محترف وأسعار منافسة.",
  alternates: { canonical: `${site.url}/jeddah/ash-shatea` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الشاطيء", url: "/jeddah/ash-shatea" },
];

const faqs = [
  {
    question: "هل تقدمون خدمات تنظيف في حي الشاطيء؟",
    answer:
      "نعم، نقدم جميع خدمات التنظيف في حي الشاطيء بما في ذلك تنظيف الفلل الساحلية، الشقق، المفروشات، والواجهات الزجاجية. لدينا خبرة واسعة في التعامل مع التحديات الفريدة للمناطق الساحلية والقرب من البحر.",
  },
  {
    question: "ما هي أسعار التنظيف في حي الشاطيء؟",
    answer:
      "الأسعار تبدأ من 300 ريال للشقق و600 ريال للفلل. نقدم عروض خاصة للعملاء الدائمين والعقود الشهرية. تواصل معنا للحصول على عرض سعر مخصص حسب احتياجاتك.",
  },
  {
    question: "كيف تتعاملون مع تحديات المناطق الساحلية؟",
    answer:
      "نستخدم مواد تنظيف متخصصة مقاومة للملوحة، ونوفر معالجات خاصة لإزالة ترسبات الملح، ومعالجة العفن والرطوبة. فريقنا مدرب على التعامل مع كل التحديات الناتجة عن القرب من البحر.",
  },
  {
    question: "كم يستغرق الوصول إلى حي الشاطيء؟",
    answer:
      "لدينا فرق موزعة في جدة تصل إلى حي الشاطيء خلال 30-40 دقيقة في الأوقات العادية. نوفر مواعيد مرنة وخدمة طوارئ للحالات العاجلة على مدار الساعة.",
  },
  {
    question: "هل تنظفون الواجهات والشرفات المطلة على البحر؟",
    answer:
      "بالتأكيد! نوفر تنظيف احترافي للواجهات الزجاجية والشرفات المطلة على البحر، بما في ذلك إزالة ترسبات الملح والأوساخ الصعبة. نستخدم معدات متخصصة وآمنة للوصول إلى جميع الارتفاعات.",
  },
];

export default function AshShateaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الشاطيء جدة",
    description: "خدمات تنظيف احترافية متخصصة في حي الشاطيء الساحلي بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الشاطيء، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الشاطيء، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الشاطيء - خدمات ساحلية احترافية"
        subtitle="خدمات التنظيف في حي الشاطيء"
        description="أفضل شركة تنظيف في حي الشاطيء بجدة. متخصصون في تنظيف المنازل الساحلية مع خبرة واسعة في مواجهة تحديات الرطوبة والملوحة البحرية."
        image="home cleaning Jeddah.jpg"
        imageAlt="شركة تنظيف في حي الشاطيء جدة"
        context={{ area: "الشاطيء" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا تختار شركة المثالي للتنظيف في حي الشاطيء؟
              </h2>
              <p className="text-lg leading-relaxed">
                حي الشاطيء من الأحياء الساحلية المميزة في جدة، يجمع بين جمال الإطلالة البحرية
                والموقع الاستراتيجي. لكن القرب من البحر يأتي مع تحديات تنظيف خاصة تحتاج خبرة
                ومعدات متخصصة. في <strong>شركة المثالي</strong>، نقدم حلول تنظيف شاملة مصممة
                خصيصاً للعقارات الساحلية مع فريق مدرب على التعامل مع تحديات الرطوبة والملوحة.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                نستخدم أحدث المعدات ومواد تنظيف متخصصة مقاومة للملوحة، ونوفر معالجات وقائية
                تحمي منزلك من العفن والتآكل. خبرتنا الطويلة في خدمة المناطق الساحلية تجعلنا
                الخيار الأمثل لسكان الشاطيء.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدماتنا المتخصصة في حي الشاطيء
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Waves className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف المنازل الساحلية</h3>
                  </div>
                  <p>
                    تنظيف شامل للفلل والشقق المطلة على البحر، مع اهتمام خاص بإزالة ترسبات
                    الملح والحماية من الرطوبة العالية.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-green-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">معالجة الرطوبة والعفن</h3>
                  </div>
                  <p>
                    خدمات متخصصة لإزالة العفن ومعالجة الرطوبة في الجدران والأسقف مع تطبيق
                    معالجات وقائية طويلة الأمد.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-purple-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف الواجهات الزجاجية</h3>
                  </div>
                  <p>
                    تنظيف احترافي للنوافذ والواجهات لإزالة ترسبات الملح والأتربة، لتستمتع
                    بإطلالة صافية على البحر.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف المفروشات بالبخار</h3>
                  </div>
                  <p>
                    تنظيف عميق للكنب والسجاد والستائر باستخدام البخار الساخن لإزالة الرطوبة
                    والروائح.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">مميزاتنا في خدمة الشاطيء</h2>
              <div className="space-y-3">
                {[
                  "خبرة 10+ سنوات في خدمة المناطق الساحلية",
                  "فريق مدرب على التعامل مع تحديات الملوحة والرطوبة",
                  "مواد تنظيف آمنة ومتخصصة للمناخ البحري",
                  "معدات حديثة لإزالة ترسبات الملح",
                  "خدمة سريعة: الوصول خلال 30-40 دقيقة",
                  "أسعار تنافسية وعروض خاصة للعقود الشهرية",
                  "ضمان جودة 100% وإعادة تنظيف مجانية",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                احجز خدمة التنظيف في الشاطيء الآن
              </h2>
              <p className="mb-4 text-lg">
                لا تدع تحديات التنظيف الساحلي تؤثر على راحتك. احجز الآن واحصل على:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-lg">
                <li>خصم 15% على أول خدمة</li>
                <li>معاينة مجانية للفلل</li>
                <li>عروض خاصة على الباقات الشهرية</li>
                <li>خدمة عملاء 24/7</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدمات مرتبطة</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/glass-facade" className="text-primary hover:underline">
                    تنظيف الزجاج والواجهات
                  </Link>{" "}
                  - للحفاظ على نظافة الإطلالة البحرية
                </li>
                <li>
                  <Link href="/services/disinfection" className="text-primary hover:underline">
                    التعقيم والتطهير
                  </Link>{" "}
                  - للقضاء على البكتيريا والعفن
                </li>
                <li>
                  <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                    تنظيف الكنب بالبخار
                  </Link>{" "}
                  - لإزالة الرطوبة والروائح
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في حي الشاطيء؟"
        description="تواصل معنا الآن للحصول على عرض سعر مجاني"
        context={{ area: "الشاطيء" }}
      />
    </>
  );
}
