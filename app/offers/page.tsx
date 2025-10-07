import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { generateFAQSchema } from "@/lib/schema";
import { CheckCircle, Package, Sparkles, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "عروض وباقات تنظيف بجدة",
  description:
    "عروض وباقات تنظيف خاصة في جدة. باقات شاملة بأسعار مخفضة، عقود دورية، وعروض موسمية. وفّر واحصل على خدمة احترافية.",
  alternates: {
    canonical: `${site.url}/offers`,
  },
};

const breadcrumbs = [{ name: "العروض والباقات", url: "/offers" }];

const faqs = [
  {
    question: "كيف يمكنني الاستفادة من العروض؟",
    answer:
      "للاستفادة من أي عرض، تواصل معنا عبر الهاتف أو واتساب واذكر اسم العرض أو الباقة التي تهمك. سنقدم لك التفاصيل الكاملة ونساعدك في اختيار الباقة الأنسب لاحتياجاتك. بعض العروض محدودة بفترة زمنية، لذا ننصح بالحجز مبكراً.",
  },
  {
    question: "هل يمكنني تخصيص الباقة حسب احتياجاتي؟",
    answer:
      "بالتأكيد! الباقات المعروضة هي أمثلة عامة. نحن سعداء بتصميم باقة مخصصة تماماً لاحتياجاتك - يمكنك إضافة أو إزالة خدمات، تعديل التكرار، أو دمج عدة خدمات. تواصل معنا وأخبرنا بما تحتاجه بالضبط وسنقدم لك عرض سعر مخصص.",
  },
  {
    question: "هل هناك خصومات على العقود الدورية؟",
    answer:
      "نعم! نقدم خصومات جذابة على العقود الدورية. التنظيف الأسبوعي يحصل على خصم 15%، النصف شهري 10%، والشهري 8%. كلما طالت مدة العقد، كان الخصم أفضل. بالإضافة إلى الخصم، ستحصل على أولوية في الحجز ونفس الفريق في كل مرة.",
  },
  {
    question: "ما هي شروط إلغاء أو تعديل الباقة؟",
    answer:
      "نوفر مرونة كاملة. للعقود الدورية، يمكنك إلغاء أو تعديل الموعد بإشعار 24 ساعة مسبق دون أي رسوم. للباقات الشاملة، إذا لم تكن راضياً عن أي جزء من الخدمة، سنعيد تنفيذه دون رسوم. نؤمن بالمرونة والشفافية.",
  },
  {
    question: "هل العروض متاحة في جميع أحياء جدة؟",
    answer:
      "نعم، جميع عروضنا وباقاتنا متاحة في كل أحياء جدة دون استثناء. لا توجد رسوم إضافية للمناطق البعيدة. نخدم جدة بأكملها بنفس الجودة والأسعار العادلة.",
  },
  {
    question: "كيف يتم الدفع للباقات طويلة الأمد؟",
    answer:
      "للعقود الشهرية والدورية، يمكنك الدفع شهرياً مقدماً أو بعد كل خدمة حسب تفضيلك. نقبل النقد، بطاقات الائتمان، والتحويل البنكي. للباقات الشاملة، يتم الدفع عادة بعد إتمام كل خدمة من الباقة بنجاح.",
  },
];

const packages = [
  {
    icon: Package,
    title: "باقة التنظيف الأساسية",
    price: "تبدأ من 500 ريال",
    description: "مثالية للشقق الصغيرة والمتوسطة",
    features: [
      "تنظيف جميع الغرف",
      "تنظيف المطبخ والحمامات",
      "مسح الأرضيات",
      "تنظيف النوافذ من الداخل",
      "إخراج القمامة",
    ],
    link: "/contact",
  },
  {
    icon: Sparkles,
    title: "باقة التنظيف الشامل",
    price: "تبدأ من 800 ريال",
    description: "تنظيف شامل للمنازل والفلل",
    features: [
      "جميع ما في الباقة الأساسية",
      "تنظيف عميق للمطبخ والحمامات",
      "تنظيف النوافذ من الخارج",
      "تنظيف الأجهزة",
      "تلميع الأسطح",
      "تنظيف بالبخار للأرضيات",
    ],
    featured: true,
    link: "/contact",
  },
  {
    icon: TrendingDown,
    title: "باقة التنظيف الدوري",
    price: "خصم حتى 20%",
    description: "عقود أسبوعية أو شهرية",
    features: [
      "خصم 15% للتنظيف الأسبوعي",
      "خصم 10% للتنظيف نصف الشهري",
      "خصم 8% للتنظيف الشهري",
      "أولوية في الحجز",
      "نفس الفريق في كل مرة",
      "مرونة في تغيير المواعيد",
    ],
    link: "/contact",
  },
];

const seasonalOffers = [
  {
    title: "عرض التنظيف الشامل",
    description: "احصل على تنظيف عميق + تنظيف كنبة مجاناً",
    discount: "خصم 15%",
    color: "bg-blue-50 border-blue-200",
  },
  {
    title: "عرض تنظيف المفروشات",
    description: "اطلب تنظيف 3 قطع كنب واحصل على الرابعة مجاناً",
    discount: "خصم 25%",
    color: "bg-green-50 border-green-200",
  },
  {
    title: "عرض العقود السنوية",
    description: "اشترك في عقد سنوي واحصل على شهر مجاني",
    discount: "وفّر شهر كامل",
    color: "bg-purple-50 border-purple-200",
  },
];

