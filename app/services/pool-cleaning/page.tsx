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
import { CheckCircle, Droplets, Shield, Sun, Waves } from "lucide-react";

export const metadata: Metadata = {
  title: "تنظيف المسابح بجدة | صيانة دورية",
  description:
    "خدمة تنظيف وصيانة المسابح في جدة. نحافظ على نظافة مسبحك وجاهزيته طوال العام. تنظيف، تعقيم، فحص الكيماويات، وصيانة الفلاتر.",
  alternates: {
    canonical: `${site.url}/services/pool-cleaning`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف المسابح", url: "/services/pool-cleaning" },
];

const faqs = [
  {
    question: "كم مرة يحتاج المسبح للتنظيف الاحترافي؟",
    answer:
      "يعتمد على استخدام المسبح والموسم. خلال موسم الاستخدام الكثيف (الصيف في جدة - مايو إلى سبتمبر)، ننصح بتنظيف احترافي شامل كل أسبوعين مع فحص كيماويات أسبوعي. في موسم الاستخدام المتوسط (الربيع والخريف)، تنظيف شهري يكفي. في الشتاء حيث الاستخدام نادر، تنظيف كل شهرين للحفاظ على المسبح. إذا كان المسبح مغطى في الشتاء، فحص ربع سنوي يكفي. بالإضافة للتنظيف الاحترافي، ننصح بصيانة يومية بسيطة: كشط السطح من الأوراق والحشرات، تفريغ سلال الفلاتر، وفحص مستوى الماء.",
  },
  {
    question: "ما الذي يشمله التنظيف الاحترافي للمسبح؟",
    answer:
      "التنظيف الشامل يشمل: 1) كشط سطح الماء من الأوراق والحشرات والزيوت. 2) تنظيف جدران وأرضية المسبح بالفرشاة لإزالة الطحالب والأوساخ الملتصقة. 3) تشغيل المكنسة الأوتوماتيكية أو اليدوية لشفط الأوساخ من القاع. 4) تنظيف خط الماء (waterline) من الدهون والترسبات. 5) تفريغ وتنظيف سلال الفلاتر (skimmer baskets). 6) فحص وتنظيف فلتر المسبح (رملي أو خرطوشة). 7) فحص مستوى الماء وإضافة ماء إذا لزم. 8) فحص كيماويات الماء (pH, Chlorine, Alkalinity) وضبطها. 9) إضافة معقمات وكيماويات حسب الحاجة. 10) فحص المضخة ونظام الترشيح. 11) تنظيف المنطقة المحيطة بالمسبح.",
  },
  {
    question: "لماذا يتحول لون ماء المسبح إلى الأخضر وكيف تعالجونه؟",
    answer:
      "الماء الأخضر يعني نمو طحالب - كائنات دقيقة خضراء تنمو بسرعة في الماء عندما: مستوى الكلور منخفض جداً (لا يقتل الطحالب)، pH غير متوازن، قلة الترشيح (المضخة لا تعمل كفاية)، أو ارتفاع درجة الحرارة والشمس. العلاج يشمل عدة خطوات: 1) صدمة كيميائية (Shock treatment): نضيف جرعة عالية جداً من الكلور (5-10 أضعاف المستوى العادي) لقتل جميع الطحالب. 2) تشغيل المضخة 24 ساعة متواصلة لتوزيع الكلور. 3) فرك جميع الجدران والأرضية بفرشاة خشنة لإزالة الطحالب الملتصقة. 4) إضافة algaecide (مبيد طحالب) لمنع عودتها. 5) ترشيح مستمر مع تنظيف الفلتر عدة مرات. 6) شفط الطحالب الميتة المترسبة في القاع. 7) إعادة ضبط التوازن الكيميائي. العملية تستغرق 3-7 أيام حسب شدة المشكلة.",
  },
  {
    question: "هل تقدمون عقود صيانة دورية للمسابح؟",
    answer:
      "نعم بالتأكيد! نقدم عدة باقات صيانة دورية مرنة: 1) الباقة الأسبوعية (مثالية لموسم الصيف): زيارة أسبوعية تشمل تنظيف كامل، فحص وضبط كيماويات، تنظيف فلاتر. 2) الباقة النصف شهرية: زيارة كل أسبوعين - مناسبة للاستخدام المتوسط. 3) الباقة الشهرية: زيارة شهرية - للمسابح قليلة الاستخدام أو في الشتاء. جميع الباقات تشمل: كيماويات أساسية، فحص معدات، تقارير شهرية مكتوبة عن حالة المسبح، خصم 20% على أي أعمال إضافية، أولوية في الخدمة الطارئة. العقود السنوية تحصل على خصم 15% إضافي. يمكنك أيضاً تخصيص باقة حسب احتياجك.",
  },
  {
    question: "ما هو التوازن الكيميائي الصحيح لماء المسبح؟",
    answer:
      "الماء الصحي والآمن للسباحة يحتاج توازناً دقيقاً في عدة عوامل كيميائية: 1) pH (الحموضة): المستوى المثالي 7.2-7.6. إذا كان أقل (حمضي)، يهيج العيون والجلد ويتلف المعدات. إذا كان أعلى (قلوي)، الكلور يفقد فعاليته والماء يصبح غائماً. 2) الكلور الحر (Free Chlorine): 1-3 ppm. هذا يقتل البكتيريا والطحالب. 3) القلوية الكلية (Total Alkalinity): 80-120 ppm. تساعد على استقرار pH. 4) صلابة الكالسيوم (Calcium Hardness): 200-400 ppm. تمنع تآكل الأسطح أو تكون ترسبات. 5) حمض السيانوريك (Stabilizer): 30-50 ppm. يحمي الكلور من تأثير الشمس. نحن نفحص جميع هذه العوامل في كل زيارة باستخدام أجهزة اختبار دقيقة ونضبطها حسب الحاجة.",
  },
  {
    question: "كيف تنظفون الفلتر وما أنواع الفلاتر؟",
    answer:
      "هناك ثلاثة أنواع رئيسية من فلاتر المسابح: 1) الفلتر الرملي (Sand Filter): الأكثر شيوعاً. ننظفه بعملية 'backwash' - عكس تدفق الماء لطرد الأوساخ المتراكمة في الرمل. نفعل ذلك كل أسبوع أو عند ارتفاع ضغط الفلتر. الرمل نفسه يحتاج استبدال كل 3-5 سنوات. 2) الفلتر الخرطوشة (Cartridge Filter): نخرج الخرطوشة ونغسلها بخرطوم ماء قوي. للتنظيف العميق، ننقعها في محلول تنظيف خاص. تحتاج استبدال كل 1-2 سنة. 3) فلتر DE (Diatomaceous Earth): الأكثر كفاءة. ننظفه بـ backwash ثم نضيف بودرة DE جديدة. للثلاثة، نفحص الضغط، الأنابيب، الصمامات، ونتأكد من عدم وجود تسريبات.",
  },
  {
    question: "المسبح يفقد ماء باستمرار - هل هذا طبيعي أم تسريب؟",
    answer:
      "فقدان بعض الماء طبيعي بسبب التبخر - خاصة في جدة الحارة. في الصيف، مسبح متوسط (8×4 متر) قد يفقد 2-5 سم ماء أسبوعياً بسبب التبخر والاستخدام (الماء الذي يخرج عند السباحة). لكن إذا كان الفقد أكثر من ذلك، قد يكون تسريباً. اختبار بسيط: ضع دلو ماء على درجة المسبح، املأه لنفس مستوى ماء المسبح، وعلّم المستوى. بعد 24 ساعة، قارن: إذا انخفض ماء المسبح أكثر من الدلو، هناك تسريب. التسريبات الشائعة: شقوق في جدران المسبح، أنابيب تالفة، مضخة غير محكمة، أو skimmers تالفة. نحن نقدم خدمة كشف تسريبات بمعدات متخصصة (فحص بالضغط، أصباغ ملونة، أجهزة صوتية) ونصلحها.",
  },
  {
    question: "متى يجب تفريغ المسبح بالكامل وإعادة ملئه؟",
    answer:
      "في الحالات العادية، لا داعي لتفريغ المسبح - الصيانة الدورية والتوازن الكيميائي يحافظان على الماء صالحاً سنوات. لكن التفريغ ضروري في هذه الحالات: 1) تراكم TDS (Total Dissolved Solids) - الأملاح الذائبة - بمستويات عالية جداً (فوق 2500 ppm). هذا يحدث بعد 3-5 سنوات من إضافة الكيماويات المستمرة. 2) مشاكل طحالب شديدة لا تحل بالمعالجة العادية. 3) إصلاحات كبيرة (تشققات، إعادة طلاء، تغيير بلاط). 4) الماء أصبح غائماً باستمرار رغم كل المحاولات. التفريغ الكامل مهمة كبيرة ومكلفة - تستغرق يومين (يوم تفريغ، يوم ملء)، تحتاج آلاف اللترات ماء جديد، وتكلفة الماء عالية. نحن ننصح به فقط عند الضرورة القصوى ونقوم به بحذر (المسابح الفارغة قد تتشقق بسبب ضغط الأرض أو ترتفع من الأرض إذا كان منسوب المياه الجوفية عالٍ).",
  },
];

const services = [
  "كشط سطح الماء من الأوراق والحشرات",
  "تنظيف الجدران والأرضية بالفرشاة",
  "شفط الأوساخ من القاع",
  "تنظيف خط الماء",
  "تنظيف سلال وفلاتر المسبح",
  "فحص وضبط الكيماويات",
  "إضافة معقمات ومواد كيميائية",
  "فحص المضخة ونظام الترشيح",
];

const benefits = [
  {
    icon: Droplets,
    title: "ماء نظيف وصافٍ",
    description: "مسبح نقي وصحي جاهز للسباحة طوال الوقت",
  },
  {
    icon: Shield,
    title: "حماية صحية",
    description: "قتل البكتيريا والطحالب وضمان سلامة السباحين",
  },
  {
    icon: Sun,
    title: "جاهز في كل موسم",
    description: "نحافظ على مسبحك جاهزاً للاستخدام طوال العام",
  },
  {
    icon: Waves,
    title: "إطالة عمر المسبح",
    description: "الصيانة الدورية تحمي المعدات وتطيل عمرها",
  },
];

export default function PoolCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف المسابح بجدة",
      "خدمة تنظيف وصيانة المسابح في جدة. نحافظ على نظافة مسبحك وجاهزيته طوال العام."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف المسابح", url: `${site.url}/services/pool-cleaning` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف المسابح في جدة - مسبح نظيف جاهز دائماً"
        subtitle="تنظيف المسابح"
        description="حافظ على مسبحك نظيفاً وآمناً مع خدمات التنظيف والصيانة الدورية. ماء صافٍ ومعدات سليمة طوال العام."
        image="cleaning services Jeddah.jpg"
        imageAlt="تنظيف المسابح في جدة - شركة المثالي"
        context={{ service: "تنظيف المسابح" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف المسابح في جدة - لأن مسبحك يستحق العناية
            </h2>
            <p className="text-lg leading-relaxed">
              المسبح من أجمل إضافات المنزل - مكان للترفيه، الرياضة، والاسترخاء مع العائلة خاصة في
              حرارة جدة الشديدة. لكن المسبح يحتاج صيانة دورية منتظمة للحفاظ عليه نظيفاً، آمناً، وصحياً.
              مسبح مهمل يصبح سريعاً أخضر اللون (طحالب)، غائم الماء (بكتيريا وأوساخ)، وخطراً على الصحة
              (أمراض جلدية، التهابات عيون وأذن). كما أن المعدات (مضخة، فلاتر) قد تتلف وتحتاج إصلاحات
              مكلفة.
            </p>

            <p className="leading-relaxed">
              الصيانة الصحيحة للمسبح ليست بالمهمة السهلة - تحتاج معرفة بالكيماويات، معدات متخصصة، ووقت
              وجهد كبير. الكثير من أصحاب المسابح يجدون صعوبة في الحفاظ على التوازن الكيميائي الصحيح أو
              التعامل مع مشاكل مثل الطحالب أو الماء الغائم. النتيجة: مسبح غير صالح للاستخدام معظم الوقت،
              أو تكاليف باهظة في الكيماويات والتجربة والخطأ.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمة متكاملة في{" "}
              <strong>تنظيف وصيانة المسابح في جدة</strong>. فريقنا المتخصص لديه خبرة واسعة في جميع
              أنواع المسابح وأنظمة الترشيح. نقوم بتنظيف شامل، فحص وضبط دقيق للكيماويات، صيانة المعدات،
              ونكشف ونعالج أي مشاكل قبل أن تتفاقم. مع عقود صيانتنا الدورية، مسبحك يبقى نظيفاً، صافياً،
              وجاهزاً للسباحة في أي وقت - دون أي جهد أو قلق من جانبك.
            </p>

            <div className="relative my-8 h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/cleaning services Jeddah.jpg"
                alt="تنظيف المسابح في جدة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا الصيانة الدورية للمسبح ضرورية؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. منع نمو الطحالب والبكتيريا الخطرة
                </h4>
                <p className="leading-relaxed">
                  الطحالب كائنات دقيقة خضراء تنمو بسرعة هائلة في ماء المسبح الدافئ والمشمس (خاصة في
                  جدة). إذا انخفض مستوى الكلور قليلاً، الطحالب تنمو خلال 24-48 ساعة وتحول الماء أخضر.
                  الطحالب نفسها ليست سامة لكنها تجعل الماء زلقاً وخطراً، وتستهلك كل الكلور (لا يبقى كلور
                  لقتل البكتيريا). البكتيريا الضارة (E.coli, Pseudomonas, Cryptosporidium) تنمو في ماء
                  غير معقم وتسبب: إسهال، التهابات جلدية، التهاب عيون، التهاب أذن، وأمراض أخرى. الصيانة
                  الدورية تحافظ على مستوى كلور صحيح يقتل هذه الكائنات قبل أن تصبح مشكلة.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. الحفاظ على التوازن الكيميائي الصحيح
                </h4>
                <p className="leading-relaxed">
                  ماء المسبح يحتاج توازناً دقيقاً جداً بين عدة عوامل كيميائية (pH, الكلور، القلوية،
                  الكالسيوم، إلخ). هذا التوازن يتغير باستمرار بسبب: الشمس (تبخر الماء وتحلل الكلور)،
                  المطر (يرفع pH)، السباحين (يدخلون أوساخ وعرق وكريمات شمس)، الرياح والأتربة. إذا
                  اختل التوازن: الماء يصبح غائماً، الكلور يفقد فعاليته، المعدات تتآكل أو تتكون عليها
                  ترسبات، وجلد وعيون السباحين تتهيج. نحن نفحص ونضبط الكيماويات بدقة في كل زيارة لضمان
                  توازن مثالي.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. حماية معدات المسبح من التلف
                </h4>
                <p className="leading-relaxed">
                  المضخة، الفلتر، السخان (إن وجد)، وأنظمة التنظيف الأوتوماتيكية - كلها معدات باهظة
                  ومعقدة. إذا أهملت، تتلف بسرعة وتحتاج إصلاحات أو استبدال مكلف. الفلتر المسدود بالأوساخ
                  يجبر المضخة على العمل بجهد أكبر مما يقصر عمرها. الماء غير المتوازن كيميائياً يتلف
                  الأجزاء المعدنية بالتآكل أو يكون ترسبات كلسية تسد الأنابيب. نحن نفحص جميع المعدات في
                  كل زيارة، ننظف الفلاتر، ونكشف أي مشاكل مبكراً قبل أن تصبح عطلاً كبيراً.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. توفير المال على المدى الطويل
                </h4>
                <p className="leading-relaxed">
                  قد تعتقد أن الصيانة الدورية مكلفة، لكن الحقيقة العكس! مسبح مهمل يكلف أكثر بكثير:
                  إصلاح مضخة تالفة: 2000-5000 ريال. استبدال فلتر: 1500-3000 ريال. علاج طحالب شديدة
                  (كيماويات كثيرة + جهد): 1000+ ريال. تفريغ وإعادة ملء المسبح: 3000-6000 ريال. الصيانة
                  الدورية تمنع كل هذه المشاكل والتكاليف. كما توفر على الكيماويات - الاستخدام الصحيح
                  والمبكر للكيماويات أرخص من محاولة علاج مشاكل كبيرة لاحقاً.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  5. الاستمتاع بمسبح جاهز دائماً
                </h4>
                <p className="leading-relaxed">
                  أجمل ما في امتلاك مسبح هو القدرة على السباحة في أي وقت تريد - خاصة في حر جدة! لكن
                  إذا كان المسبح يحتاج تنظيفاً أو الماء غير صافٍ أو الكيماويات غير متوازنة، لا يمكنك
                  استخدامه. مع صيانتنا الدورية، مسبحك جاهز 365 يوماً في السنة. فقط اقفز واستمتع - نحن
                  نهتم بكل التفاصيل التقنية والمملة.
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
              فوائد خدمتنا في تنظيف المسابح
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
                ما الذي تشمله خدمة تنظيف المسبح؟
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

      <ProcessSteps />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              باقات الصيانة الدورية
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border-2 border-primary/30 bg-white p-6">
                <h3 className="mb-3 text-2xl font-bold text-primary">الباقة الأسبوعية</h3>
                <p className="mb-4 text-gray-600">مثالية لموسم الصيف والاستخدام المكثف</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ زيارة أسبوعية</li>
                  <li>✓ تنظيف شامل</li>
                  <li>✓ فحص وضبط كيماويات</li>
                  <li>✓ كيماويات أساسية مشمولة</li>
                  <li>✓ تقارير دورية</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-green-500 bg-white p-6 shadow-lg">
                <div className="mb-2 inline-block rounded-full bg-green-500 px-3 py-1 text-xs text-white">
                  الأكثر شعبية
                </div>
                <h3 className="mb-3 text-2xl font-bold text-green-600">الباقة النصف شهرية</h3>
                <p className="mb-4 text-gray-600">التوازن المثالي بين التكلفة والخدمة</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ زيارة كل أسبوعين</li>
                  <li>✓ تنظيف كامل</li>
                  <li>✓ ضبط كيماويات</li>
                  <li>✓ فحص معدات</li>
                  <li>✓ خصم 10%</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-blue-500/30 bg-white p-6">
                <h3 className="mb-3 text-2xl font-bold text-blue-600">الباقة الشهرية</h3>
                <p className="mb-4 text-gray-600">للمسابح قليلة الاستخدام</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ زيارة شهرية</li>
                  <li>✓ تنظيف وصيانة</li>
                  <li>✓ فحص شامل</li>
                  <li>✓ تقرير مفصل</li>
                  <li>✓ أسعار مخفضة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف المسابح" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/villa-cleaning-jeddah"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف فلل</h3>
                <p className="text-gray-600">للفلل التي بها مسابح</p>
              </Link>
              <Link
                href="/services/water-tank"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف خزانات المياه</h3>
                <p className="text-gray-600">مياه نظيفة للمنزل والمسبح</p>
              </Link>
              <Link
                href="/services/deep-cleaning"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التنظيف العميق</h3>
                <p className="text-gray-600">للمنطقة المحيطة بالمسبح</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
