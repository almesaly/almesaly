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
  title: "شركة تنظيف في البحر جدة - خدمات تنظيف احترافية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي البحر بجدة. تنظيف فلل، شقق، كنب، سجاد في منطقة البحر الساحلية. خدمة متخصصة للمناطق البحرية. اتصل الآن!",
  alternates: { canonical: `${site.url}/jeddah/al-bahar` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "البحر", url: "/jeddah/al-bahar" },
];

const faqs = [
  {
    question: "هل تقدمون خدمات تنظيف في حي البحر؟",
    answer:
      "نعم، نقدم جميع خدمات التنظيف في حي البحر بما في ذلك تنظيف الفلل الساحلية، الشقق، المفروشات، والواجهات الزجاجية. لدينا خبرة خاصة في التعامل مع تحديات المناطق البحرية.",
  },
  {
    question: "كيف تتعاملون مع ترسبات الملح في حي البحر؟",
    answer:
      "نستخدم منظفات متخصصة مضادة للترسبات الملحية ومعدات حديثة لإزالة آثار الملح من الواجهات والنوافذ. كما نطبق طبقة حماية تمنع التراكم السريع للترسبات.",
  },
  {
    question: "ما تكلفة التنظيف في منطقة البحر؟",
    answer:
      "الأسعار تبدأ من 350 ريال للشقق و550 ريال للفلل. نقدم عروض خاصة لسكان حي البحر مع خدمات دورية بأسعار مخفضة.",
  },
  {
    question: "هل تنظفون المسابح في الفلل البحرية؟",
    answer:
      "بالتأكيد! لدينا خدمة متخصصة لتنظيف المسابح شاملة التعقيم وموازنة الكيماويات وتنظيف الفلاتر. خدمة دورية متاحة أسبوعياً أو شهرياً.",
  },
];

