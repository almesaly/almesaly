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
  title: "شركة تنظيف في الشاطئ جدة - خدمات تنظيف ساحلية متخصصة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الشاطئ بجدة. خدمات تنظيف فلل وشقق ساحلية احترافية. متخصصون في مواجهة تحديات الرطوبة والملوحة البحرية. اتصل الآن!",
  alternates: { canonical: `${site.url}/jeddah/ash-shati` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الشاطئ", url: "/jeddah/ash-shati" },
];

const faqs = [
  {
    question: "هل تقدمون خدمات تنظيف في حي الشاطئ؟",
    answer:
      "نعم، نقدم جميع خدمات التنظيف في حي الشاطئ بما في ذلك تنظيف الفلل الساحلية، الشقق، المفروشات، والنوافذ المطلة على البحر. لدينا خبرة واسعة في التعامل مع التحديات الفريدة للمناطق الساحلية.",
  },
  {
    question: "ما الذي يميز خدمات التنظيف في المناطق الساحلية مثل الشاطئ؟",
    answer:
      "نستخدم مواد تنظيف متخصصة مقاومة للملوحة والرطوبة، ونوفر معالجات خاصة لإزالة ترسبات الملح من النوافذ والواجهات، ومعالجة العفن والرطوبة الناتجة عن القرب من البحر.",
  },
  {
    question: "كم تبلغ أسعار التنظيف في حي الشاطئ؟",
    answer:
      "الأسعار تبدأ من 300 ريال للشقق و550 ريال للفلل. نقدم عروض خاصة للعقود الدورية والعملاء الدائمين. تواصل معنا للحصول على عرض سعر مخصص لاحتياجاتك.",
  },
  {
    question: "كم يستغرق الوصول إلى حي الشاطئ؟",
    answer:
      "لدينا فرق موزعة في جدة تصل إلى حي الشاطئ خلال 30-45 دقيقة. نوفر مواعيد مرنة تناسب جدولك اليومي وخدمة طوارئ للحالات العاجلة.",
  },
  {
    question: "هل لديكم خبرة في تنظيف الشاليهات والمنتجعات الساحلية؟",
    answer:
      "بالتأكيد! نخدم العديد من الشاليهات والمنتجعات في المناطق الساحلية بجدة. نوفر خدمات تنظيف شاملة تشمل الداخل، الخارج، المسابح، والحدائق مع عقود دورية مرنة.",
  },
];

