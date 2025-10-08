import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2, MapPin, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في النزهة جدة - خدمات تنظيف احترافية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي النزهة بجدة. خدمات تنظيف منازل وفلل بجودة عالية. فريق محترف، أسعار منافسة، خدمة سريعة.",
  alternates: { canonical: `${site.url}/jeddah/al-nuzhah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي النزهة", url: "/jeddah/al-nuzhah" },
];

const faqs = [
  {
    question: "ما هي خدمات التنظيف المتوفرة في حي النزهة؟",
    answer:
      "نقدم تنظيف شامل للمنازل والفلل، تنظيف عميق، تنظيف مفروشات بالبخار، غسيل سجاد وموكيت، جلي رخام، تعقيم وتطهير، وخدمات دورية منتظمة. جميع الخدمات بجودة عالية وأسعار تنافسية.",
  },
  {
    question: "كم تستغرق خدمة التنظيف في النزهة؟",
    answer:
      "المدة تعتمد على حجم المكان ونوع الخدمة. تنظيف شقة صغيرة يستغرق 2-3 ساعات، شقة كبيرة 4-5 ساعات، فيلا صغيرة 5-7 ساعات. التنظيف العميق قد يحتاج وقت أطول.",
  },
  {
    question: "هل أنتم متاحون في عطلة نهاية الأسبوع؟",
    answer:
      "نعم، نعمل 7 أيام في الأسبوع بما في ذلك عطلات نهاية الأسبوع والأعياد. يمكنك الحجز في أي وقت يناسبك.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع نقداً، تحويل بنكي، أو عبر الأجهزة الإلكترونية. الدفع يتم بعد إتمام الخدمة وضمان رضاك التام.",
  },
];

export default function AlNuzhahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي النزهة جدة",
    description: "خدمات تنظيف احترافية في حي النزهة بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "النزهة، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "النزهة، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في النزهة - خدمات احترافية بأسعار منافسة"
        subtitle="خدمات التنظيف في حي النزهة"
        description="نقدم خدمات تنظيف شاملة في حي النزهة بجدة. فريق محترف، معدات حديثة، ونتائج مضمونة."
        image="villa cleaning service.jpg"
        imageAlt="شركة تنظيف في حي النزهة جدة"
        context={{ area: "النزهة" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                شركة المثالي للتنظيف في حي النزهة
              </h2>
              <p className="text-lg leading-relaxed">
                حي النزهة من الأحياء الراقية في جدة، ونحن في <strong>شركة المثالي</strong> نفخر
                بخدمة سكان هذا الحي الجميل. نقدم خدمات تنظيف احترافية تليق بمستوى المنطقة، مع
                الحرص على أدق التفاصيل والجودة العالية.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                فريقنا مدرب على أعلى المستويات، يستخدم أحدث المعدات ومواد التنظيف الآمنة.
                نوفر خدمات متنوعة من التنظيف اليومي إلى العميق المتخصص، بأسعار منافسة وجودة
                لا مثيل لها.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدماتنا في حي النزهة
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المنازل والفلل</h3>
                  <p>تنظيف شامل لجميع الغرف والمرافق بعناية فائقة.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف مفروشات بالبخار</h3>
                  <p>تنظيف كنب، مجالس، موكيت بأحدث تقنيات البخار.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">جلي الرخام والبلاط</h3>
                  <p>استعادة لمعان ونظافة الأرضيات الرخامية.</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">خدمات التعقيم</h3>
                  <p>تعقيم شامل للقضاء على الجراثيم والبكتيريا.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا نحن الأفضل في النزهة؟
              </h2>
              <div className="space-y-3">
                {[
                  "خبرة واسعة في خدمة الأحياء الراقية",
                  "فريق محترف ومدرب ومؤمّن",
                  "معدات ومواد تنظيف عالية الجودة",
                  "أسعار شفافة وتنافسية",
                  "خدمة عملاء ممتازة 24/7",
                  "ضمان رضا 100% أو إعادة مجانية",
                  "مواعيد مرنة تناسب جدولك",
                  "خصومات على العقود الدورية",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                باقات خاصة لسكان النزهة
              </h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li><strong>الباقة الأساسية:</strong> تنظيف شامل للشقق - من 300 ريال</li>
                <li><strong>باقة الفلل:</strong> تنظيف كامل للفلل - من 600 ريال</li>
                <li><strong>الباقة الشهرية:</strong> عقد شهري بخصم 20%</li>
                <li><strong>التنظيف العميق:</strong> تنظيف مكثف شامل - من 500 ريال</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدمات إضافية مميزة
              </h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                    التنظيف العميق
                  </Link>{" "}
                  - تنظيف شامل ومكثف
                </li>
                <li>
                  <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                    تنظيف الكنب
                  </Link>{" "}
                  - بالبخار الساخن
                </li>
                <li>
                  <Link href="/services/marble" className="text-primary hover:underline">
                    جلي الرخام
                  </Link>{" "}
                  - استعادة اللمعان
                </li>
                <li>
                  <Link href="/services/disinfection" className="text-primary hover:underline">
                    التعقيم
                  </Link>{" "}
                  - حماية صحية شاملة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="احصل على منزل نظيف في حي النزهة"
        description="اتصل الآن واحصل على خصم 15% على أول خدمة"
        context={{ area: "النزهة" }}
      />
    </>
  );
}

