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
import { CheckCircle, Wind, Zap, Droplets, ThermometerSun } from "lucide-react";

export const metadata: Metadata = {
  title: "تنظيف المكيفات بجدة | فلاتر وكويل ودكتات",
  description:
    "خدمة تنظيف المكيفات الاحترافية في جدة. تنظيف الفلاتر، الكويل، والدكتات لتحسين جودة الهواء، زيادة الكفاءة، وتوفير الكهرباء. فريق مختص ومعدات حديثة.",
  alternates: {
    canonical: `${site.url}/services/ac-cleaning`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف المكيفات", url: "/services/ac-cleaning" },
];

const faqs = [
  {
    question: "كم مرة يجب تنظيف المكيف احترافياً؟",
    answer:
      "يعتمد على الاستخدام والبيئة. في جدة حيث الأتربة والرمال كثيرة والاستخدام مكثف طوال السنة، ننصح بتنظيف الفلاتر شهرياً (يمكنك القيام بذلك بنفسك)، وتنظيف الكويل والدكتات احترافياً كل 3-6 أشهر. للمكاتب والمنشآت التجارية ذات الاستخدام المكثف، كل 2-3 أشهر. إذا لاحظت ضعف التبريد، رائحة كريهة، أو ارتفاع فاتورة الكهرباء، فقد حان وقت التنظيف حتى لو لم يمر الوقت المعتاد.",
  },
  {
    question: "هل التنظيف فعلاً يحسن التبريد ويوفر الكهرباء؟",
    answer:
      "نعم بالتأكيد! المكيف المتسخ يعمل بجهد أكبر ووقت أطول للوصول إلى درجة الحرارة المطلوبة، مما يستهلك كهرباء أكثر بنسبة تصل إلى 20-30%. الفلاتر المسدودة بالأتربة تعيق تدفق الهواء، والكويل المتسخ لا يبرد الهواء بكفاءة. بعد التنظيف، ستلاحظ فوراً: تبريد أسرع وأقوى، هواء أنقى، صوت أهدأ، واستهلاك كهرباء أقل. بعض عملائنا أبلغوا عن انخفاض فاتورة الكهرباء بنسبة 15-25% بعد تنظيف مكيفاتهم.",
  },
  {
    question: "ما الذي يشمله تنظيف المكيف؟",
    answer:
      "خدمة التنظيف الشاملة تشمل: 1) تنظيف أو استبدال الفلاتر، 2) تنظيف الكويل (المبخر) بالمواد المتخصصة لإزالة الأوساخ والعفن، 3) تنظيف المروحة وزعانفها، 4) تنظيف مجرى التصريف لمنع انسداده، 5) تنظيف الوحدة الخارجية (الكومبريسور) إذا كانت متسخة، 6) تنظيف الدكتات (القنوات الهوائية) في حالة المكيفات المركزية، 7) فحص غاز الفريون ومستوى التبريد، 8) فحص عمل المكيف والتأكد من كفاءته. نستخدم منظفات احترافية آمنة ومعدات متخصصة.",
  },
  {
    question: "كم يستغرق تنظيف المكيف؟",
    answer:
      "المكيف الواحد (السبليت العادي) يستغرق تنظيفه 30-45 دقيقة تقريباً. المكيف المركزي أو الكاست يحتاج 60-90 دقيقة. إذا كانت الدكتات تحتاج تنظيفاً عميقاً (للمكيف المركزي)، قد يحتاج نصف يوم أو أكثر حسب حجم النظام. نعمل بكفاءة وسرعة دون التأثير على جودة العمل.",
  },
  {
    question: "هل تنظيف المكيف يتطلب فك الوحدة؟",
    answer:
      "في معظم الحالات، لا نحتاج لفك المكيف كلياً. نفتح الغطاء الأمامي ونصل إلى الفلاتر والكويل ونظفها في مكانها. لكن في حالات التنظيف العميق جداً أو إذا كان المكيف متسخاً للغاية، قد نحتاج فك بعض الأجزاء (مثل المروحة) لتنظيفها جيداً ثم إعادة تركيبها. فريقنا فنيون مدربون يتعاملون مع المكيفات باحترافية ويعيدون تركيبها بدقة.",
  },
  {
    question: "هل التنظيف يشمل فحص الأعطال والصيانة؟",
    answer:
      "نعم، أثناء التنظيف نقوم بفحص شامل للمكيف: مستوى غاز الفريون، حالة الكومبريسور، التوصيلات الكهربائية، أي تسريبات، صوت المروحة، وكفاءة التبريد. إذا لاحظنا أي مشكلة، نخبرك بها ونقترح الحل. الفحص مجاني مع خدمة التنظيف. إذا احتاج المكيف صيانة أو قطع غيار، نعطيك عرض سعر واضح قبل تنفيذ أي عمل إضافي.",
  },
  {
    question: "هل المواد المستخدمة في التنظيف آمنة؟",
    answer:
      "نعم، نستخدم منظفات متخصصة للمكيفات مصممة خصيصاً لهذا الغرض، آمنة على المعدن والبلاستيك، لا تسبب تآكل، وغير ضارة بالصحة. بعد التنظيف نشطف جيداً لإزالة أي بقايا. جميع موادنا معتمدة وآمنة على الأطفال والحيوانات الأليفة.",
  },
  {
    question: "هل تقدمون عقود صيانة دورية للمكيفات؟",
    answer:
      "نعم، نقدم عقود صيانة سنوية تشمل: تنظيف دوري (كل 3 أو 6 أشهر حسب اختيارك)، فحص شامل، إضافة غاز فريون إذا لزم، وخصومات على أي صيانة طارئة. العقود مفيدة جداً خاصة للمنشآت والشركات التي تملك عدة مكيفات. توفر راحة بال، ضمان عمل المكيفات طوال الوقت، وخصومات كبيرة على الأسعار.",
  },
];

const services = [
  "تنظيف وتعقيم الفلاتر",
  "تنظيف الكويل (المبخر) بعمق",
  "تنظيف المروحة الداخلية",
  "تنظيف مجرى التصريف",
  "تنظيف الوحدة الخارجية",
  "تنظيف الدكتات (للمكيف المركزي)",
  "فحص غاز الفريون",
  "معالجة العفن والفطريات",
];

const benefits = [
  {
    icon: ThermometerSun,
    title: "تبريد أقوى وأسرع",
    description: "مكيف نظيف يبرد الغرفة في وقت أقصر ويحافظ على درجة الحرارة بكفاءة",
  },
  {
    icon: Zap,
    title: "توفير الكهرباء",
    description: "تقليل استهلاك الطاقة بنسبة تصل إلى 20-30% وانخفاض ملحوظ في الفاتورة",
  },
  {
    icon: Wind,
    title: "هواء نقي وصحي",
    description: "إزالة الأتربة والبكتيريا والعفن من الفلاتر والكويل",
  },
  {
    icon: Droplets,
    title: "إطالة عمر المكيف",
    description: "التنظيف الدوري يمنع الأعطال ويطيل عمر الجهاز سنوات",
  },
];

export default function ACCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف المكيفات بجدة",
      "خدمة تنظيف المكيفات احترافية في جدة. تنظيف الفلاتر، الكويل، والدكتات لتحسين الكفاءة وجودة الهواء."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف المكيفات", url: `${site.url}/services/ac-cleaning` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف المكيفات بجدة - هواء نقي وتبريد أفضل"
        subtitle="تنظيف المكيفات"
        description="نظف مكيفك لتحسين جودة الهواء، زيادة الكفاءة، توفير الكهرباء، وإطالة عمر الجهاز. خدمة احترافية بأسعار منافسة."
        image="cleaning services Jeddah.jpg"
        imageAlt="تنظيف المكيفات في جدة - شركة المثالي"
        context={{ service: "تنظيف المكيفات" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف المكيفات في جدة - ضرورة وليس رفاهية
            </h2>
            <p className="text-lg leading-relaxed">
              في جدة، حيث درجات الحرارة العالية معظم أيام السنة والأتربة والرمال في الهواء، المكيف
              ليس مجرد جهاز للراحة - بل هو ضرورة للحياة اليومية. لكن مع الاستخدام المكثف والبيئة
              المليئة بالغبار، تتراكم الأوساخ بسرعة في فلاتر المكيف، الكويل، والدكتات. هذا التراكم
              لا يؤثر فقط على كفاءة التبريد، بل يحول مكيفك إلى مصدر للهواء الملوث الذي يضر بصحتك
              وصحة عائلتك.
            </p>

            <p className="leading-relaxed">
              المكيف المتسخ يعاني من عدة مشاكل: ضعف التبريد رغم تشغيله على أقصى درجة، استهلاك كهرباء
              عالٍ جداً، روائح كريهة من العفن والبكتيريا المتراكمة، صوت عالٍ ومزعج من المروحة، وتسرب
              ماء بسبب انسداد مجرى التصريف. كل هذه المشاكل يمكن تجنبها والتخلص منها بخدمة تنظيف
              احترافية منتظمة.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمة متخصصة في{" "}
              <strong>تنظيف المكيفات بجدة</strong> لجميع الأنواع: السبليت، المركزي، الكاست، الدولابي،
              والمخفي. فريقنا من الفنيين المدربين يستخدم أحدث المعدات والمواد المتخصصة لتنظيف عميق
              وشامل يعيد لمكيفك كفاءته الكاملة، يحسن جودة الهواء الذي تتنفسه، ويوفر لك مبالغ كبيرة من
              فاتورة الكهرباء.
            </p>

            <div className="relative my-8 h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/cleaning services Jeddah.jpg"
                alt="تنظيف المكيفات في جدة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا يجب عليك تنظيف مكيفك بانتظام؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. تحسين جودة الهواء وحماية الصحة
                </h4>
                <p className="leading-relaxed">
                  الفلاتر المتسخة والكويل المليء بالأتربة والعفن يضخ هواءً ملوثاً مباشرة إلى غرفتك.
                  هذا الهواء يحتوي على: أتربة وغبار دقيق، بكتيريا وفطريات، عث الغبار، وجراثيم. كل هذه
                  الملوثات تدخل رئتيك مع كل نفس، وتسبب: الحساسية، مشاكل تنفسية، الربو (خاصة عند
                  الأطفال)، التهابات الجيوب الأنفية، وضعف عام في المناعة. التنظيف الدوري يزيل هذه
                  الملوثات ويضمن لك هواءً نقياً وصحياً.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. زيادة كفاءة التبريد والراحة
                </h4>
                <p className="leading-relaxed">
                  الفلاتر المسدودة بالأتربة تعيق تدفق الهواء، مما يجبر المكيف على العمل بجهد أكبر ووقت
                  أطول للوصول إلى درجة الحرارة المطلوبة. الكويل المتسخ لا يمتص الحرارة بكفاءة، فينتج
                  هواءً أقل برودة. النتيجة: غرفة حارة رغم تشغيل المكيف طوال اليوم! بعد التنظيف، ستشعر
                  بالفرق فوراً - تبريد أسرع، أقوى، وأكثر انتظاماً. مكيفك سيصل لدرجة الحرارة المطلوبة في
                  نصف الوقت.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. توفير كبير في فاتورة الكهرباء
                </h4>
                <p className="leading-relaxed">
                  المكيف هو أكبر مستهلك للكهرباء في المنزل، خاصة في جدة حيث يعمل معظم أيام السنة.
                  المكيف المتسخ يستهلك كهرباء أكثر بنسبة 20-30% لأنه يعمل بجهد أكبر ووقت أطول. إذا
                  كانت فاتورة كهربائك 500 ريال شهرياً، فإن تنظيف مكيفاتك يمكن أن يوفر لك 100-150 ريال
                  شهرياً، أي 1200-1800 ريال سنوياً! التوفير يدفع تكلفة التنظيف عدة مرات.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. إطالة عمر المكيف وتقليل الأعطال
                </h4>
                <p className="leading-relaxed">
                  المكيف المتسخ يعمل تحت ضغط مستمر - الكومبريسور يعمل بجهد أكبر، المروحة تدور بصعوبة،
                  والنظام كله متوتر. هذا يؤدي إلى أعطال متكررة ويقصر عمر الجهاز. مكيف يمكن أن يدوم
                  10-12 سنة مع الصيانة الجيدة قد يتعطل بعد 5-6 سنوات فقط بدون تنظيف منتظم. التنظيف
                  الدوري يحافظ على المكيف يعمل بسلاسة، يمنع الأعطال المكلفة، ويطيل عمره سنوات إضافية.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  5. التخلص من الروائح الكريهة
                </h4>
                <p className="leading-relaxed">
                  هل تشعر برائحة عفنة أو كريهة عند تشغيل المكيف؟ هذه علامة على نمو العفن والبكتيريا
                  داخل الكويل ومجرى التصريف بسبب الرطوبة المتراكمة. هذه الروائح ليست فقط مزعجة، بل
                  علامة على تلوث بيولوجي خطير. التنظيف الاحترافي يزيل العفن، يعقم الكويل، ويترك مكيفك
                  ينفث هواءً نظيفاً ومنعشاً دون أي روائح.
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
              فوائد تنظيف المكيفات الاحترافي
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                ما الذي تشمله خدمة تنظيف المكيفات؟
              </h2>
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
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">خطوات عملنا في تنظيف المكيفات</h2>

            <p className="leading-relaxed">
              نتبع منهجية احترافية ومنظمة لضمان تنظيف شامل وآمن:
            </p>

            <ol className="space-y-4 pr-6">
              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">1. الفحص الأولي:</strong>
                <br />
                نفحص المكيف بالكامل: نوعه، حالته، مستوى الاتساخ، وأي أعطال ظاهرة. نتحقق من مستوى غاز
                الفريون، حالة الكومبريسور، ونشغّل المكيف للتأكد من عمله قبل التنظيف. نشرح لك خطة
                العمل والوقت المتوقع.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">2. فصل الكهرباء وتحضير المكان:</strong>
                <br />
                نفصل الكهرباء عن المكيف للسلامة. نغطي الأرضية والأثاث القريب بأغطية واقية لحمايتها من
                الماء والأوساخ. نحضر جميع المعدات والمواد اللازمة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">3. تنظيف الفلاتر:</strong>
                <br />
                نفتح الغطاء الأمامي ونخرج الفلاتر. إذا كانت قابلة للغسيل، نغسلها بالماء والصابون جيداً
                ونجففها. إذا كانت متسخة جداً أو مستهلكة، ننصح باستبدالها بفلاتر جديدة (نوفرها بسعر
                معقول). الفلاتر النظيفة ضرورية لتدفق هواء جيد وفلترة الأتربة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">4. تنظيف الكويل (المبخر):</strong>
                <br />
                هذا هو الجزء الأهم! نرش الكويل بمنظف متخصص قوي لإزالة الأتربة والشحوم. نستخدم فرشاة
                ناعمة أو جهاز بخار لتنظيف الزعانف الرقيقة بحذر دون ثنيها أو تلفها. الكويل النظيف يمتص
                الحرارة بكفاءة عالية ويبرد الهواء جيداً. نعالج أي عفن أو فطريات بمواد مضادة للميكروبات.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">5. تنظيف المروحة:</strong>
                <br />
                نظف شفرات المروحة الداخلية من الأتربة والشحوم المتراكمة. مروحة نظيفة تدفع الهواء بقوة
                وبدون صوت مزعج. إذا احتجنا فك المروحة للتنظيف العميق، نفعل ذلك بحذر ونعيد تركيبها
                بدقة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">6. تنظيف مجرى التصريف:</strong>
                <br />
                ننظف أنبوب التصريف (الدرين) لإزالة أي انسداد. الانسداد يسبب تسرب الماء من المكيف إلى
                داخل الغرفة. نستخدم منظفات خاصة أو هواء مضغوط لتنظيف المجرى. نتأكد من تصريف الماء
                بسلاسة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">7. تنظيف الوحدة الخارجية:</strong>
                <br />
                نظف الوحدة الخارجية (الكومبريسور) من الأتربة والأوراق المتراكمة. نظف الزعانف الخارجية
                (الكوندنسر) بالماء أو الهواء المضغوط. وحدة خارجية نظيفة تطرد الحرارة بكفاءة وتحافظ على
                الكومبريسور من الإجهاد.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">8. تنظيف الدكتات (للمكيف المركزي):</strong>
                <br />
                للمكيفات المركزية، نظف الدكتات (القنوات الهوائية) بمعدات متخصصة. الدكتات تتراكم فيها
                الأتربة والأوساخ بمرور الوقت. نستخدم فرش دوارة طويلة وأجهزة شفط قوية لتنظيفها من
                الداخل. هذا يحسن تدفق الهواء وجودته بشكل كبير.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">9. إعادة التركيب والاختبار:</strong>
                <br />
                نعيد تركيب جميع الأجزاء (فلاتر، غطاء، إلخ). نوصل الكهرباء ونشغّل المكيف. نفحص: قوة
                التبريد، تدفق الهواء، صوت المكيف، عدم وجود تسريبات، ومستوى غاز الفريون. نتأكد من عمل
                المكيف بكفاءة كاملة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">10. التعقيم والتعطير (اختياري):</strong>
                <br />
                نرش معقم آمن لقتل أي بكتيريا متبقية. يمكننا أيضاً إضافة معطر لطيف لرائحة منعشة. هذا
                يضمن هواءً نظيفاً وصحياً.
              </li>
            </ol>

            <p className="text-lg font-semibold text-primary">
              بعد التنظيف، ستلاحظ الفرق الكبير فوراً: هواء بارد قوي، صوت أهدأ، رائحة نظيفة، واستهلاك
              كهرباء أقل!
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">أنواع المكيفات التي نقوم بتنظيفها</h2>

            <p className="leading-relaxed">
              نقدم خدمة تنظيف احترافية لجميع أنواع المكيفات:
            </p>

            <ul className="list-inside list-disc space-y-3 pr-6">
              <li className="leading-relaxed">
                <strong>المكيف السبليت:</strong> الأكثر شيوعاً في المنازل. نظف الوحدة الداخلية والخارجية
                بعمق.
              </li>
              <li className="leading-relaxed">
                <strong>المكيف المركزي:</strong> للفلل والمباني الكبيرة. نظف الوحدة الرئيسية والدكتات
                بمعدات متخصصة.
              </li>
              <li className="leading-relaxed">
                <strong>المكيف الكاست (الكاسيت):</strong> المثبت في السقف. نصل إليه ونظفه بأمان.
              </li>
              <li className="leading-relaxed">
                <strong>المكيف الدولابي (الصحراوي):</strong> المستخدم في المساجد والقاعات. نظف الفلاتر
                والمراوح والكويل.
              </li>
              <li className="leading-relaxed">
                <strong>المكيف الشباك (الويندو):</strong> القديم لكن لا يزال مستخدماً. نفكه ونظفه بعمق
                ونعيد تركيبه.
              </li>
              <li className="leading-relaxed">
                <strong>المكيف المخفي (الكونسيلد):</strong> المدمج في السقف. نفتح الفتحات ونظفه بمهارة.
              </li>
            </ul>

            <p className="leading-relaxed">
              مهما كان نوع مكيفك، لدينا الخبرة والمعدات المناسبة لتنظيفه بكفاءة واحترافية.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">المدة والتسعير</h2>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-bold text-gray-900">تقديرات عامة للمدة:</h4>
              <ul className="space-y-2">
                <li>
                  <strong>مكيف سبليت واحد:</strong> 30-45 دقيقة
                </li>
                <li>
                  <strong>مكيف كاست أو دولابي:</strong> 60-90 دقيقة
                </li>
                <li>
                  <strong>مكيف مركزي (فحص وتنظيف أساسي):</strong> 2-3 ساعات
                </li>
                <li>
                  <strong>تنظيف الدكتات (للمكيف المركزي):</strong> 4-8 ساعات حسب حجم النظام
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة قد تزيد إذا كان المكيف متسخاً جداً أو احتاج صيانة إضافية
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> نوع المكيف، عدد المكيفات، مستوى الاتساخ، موقع المكيف
              (سهل الوصول أم صعب)، خدمات إضافية (تنظيف دكتات، إضافة فريون، صيانة، إلخ).
            </p>

            <p className="leading-relaxed">
              نقدم أسعاراً تنافسية جداً وخصومات خاصة عند تنظيف عدة مكيفات أو عقود صيانة سنوية. تواصل
              معنا الآن للحصول على عرض سعر مجاني ومخصص!
            </p>

            <h2 className="text-3xl font-bold text-gray-900">علامات تدل على أن مكيفك يحتاج تنظيفاً</h2>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>ضعف التبريد رغم ضبط المكيف على أقل درجة</li>
              <li>ارتفاع ملحوظ في فاتورة الكهرباء</li>
              <li>رائحة عفنة أو كريهة عند تشغيل المكيف</li>
              <li>تسرب ماء من الوحدة الداخلية</li>
              <li>صوت عالٍ أو غير طبيعي من المكيف</li>
              <li>خروج هواء ضعيف من فتحات المكيف</li>
              <li>تراكم جليد على الكويل أو الأنابيب</li>
              <li>مرور أكثر من 6 أشهر منذ آخر تنظيف</li>
            </ul>

            <p className="leading-relaxed">
              إذا لاحظت أياً من هذه العلامات، فقد حان وقت تنظيف مكيفك! لا تنتظر حتى يتعطل المكيف.
              التنظيف الدوري يمنع المشاكل ويوفر لك مبالغ كبيرة على المدى الطويل.
            </p>

            <h2 className="text-3xl font-bold text-gray-900">نصائح للحفاظ على نظافة المكيف</h2>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>نظف الفلاتر شهرياً (يمكنك القيام بذلك بنفسك - اغسلها بالماء وجففها)</li>
              <li>لا تشغل المكيف في غرفة مفتوحة - أغلق الأبواب والنوافذ للكفاءة</li>
              <li>ضبط المكيف على درجة معتدلة (23-25 درجة) كافٍ ويوفر الكهرباء</li>
              <li>أطفئ المكيف عند عدم الحاجة - لا تتركه يعمل طوال اليوم في غرفة فارغة</li>
              <li>تأكد من عدم وجود عوائق أمام فتحات المكيف (ستائر، أثاث)</li>
              <li>نظف الوحدة الخارجية من الأوراق والأتربة كل شهرين</li>
              <li>احجز تنظيفاً احترافياً كل 3-6 أشهر</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900">الضمان والسلامة</h2>

            <p className="leading-relaxed">
              <strong>ضمان الخدمة:</strong> نضمن جودة عملنا. إذا واجهت أي مشكلة بعد التنظيف خلال 7 أيام،
              سنعود دون رسوم إضافية لحلها. رضاك هو أولويتنا.
            </p>

            <p className="leading-relaxed">
              <strong>فنيون مدربون ومعتمدون:</strong> فريقنا يتكون من فنيين مدربين على أعلى المعايير،
              يحملون شهادات معتمدة في صيانة وتنظيف المكيفات. نتعامل مع مكيفك باحترافية وحذر.
            </p>

            <p className="leading-relaxed">
              <strong>مواد آمنة ومعتمدة:</strong> جميع المنظفات والمواد التي نستخدمها آمنة، غير سامة، ولا
              تسبب تآكل للمعدن أو البلاستيك. معتمدة من وزارة الصحة.
            </p>

            <p className="leading-relaxed">
              <strong>التأمين:</strong> شركتنا مؤمّنة بالكامل. في الحالة النادرة جداً لحدوث أي ضرر، فإن
              تأميننا يغطيه.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف المكيفات" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/disinfection"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التعقيم والتطهير</h3>
                <p className="text-gray-600">تعقيم شامل لجميع الأسطح والأجهزة</p>
              </Link>
              <Link
                href="/services/home-cleaning-jeddah"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المنازل</h3>
                <p className="text-gray-600">تنظيف شامل لجميع أجزاء المنزل</p>
              </Link>
              <Link
                href="/services/deep-cleaning"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التنظيف العميق</h3>
                <p className="text-gray-600">تنظيف مكثف وشامل لجميع الأسطح</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
