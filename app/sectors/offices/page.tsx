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
  title: "تنظيف مكاتب وشركات بجدة — خدمات تنظيف احترافية",
  description:
    "خدمات تنظيف مكاتب وشركات احترافية في جدة. عقود مرنة، جودة عالية، وجدولة تناسب ساعات عملك. حافظ على صورة شركتك المهنية.",
  alternates: {
    canonical: `${site.url}/sectors/offices`,
  },
};

const breadcrumbs = [
  { name: "القطاعات التجارية", url: "/sectors" },
  { name: "تنظيف مكاتب وشركات", url: "/sectors/offices" },
];

const faqs = [
  {
    question: "في أي أوقات يمكنكم تنظيف المكتب؟",
    answer:
      "نوفر مرونة تامة في المواعيد لنتناسب مع ساعات عملك. يمكننا التنظيف صباحاً مبكراً قبل وصول الموظفين، مساءً بعد انتهاء الدوام، أو حتى في عطلات نهاية الأسبوع. الهدف هو عدم التأثير على سير عملك اليومي.",
  },
  {
    question: "هل تقدمون عقود تنظيف دورية للمكاتب؟",
    answer:
      "نعم، نقدم عقود تنظيف دورية مخصصة (يومي، أسبوعي، نصف شهري، أو شهري) بأسعار مخفضة مقارنة بالخدمات الفردية. العقود الدورية تضمن لك مكتباً نظيفاً دائماً، وأولوية في الخدمة، ونفس الفريق المدرب على خصوصية مكتبك.",
  },
  {
    question: "هل تحترمون خصوصية وأمن المكتب؟",
    answer:
      "بالتأكيد. جميع أفراد فريقنا يخضعون لفحوصات أمنية شاملة ويوقعون اتفاقيات سرية. نلتزم بأعلى معايير الأمانة واحترام الخصوصية. يمكننا أيضاً العمل تحت إشراف مدير مكتبك أو موظف الأمن إذا كانت لديكم سياسات أمنية خاصة.",
  },
  {
    question: "ماذا يشمل تنظيف المكتب؟",
    answer:
      "تنظيف شامل يشمل: المكاتب والطاولات، الكراسي، الأرضيات (كنس ومسح)، المراحيض ودورات المياه، الزجاج والنوافذ، غرف الاجتماعات، المطبخ أو منطقة الاستراحة، تفريغ سلات المهملات، تنظيف السجاد والموكيت (حسب الحاجة)، وتعقيم الأسطح الملامسة.",
  },
  {
    question: "هل تقدمون خدمات تنظيف إضافية خاصة للمكاتب؟",
    answer:
      "نعم، نقدم خدمات إضافية مثل: تنظيف عميق دوري، تنظيف السجاد والموكيت بالبخار، تلميع الأرضيات، تنظيف واجهات المبنى، تنظيف بعد الفعاليات أو المؤتمرات، تعقيم شامل للمنشأة، وخدمات طارئة عند الحاجة.",
  },
  {
    question: "كيف يتم التسعير لتنظيف المكاتب؟",
    answer:
      "التسعير يعتمد على: مساحة المكتب، عدد المكاتب والغرف، تكرار التنظيف (يومي أرخص من الأسبوعي للمساحة الواحدة)، ونوع الخدمات المطلوبة. نقدم عروض أسعار مخصصة بعد معاينة المكتب أو بناءً على معلوماتك التفصيلية.",
  },
  {
    question: "ماذا لو لم نكن راضين عن جودة التنظيف؟",
    answer:
      "رضاك مضمون 100%. إذا لم تكن راضياً عن أي جانب من الخدمة، أخبرنا خلال 24 ساعة وسنعيد تنظيف المناطق المعنية فوراً دون أي رسوم إضافية. نحن نؤمن بالجودة المستمرة ونسعى دائماً لتحسين خدماتنا.",
  },
];

