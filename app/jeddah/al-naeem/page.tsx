import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2, Home, Users, Sparkles, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في النعيم جدة - خدمات تنظيف سكنية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي النعيم بجدة. خدمات تنظيف منازل وشقق بجودة عالية وأسعار مناسبة. فريق محترف، خدمة سريعة، ونتائج مضمونة.",
  alternates: { canonical: `${site.url}/jeddah/al-naeem` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي النعيم", url: "/jeddah/al-naeem" },
];

const faqs = [
  {
    question: "ما الذي يميز خدماتكم في حي النعيم؟",
    answer:
      "نقدم خدمات تنظيف شاملة بأسعار تنافسية مع جودة عالية. فريقنا يصل بسرعة إلى حي النعيم ويعمل بكفاءة. نستخدم مواد آمنة ومعدات حديثة، ونوفر ضمان رضا كامل على جميع خدماتنا.",
  },
  {
    question: "كم تبلغ أسعار التنظيف في النعيم؟",
    answer:
      "الأسعار تبدأ من 250 ريال للشقق الصغيرة و450 ريال للشقق الكبيرة. نقدم خصومات على العقود الشهرية تصل إلى 20%. جميع الأسعار شاملة المواد والمعدات والعمالة.",
  },
  {
    question: "هل تقدمون خدمات تنظيف طارئة؟",
    answer:
      "نعم، نوفر خدمة تنظيف سريعة للحالات الطارئة. يمكننا الوصول خلال ساعة واحدة في معظم الأوقات. مثالية لاستقبال الضيوف المفاجئ أو قبل المناسبات العاجلة.",
  },
  {
    question: "هل تنظفون المنازل بعد الدهان أو التجديد؟",
    answer:
      "بالتأكيد! لدينا خبرة واسعة في تنظيف ما بعد البناء والتجديد. نزيل الأتربة، بقايا الدهان، والأوساخ الصعبة، ونترك منزلك جاهزاً للسكن فوراً.",
  },
  {
    question: "هل فريقكم مؤمّن ومدرب؟",
    answer:
      "نعم، جميع أفراد فريقنا مدربون احترافياً ومؤمّنون ضد أي أضرار. يخضعون لفحوصات أمنية شاملة ويلتزمون بأعلى معايير الاحترافية والأمانة.",
  },
];

export default function AlNaeemPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي النعيم جدة",
    description: "خدمات تنظيف سكنية احترافية في حي النعيم بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "النعيم، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "النعيم، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في النعيم - نظافة احترافية وأسعار مناسبة"
        subtitle="خدمات التنظيف في حي النعيم"
        description="أفضل شركة تنظيف في حي النعيم بجدة. نقدم خدمات تنظيف شاملة للمنازل والشقق بجودة عالية وأسعار تنافسية."
        image="home cleaning Jeddah.jpg"
        imageAlt="شركة تنظيف في حي النعيم جدة"
        context={{ area: "النعيم" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا تختار شركة المثالي للتنظيف في حي النعيم؟
              </h2>
              <p className="text-lg leading-relaxed">
                حي النعيم من الأحياء السكنية النشطة في جدة، يضم العديد من العائلات
                والموظفين الذين يبحثون عن خدمات تنظيف موثوقة وبأسعار معقولة. في{" "}
                <strong>شركة المثالي</strong>، نقدم حلول تنظيف شاملة مصممة لتلبية احتياجات
                سكان النعيم بكفاءة واحترافية.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                نفخر بخدمتنا السريعة وجودتنا العالية. فريقنا المدرب يستخدم أفضل المعدات
                والمواد الآمنة لضمان نظافة استثنائية في كل زيارة. سواء كنت تحتاج تنظيف دوري
                أو لمرة واحدة، نحن الخيار الأمثل في النعيم.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدماتنا الشاملة في حي النعيم
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Home className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف شامل للمنازل</h3>
                  </div>
                  <p>
                    تنظيف كامل لجميع الغرف، المطابخ، الحمامات، والأرضيات. نهتم بكل التفاصيل
                    الصغيرة والكبيرة.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-green-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Users className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">خدمات دورية منتظمة</h3>
                  </div>
                  <p>
                    عقود شهرية أو أسبوعية للعائلات المشغولة. نفس الفريق، نفس الجودة، في كل
                    زيارة.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-purple-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف عميق متخصص</h3>
                  </div>
                  <p>
                    تنظيف مكثف يشمل كل الزوايا الصعبة، النوافذ، الخزائن، وخلف الأجهزة.
                    موصى به كل 3-6 أشهر.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">تعقيم وتطهير شامل</h3>
                  </div>
                  <p>
                    خدمات تعقيم احترافية باستخدام مواد معتمدة للقضاء على الجراثيم
                    والبكتيريا.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                مميزات خدماتنا في النعيم
              </h2>
              <div className="space-y-3">
                {[
                  "وصول سريع: نصل خلال 30-45 دقيقة",
                  "أسعار شفافة وتنافسية بدون رسوم خفية",
                  "فريق محترف مدرب ومؤمّن",
                  "مواد تنظيف آمنة وفعالة",
                  "خدمة عملاء ممتازة متاحة 24/7",
                  "ضمان رضا 100% على جميع الخدمات",
                  "مواعيد مرنة تناسب جدولك",
                  "خصومات خاصة على العقود الدورية",
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
                باقات مخصصة لسكان النعيم
              </h2>
              <p className="mb-4 text-lg">
                نقدم باقات متنوعة تناسب جميع الاحتياجات والميزانيات:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <strong>الباقة الأساسية:</strong> تنظيف عادي للشقق الصغيرة - من 250 ريال
                </li>
                <li>
                  <strong>الباقة المتقدمة:</strong> تنظيف شامل للشقق المتوسطة - من 400
                  ريال
                </li>
                <li>
                  <strong>الباقة الشاملة:</strong> تنظيف عميق للفلل - من 600 ريال
                </li>
                <li>
                  <strong>باقة العائلة:</strong> عقد شهري بخصم 20% - مثالي للعائلات
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                احجز خدمة التنظيف في النعيم الآن
              </h2>
              <p className="mb-4 text-lg">
                استمتع بمنزل نظيف ومرتب دون عناء. احجز معنا واحصل على:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-lg">
                <li>خصم 15% على أول خدمة</li>
                <li>تقييم مجاني لاحتياجاتك</li>
                <li>عروض خاصة على العقود الشهرية</li>
                <li>ضمان رضا كامل أو إعادة مجانية</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدمات إضافية مفيدة</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                    التنظيف العميق
                  </Link>{" "}
                  - تنظيف شامل ومكثف
                </li>
                <li>
                  <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                    تنظيف الكنب والمجالس
                  </Link>{" "}
                  - بالبخار الساخن
                </li>
                <li>
                  <Link href="/services/carpet" className="text-primary hover:underline">
                    تنظيف السجاد
                  </Link>{" "}
                  - غسيل وتعقيم احترافي
                </li>
                <li>
                  <Link href="/services/disinfection" className="text-primary hover:underline">
                    التعقيم والتطهير
                  </Link>{" "}
                  - حماية كاملة من الجراثيم
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="جاهز لمنزل نظيف في حي النعيم؟"
        description="تواصل معنا الآن للحصول على عرض سعر مجاني"
        context={{ area: "النعيم" }}
      />
    </>
  );
}
