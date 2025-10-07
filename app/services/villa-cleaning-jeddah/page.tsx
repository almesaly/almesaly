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
  title: "تنظيف فلل بجدة | خدمة شاملة ومتكاملة",
  description:
    "شركة تنظيف فلل في جدة - خدمات تنظيف شاملة للفلل الكبيرة والصغيرة. فريق متخصص، معدات حديثة، وأسعار منافسة.",
  alternates: {
    canonical: `${site.url}/services/villa-cleaning-jeddah`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف فلل بجدة", url: "/services/villa-cleaning-jeddah" },
];

const faqs = [
  {
    question: "كم يستغرق تنظيف فيلا كاملة؟",
    answer: "يعتمد ذلك على حجم الفيلا وعدد الغرف. فيلا صغيرة (3-4 غرف) تحتاج 6-8 ساعات للتنظيف الشامل، بينما فيلا كبيرة (5+ غرف) قد تحتاج 10-14 ساعة. يمكننا تقسيم العمل على يومين إذا كنت تفضل ذلك. نقدم تقديراً دقيقاً للوقت بعد معرفة تفاصيل الفيلا.",
  },
  {
    question: "هل تنظفون الحدائق والمداخل الخارجية؟",
    answer: "نعم، خدمة تنظيف الفلل الشاملة تشمل تنظيف المداخل، الممرات الخارجية، والفناء. نقوم بكنس ومسح الأرضيات الخارجية، تنظيف الأبواب والنوافذ من الخارج. تنظيف الحديقة (قص العشب، تشذيب النباتات) هو خدمة إضافية يمكن إضافتها عند الحاجة.",
  },
  {
    question: "هل تنظفون الملاحق والمجالس المنفصلة؟",
    answer: "بالتأكيد! تنظيف الفيلا يشمل جميع المباني في العقار - الفيلا الرئيسية، الملاحق، المجالس الخارجية، غرف الخدم، المخازن. نعاملها جميعاً بنفس المعايير العالية من النظافة والاحترافية.",
  },
  {
    question: "هل يمكنكم تنظيف الفيلا بعد حفل أو مناسبة؟",
    answer: "نعم، نقدم خدمة تنظيف بعد المناسبات والحفلات. نقوم بإزالة جميع الآثار، تنظيف عميق للمجالس والأرضيات، ترتيب الأثاث، وإعادة الفيلا لحالتها الطبيعية. يمكننا البدء مباشرة بعد انتهاء المناسبة أو في اليوم التالي حسب تفضيلك.",
  },
  {
    question: "ما الفرق بين تنظيف الفيلا وتنظيف المنزل العادي؟",
    answer: "الفلل عادة أكبر وتحتوي على مساحات إضافية مثل حدائق، مجالس منفصلة، ملاحق، مسابح (في بعض الحالات)، وأرضيات خارجية واسعة. تنظيف الفيلا يتطلب فريقاً أكبر، معدات أكثر، ووقتاً أطول. لذا السعر يكون أعلى من تنظيف شقة أو منزل عادي، لكن القيمة مقابل الخدمة الشاملة ممتازة.",
  },
  {
    question: "هل تقدمون خدمة تنظيف دورية للفلل؟",
    answer: "نعم، نقدم عقود تنظيف دورية (أسبوعية، نصف شهرية، أو شهرية) للفلل بخصومات خاصة تصل إلى 20%. الميزة أنك ستحصل على نفس الفريق الذي يعرف تفاصيل فيلتك، مما يوفر الوقت ويحسن الكفاءة. كما نوفر مرونة في تعديل المواعيد حسب احتياجاتك.",
  },
];

const services = [
  "تنظيف جميع الغرف والصالات",
  "تنظيف المجالس والديوانيات",
  "تنظيف المطابخ الرئيسية والمساعدة",
  "تنظيف جميع الحمامات ودورات المياه",
  "تنظيف السلالم والممرات",
  "تنظيف المداخل والأبواب",
  "تنظيف النوافذ والشبابيك",
  "تنظيف الأرضيات بجميع أنواعها",
  "تنظيف الحدائق والفناء الخارجي",
  "تنظيف الملاحق وغرف الخدم",
  "تنظيف المخازن والكراجات",
  "إزالة الغبار من الأسقف والجدران",
];

