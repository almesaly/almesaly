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
  title: "شركة تنظيف في أبحر جدة - خدمات تنظيف احترافية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في أبحر بجدة. نوفر تنظيف فلل، شقق، كنب، سجاد وخزانات في منطقة أبحر الساحلية. خدمة سريعة ومتخصصة للمناطق الساحلية. اتصل الآن!",
  alternates: { canonical: `${site.url}/jeddah/obhur` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "أبحر", url: "/jeddah/obhur" },
];

const faqs = [
  {
    question: "هل تقدمون خدمات تنظيف في منطقة أبحر؟",
    answer:
      "نعم، نقدم جميع خدمات التنظيف في منطقة أبحر بما في ذلك تنظيف الفلل، الشقق، الكنب، السجاد، والخزانات. لدينا خبرة خاصة في التعامل مع تحديات المناطق الساحلية.",
  },
  {
    question: "ما هي تكلفة خدمات التنظيف في أبحر؟",
    answer:
      "الأسعار تبدأ من 300 ريال للشقق الصغيرة و500 ريال للفلل. نقدم عروض خاصة للعملاء في أبحر. تواصل معنا للحصول على سعر دقيق بناءً على احتياجاتك.",
  },
  {
    question: "كم يستغرق الوصول إلى أبحر من مقركم؟",
    answer:
      "لدينا فرق موزعة في جدة تصل إلى أبحر خلال 30-45 دقيقة. نوفر مواعيد مرنة تناسب وقتك.",
  },
  {
    question: "هل خدماتكم متخصصة للمناطق الساحلية؟",
    answer:
      "نعم، لدينا خبرة 10+ سنوات في تنظيف المناطق الساحلية. نستخدم مواد ومعدات خاصة لإزالة ترسبات الملح، مقاومة الرطوبة، ومعالجة العفن الناتج عن الهواء البحري.",
  },
  {
    question: "هل تنظفون الواجهات الزجاجية المطلة على البحر؟",
    answer:
      "بالتأكيد! نوفر تنظيف متخصص للواجهات الزجاجية والشرفات المطلة على البحر، بما في ذلك إزالة ترسبات الملح والبقع الصعبة الناتجة عن الرياح البحرية.",
  },
];

