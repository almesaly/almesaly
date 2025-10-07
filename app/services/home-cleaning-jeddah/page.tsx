import { Metadata } from "next";
import Image from "next/image";
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
  title: "تنظيف منازل بجدة | فريق مختص وضمان",
  description:
    "خدمة تنظيف منازل شاملة في جدة. تنظيف احترافي لجميع الغرف والمرافق بأفضل المعدات والمواد الآمنة. فريق مدرب وأسعار منافسة.",
  alternates: {
    canonical: `${site.url}/services/home-cleaning-jeddah`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف منازل بجدة", url: "/services/home-cleaning-jeddah" },
];

const faqs = [
  {
    question: "كم تستغرق خدمة تنظيف المنزل؟",
    answer:
      "تعتمد المدة على حجم المنزل ونوع الخدمة. منزل صغير (شقة غرفتين) يستغرق عادة 3-4 ساعات للتنظيف الشامل، بينما منزل متوسط (4-5 غرف) قد يحتاج 5-7 ساعات. التنظيف العميق يحتاج وقتاً أطول. نقدم تقديراً دقيقاً للوقت بعد معاينة المكان أو بناءً على وصفك للمنزل عبر الهاتف.",
  },
  {
    question: "هل أحتاج لتوفير أدوات التنظيف والمواد؟",
    answer:
      "لا حاجة لذلك! فريقنا يأتي مجهزاً بالكامل بأحدث معدات التنظيف وجميع المواد اللازمة. نستخدم منتجات عالية الجودة، آمنة ومطابقة للمعايير الصحية. إذا كان لديك تفضيل لاستخدام منتجات معينة، يمكننا بالتأكيد استخدامها.",
  },
  {
    question: "هل يمكنني البقاء في المنزل أثناء التنظيف؟",
    answer:
      "بالطبع! يمكنك البقاء في المنزل أو المغادرة حسب راحتك. العديد من عملائنا يفضلون البقاء خاصة في المرة الأولى لإعطاء تعليمات محددة. فريقنا محترف ومدرب على العمل بهدوء وكفاءة دون إزعاج.",
  },
  {
    question: "هل تنظفون الأماكن الصعبة مثل خلف الأجهزة والأسقف؟",
    answer:
      "نعم! في خدمة التنظيف الشامل، نصل إلى جميع الأماكن بما في ذلك خلف الأثاث والأجهزة، الأسقف والزوايا العالية، تحت الأسرّة، والأماكن الضيقة. نستخدم أدوات خاصة للوصول إلى الأماكن الصعبة وضمان نظافة كاملة.",
  },
  {
    question: "ماذا يشمل تنظيف المطبخ والحمامات؟",
    answer:
      "تنظيف المطبخ يشمل: الأفران والمواقد، الثلاجة (من الخارج والداخل بناءً على طلبك)، الميكروويف، الحوض، الخزائن من الخارج، الأرضيات والجدران، تلميع الأسطح. الحمامات تشمل: تنظيف وتعقيم المراحيض، الأحواض، البانيو أو الشاور، المرايا، تلميع الحنفيات، فرك البلاط والفواصل، الأرضيات.",
  },
  {
    question: "هل تقدمون خدمة تنظيف دورية؟",
    answer:
      "نعم، نقدم عقود تنظيف دورية (أسبوعية، نصف شهرية، أو شهرية) بأسعار مخفضة تصل إلى 20%. الميزة الإضافية هي أنك ستحصل على نفس الفريق في كل مرة، مما يعني فهم أفضل لاحتياجاتك وتفضيلاتك، وسرعة أكبر في الإنجاز.",
  },
  {
    question: "هل خدمتكم مؤمّنة ضد الأضرار؟",
    answer:
      "نعم، نحن مؤمّنون بالكامل ومرخصون رسمياً. على الرغم من أن فريقنا محترف ونادراً ما تحدث حوادث، فإن تأميننا يغطي أي أضرار محتملة قد تحدث أثناء العمل. راحة بالك وأمان ممتلكاتك هما أولويتنا.",
  },
  {
    question: "كيف يمكنني الحجز وما هي المعلومات التي تحتاجونها؟",
    answer:
      "الحجز سهل جداً! اتصل بنا مباشرة، أو عبر واتساب، أو املأ نموذج الطلب على الموقع. سنحتاج منك: عدد الغرف، عدد الحمامات، نوع التنظيف المطلوب (عادي أم عميق)، الموعد والوقت المفضل، الحي. يمكننا أيضاً ترتيب معاينة مجانية للمنازل الكبيرة.",
  },
];