export default function VillaCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف فلل بجدة",
      "خدمة تنظيف فلل شاملة ومتكاملة في جدة. تنظيف احترافي لجميع أجزاء الفيلا مع فريق متخصص ومعدات حديثة."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف فلل بجدة", url: `${site.url}/services/villa-cleaning-jeddah` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف فلل بجدة - خدمة شاملة لفيلتك بأكملها"
        subtitle="تنظيف فلل احترافي"
        description="استمتع بفيلا نظيفة تماماً من الداخل والخارج. فريقنا المتخصص يتولى جميع جوانب التنظيف بحرفية عالية."
        image="villa cleaning service.jpg"
        imageAlt="تنظيف فلل في جدة - شركة المثالي"
        context={{ service: "تنظيف فلل" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف فلل بجدة - لأن فيلتك تستحق عناية خاصة
            </h2>
            <p className="text-lg leading-relaxed">
              الفيلا هي أكثر من مجرد منزل - إنها مساحتك الخاصة للراحة والخصوصية، ومكان تجمع العائلة واستقبال الضيوف. الفلل في جدة، خاصة الكبيرة منها، تحتاج إلى تنظيف شامل ومتخصص يغطي كل ركن وزاوية، من الغرف الداخلية إلى الحدائق والمداخل الخارجية.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمة متكاملة لتنظيف الفلل في جدة تشمل كل شيء. فريقنا المحترف، المجهز بأحدث المعدات والمواد الآمنة، يتعامل مع فيلتك بعناية واحترام، ويضمن نظافة شاملة تدوم طويلاً. سواء كانت فيلتك صغيرة أو كبيرة، بسيطة أو فاخرة، نقدم لك نفس الجودة العالية والاهتمام بالتفاصيل.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              ما الذي يميز تنظيف الفلل؟
            </h3>

            <p className="leading-relaxed">
              تنظيف الفلل يختلف عن تنظيف الشقق أو المنازل العادية في عدة جوانب:
            </p>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li><strong>المساحة الكبيرة:</strong> الفلل عادة تحتوي على عدد أكبر من الغرف والمرافق، مما يتطلب وقتاً وجهداً أكبر.</li>
              <li><strong>المساحات الخارجية:</strong> الحدائق، الممرات، المداخل، والفناء يحتاجون تنظيفاً متخصصاً.</li>
              <li><strong>التفاصيل المعمارية:</strong> الثريات الكبيرة، الأسقف العالية، السلالم الواسعة تحتاج معدات خاصة ومهارة في التنظيف.</li>
              <li><strong>الملاحق والمجالس:</strong> كثير من الفلل تحتوي على مجالس منفصلة، ملاحق، غرف خدم، تحتاج نفس العناية.</li>
              <li><strong>التنوع في الأسطح:</strong> رخام، بلاط، باركيه، حجر طبيعي - كل سطح يحتاج تقنية تنظيف مناسبة.</li>
            </ul>

            <p className="leading-relaxed">
              لذا، تنظيف الفيلا ليس مجرد تكبير لتنظيف الشقة، بل هو عملية متخصصة تتطلب خبرة، معدات مناسبة، وفريق كافٍ لإنجاز العمل بكفاءة.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              ما الذي تشمله خدمة تنظيف الفلل؟
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
              <p className="text-lg font-semibold">
                نقدم حزمتين رئيسيتين لتنظيف الفلل:
              </p>

              <div className="space-y-4">
                <div className="rounded-lg border-r-4 border-primary bg-white p-6">
                  <h4 className="mb-3 text-xl font-bold text-gray-900">1. التنظيف العادي (الصيانة الدورية)</h4>
                  <p className="leading-relaxed">
                    مثالي للتنظيف الأسبوعي أو نصف الشهري. يشمل: كنس ومسح جميع الأرضيات، تنظيف الحمامات والمطابخ، إزالة الغبار من الأسطح، تنظيف النوافذ من الداخل، ترتيب عام، إخراج القمامة. مناسب للفلل المأهولة التي تحتاج صيانة منتظمة.
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-green-500 bg-white p-6">
                  <h4 className="mb-3 text-xl font-bold text-gray-900">2. التنظيف العميق (الشامل)</h4>
                  <p className="leading-relaxed">
                    تنظيف مكثف وشامل لكل ركن. يشمل كل ما في التنظيف العادي بالإضافة إلى: فرك البلاط والفواصل، تنظيف خلف وتحت الأجهزة، غسل النوافذ من الخارج، تنظيف الثريات، تنظيف الأسقف والجدران، تنظيف الحديقة والفناء بعمق، تنظيف الكراجات والمخازن. موصى به مرة كل 3-6 أشهر أو قبل/بعد المناسبات.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">المدة والتسعير</h2>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-bold text-gray-900">تقديرات عامة:</h4>
              <ul className="space-y-2">
                <li><strong>فيلا صغيرة (3-4 غرف):</strong> 6-8 ساعات (تنظيف عادي) | 10-12 ساعة (عميق)</li>
                <li><strong>فيلا متوسطة (5-6 غرف):</strong> 8-10 ساعات (عادي) | 12-16 ساعة (عميق)</li>
                <li><strong>فيلا كبيرة (7+ غرف):</strong> 10-14 ساعة (عادي) | 16-20 ساعة (عميق) - يمكن تقسيمها على يومين</li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة تعتمد على حجم الفيلا، حالتها، وجود حديقة، وعدد الملاحق.
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> مساحة الفيلا، عدد الغرف والحمامات، وجود حديقة أو مسبح، نوع التنظيف (عادي أم عميق)، التكرار (خدمة واحدة أم عقد دوري).
            </p>

            <p className="text-lg font-semibold text-primary">
              للحصول على عرض سعر دقيق ومخصص لفيلتك، تواصل معنا الآن!
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف فلل" }} />
      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/services/deep-cleaning" className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold text-gray-900">التنظيف العميق</h3>
                <p className="text-gray-600">تنظيف شامل ومكثف</p>
              </Link>
              <Link href="/services/pool-cleaning" className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المسابح</h3>
                <p className="text-gray-600">للفلل التي تحتوي على مسبح</p>
              </Link>
              <Link href="/services/marble-polishing" className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md">
                <h3 className="mb-2 text-xl font-bold text-gray-900">جلي الرخام</h3>
                <p className="text-gray-600">للأرضيات الرخامية في الفلل</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