const services = [
  "تنظيف المكاتب والطاولات يومياً",
  "تنظيف وتعقيم دورات المياه",
  "كنس ومسح جميع الأرضيات",
  "تنظيف النوافذ والزجاج",
  "تفريغ سلال المهملات",
  "تنظيف غرف الاجتماعات",
  "تنظيف المطابخ ومناطق الاستراحة",
  "تعقيم الأسطح الملامسة يومياً",
  "تنظيف السجاد والموكيت دورياً",
  "إعادة ترتيب الكراسي والطاولات",
  "تنظيف الممرات والمداخل",
  "تلميع الأسطح الزجاجية والمعدنية",
];

export default function OfficesPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف مكاتب وشركات بجدة",
      "خدمات تنظيف مكاتب وشركات احترافية في جدة. عقود مرنة، فرق مدربة، والتزام بمعايير الجودة."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "القطاعات التجارية", url: `${site.url}/sectors` },
      { name: "تنظيف مكاتب", url: `${site.url}/sectors/offices` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف مكاتب وشركات بجدة - بيئة عمل نظيفة واحترافية"
        subtitle="تنظيف مكاتب وشركات"
        description="حافظ على صورة شركتك المهنية مع خدمات تنظيف مكاتب احترافية. عقود مرنة، فرق مدربة، وجودة مضمونة."
        image="office cleaning Jeddah.jpg"
        imageAlt="تنظيف مكاتب في جدة - شركة المثالي"
        context={{ service: "تنظيف مكاتب" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف مكاتب وشركات في جدة - لأن انطباعك الأول يهم
            </h2>

            <p className="text-lg leading-relaxed">
              المكتب النظيف والمرتب ليس مجرد مكان للعمل، بل هو انعكاس مباشر لاحترافية شركتك وقيمها.
              عندما يدخل عميل أو شريك محتمل إلى مكتبك، أول ما يلاحظه هو النظافة والترتيب. بيئة العمل
              النظيفة تعزز أيضاً إنتاجية الموظفين، تقلل من انتشار الأمراض، وتخلق جواً إيجابياً يساعد على
              التركيز والإبداع.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمات تنظيف مكاتب وشركات متخصصة في جدة تضمن لك
              مكتباً نظيفاً دائماً، دون أن تقلق بشأن التفاصيل. نفهم أن إدارة شركة تحتاج تركيزك الكامل،
              لذا نتولى نحن مسؤولية النظافة بحرفية عالية ودون أي إزعاج لسير عملك اليومي.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا النظافة المهنية ضرورية للمكاتب؟
            </h3>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>
                <strong>الانطباع الأول:</strong> المكتب النظيف يترك انطباعاً إيجابياً قوياً لدى
                العملاء والزوار، مما يعزز ثقتهم في خدماتك أو منتجاتك.
              </li>
              <li>
                <strong>صحة الموظفين:</strong> المكتب النظيف يقلل من انتشار الجراثيم والبكتيريا، مما
                يقلل من أيام المرض ويحسن الحضور والإنتاجية.
              </li>
              <li>
                <strong>بيئة عمل إيجابية:</strong> الموظفون يعملون بشكل أفضل في بيئة نظيفة ومرتبة.
                النظافة تعزز المعنويات والرضا الوظيفي.
              </li>
              <li>
                <strong>الامتثال للمعايير:</strong> بعض الصناعات والمنشآت تتطلب معايير نظافة صارمة
                للامتثال للوائح الصحية والسلامة.
              </li>
              <li>
                <strong>إطالة عمر الأصول:</strong> التنظيف الدوري للسجاد، الأثاث، والأرضيات يحافظ
                عليها ويطيل عمرها، مما يوفر عليك تكاليف الاستبدال.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              ما الذي تشمله خدمة تنظيف المكاتب؟
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6 text-gray-700">
              <p className="text-lg font-semibold text-gray-900">
                نطاق العمل يمكن تخصيصه بالكامل حسب احتياجاتك:
              </p>

              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>
                  <strong>تنظيف يومي:</strong> للمكاتب المزدحمة التي تحتاج نظافة مستمرة
                </li>
                <li>
                  <strong>تنظيف أسبوعي:</strong> للمكاتب الصغيرة أو متوسطة الاستخدام
                </li>
                <li>
                  <strong>تنظيف عميق شهري:</strong> بالإضافة إلى التنظيف الدوري، نقدم تنظيفاً عميقاً
                  شاملاً مرة في الشهر
                </li>
                <li>
                  <strong>تنظيف حسب الحاجة:</strong> خدمات لمرة واحدة أو حسب الطلب
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              المدة والتسعير - شفافية كاملة
            </h2>

            <p className="leading-relaxed">
              تسعير خدمات تنظيف المكاتب يعتمد على عدة عوامل واضحة:
            </p>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>
                <strong>مساحة المكتب:</strong> متر مربع أو عدد المكاتب/الغرف
              </li>
              <li>
                <strong>تكرار التنظيف:</strong> يومي، أسبوعي، نصف شهري، أو شهري (التكرار الأعلى يعني
                سعر أقل لكل زيارة)
              </li>
              <li>
                <strong>نوع الخدمات:</strong> تنظيف أساسي أو شامل مع خدمات إضافية
              </li>
              <li>
                <strong>الموقع:</strong> سهولة الوصول، الطابق، توفر موقف (لا نفرض رسوماً على الموقع،
                لكنه قد يؤثر قليلاً على اللوجستيات)
              </li>
            </ul>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-bold text-gray-900">نموذج تقديري:</h4>
              <ul className="space-y-2">
                <li>
                  <strong>مكتب صغير (5-10 مكاتب):</strong> من 500-800 ريال/شهرياً (أسبوعي)
                </li>
                <li>
                  <strong>مكتب متوسط (10-20 مكتب):</strong> من 1000-1500 ريال/شهرياً (أسبوعي)
                </li>
                <li>
                  <strong>مكتب كبير (+20 مكتب):</strong> عرض مخصص بناءً على المعاينة
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * الأسعار تقديرية وتعتمد على التفاصيل الدقيقة. تواصل معنا لعرض سعر مجاني ومخصص.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              لماذا تختار شركة المثالي لتنظيف مكتبك؟
            </h2>

            <ul className="space-y-3">
              <li className="leading-relaxed">
                <strong>فرق متخصصة في التنظيف التجاري:</strong> فريقنا مدرب على التعامل مع البيئات
                التجارية، احترام الخصوصية، والعمل بكفاءة دون إزعاج.
              </li>
              <li className="leading-relaxed">
                <strong>جدولة مرنة:</strong> نعمل في الأوقات التي تناسبك - قبل الدوام، بعده، أو في
                عطلات نهاية الأسبوع.
              </li>
              <li className="leading-relaxed">
                <strong>نفس الفريق في كل مرة:</strong> في العقود الدورية، نخصص لك نفس الفريق، مما يعني
                فهماً أفضل لمكتبك وسرعة أكبر.
              </li>
              <li className="leading-relaxed">
                <strong>أمان وخصوصية:</strong> جميع موظفينا موثوقون ومدربون على احترام خصوصية بيئة
                العمل.
              </li>
              <li className="leading-relaxed">
                <strong>مواد آمنة:</strong> نستخدم منتجات آمنة على الموظفين، لا تترك روائح قوية أو بقايا
                مزعجة.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف مكاتب" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/sectors/restaurants"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف مطاعم</h3>
                <p className="text-gray-600">خدمات متخصصة للمطاعم والكافيهات</p>
              </Link>
              <Link
                href="/sectors/healthcare"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف عيادات</h3>
                <p className="text-gray-600">تنظيف طبي متخصص للمنشآت الصحية</p>
              </Link>
              <Link
                href="/services/disinfection"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التعقيم</h3>
                <p className="text-gray-600">تعقيم شامل للمكاتب والمنشآت</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