const services = [
  "تنظيف جميع الغرف والممرات",
  "تنظيف وتعقيم المطابخ والحمامات",
  "مسح وتلميع الأرضيات بجميع أنواعها",
  "تنظيف النوافذ والأبواب",
  "إزالة الغبار من الأسطح والأثاث",
  "تنظيف الأسقف والجدران",
  "تنظيف خلف الأجهزة والأثاث",
  "تعقيم المقابض والأسطح الملامسة",
];

export default function HomeCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف منازل بجدة",
      "خدمة تنظيف منازل شاملة واحترافية في جدة. نقدم تنظيف متكامل لجميع الغرف والمرافق بأفضل المعدات والمواد الآمنة."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف منازل بجدة", url: `${site.url}/services/home-cleaning-jeddah` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف منازل بجدة - خدمة شاملة ومضمونة"
        subtitle="تنظيف منازل احترافي"
        description="استمتع بمنزل نظيف ومرتب دون عناء. فريقنا المحترف يقدم خدمة تنظيف منازل شاملة في جدة بأعلى معايير الجودة والأمان."
        image="home cleaning Jeddah.jpg"
        imageAlt="تنظيف منازل بجدة - شركة المثالي"
        context={{ service: "تنظيف منازل" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف منازل بجدة - لأن منزلك يستحق الأفضل
            </h2>
            <p className="text-lg leading-relaxed">
              منزلك هو المكان الذي تقضي فيه أجمل لحظاتك مع عائلتك، حيث تسترخي بعد يوم طويل، وحيث
              تصنع ذكرياتك الثمينة. لذا يستحق أن يكون نظيفاً، صحياً، ومريحاً دائماً. في{" "}
              <strong>شركة المثالي</strong>، نفهم قيمة منزلك بالنسبة لك، ونقدم خدمة{" "}
              <strong>تنظيف منازل بجدة</strong> تتجاوز مجرد إزالة الأتربة - نحن نهتم بكل التفاصيل
              لنمنحك بيئة نظيفة تماماً وصحية لك ولعائلتك.
            </p>

            <p className="leading-relaxed">
              مع أكثر من 10 سنوات من الخبرة في خدمة آلاف الأسر في جدة، أصبحنا الخيار الأول للعائلات
              التي تبحث عن تنظيف احترافي وموثوق. نقدم خدمات تنظيف مرنة تناسب جدولك الزمني وميزانيتك
              - سواء كنت تحتاج تنظيفاً دورياً أسبوعياً، أو تنظيفاً شاملاً قبل مناسبة خاصة، أو تنظيفاً
              عميقاً بعد الانتقال أو التجديد.
            </p>

            <div className="relative my-8 h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/professional cleaners.jpg"
                alt="فريق تنظيف منازل محترف في جدة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا تختار شركة المثالي لتنظيف منزلك في جدة؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. فريق محترف ومدرب بأعلى المعايير
                </h4>
                <p className="leading-relaxed">
                  جميع أفراد فريقنا يخضعون لتدريب مكثف على أحدث تقنيات التنظيف، ويحملون شهادات معتمدة
                  في السلامة والصحة المهنية. نختار فريقنا بعناية ونجري فحوصات أمنية شاملة لضمان أنك
                  تستقبل أشخاص موثوقين في منزلك. كما يلتزم فريقنا بمعايير صارمة من الاحترافية والسلوك
                  الأخلاقي، ويرتدون زياً موحداً ويحملون بطاقات تعريف رسمية.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. مواد تنظيف آمنة لك ولعائلتك
                </h4>
                <p className="leading-relaxed">
                  صحتك وصحة أطفالك هي أولويتنا القصوى. لذا نستخدم منتجات تنظيف عالية الجودة، مطابقة
                  للمواصفات الصحية السعودية، وآمنة تماماً للأطفال والحيوانات الأليفة. نوفر أيضاً خيارات
                  منتجات عضوية وصديقة للبيئة 100% لمن يفضل ذلك. جميع موادنا معتمدة ومختبرة، ولا تترك
                  أي روائح كيميائية قوية أو بقايا ضارة.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. معدات حديثة وتقنيات متقدمة
                </h4>
                <p className="leading-relaxed">
                  نستثمر باستمرار في أحدث معدات التنظيف لنضمن لك أفضل النتائج. من المكانس الكهربائية
                  عالية الكفاءة مع فلاتر HEPA التي تزيل حتى أصغر جزيئات الغبار والحساسية، إلى ماكينات
                  البخار التي تعقم الأسطح بعمق دون استخدام مواد كيميائية قاسية، وأدوات متخصصة للوصول إلى
                  الأماكن الصعبة والزوايا الضيقة.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. مرونة تامة في المواعيد والخدمات
                </h4>
                <p className="leading-relaxed">
                  نعلم أن لكل عائلة جدولها الخاص. لذا نوفر جدولة مرنة تناسب وقتك - صباحاً، ظهراً، مساءً،
                  أو حتى في عطلات نهاية الأسبوع. يمكنك أيضاً اختيار الخدمات التي تحتاجها بالضبط - تنظيف
                  شامل، أو تنظيف سريع، أو التركيز على مناطق معينة مثل المطبخ والحمامات فقط.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  5. أسعار شفافة ومنافسة
                </h4>
                <p className="leading-relaxed">
                  نؤمن بالشفافية الكاملة. نقدم لك عرض سعر واضح ومفصل قبل البدء، بدون تكاليف خفية أو
                  مفاجآت. أسعارنا تنافسية وعادلة، مع خصومات خاصة للعقود الدورية والخدمات الشاملة. نقدم
                  أيضاً ضمان استرداد الأموال إذا لم تكن راضياً تماماً عن خدمتنا (وهو أمر نادر الحدوث!).
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
              ما الذي تشمله خدمة تنظيف المنازل؟
            </h2>
            <p className="mb-8 text-center text-lg text-gray-700">
              نقدم خدمة تنظيف شاملة تغطي كل ركن من أركان منزلك
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6 text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900">تفاصيل نطاق العمل:</h3>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  تنظيف غرف النوم والصالات:
                </h4>
                <p className="leading-relaxed">
                  إزالة الغبار من جميع الأسطح (الطاولات، الرفوف، التحف)، تنظيف المرايا والنوافذ،
                  تنظيف الأرضيات بالمكنسة الكهربائية ثم المسح، ترتيب الوسائد والفراش، تنظيف خلف
                  الأثاث وتحت الأسرّة، تنظيف مفاتيح الإضاءة والمقابض.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">تنظيف المطبخ:</h4>
                <p className="leading-relaxed">
                  تنظيف وتلميع الأسطح والطاولات، تنظيف الموقد والفرن (من الخارج والداخل)، تنظيف
                  الميكروويف، مسح الخزائن من الخارج، تنظيف الحوض والحنفيات وتلميعها، تنظيف الثلاجة من
                  الخارج (ومن الداخل بناءً على الطلب)، مسح الجدران والبلاط، تنظيف الأرضيات بعمق، إخراج
                  القمامة وتنظيف السلة.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">تنظيف الحمامات:</h4>
                <p className="leading-relaxed">
                  تنظيف وتعقيم المراحيض، الأحواض، البانيو أو كابينة الشاور، فرك البلاط والفواصل لإزالة
                  الترسبات، تلميع الحنفيات والمرايا، تنظيف الأرضيات بعمق، تعقيم جميع الأسطح الملامسة،
                  إعادة ترتيب أدوات الحمام.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  تنظيف الممرات والمداخل:
                </h4>
                <p className="leading-relaxed">
                  تنظيف الأرضيات، إزالة الغبار من الجدران والأسقف، تنظيف الأبواب والمقابض، تنظيف
                  السلالم (إن وجدت)، ترتيب منطقة المدخل.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              المدة والتسعير - عوامل واضحة وشفافة
            </h2>

            <p className="leading-relaxed">
              نؤمن بالشفافية الكاملة في التسعير. تعتمد تكلفة تنظيف منزلك على عدة عوامل واضحة:
            </p>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>
                <strong>حجم المنزل:</strong> عدد الغرف، الحمامات، والمساحة الإجمالية.
              </li>
              <li>
                <strong>نوع التنظيف:</strong> تنظيف عادي/صيانة، أو تنظيف عميق شامل.
              </li>
              <li>
                <strong>حالة المنزل:</strong> مستوى النظافة الحالي والأوساخ المتراكمة.
              </li>
              <li>
                <strong>خدمات إضافية:</strong> مثل تنظيف النوافذ من الخارج، تنظيف المفروشات، الستائر،
                إلخ.
              </li>
              <li>
                <strong>تكرار الخدمة:</strong> خدمة لمرة واحدة أو عقد دوري (العقود الدورية تحصل على
                خصومات تصل إلى 20%).
              </li>
            </ul>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-bold text-gray-900">تقديرات عامة للمدة:</h4>
              <ul className="space-y-2">
                <li>
                  <strong>شقة صغيرة (غرفتين + حمام):</strong> 3-4 ساعات
                </li>
                <li>
                  <strong>منزل متوسط (3-4 غرف + 2 حمام):</strong> 5-6 ساعات
                </li>
                <li>
                  <strong>منزل كبير (5+ غرف + 3+ حمامات):</strong> 7-9 ساعات
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة قد تزيد في حالة التنظيف العميق أو إذا كان المنزل يحتاج تنظيفاً مكثفاً.
              </p>
            </div>

            <p className="leading-relaxed">
              للحصول على عرض سعر دقيق ومخصص لمنزلك، تواصل معنا عبر الهاتف أو واتساب، أو احجز معاينة
              مجانية وسنقدم لك تقديراً مفصلاً للتكلفة والوقت.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف منازل" }} />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              نصائح قبل وبعد خدمة تنظيف المنزل
            </h2>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">قبل التنظيف:</h3>
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>رتّب الأغراض الشخصية والمتناثرة لتسهيل عمل فريق التنظيف.</li>
                <li>أبعد الأشياء الثمينة أو القابلة للكسر بسهولة إلى مكان آمن.</li>
                <li>أخبرنا بأي مناطق تحتاج اهتمام خاص أو أي أسطح حساسة تحتاج معاملة خاصة.</li>
                <li>
                  إذا كان لديك حيوانات أليفة، من الأفضل إبقائها في غرفة منفصلة أثناء التنظيف لسلامتها
                  وراحة الفريق.
                </li>
                <li>تأكد من وجود مصدر ماء وكهرباء متاح.</li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900">بعد التنظيف:</h3>
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>تفحّص جميع المناطق وتأكد من رضاك التام عن النتيجة.</li>
                <li>إذا لاحظت أي منطقة تحتاج إعادة تنظيف، أخبرنا فوراً وسنصلحها على الفور.</li>
                <li>حافظ على النظافة بترتيب الأغراض يومياً والمسح السريع للأسطح.</li>
                <li>للحفاظ على نتائج التنظيف أطول فترة، نوصي بتنظيف دوري منتظم.</li>
                <li>
                  استخدم ممسحة الأقدام عند المداخل لتقليل دخول الأتربة والغبار من الخارج، خاصة في جدة.
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">الضمان ومعايير السلامة</h2>

            <p className="leading-relaxed">
              <strong>ضمان رضا العميل 100%:</strong> نحن واثقون تماماً من جودة عملنا. إذا لم تكن
              راضياً عن أي جزء من الخدمة، اتصل بنا خلال 24 ساعة وسنعيد تنظيف المناطق المعنية دون أي
              رسوم إضافية.
            </p>

            <p className="leading-relaxed">
              <strong>التأمين والترخيص:</strong> شركة المثالي مرخصة رسمياً ومؤمّنة بالكامل ضد أي
              أضرار قد تحدث أثناء العمل. يمكنك الاطمئنان إلى أن ممتلكاتك في أيدٍ أمينة.
            </p>

            <p className="leading-relaxed">
              <strong>معايير السلامة والصحة:</strong> نلتزم بأعلى معايير السلامة والصحة المهنية.
              فريقنا مدرب على إجراءات السلامة، ونستخدم معدات حماية عند الضرورة. جميع موادنا آمنة
              ومعتمدة، ونتبع بروتوكولات صارمة للتعقيم خاصة في الأوقات التي تتطلب حذراً إضافياً.
            </p>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              خدمات مرتبطة قد تهمك
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/deep-cleaning"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التنظيف العميق</h3>
                <p className="text-gray-600">تنظيف شامل ومكثف لجميع الأسطح والزوايا</p>
              </Link>
              <Link
                href="/services/upholstery-sofa"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف الكنب</h3>
                <p className="text-gray-600">تنظيف عميق بالبخار للمفروشات</p>
              </Link>
              <Link
                href="/services/disinfection"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التعقيم والتطهير</h3>
                <p className="text-gray-600">خدمات تعقيم شاملة ومعتمدة</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