export default function ObhurPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في أبحر جدة",
    description:
      "خدمات تنظيف احترافية متخصصة في منطقة أبحر الساحلية بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "أبحر، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "أبحر، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في أبحر - خدمات متخصصة للمناطق الساحلية"
        subtitle="خدمات التنظيف في أبحر"
        description="أفضل شركة تنظيف في أبحر بجدة. متخصصون في تنظيف المناطق الساحلية مع خبرة 10+ سنوات في مواجهة تحديات الرطوبة وملوحة الهواء البحري."
        image="home cleaning Jeddah.jpg"
        imageAlt="شركة تنظيف في أبحر جدة"
        context={{ area: "أبحر" }}
      />

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا تختار شركة المثالي للتنظيف في أبحر؟
              </h2>
              <p className="text-lg leading-relaxed">
                منطقة أبحر من أجمل المناطق الساحلية في جدة، لكنها تواجه تحديات تنظيف
                خاصة بسبب قربها من البحر. نحن في <strong>شركة المثالي</strong> نفهم هذه
                التحديات تماماً ولدينا الخبرة والمعدات المتخصصة للتعامل معها.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  خبرة في المناطق الساحلية
                </h3>
                <p>
                  أكثر من 10 سنوات من العمل في أبحر والمناطق الساحلية الأخرى. نعرف كيف
                  نتعامل مع الرطوبة العالية، ترسبات الملح، والعفن الناتج عن الهواء
                  البحري.
                </p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  مواد ومعدات متخصصة
                </h3>
                <p>
                  نستخدم منظفات خاصة مقاومة للملوحة، معدات إزالة الترسبات الملحية،
                  ومعالجات خاصة للحماية من التآكل الناتج عن البيئة البحرية.
                </p>
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                خدماتنا الشاملة في أبحر
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    service: "تنظيف الفلل والقصور",
                    link: "/services/villa-cleaning-jeddah",
                  },
                  {
                    service: "تنظيف الشقق السكنية",
                    link: "/services/apartment-cleaning-jeddah",
                  },
                  {
                    service: "التنظيف العميق الموسمي",
                    link: "/services/deep-cleaning",
                  },
                  {
                    service: "تنظيف الواجهات الزجاجية",
                    link: "/services/glass-facade",
                  },
                  {
                    service: "تنظيف الكنب والمفروشات",
                    link: "/services/upholstery-sofa",
                  },
                  {
                    service: "تنظيف السجاد بالبخار",
                    link: "/services/carpet",
                  },
                  {
                    service: "تنظيف المسابح",
                    link: "/services/pool-cleaning",
                  },
                  {
                    service: "تنظيف الخزانات",
                    link: "/services/water-tank",
                  },
                  {
                    service: "مكافحة العفن والرطوبة",
                    link: "/services/disinfection",
                  },
                  {
                    service: "تنظيف الرخام والأرضيات",
                    link: "/services/marble-polishing",
                  },
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
                التحديات الخاصة بتنظيف المنازل في أبحر
              </h2>
              <p className="mb-4 leading-relaxed">
                أبحر منطقة ساحلية رائعة، لكن قربها من البحر يخلق تحديات فريدة للتنظيف
                والصيانة:
              </p>
              <ul className="space-y-3 pr-6">
                <li className="leading-relaxed">
                  <strong className="text-gray-900">
                    ترسبات الملح على النوافذ والواجهات:
                  </strong>{" "}
                  الرياح البحرية تحمل ذرات الملح التي تترسب على الزجاج والواجهات، مما
                  يتطلب تنظيف متخصص وأكثر تكراراً.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">الرطوبة العالية:</strong> نسبة
                  الرطوبة الأعلى من المتوسط تشجع نمو العفن والفطريات، خاصة في الحمامات
                  والمطابخ والزوايا قليلة التهوية.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">تآكل المعادن:</strong> الهواء
                  المالح يسرّع تآكل المعادن مثل مقابض الأبواب، الدرابزين، والتجهيزات
                  المعدنية، مما يتطلب تنظيف وحماية خاصة.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">الرمال الناعمة:</strong> الرمال
                  تتسلل بسهولة إلى المنازل وتستقر في الزوايا والسجاد، مما يتطلب شفط قوي
                  ومنتظم.
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-white p-8">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                حلولنا المتخصصة لمنطقة أبحر
              </h3>
              <ul className="space-y-3 pr-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>تنظيف الواجهات الزجاجية</strong> بمواد مضادة للترسبات
                    الملحية تترك طبقة حماية تمنع تراكم الملح مستقبلاً
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>معالجة العفن والرطوبة</strong> بمنتجات متخصصة آمنة على
                    الصحة وفعالة في القضاء على الجذور
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>حماية المعادن</strong> من التآكل بمواد تلميع وحماية خاصة
                    مقاومة للملوحة
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>
                    <strong>تنظيف عميق للسجاد والمفروشات</strong> لإزالة الرمال
                    العميقة والأملاح المترسبة
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                نصائح للحفاظ على نظافة منزلك في أبحر
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">تهوية منتظمة</h4>
                  <p>
                    افتح النوافذ يومياً لتجديد الهواء وتقليل الرطوبة، لكن تجنب ذلك في
                    أوقات الرياح القوية التي تحمل الرمال.
                  </p>
                </div>
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">
                    تنظيف النوافذ بانتظام
                  </h4>
                  <p>
                    نظّف النوافذ الخارجية مرة كل أسبوعين لمنع تراكم الترسبات الملحية
                    التي تصبح صعبة الإزالة مع الوقت.
                  </p>
                </div>
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">استخدام مزيلات الرطوبة</h4>
                  <p>
                    ضع أجهزة إزالة الرطوبة أو أكياس السيليكا في الخزائن والزوايا
                    المغلقة لمنع نمو العفن.
                  </p>
                </div>
                <div className="rounded-lg border-r-4 border-primary bg-gray-50 p-4">
                  <h4 className="mb-2 font-bold text-gray-900">
                    تنظيف عميق موسمي
                  </h4>
                  <p>
                    احجز خدمة <Link href="/services/deep-cleaning" className="text-primary underline">تنظيف عميق</Link> كل 3-4 أشهر للتعامل مع الأماكن
                    الصعبة والتراكمات العميقة.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا سكان أبحر يثقون بنا؟
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <div className="mb-3 text-4xl font-bold text-primary">10+</div>
                  <p className="font-semibold text-gray-900">سنوات خبرة</p>
                  <p className="text-sm text-gray-600">في أبحر والمناطق الساحلية</p>
                </div>
                <div className="text-center">
                  <div className="mb-3 text-4xl font-bold text-primary">500+</div>
                  <p className="font-semibold text-gray-900">عميل راضٍ</p>
                  <p className="text-sm text-gray-600">في منطقة أبحر</p>
                </div>
                <div className="text-center">
                  <div className="mb-3 text-4xl font-bold text-primary">24/7</div>
                  <p className="font-semibold text-gray-900">خدمة عملاء</p>
                  <p className="text-sm text-gray-600">استجابة سريعة في أبحر</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              الأسئلة الشائعة عن التنظيف في أبحر
            </h2>
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في أبحر؟"
        description="فريقنا المتخصص في تنظيف المناطق الساحلية جاهز لخدمتك. اتصل الآن!"
        context={{ area: "أبحر" }}
      />
    </>
  );
}