export default function AlBaharPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي البحر جدة",
    description: "خدمات تنظيف احترافية متخصصة في حي البحر الساحلي بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "البحر، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "البحر، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في حي البحر - خبراء المناطق الساحلية"
        subtitle="خدمات التنظيف في البحر"
        description="أفضل شركة تنظيف في حي البحر بجدة. متخصصون في تنظيف الفلل والشقق الساحلية مع حلول فعالة لمواجهة تحديات البيئة البحرية."
        image="cleaning services Jeddah.jpg"
        imageAlt="شركة تنظيف في حي البحر جدة"
        context={{ area: "البحر" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                شركة المثالي - خبراء التنظيف في حي البحر
              </h2>
              <p className="text-lg leading-relaxed">
                حي البحر من أرقى الأحياء الساحلية في جدة، بواجهته البحرية المميزة وفلله
                الفاخرة. نحن في <strong>شركة المثالي</strong> نفهم الاحتياجات الخاصة لهذه
                المنطقة الراقية ونقدم خدمات تنظيف بمستوى يليق بسكانها.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  خبرة في الفلل الساحلية الفاخرة
                </h3>
                <p>
                  نعمل مع أصحاب الفلل والقصور في حي البحر منذ سنوات. نعرف كيف نحافظ على
                  الأثاث الفاخر، الأرضيات الرخامية، والتجهيزات الحديثة.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  حلول لتحديات البيئة البحرية
                </h3>
                <p>
                  معدات ومواد متخصصة للتعامل مع الرطوبة العالية، ترسبات الملح، والرمال
                  الناعمة التي تميز المناطق الساحلية.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                خدمات التنظيف الشاملة في حي البحر
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { service: "تنظيف الفلل والقصور الفاخرة", link: "/services/villa-cleaning-jeddah" },
                  { service: "تنظيف الشقق البحرية", link: "/services/apartment-cleaning-jeddah" },
                  { service: "التنظيف العميق الشامل", link: "/services/deep-cleaning" },
                  { service: "تنظيف الواجهات والزجاج", link: "/services/glass-facade" },
                  { service: "تنظيف الأثاث الفاخر", link: "/services/upholstery-sofa" },
                  { service: "تنظيف السجاد الفارسي", link: "/services/carpet" },
                  { service: "تنظيف وصيانة المسابح", link: "/services/pool-cleaning" },
                  { service: "جلي وتلميع الرخام", link: "/services/marble-polishing" },
                  { service: "تنظيف الخزانات", link: "/services/water-tank" },
                  { service: "التعقيم والتطهير", link: "/services/disinfection" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="flex items-start gap-3 rounded-lg border bg-white p-4 transition-all hover:border-primary hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold text-gray-900 hover:text-primary">
                      {item.service}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                التحديات الخاصة بحي البحر
              </h2>
              <ul className="space-y-3 pr-6">
                <li className="leading-relaxed">
                  <strong className="text-gray-900">الواجهات الزجاجية الكبيرة:</strong>{" "}
                  العديد من الفلل في حي البحر تتميز بواجهات زجاجية ضخمة مطلة على البحر،
                  تتطلب تنظيف متخصص ومنتظم لإزالة ترسبات الملح والحفاظ على الرؤية الصافية.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">الأثاث والديكور الفاخر:</strong>{" "}
                  التعامل مع الأثاث الفاخر، الستائر الحريرية، والسجاد الفارسي يتطلب خبرة
                  ومعدات خاصة لتجنب أي ضرر.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">المسابح الخاصة:</strong> العديد من
                  الفلل تحتوي على مسابح خاصة تحتاج صيانة وتنظيف دوري احترافي.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">الرمال والغبار:</strong> القرب من
                  البحر يعني دخول كميات أكبر من الرمال الناعمة والغبار إلى المنازل.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-white p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                لماذا نحن الخيار الأفضل في حي البحر؟
              </h3>
              <ul className="space-y-3 pr-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>فريق مدرب على التعامل مع الفلل الفاخرة</strong> يحترم
                    الخصوصية ويتعامل بأقصى درجات الاحترافية
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>معدات ومواد عالية الجودة</strong> آمنة على الأسطح الحساسة
                    والأثاث الفاخر
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>خدمات دورية مخصصة</strong> بجداول مرنة تناسب أسلوب حياتك
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>ضمان الجودة والرضا التام</strong> أو إعادة الخدمة مجاناً
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                نصائح للحفاظ على نظافة فيلتك في حي البحر
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">تنظيف الواجهات بانتظام</h4>
                  <p>
                    نظّف الواجهات الزجاجية كل أسبوع إلى أسبوعين للحفاظ على الرؤية الصافية
                    ومنع تراكم الترسبات الصعبة.
                  </p>
                </div>
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">العناية بالمسبح</h4>
                  <p>
                    اشترك في خدمة <Link href="/services/pool-cleaning" className="text-primary underline">تنظيف مسابح</Link> دورية
                    للحفاظ على المياه نظيفة وصحية طوال الوقت.
                  </p>
                </div>
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">حماية الأثاث الفاخر</h4>
                  <p>
                    نظّف الأثاث والسجاد الفاخر بواسطة متخصصين كل 3-6 أشهر للحفاظ على
                    جودتها وإطالة عمرها.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-primary">15+</div>
                <p className="font-semibold text-gray-900">سنة خبرة</p>
                <p className="text-sm text-gray-600">في المناطق الساحلية الراقية</p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-primary">200+</div>
                <p className="font-semibold text-gray-900">فيلا في حي البحر</p>
                <p className="text-sm text-gray-600">نخدمها بانتظام</p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-primary">100%</div>
                <p className="font-semibold text-gray-900">رضا العملاء</p>
                <p className="text-sm text-gray-600">ضمان الجودة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              الأسئلة الشائعة عن التنظيف في حي البحر
            </h2>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="خدمات تنظيف راقية تليق بفيلتك في حي البحر"
        description="فريقنا المتخصص جاهز لخدمتك بأعلى معايير الجودة. اتصل الآن!"
        context={{ area: "البحر" }}
      />
    </>
  );
}