export default function AshShatiPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الشاطئ جدة",
    description:
      "خدمات تنظيف احترافية متخصصة في حي الشاطئ الساحلي بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الشاطئ، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الشاطئ، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الشاطئ - خدمات ساحلية متخصصة"
        subtitle="خدمات التنظيف في حي الشاطئ"
        description="أفضل شركة تنظيف في حي الشاطئ بجدة. متخصصون في تنظيف الفلل والشقق الساحلية مع حلول فعالة لمواجهة تحديات الرطوبة والملوحة البحرية."
        image="home cleaning Jeddah.jpg"
        imageAlt="شركة تنظيف في حي الشاطئ جدة"
        context={{ area: "الشاطئ" }}
      />

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا تختار شركة المثالي للتنظيف في حي الشاطئ؟
              </h2>
              <p className="text-lg leading-relaxed">
                حي الشاطئ من أجمل الأحياء الساحلية في جدة، يتميز بإطلالاته الساحرة على
                البحر الأحمر وقربه من الكورنيش. لكن الحياة بجوار البحر تحمل تحديات تنظيف
                خاصة: الرطوبة العالية طوال العام، ترسبات الملح على النوافذ والأسطح، الرياح
                البحرية المحملة بالأتربة، واحتمالية نمو العفن. في <strong>شركة المثالي</strong>
                ، نفهم هذه التحديات تماماً ونقدم حلول تنظيف متخصصة ومصممة لسكان الشاطئ.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدماتنا المتخصصة في حي الشاطئ
              </h2>
              <p className="mb-6 text-lg">
                نوفر مجموعة شاملة من خدمات التنظيف المصممة خصيصاً للعقارات الساحلية:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Waves className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف الفلل الساحلية</h3>
                  </div>
                  <p>
                    تنظيف شامل للفلل المطلة على البحر، مع اهتمام خاص بالواجهات، الشرفات،
                    والحدائق. نستخدم مواد آمنة وفعالة لإزالة ترسبات الملح والحماية من التآكل.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-green-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">معالجة الرطوبة والعفن</h3>
                  </div>
                  <p>
                    خدمات متخصصة لإزالة العفن ومعالجة الرطوبة في الجدران، الأسقف، والزوايا.
                    نطبق معالجات وقائية لمنع عودة المشكلة.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-purple-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف النوافذ والواجهات</h3>
                  </div>
                  <p>
                    تنظيف احترافي للنوافذ الزجاجية والواجهات لإزالة ترسبات الملح والأتربة،
                    لتستمتع بإطلالة واضحة وصافية على البحر.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف المفروشات بالبخار</h3>
                  </div>
                  <p>
                    تنظيف عميق للكنب، السجاد، والستائر باستخدام البخار الساخن، مع معالجة خاصة
                    للروائح والبقع المستعصية.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                مميزات خدماتنا في الشاطئ
              </h2>
              <div className="space-y-3">
                {[
                  "خبرة 10+ سنوات في خدمة المناطق الساحلية بجدة",
                  "فريق مدرب على التعامل مع تحديات الملوحة والرطوبة",
                  "مواد تنظيف آمنة وصديقة للبيئة ومناسبة للمناخ البحري",
                  "معدات حديثة ومتخصصة لإزالة ترسبات الملح",
                  "خدمة سريعة: الوصول خلال 30-45 دقيقة",
                  "أسعار تنافسية وعروض خاصة للعملاء الدائمين",
                  "ضمان جودة 100% وإعادة التنظيف المجاني إذا لزم",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                تحديات التنظيف في المناطق الساحلية
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                موقع حي الشاطئ المميز على ساحل البحر الأحمر يجعله مكاناً رائعاً للعيش،
                لكنه يأتي مع تحديات فريدة تتطلب عناية خاصة:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <strong>الرطوبة المرتفعة:</strong> تسبب نمو العفن والفطريات على الجدران
                  والمفروشات
                </li>
                <li>
                  <strong>ترسبات الملح:</strong> تتراكم بسرعة على النوافذ والواجهات الزجاجية
                </li>
                <li>
                  <strong>التآكل:</strong> يؤثر على الأسطح المعدنية والتركيبات الخارجية
                </li>
                <li>
                  <strong>الأتربة الناعمة:</strong> تحملها الرياح البحرية وتلتصق بالأسطح
                </li>
                <li>
                  <strong>الروائح:</strong> الرطوبة قد تسبب روائح غير مرغوبة في المنزل
                </li>
              </ul>
              <p className="mt-4 text-lg leading-relaxed">
                مع <Link href="/" className="font-bold text-primary hover:underline">شركة المثالي</Link>،
                لن تقلق بشأن هذه التحديات. فريقنا المتخصص يعرف كيف يتعامل معها بكفاءة عالية.
              </p>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                احجز خدمة التنظيف في الشاطئ الآن
              </h2>
              <p className="mb-4 text-lg">
                لا تدع تحديات التنظيف تؤثر على استمتاعك بالحياة الساحلية الجميلة. احجز
                الآن واحصل على:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-lg">
                <li>خصم 15% على أول خدمة تنظيف</li>
                <li>معاينة مجانية للفلل والعقارات الكبيرة</li>
                <li>عروض خاصة على الباقات الشهرية</li>
                <li>خدمة عملاء متاحة 24/7</li>
                <li>فريق محترف ومؤمّن ضد أي أضرار</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدمات مرتبطة مناسبة لحي الشاطئ
              </h2>
              <p className="mb-4 text-lg">
                نظراً لطبيعة المنطقة الساحلية، نوصي بشدة بهذه الخدمات المتخصصة:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/glass-facade" className="text-primary hover:underline">
                    تنظيف الزجاج والواجهات
                  </Link>{" "}
                  - ضرورية للحفاظ على نظافة الإطلالة البحرية
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
                <li>
                  <Link href="/services/pool-cleaning" className="text-primary hover:underline">
                    تنظيف المسابح
                  </Link>{" "}
                  - للفلل التي تحتوي على مسابح خاصة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في حي الشاطئ؟"
        description="تواصل معنا الآن للحصول على عرض سعر مجاني ومخصص لمنزلك الساحلي"
        context={{ area: "الشاطئ" }}
      />
    </>
  );
}
