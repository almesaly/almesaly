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
  title: "التنظيف العميق بجدة | تنظيف شامل ومكثف",
  description:
    "خدمة التنظيف العميق في جدة - تنظيف شامل ومكثف يصل إلى كل زاوية. مثالي قبل المناسبات وبعد التجديد. فريق متخصص ومعدات حديثة.",
  alternates: {
    canonical: `${site.url}/services/deep-cleaning`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "التنظيف العميق", url: "/services/deep-cleaning" },
];

const faqs = [
  {
    question: "ما الفرق بين التنظيف العادي والتنظيف العميق؟",
    answer:
      "التنظيف العادي يشمل الأعمال اليومية والسطحية: كنس، مسح، تنظيف المرئي من الأسطح. أما التنظيف العميق فهو عملية شاملة ومكثفة تشمل: فرك البلاط والفواصل، تنظيف خلف الأجهزة وتحتها، غسل الستائر، تنظيف النوافذ من الداخل والخارج، تلميع الأثاث، تنظيف الأسقف والجدران، الوصول إلى الأماكن الصعبة والخفية، تعقيم شامل. نوصي بإجراء تنظيف عميق مرة كل 3-6 أشهر للحفاظ على مستوى عالٍ من النظافة.",
  },
  {
    question: "كم يستغرق التنظيف العميق للمنزل؟",
    answer:
      "التنظيف العميق يحتاج وقتاً أطول من التنظيف العادي. شقة من غرفتين تحتاج حوالي 5-6 ساعات، منزل متوسط (3-4 غرف) يحتاج 8-10 ساعات، فيلا كبيرة قد تحتاج يوم كامل أو يومين. المدة تعتمد على حجم المكان، حالته، ومستوى التنظيف المطلوب. يمكننا تقسيم العمل على عدة أيام إذا كنت تفضل ذلك.",
  },
  {
    question: "هل التنظيف العميق يشمل تنظيف المفروشات؟",
    answer:
      "التنظيف العميق الأساسي يشمل تنظيف الأسطح الصلبة، الأرضيات، الجدران، النوافذ، والأجهزة. تنظيف المفروشات (كنب، سجاد، ستائر، مراتب) بالبخار هو خدمة إضافية مخصصة تحتاج معدات خاصة ووقت إضافي. يمكنك إضافتها إلى باقة التنظيف العميق بسعر مخفض، أو طلبها بشكل منفصل.",
  },
  {
    question: "متى يجب أن أحجز خدمة التنظيف العميق؟",
    answer:
      "نوصي بالتنظيف العميق في هذه الحالات: قبل رمضان أو العيد أو مناسبة خاصة، بعد الانتقال إلى منزل جديد أو قبل المغادرة، بعد أعمال تجديد أو تشطيب، كل 3-6 أشهر كصيانة دورية، عند تراكم أوساخ عنيدة لم يزيلها التنظيف العادي، قبل تأجير أو بيع العقار، بعد فترة طويلة من عدم التنظيف.",
  },
  {
    question: "هل تنظفون خلف الأجهزة الكبيرة مثل الثلاجة والغسالة؟",
    answer:
      "نعم! هذا من أهم ما يميز التنظيف العميق. نقوم بتحريك الأجهزة الكبيرة (الثلاجة، الغسالة، الفرن) وتنظيف خلفها وتحتها حيث تتراكم الأتربة والشحوم. نتعامل مع الأجهزة بحذر شديد لتجنب أي تلف، ونعيدها إلى مكانها بعد التنظيف.",
  },
  {
    question: "هل التنظيف العميق يتضمن تنظيف النوافذ من الخارج؟",
    answer:
      "نعم، التنظيف العميق يشمل تنظيف النوافذ من الداخل والخارج للطوابق الأرضية والأول. للطوابق الأعلى، نقدم خدمة تنظيف النوافذ والواجهات العالية كخدمة منفصلة بمعدات وفريق متخصص للسلامة.",
  },
  {
    question: "ما هي المواد التي تستخدمونها في التنظيف العميق؟",
    answer:
      "نستخدم مجموعة متنوعة من المواد المتخصصة حسب نوع السطح: منظفات إزالة الشحوم للمطابخ، منظفات مضادة للبكتيريا للحمامات، ملمعات للأسطح الخشبية والمعدنية، منظفات للزجاج، ومطهرات للأرضيات. جميع موادنا عالية الجودة، آمنة، ومعتمدة. نوفر أيضاً خيارات عضوية وصديقة للبيئة.",
  },
  {
    question: "هل يمكنني البقاء في المنزل أثناء التنظيف العميق؟",
    answer:
      "نعم، لكن نظراً لأن التنظيف العميق عملية مكثفة وقد يتطلب تحريك أثاث، يفضل بعض العملاء المغادرة. إذا بقيت، يمكنك الاسترخاء في غرفة بعيدة عن منطقة العمل. فريقنا محترف ويعمل بكفاءة دون إزعاج. سنخطرك عندما ننتهي من كل منطقة.",
  },
];

