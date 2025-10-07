import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process-steps";
import { FAQ } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "تنظيف ما بعد البناء والتشطيب بجدة",
  description: "خدمة تنظيف ما بعد البناء في جدة. إزالة مخلفات البناء والتشطيب، الغبار، والأتربة. نجهز منزلك للسكن فوراً.",
  alternates: { canonical: `${site.url}/services/post-construction` },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف ما بعد البناء", url: "/services/post-construction" },
];

const faqs = [
  {
    question: "ما الذي يشمله تنظيف ما بعد البناء؟",
    answer: "يشمل إزالة جميع مخلفات البناء (أسمنت، جبس، أتربة، دهان)، تنظيف النوافذ والأبواب من ملصقات الحماية، فرك الأرضيات من بقايا الأسمنت، تنظيف الحمامات والمطابخ، إزالة الغبار من كل الأسطح والزوايا، وتلميع الأرضيات.",
  },
  {
    question: "كم يستغرق تنظيف شقة أو فيلا بعد التشطيب؟",
    answer: "شقة من غرفتين تحتاج 6-8 ساعات، فيلا متوسطة تحتاج 12-16 ساعة. التنظيف بعد البناء يحتاج وقتاً أطول من التنظيف العادي لأن مخلفات البناء عنيدة وتحتاج جهداً مكثفاً.",
  },
  {
    question: "هل تزيلون بقايا الأسمنت والدهان؟",
    answer: "نعم، نستخدم مواد ومعدات متخصصة لإزالة بقايا الأسمنت من الأرضيات والبلاط، بقع الدهان من النوافذ والأرضيات، والجبس من الأسطح. نضمن إزالتها دون إتلاف الأسطح الأصلية.",
  },
  {
    question: "متى يجب حجز خدمة التنظيف بعد التشطيب؟",
    answer: "يُفضل الحجز فوراً بعد انتهاء أعمال التشطيب وقبل نقل الأثاث. هذا يتيح لنا تنظيف شامل دون عوائق. يمكننا أيضاً التنظيف بعد نقل الأثاث لكن سيستغرق وقتاً أطول.",
  },
  {
    question: "هل تتعاملون مع مخلفات البناء الكبيرة؟",
    answer: "نحن نتخصص في التنظيف فقط. إذا كانت هناك مخلفات كبيرة (أخشاب، حديد، أكياس أسمنت)، يُفضل أن يتم إزالتها من قبل مقاول البناء أولاً. نحن نركز على التنظيف العميق والتفصيلي.",
  },
  {
    question: "هل المنزل جاهز للسكن بعد خدمتكم؟",
    answer: "نعم تماماً! بعد تنظيفنا، منزلك نظيف 100% وجاهز لنقل الأثاث والسكن فوراً. نزيل كل آثار البناء ونترك المكان نظيفاً ومعقماً تماماً.",
  },
];

const services = [
  "إزالة جميع مخلفات البناء والتشطيب",
  "تنظيف الغبار والأتربة من الأسقف والجدران",
  "إزالة بقايا الأسمنت والجبس من الأرضيات",
  "تنظيف النوافذ من ملصقات الحماية والدهان",
  "فرك وتلميع البلاط والرخام",
  "تنظيف الحمامات والمطابخ من مخلفات البناء",
  "إزالة بقع الدهان من جميع الأسطح",
  "تنظيف الأبواب والنوافذ بالكامل",
  "مسح الخزائن والأدراج من الداخل",
  "تنظيف السلالم والممرات",
  "تعقيم شامل للمكان",
  "إخراج القمامة والمخلفات",
];

