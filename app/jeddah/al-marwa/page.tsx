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
  title: "شركة تنظيف في المروة جدة - خدمات تنظيف موثوقة | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي المروة بجدة. خدمات تنظيف منازل وشقق احترافية. فريق مدرب، أسعار مناسبة، جودة عالية.",
  alternates: { canonical: `${site.url}/jeddah/al-marwa` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي المروة", url: "/jeddah/al-marwa" },
];

const faqs = [
  {
    question: "ما هي أسعار التنظيف في حي المروة؟",
    answer:
      "الأسعار تبدأ من 270 ريال للشقق الصغيرة و480 ريال للفلل. نقدم خصومات خاصة على العقود الدورية. الأسعار شاملة المواد والعمالة.",
  },
  {
    question: "هل تقدمون ضمان على الخدمة؟",
    answer:
      "نعم، نقدم ضمان رضا 100%. إذا لم تكن راضياً تماماً عن الخدمة، نعيد التنظيف مجاناً حتى تحصل على النتيجة المطلوبة.",
  },
  {
    question: "كم فريق لديكم في المروة؟",
    answer:
      "لدينا عدة فرق متخصصة في منطقة المروة وما حولها، مما يضمن استجابة سريعة وخدمة فورية في أي وقت تحتاجه.",
  },
  {
    question: "هل يمكن تنظيف منزل مفروش بالكامل؟",
    answer:
      "بالتأكيد! نتعامل مع المنازل المفروشة بحرص شديد. نوفر تنظيف شامل للأثاث والمفروشات والأرضيات مع الحفاظ على كل شيء.",
  },
];

export default function AlMarwaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي المروة جدة",
    description: "خدمات تنظيف موثوقة في حي المروة بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "المروة، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "المروة، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في المروة - خدمات موثوقة وسريعة"
        subtitle="خدمات التنظيف في حي المروة"
        description="نقدم خدمات تنظيف احترافية في حي المروة بجدة. نظافة شاملة، فريق محترف، ورضا مضمون."
        image="home cleaning Jeddah.jpg"
        imageAlt="شركة تنظيف في حي المروة جدة"
        context={{ area: "المروة" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                شركة تنظيف متخصصة في حي المروة
              </h2>
              <p className="text-lg leading-relaxed">
                <strong>شركة المثالي</strong> تقدم أفضل خدمات التنظيف في حي المروة بجدة.
                نحن نفهم احتياجات سكان المنطقة ونوفر حلول تنظيف شاملة تناسب جميع أنواع
                المنازل والفلل.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                فريقنا المدرب يستخدم أحدث التقنيات ومواد التنظيف الآمنة لضمان نتائج
                استثنائية. نوفر خدمات مرنة ومواعيد تناسب جدولك.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدماتنا الشاملة</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تنظيف المنازل</h3>
                  <p>تنظيف شامل لجميع الغرف والمرافق بدقة عالية.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">تنظيف الكنب</h3>
                  <p>تنظيف بالبخار للكنب والمجالس والستائر.</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">جلي الرخام</h3>
                  <p>جلي وتلميع الأرضيات الرخامية والبلاط.</p>
                </div>
                <div className="rounded-lg bg-orange-50 p-6">
                  <h3 className="mb-2 text-xl font-bold">التعقيم</h3>
                  <p>تعقيم شامل للحماية من الجراثيم.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">مميزاتنا</h2>
              <div className="space-y-3">
                {[
                  "خدمة سريعة خلال ساعة",
                  "فريق محترف ومؤمّن",
                  "أسعار تنافسية وشفافة",
                  "مواد آمنة للأطفال",
                  "متاحون 24/7",
                  "ضمان رضا كامل",
                  "خصومات دورية",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">باقاتنا الخاصة</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li><strong>الشقة الصغيرة:</strong> من 270 ريال</li>
                <li><strong>الشقة الكبيرة:</strong> من 420 ريال</li>
                <li><strong>الفيلا:</strong> من 550 ريال</li>
                <li><strong>عقد شهري:</strong> بخصم 20%</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدمات أخرى</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/apartment" className="text-primary hover:underline">
                    تنظيف الشقق
                  </Link>
                </li>
                <li>
                  <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                    تنظيف المفروشات
                  </Link>
                </li>
                <li>
                  <Link href="/services/disinfection" className="text-primary hover:underline">
                    التعقيم الشامل
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="منزل نظيف في المروة ينتظرك"
        description="احجز الآن واحصل على خصم خاص"
        context={{ area: "المروة" }}
      />
    </>
  );
}