export default function OffersPage() {
  const schemas = [generateFAQSchema(faqs)];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="عروض وباقات تنظيف مميزة في جدة"
        subtitle="عروضنا وباقاتنا"
        description="اختر الباقة المناسبة لك من بين مجموعة واسعة من العروض والخيارات. جودة عالية بأسعار تنافسية."
        image="best cleaning service.jpg"
        imageAlt="عروض تنظيف في جدة - شركة المثالي"
        context={{ page: "العروض والباقات" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              اختر الباقة المثالية لاحتياجاتك
            </h2>
            <p className="text-lg text-gray-700">
              نقدم مجموعة متنوعة من الباقات والعروض التي تناسب جميع الاحتياجات والميزانيات. سواء
              كنت تحتاج خدمة لمرة واحدة أو عقد دوري، لدينا الحل الأمثل لك.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-lg border-2 bg-white p-8 shadow-lg transition-all hover:shadow-xl ${
                    pkg.featured ? "border-primary" : "border-gray-200"
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute left-0 top-0 bg-primary px-4 py-1 text-sm font-bold text-white">
                      الأكثر طلباً
                    </div>
                  )}
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-gray-900">{pkg.title}</h3>
                  <p className="mb-4 text-3xl font-bold text-primary">{pkg.price}</p>
                  <p className="mb-6 text-gray-600">{pkg.description}</p>
                  <ul className="mb-8 space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full" size="lg">
                    <Link href={pkg.link}>احجز الآن</Link>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">عروض خاصة ومحدودة</h2>
            <p className="text-lg text-gray-700">
              استفد من عروضنا الموسمية والخاصة قبل انتهائها. عروض محدودة بفترة زمنية أو عدد معين من
              العملاء.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {seasonalOffers.map((offer, index) => (
              <div
                key={index}
                className={`rounded-lg border-2 p-6 ${offer.color}`}
              >
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-white px-4 py-1 text-sm font-bold text-primary">
                    {offer.discount}
                  </span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{offer.title}</h3>
                <p className="mb-4 text-gray-700">{offer.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">احجز العرض</Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-600">
              * العروض سارية حسب التوفر وقد تنتهي في أي وقت. تواصل معنا للتأكد من توفر العرض.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              لماذا تختار باقاتنا؟
            </h2>

            <div className="space-y-4">
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">1. قيمة حقيقية مقابل المال</h3>
                <p className="leading-relaxed">
                  باقاتنا مصممة لتمنحك أفضل قيمة. عند شراء باقة، تحصل على خصومات كبيرة مقارنة بطلب
                  الخدمات بشكل فردي. نحسب كل التفاصيل لنضمن أنك توفر المال وتحصل على خدمة ممتازة.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">2. مرونة كاملة</h3>
                <p className="leading-relaxed">
                  لا توجد شروط معقدة أو التزامات طويلة الأمد. يمكنك تعديل أو إلغاء الخدمة بإشعار
                  مسبق بسيط. نحن نؤمن بأن العميل الراضي هو عميل يبقى معنا بإرادته، وليس بعقد ملزم.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">3. جودة ثابتة</h3>
                <p className="leading-relaxed">
                  سواء اخترت خدمة لمرة واحدة أو عقد سنوي، الجودة لا تتغير. نفس المعايير العالية، نفس
                  الاهتمام بالتفاصيل، ونفس الالتزام برضاك في كل زيارة.
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">4. أولوية في الخدمة</h3>
                <p className="leading-relaxed">
                  عملاء الباقات والعقود الدورية يحصلون على أولوية في الحجز، مما يعني مواعيد أسرع
                  ومرونة أكبر. كما تحصل على نفس الفريق في كل مرة، مما يعني سرعة أكبر وفهم أفضل
                  لاحتياجاتك.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                لا تجد الباقة المناسبة؟
              </h3>
              <p className="mb-4 text-gray-700">
                لا مشكلة! نحن نقدم باقات مخصصة تماماً حسب احتياجاتك. أخبرنا بما تحتاجه بالضبط -
                الخدمات، التكرار، الميزانية - وسنصمم لك باقة مثالية.
              </p>
              <Button asChild>
                <Link href="/contact">اطلب باقة مخصصة</Link>
              </Button>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              كيف تختار الباقة المناسبة؟
            </h2>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>
                <strong>للشقق الصغيرة والمتوسطة:</strong> الباقة الأساسية كافية للتنظيف الدوري
              </li>
              <li>
                <strong>للفلل والمنازل الكبيرة:</strong> الباقة الشاملة توفر تنظيفاً أعمق وأشمل
              </li>
              <li>
                <strong>للعائلات المشغولة:</strong> الباقة الدورية (أسبوعية أو نصف شهرية) تضمن منزلاً
                نظيفاً دائماً دون عناء
              </li>
              <li>
                <strong>قبل المناسبات:</strong> الباقة الشاملة + تنظيف مفروشات لاستقبال مثالي للضيوف
              </li>
              <li>
                <strong>للمكاتب والشركات:</strong> عقود دورية مخصصة حسب حجم المنشأة
              </li>
            </ul>

            <p className="text-lg font-semibold text-primary">
              ما زلت محتاراً؟ اتصل بنا وسنساعدك في اختيار الباقة الأمثل!
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="جاهز للاستفادة من عروضنا الحصرية؟"
        description="تواصل معنا الآن واحصل على عرض سعر مخصص مع خصم خاص"
        context={{ page: "العروض والباقات" }}
      />

      <FAQ faqs={faqs} />
    </>
  );
}