export default function PostConstructionPage() {
  const schemas = [
    generateServiceSchema("تنظيف ما بعد البناء بجدة", "خدمة تنظيف ما بعد البناء والتشطيب في جدة. نزيل جميع مخلفات البناء ونجهز منزلك للسكن."),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف ما بعد البناء", url: `${site.url}/services/post-construction` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        title="تنظيف ما بعد البناء والتشطيب - جاهز للسكن فوراً"
        subtitle="تنظيف ما بعد البناء"
        description="انتهيت من التشطيب؟ نحن نجهز منزلك للسكن بإزالة جميع مخلفات البناء والأتربة والغبار."
        image="post construction cleaning.jpg"
        imageAlt="تنظيف ما بعد البناء في جدة"
        context={{ service: "تنظيف ما بعد البناء" }}
      />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف ما بعد البناء في جدة - من الفوضى إلى النظافة</h2>
            <p className="text-lg leading-relaxed">
              انتهيت من بناء أو تجديد منزلك؟ تهانينا! لكن الآن تواجه مهمة شاقة - تنظيف جميع مخلفات البناء والتشطيب. الغبار في كل مكان، بقايا أسمنت على الأرضيات، دهان على النوافذ، وأتربة على كل سطح. هذه ليست مهمة سهلة!
            </p>
            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نتخصص في <strong>تنظيف ما بعد البناء والتشطيب في جدة</strong>. فريقنا المدرب يفهم تماماً طبيعة مخلفات البناء ويملك المعدات والمواد المناسبة لإزالتها بكفاءة. نحول منزلك من موقع بناء متسخ إلى مسكن نظيف وجاهز للسكن في يوم واحد أو يومين.
            </p>
            <h3 className="text-2xl font-bold text-gray-900">لماذا التنظيف بعد البناء يحتاج متخصصين؟</h3>
            <p className="leading-relaxed">
              التنظيف بعد البناء يختلف تماماً عن التنظيف العادي. مخلفات البناء عنيدة وتحتاج تقنيات ومواد خاصة:
            </p>
            <ul className="list-inside list-disc space-y-2 pr-6">
              <li><strong>بقايا الأسمنت:</strong> تلتصق بالأرضيات والبلاط وتحتاج مواد حمضية متخصصة لإزالتها دون خدش السطح</li>
              <li><strong>الغبار الناعم:</strong> ينتشر في كل مكان ويحتاج تنظيفاً دقيقاً ومتعدد المرات</li>
              <li><strong>بقع الدهان:</strong> على النوافذ والأرضيات تحتاج مذيبات خاصة</li>
              <li><strong>الجبس والمعجون:</strong> يلتصق بالأسطح ويصعب إزالته</li>
              <li><strong>ملصقات الحماية:</strong> على النوافذ والأبواب تحتاج صبراً ومهارة لإزالتها</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">ما الذي نقوم به؟</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ProcessSteps />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">قائمة فحص شاملة للتنظيف بعد التشطيب</h2>
            <p className="leading-relaxed">نتبع قائمة فحص دقيقة لضمان عدم تفويت أي شيء:</p>
            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-gray-900">1. الأرضيات</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>إزالة بقايا الأسمنت والجبس</li>
                  <li>كنس شامل لكل الغرف</li>
                  <li>فرك عميق بمواد مناسبة</li>
                  <li>تلميع نهائي (للرخام والبلاط)</li>
                </ul>
              </div>
              <div className="rounded-lg bg-green-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-gray-900">2. النوافذ والأبواب</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>إزالة ملصقات الحماية</li>
                  <li>تنظيف الزجاج من بقع الدهان</li>
                  <li>مسح الإطارات والمفصلات</li>
                  <li>تلميع الزجاج</li>
                </ul>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">نصائح قبل وبعد التنظيف</h2>
            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">قبل التنظيف:</h3>
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>تأكد من انتهاء جميع أعمال البناء والدهان تماماً</li>
                <li>اطلب من مقاول البناء إزالة المخلفات الكبيرة أولاً</li>
                <li>لا تنقل الأثاث قبل التنظيف</li>
                <li>احجز مبكراً - نحن مشغولون خاصة في موسم البناء</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف ما بعد البناء" }} />
      <FAQ faqs={faqs} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/services/deep-cleaning" className="rounded-lg border bg-gray-50 p-6 hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold">التنظيف العميق</h3>
                <p className="text-gray-600">بعد الاستقرار في منزلك</p>
              </Link>
              <Link href="/services/marble-polishing" className="rounded-lg border bg-gray-50 p-6 hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold">جلي الرخام</h3>
                <p className="text-gray-600">لاستعادة بريق الأرضيات</p>
              </Link>
              <Link href="/services/glass-facade" className="rounded-lg border bg-gray-50 p-6 hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold">تنظيف الواجهات</h3>
                <p className="text-gray-600">للواجهات الزجاجية</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