const services = [
  "تنظيف مكثف لجميع الأرضيات (بلاط، رخام، باركيه)",
  "فرك البلاط والفواصل بعمق",
  "تنظيف الأسقف والجدران من الغبار والبقع",
  "تنظيف خلف وتحت الأجهزة الكبيرة",
  "غسيل النوافذ من الداخل والخارج",
  "تنظيف الإطارات والأبواب بالتفصيل",
  "تلميع الأثاث الخشبي والمعدني",
  "تنظيف الثريات والأنوار",
  "تعقيم شامل للمطابخ والحمامات",
  "تنظيف داخل الخزائن والأدراج (عند الطلب)",
  "إزالة البقع العنيدة من الجدران والأرضيات",
  "تنظيف المكيفات من الخارج والفلاتر",
];

export default function DeepCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "التنظيف العميق بجدة",
      "خدمة تنظيف عميق شاملة ومكثفة في جدة. تنظيف يصل إلى كل زاوية وسطح بأحدث المعدات والمواد الفعالة."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "التنظيف العميق", url: `${site.url}/services/deep-cleaning` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="التنظيف العميق بجدة - نظافة شاملة تصل إلى كل زاوية"
        subtitle="التنظيف العميق"
        description="خدمة تنظيف عميق متخصصة تتجاوز السطح لتصل إلى أعمق الأماكن والزوايا. مثالية قبل المناسبات، بعد التجديد، أو كصيانة دورية."
        image="deep cleaning service.jpg"
        imageAlt="التنظيف العميق في جدة - شركة المثالي"
        context={{ service: "التنظيف العميق" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              التنظيف العميق في جدة - تنظيف شامل يحدث فرقاً حقيقياً
            </h2>
            <p className="text-lg leading-relaxed">
              التنظيف اليومي أو الأسبوعي العادي ضروري، لكنه يركز على الأسطح المرئية والمناطق
              الواضحة. لكن مع مرور الوقت، تتراكم الأوساخ والشحوم في الأماكن الخفية - خلف الأجهزة،
              في فواصل البلاط، على الأسقف، خلف الأثاث، وفي الزوايا الصعبة الوصول. هذه الأوساخ
              المتراكمة لا تؤثر فقط على مظهر المكان، بل يمكن أن تسبب روائح، تجذب الحشرات، وتؤثر على
              جودة الهواء وصحة ساكني المنزل.
            </p>

            <p className="leading-relaxed">
              هنا يأتي دور <strong>التنظيف العميق</strong>. في <strong>شركة المثالي</strong>، نقدم
              خدمة تنظيف عميق شاملة في جدة تتجاوز بكثير التنظيف السطحي. فريقنا المتخصص، مجهز بأحدث
              المعدات والمواد الفعالة، يقوم بعملية تنظيف مكثفة ومنهجية تصل إلى كل ركن وسطح في
              منزلك، ليعيد له نضارته وبريقه كأنه جديد.
            </p>

            <p className="leading-relaxed">
              خدمة التنظيف العميق مثالية في عدة مناسبات: قبل رمضان أو العيد لاستقبال الضيوف بمنزل
              مثالي، بعد الانتقال إلى منزل جديد أو قبل تسليم منزلك القديم، بعد أعمال تجديد أو تشطيب
              لإزالة آثار البناء، أو ببساطة كصيانة دورية (نوصي بها كل 3-6 أشهر) للحفاظ على مستوى
              عالٍ ومستمر من النظافة والصحة.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              ما الذي يميز التنظيف العميق عن التنظيف العادي؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">1. الشمولية والعمق</h4>
                <p className="leading-relaxed">
                  بينما يركز التنظيف العادي على الأسطح المرئية والمناطق الواضحة، فإن التنظيف العميق
                  لا يترك أي مكان دون تنظيف. نصل إلى:
                </p>
                <ul className="mt-2 list-inside list-disc space-y-1 pr-6">
                  <li>خلف وتحت جميع الأجهزة الكبيرة (ثلاجة، غسالة، فرن)</li>
                  <li>فواصل البلاط في الأرضيات والجدران</li>
                  <li>الأسقف والزوايا العلوية</li>
                  <li>خلف الأثاث الثقيل</li>
                  <li>داخل النوافذ والأبواب وإطاراتها</li>
                  <li>الثريات والأضواء العالية</li>
                  <li>المناطق المخفية في المطبخ والحمامات</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">2. تقنيات ومواد متخصصة</h4>
                <p className="leading-relaxed">
                  نستخدم معدات ومواد تنظيف متخصصة لا تُستخدم في التنظيف العادي: ماكينات فرك
                  الأرضيات، أجهزة بخار عالية الضغط لإزالة الشحوم والبقع العنيدة، منظفات إزالة
                  الترسبات من فواصل البلاط، ملمعات احترافية للأسطح المختلفة، ومواد تعقيم قوية
                  وفعالة.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">3. الوقت والجهد المكثف</h4>
                <p className="leading-relaxed">
                  التنظيف العميق يستغرق وقتاً أطول بكثير (قد يصل إلى 2-3 أضعاف التنظيف العادي) لأنه
                  يتطلب فرك مكثف، تلميع دقيق، وانتباه للتفاصيل الصغيرة. هذا ليس مجرد تنظيف سريع، بل
                  عملية شاملة تُعيد المكان إلى أفضل حالاته.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">4. النتيجة الملموسة</h4>
                <p className="leading-relaxed">
                  بعد التنظيف العميق، ستلاحظ الفرق الكبير فوراً: أرضيات تلمع، فواصل بلاط نظيفة
                  وبيضاء، أسطح لامعة، رائحة منعشة في كل مكان، وإحساس بأن منزلك أصبح جديداً. إنها
                  تجربة تنظيف حقيقية تستحق الاستثمار فيها.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              ما الذي تشمله خدمة التنظيف العميق؟
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
              <h3 className="text-2xl font-bold text-gray-900">
                نطاق العمل التفصيلي في كل منطقة:
              </h3>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">المطبخ:</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>تنظيف عميق داخل الفرن والشوايات من الشحوم المتراكمة</li>
                  <li>تنظيف وإزالة الدهون من فوق الخزائن</li>
                  <li>فرك البلاط والفواصل خلف الموقد</li>
                  <li>تنظيف خلف وتحت الثلاجة والأجهزة</li>
                  <li>تنظيف داخل الخزائن والأدراج (بناءً على طلبك)</li>
                  <li>تلميع الأسطح المعدنية والحنفيات</li>
                  <li>تنظيف شفاط المطبخ والفلاتر</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">الحمامات:</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>فرك عميق لفواصل البلاط لإزالة العفن والترسبات</li>
                  <li>إزالة الترسبات الجيرية من الحنفيات والشاور</li>
                  <li>تنظيف عميق خلف المرحاض وحوله</li>
                  <li>تلميع المرايا والزجاج</li>
                  <li>تنظيف فتحات التهوية</li>
                  <li>تعقيم شامل لجميع الأسطح</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">غرف النوم والصالات:</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>تحريك الأثاث الخفيف وتنظيف خلفه وتحته</li>
                  <li>تنظيف الأسقف من خيوط العنكبوت والغبار</li>
                  <li>مسح الجدران من البقع والعلامات</li>
                  <li>تلميع الأثاث الخشبي بمواد احترافية</li>
                  <li>تنظيف الإطارات والأبواب من جميع الجوانب</li>
                  <li>غسل النوافذ من الداخل والخارج</li>
                  <li>تنظيف مفاتيح الكهرباء والمقابض</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">الأرضيات:</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>فرك مكثف للبلاط والرخام</li>
                  <li>تنظيف وتبييض فواصل البلاط</li>
                  <li>تلميع الرخام والجرانيت</li>
                  <li>تنظيف عميق للباركيه والأرضيات الخشبية</li>
                  <li>تنظيف الزوايا والحواف</li>
                </ul>
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

            <p className="leading-relaxed">
              التنظيف العميق يحتاج وقتاً وجهداً أكبر من التنظيف العادي، وبالتالي السعر يكون أعلى. لكن
              القيمة التي تحصل عليها تستحق الاستثمار - منزل نظيف تماماً، صحي، ومنعش.
            </p>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-bold text-gray-900">تقديرات عامة:</h4>
              <ul className="space-y-2">
                <li>
                  <strong>شقة صغيرة (غرفتين):</strong> 5-6 ساعات
                </li>
                <li>
                  <strong>منزل متوسط (3-4 غرف):</strong> 8-10 ساعات
                </li>
                <li>
                  <strong>فيلا كبيرة (5+ غرف):</strong> 12-16 ساعة (يمكن تقسيمها على يومين)
                </li>
              </ul>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> حجم المكان، عدد الغرف والحمامات، مستوى الأوساخ
              المتراكمة، خدمات إضافية (تنظيف مفروشات، خزائن من الداخل، إلخ).
            </p>

            <p className="leading-relaxed">
              للحصول على عرض سعر دقيق، تواصل معنا وصف منزلك بالتفصيل، أو احجز معاينة مجانية
              وسنقدم لك تقديراً دقيقاً.
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              نصائح قبل وبعد التنظيف العميق
            </h2>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">قبل التنظيف:</h3>
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>رتّب الأغراض الشخصية والمتناثرة</li>
                <li>أفرغ محتويات الخزائن إذا كنت تريد تنظيفها من الداخل</li>
                <li>أزل الأغراض الثمينة من الرفوف العالية</li>
                <li>أخبرنا بأي أسطح حساسة أو أثاث قديم يحتاج عناية خاصة</li>
                <li>تأكد من توفر الماء والكهرباء</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">بعد التنظيف:</h3>
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>دع الأرضيات تجف تماماً قبل المشي عليها (خاصة الرخام المُلمّع)</li>
                <li>تهوية المكان لعدة ساعات</li>
                <li>حافظ على النتائج بتنظيف دوري منتظم بعد ذلك</li>
                <li>نوصي بتكرار التنظيف العميق كل 3-6 أشهر</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">الضمان والسلامة</h2>
            <p className="leading-relaxed">
              نقدم ضمان رضا العميل 100%. إذا لم تكن راضياً عن أي جزء، سنعيد تنظيفه دون رسوم
              إضافية. نحن مؤمّنون بالكامل ونلتزم بأعلى معايير السلامة أثناء التعامل مع الأثاث
              والأجهزة.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "التنظيف العميق" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/post-construction"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف ما بعد البناء</h3>
                <p className="text-gray-600">إزالة مخلفات البناء والتشطيب</p>
              </Link>
              <Link
                href="/services/disinfection"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التعقيم والتطهير</h3>
                <p className="text-gray-600">خدمات تعقيم شاملة ومعتمدة</p>
              </Link>
              <Link
                href="/services/marble-polishing"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">جلي وتلميع الرخام</h3>
                <p className="text-gray-600">استعادة بريق ولمعان الرخام</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



