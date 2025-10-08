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
import { CheckCircle, Droplets, Wind, Shield, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "تنظيف السجاد والموكيت بجدة | غسيل بالبخار",
  description:
    "خدمة تنظيف السجاد والموكيت بالبخار في جدة. إزالة البقع والروائح والبكتيريا بتقنية حديثة وآمنة. نتائج احترافية وجفاف سريع.",
  alternates: {
    canonical: `${site.url}/services/carpet`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف السجاد والموكيت", url: "/services/carpet" },
];

const faqs = [
  {
    question: "كم يستغرق جفاف السجاد بعد التنظيف بالبخار؟",
    answer:
      "السجاد يجف عادة خلال 4-6 ساعات في الأجواء العادية. في جدة، حيث الطقس حار وجاف معظم أيام السنة، قد يجف خلال 3-4 ساعات فقط. يمكنك تسريع الجفاف بفتح النوافذ للتهوية الطبيعية أو تشغيل المكيف أو المروحة. نستخدم أجهزة شفط قوية تزيل معظم الماء أثناء التنظيف، لذا السجاد لا يكون مبللاً تماماً بل رطباً قليلاً فقط. للسجاد السميك جداً أو الموكيت الكثيف، قد يحتاج حتى 8 ساعات حتى يجف تماماً.",
  },
  {
    question: "هل تنظفون السجاد في مكانه أم تأخذونه؟",
    answer:
      "نقدم كلا الخيارين حسب راحتك واحتياجك. الخيار الأول (الأكثر شيوعاً) هو تنظيف السجاد في الموقع - نأتي إلى منزلك بجميع المعدات ونظف السجاد في مكانه دون الحاجة لرفعه أو نقله. هذا أسهل وأسرع لك. الخيار الثاني هو أخذ السجاد إلى مركز التنظيف الخاص بنا، حيث نغسله بعمق أكبر، ونجففه تماماً، ثم نعيده إليك نظيفاً ومعطراً. هذا الخيار مثالي للسجاد الكبير جداً أو الذي يحتاج تنظيفاً مكثفاً.",
  },
  {
    question: "هل التنظيف بالبخار آمن على جميع أنواع السجاد؟",
    answer:
      "التنظيف بالبخار آمن لمعظم أنواع السجاد: الصوف، القطن، النايلون، البوليستر، والموكيت. لكن بعض الأنواع الحساسة مثل السجاد الحرير الفارسي القديم أو السجاد اليدوي الثمين جداً قد يحتاج تقنيات تنظيف خاصة وأكثر لطفاً. قبل البدء، نفحص نوع السجاد وخامته، ونختبر منطقة صغيرة غير ظاهرة لنتأكد من أن الألوان ثابتة والنسيج يتحمل البخار. لدينا خبرة واسعة في التعامل مع جميع أنواع السجاد، من العادي إلى الفاخر جداً.",
  },
  {
    question: "هل التنظيف بالبخار يزيل البقع القديمة والعنيدة؟",
    answer:
      "البخار الساخن مع المنظفات المتخصصة فعال جداً في إزالة معظم البقع. بقع القهوة، الشاي، العصائر، الطعام، والشحوم يمكن إزالتها بنسبة كبيرة إن لم يكن بالكامل. للبقع العنيدة القديمة، نستخدم معالجات مسبقة خاصة نتركها تتفاعل مع البقعة قبل البخار. ننجح في إزالة أو تحسين مظهر 90% من البقع. بعض البقع مثل الحبر القديم جداً، أصباغ الشعر، أو بقع التبييض (التي غيّرت لون السجاد نفسه) قد تكون صعبة أو مستحيلة. نخبرك دائماً بصراحة بالنتيجة المتوقعة قبل البدء.",
  },
  {
    question: "هل التنظيف يقضي على عث الغبار والبكتيريا؟",
    answer:
      "نعم! هذه من أكبر فوائد التنظيف بالبخار. البخار الساخن بدرجة حرارة 100-150 درجة مئوية يقتل 99.9% من البكتيريا، الفيروسات، عث الغبار، وبيوضها. السجاد يؤوي ملايين من عث الغبار الذي يتغذى على خلايا الجلد الميتة ويسبب الحساسية والربو، خاصة عند الأطفال. التنظيف العميق بالبخار يقضي على هذه الكائنات ويجعل منزلك أكثر صحة وأماناً. ننصح بتنظيف السجاد كل 6-12 شهر للحفاظ على بيئة صحية.",
  },
  {
    question: "كيف أحافظ على السجاد نظيفاً لفترة أطول بعد التنظيف؟",
    answer:
      "للحفاظ على نتائج التنظيف: 1) نظف بالمكنسة الكهربائية مرتين أسبوعياً على الأقل لإزالة الأتربة السطحية قبل أن تتعمق في النسيج. 2) عالج البقع فوراً عند حدوثها - امسحها بمنشفة نظيفة رطبة قبل أن تجف وتثبت. 3) استخدم ممسحة الأقدام عند المداخل لتقليل الأتربة الداخلة. 4) اطلب من الضيوف خلع الأحذية. 5) ضع حامي للسجاد (carpet protector) بعد التنظيف - طبقة واقية تجعل البقع أصعب في الالتصاق وأسهل في التنظيف (نوفر هذه الخدمة بسعر إضافي معقول).",
  },
  {
    question: "هل يمكنكم إزالة رائحة الحيوانات الأليفة من السجاد؟",
    answer:
      "نعم، نتخصص في إزالة روائح الحيوانات الأليفة من السجاد. نستخدم منظفات إنزيمية خاصة تفكك جزيئات الرائحة والبول على المستوى الجزيئي، وليس فقط إخفاء الرائحة. ثم نستخدم البخار الساخن للتعقيم العميق ومعادلات روائح احترافية. في معظم الحالات، نزيل الرائحة تماماً. إذا كان البول قد تسرب إلى الأرضية تحت السجاد، قد نحتاج معالجة أعمق أو تنظيف الأرضية أيضاً.",
  },
  {
    question: "كم مرة يجب تنظيف السجاد والموكيت احترافياً؟",
    answer:
      "يعتمد على عدة عوامل: للمنازل العادية مع استخدام متوسط، ننصح بالتنظيف الاحترافي مرة كل 12-18 شهر. إذا كان لديك أطفال صغار أو حيوانات أليفة، فمن الأفضل كل 6-9 أشهر. للمنازل ذات الحركة العالية أو في المناطق الترابية، قد تحتاج كل 6 أشهر. للمكاتب والأماكن التجارية ذات الحركة الكثيفة، ننصح بالتنظيف كل 3-6 أشهر. التنظيف المنتظم لا يحسن المظهر والصحة فقط، بل يطيل عمر السجاد أيضاً.",
  },
];

const services = [
  "تنظيف عميق بالبخار الساخن",
  "إزالة البقع العنيدة والصعبة",
  "القضاء على البكتيريا وعث الغبار",
  "إزالة الروائح الكريهة",
  "تنظيف السجاد اليدوي والفارسي",
  "تنظيف الموكيت المثبت",
  "تنظيف سجاد المساجد",
  "حماية السجاد بعد التنظيف (اختياري)",
];

const features = [
  {
    icon: Droplets,
    title: "تنظيف عميق بالبخار",
    description: "بخار ساخن يخترق عمق الألياف ويزيل الأوساخ المتراكمة",
  },
  {
    icon: Shield,
    title: "آمن 100%",
    description: "مواد آمنة على الأطفال والحيوانات الأليفة ولا تضر بالألوان",
  },
  {
    icon: Wind,
    title: "جفاف سريع",
    description: "جهاز شفط قوي يضمن جفاف السجاد خلال 4-6 ساعات فقط",
  },
  {
    icon: Sparkles,
    title: "نتائج مذهلة",
    description: "سجاد نظيف، منعش، وكأنه جديد مع ألوان زاهية",
  },
];

export default function CarpetCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف السجاد والموكيت بجدة",
      "خدمة تنظيف السجاد والموكيت بالبخار الساخن في جدة. إزالة عميقة للبقع والبكتيريا مع جفاف سريع ونتائج احترافية."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف السجاد والموكيت", url: `${site.url}/services/carpet` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف السجاد والموكيت بجدة - تنظيف بالبخار وجفاف سريع"
        subtitle="تنظيف السجاد والموكيت"
        description="أعد لسجادك نظافته ونضارته مع خدمة التنظيف بالبخار المتخصصة. نتائج احترافية، إزالة عميقة للبقع والبكتيريا، وأمان تام على جميع الأقمشة."
        image="carpet cleaning Jeddah.jpg"
        imageAlt="تنظيف السجاد بالبخار في جدة - شركة المثالي"
        context={{ service: "تنظيف السجاد" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف السجاد والموكيت بجدة - لأن سجادك يستحق الأفضل
            </h2>
            <p className="text-lg leading-relaxed">
              السجاد هو من أكثر العناصر في منزلك التي تتعرض للاستخدام اليومي المكثف. يتحمل أقدام
              العائلة، الضيوف، الأطفال الذين يلعبون عليه، وأحياناً انسكاب المشروبات والطعام. مع الوقت،
              يتراكم في عمق ألياف السجاد: أتربة وغبار لا يزيلها التنظيف بالمكنسة العادية، بكتيريا
              وجراثيم غير مرئية، ملايين من عث الغبار الذي يسبب الحساسية والربو، روائح عالقة من الطعام
              أو الرطوبة، وبقع قديمة استقرت في النسيج.
            </p>

            <p className="leading-relaxed">
              التنظيف السطحي بالمكنسة الكهربائية يزيل فقط 10-15% من الأتربة الموجودة في السجاد. أما
              الأوساخ العميقة، البكتيريا، والعث فتبقى مختبئة في عمق الألياف، تؤثر على جودة الهواء في
              منزلك وصحة عائلتك. هنا يأتي دور التنظيف الاحترافي العميق بالبخار.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمة متخصصة في{" "}
              <strong>تنظيف السجاد والموكيت بالبخار في جدة</strong> - تقنية حديثة وفعالة تصل إلى أعمق
              طبقات السجاد، تزيل الأوساخ المتراكمة، تقتل البكتيريا وعث الغبار، وتعيد لسجادك نظافته
              وألوانه الزاهية كأنه جديد. خدمتنا آمنة تماماً على جميع أنواع السجاد والأقمشة، ومناسبة
              للمنازل التي فيها أطفال وحيوانات أليفة.
            </p>

            <div className="relative my-8 h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/carpet cleaning Jeddah.jpg"
                alt="تنظيف السجاد بالبخار في جدة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا التنظيف بالبخار هو الأفضل للسجاد والموكيت؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. تنظيف عميق يصل إلى جذور الألياف
                </h4>
                <p className="leading-relaxed">
                  البخار الساخن بدرجة حرارة عالية (100-150 درجة مئوية) يخترق عمق نسيج السجاد ويصل
                  إلى قاعدة الألياف. يذيب الأوساخ العالقة، الدهون، والشحوم التي لا يمكن إزالتها
                  بالمكنسة العادية أو حتى بالغسيل السطحي. هذا يضمن نظافة حقيقية من الداخل وليس فقط على
                  السطح.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. القضاء على البكتيريا وعث الغبار
                </h4>
                <p className="leading-relaxed">
                  درجة حرارة البخار العالية تقتل 99.9% من البكتيريا، الفيروسات، الفطريات، وعث الغبار
                  الذي يعيش في السجاد ويسبب الحساسية والربو. السجاد النظيف بعمق يعني هواء أنقى وبيئة
                  أكثر صحة، خاصة للأطفال وكبار السن والأشخاص الذين يعانون من الحساسية. هذا لا يمكن
                  تحقيقه بالتنظيف العادي بالمكنسة أو حتى الغسيل بالماء البارد.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. إزالة البقع والروائح الصعبة
                </h4>
                <p className="leading-relaxed">
                  البخار الساخن مع منظفاتنا المتخصصة فعال جداً في إزالة البقع العنيدة - قهوة، شاي،
                  عصائر، طعام، شوكولاتة، وحتى بقع الحيوانات الأليفة. كما أنه يقضي على البكتيريا
                  المسببة للروائح الكريهة ويترك السجاد برائحة منعشة ونظيفة. نستخدم أيضاً معادلات روائح
                  احترافية للتخلص من الروائح العميقة المستقرة في الألياف.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. آمن ولطيف على جميع أنواع السجاد
                </h4>
                <p className="leading-relaxed">
                  التنظيف بالبخار لا يستخدم مواد كيميائية قاسية أو فرشاة خشنة يمكن أن تضر بألياف
                  السجاد أو تتسبب في بهتان الألوان. البخار لطيف على النسيج، يحافظ على ألوان السجاد
                  الزاهية وملمسه الناعم، ويطيل عمره. كما أن موادنا آمنة 100% على الأطفال والحيوانات
                  الأليفة - يمكنهم اللعب على السجاد بعد جفافه دون أي قلق.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">5. جفاف سريع ونتائج فورية</h4>
                <p className="leading-relaxed">
                  بعد التنظيف بالبخار، نستخدم أجهزة شفط قوية تسحب معظم الماء والأوساخ المذابة. هذا
                  يترك السجاد رطباً قليلاً وليس مبللاً تماماً. في جدة مع الطقس الحار والجاف، يجف
                  السجاد خلال 4-6 ساعات فقط (أحياناً 3-4 ساعات في الصيف). تسريع الجفاف بسيط - فقط افتح
                  النوافذ أو شغّل المكيف. ستلاحظ الفرق الكبير فوراً: سجاد نظيف، منعش، وكأنه جديد.
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
              مميزات خدمتنا في تنظيف السجاد
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4 rounded-lg bg-white p-6 shadow-sm">
                  <div className="rounded-full bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
                ما الذي تشمله خدمة تنظيف السجاد؟
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
            <h2 className="text-3xl font-bold text-gray-900">خطوات عملنا في تنظيف السجاد</h2>

            <p className="leading-relaxed">
              نتبع منهجية احترافية منظمة لضمان أفضل النتائج:
            </p>

            <ol className="space-y-4 pr-6">
              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">1. الفحص والتقييم:</strong>
                <br />
                نفحص نوع السجاد (صوف، قطن، اصطناعي، يدوي، إلخ)، حالته، درجة الاتساخ، والبقع الموجودة.
                هذا يساعدنا في اختيار المنظفات المناسبة ودرجة حرارة البخار الملائمة. كما نفحص ثبات
                الألوان بتجربة منطقة صغيرة غير ظاهرة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">2. التنظيف الجاف الأولي:</strong>
                <br />
                نستخدم مكنسة كهربائية احترافية قوية لإزالة الأتربة السطحية، الشعر، الفتات، والجزيئات
                الكبيرة. هذا يجعل التنظيف بالبخار أكثر فعالية ويمنع تحول الأتربة إلى طين عند تعرضها
                للبخار.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">3. معالجة البقع المسبقة:</strong>
                <br />
                نحدد البقع العنيدة (قهوة، حبر، دهون، إلخ) ونطبق عليها منظفات متخصصة مناسبة لنوع
                البقعة. نتركها لمدة 5-10 دقائق لتتفاعل وتفكك البقعة، مما يسهل إزالتها بالبخار لاحقاً.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">4. التنظيف العميق بالبخار:</strong>
                <br />
                نستخدم ماكينة بخار احترافية قوية تنتج بخاراً ساخناً عالي الضغط. نمرر الماكينة ببطء
                وبشكل منهجي على كامل مساحة السجاد، نضمن تغطية كل بوصة. البخار الساخن يخترق عمق
                الألياف، يذيب الأوساخ، يقتل البكتيريا، ويزيل الروائح.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">5. الشفط والاستخلاص:</strong>
                <br />
                بينما نضخ البخار، تقوم الماكينة في نفس الوقت بشفط الماء والأوساخ المذابة بقوة شفط
                عالية. هذا يضمن إزالة أكبر قدر ممكن من الماء، مما يقلل وقت الجفاف ويمنع بقاء بقايا
                صابون في الألياف.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">6. الشطف (إن لزم):</strong>
                <br />
                في حالة السجاد الذي يحتاج منظفات كثيرة للبقع العنيدة، نمرر الماكينة مرة أخرى بالماء
                الساخن فقط (بدون صابون) لشطف أي بقايا منظفات وضمان نظافة 100%.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">7. التعطير وحماية السجاد (اختياري):</strong>
                <br />
                نضيف معطر احترافي آمن وطبيعي لرائحة منعشة تدوم طويلاً. يمكنك أيضاً اختيار خدمة حماية
                السجاد - طبقة واقية غير مرئية تجعل السجاد مقاوماً للبقع والأوساخ في المستقبل.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">8. الفحص النهائي:</strong>
                <br />
                نفحص السجاد بالكامل للتأكد من نظافة جميع المناطق وإزالة البقع. إذا بقيت أي بقعة عنيدة،
                نعالجها مرة أخرى. نتأكد من رضاك التام قبل مغادرة المكان.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">أنواع السجاد التي نقوم بتنظيفها</h2>

            <p className="leading-relaxed">
              لدينا الخبرة والمعدات المناسبة لتنظيف جميع أنواع السجاد:
            </p>

            <ul className="list-inside list-disc space-y-3 pr-6">
              <li className="leading-relaxed">
                <strong>السجاد الصوف الطبيعي:</strong> نستخدم درجة حرارة وضغط مناسبين لا يضران بألياف
                الصوف الحساسة، مع منظفات خاصة بالصوف.
              </li>
              <li className="leading-relaxed">
                <strong>السجاد اليدوي والفارسي:</strong> نتعامل بحذر شديد مع السجاد الثمين، نفحص ثبات
                الألوان، ونستخدم تقنيات لطيفة للحفاظ على جماله وقيمته.
              </li>
              <li className="leading-relaxed">
                <strong>الموكيت المثبت:</strong> نظف الموكيت الملصق بالأرض في غرف النوم، الصالات،
                والمكاتب دون الحاجة لإزالته.
              </li>
              <li className="leading-relaxed">
                <strong>السجاد الاصطناعي (بوليستر، نايلون):</strong> سهل التنظيف وسريع الجفاف، ننظفه
                بفعالية عالية.
              </li>
              <li className="leading-relaxed">
                <strong>سجاد المساجد:</strong> نقدم خدمات متخصصة لتنظيف سجاد المساجد الكبيرة بفرق عمل
                كافية ومعدات قوية.
              </li>
              <li className="leading-relaxed">
                <strong>السجاد الكبير الحجم:</strong> لدينا معدات قوية ومساحة في مركزنا لاستقبال وغسل
                السجاد الكبير جداً الذي يصعب تنظيفه في الموقع.
              </li>
            </ul>
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
                  <strong>سجادة صغيرة (2×3 متر):</strong> 15-20 دقيقة
                </li>
                <li>
                  <strong>سجادة متوسطة (3×4 متر):</strong> 25-35 دقيقة
                </li>
                <li>
                  <strong>سجادة كبيرة (4×6 متر أو أكثر):</strong> 40-60 دقيقة
                </li>
                <li>
                  <strong>موكيت غرفة كاملة (4×5 متر):</strong> 30-45 دقيقة
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة قد تزيد إذا كان السجاد متسخاً جداً أو يحتوي على بقع عنيدة كثيرة
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> حجم السجاد (المساحة بالمتر المربع)، نوع السجاد ومادته،
              مستوى الاتساخ، عدد البقع العنيدة، خدمات إضافية (حماية السجاد، معطر خاص، إلخ)، الموقع
              (هل نظف في المكان أم نأخذ السجاد ونعيده).
            </p>

            <p className="leading-relaxed">
              نقدم أسعاراً تنافسية جداً وخصومات خاصة عند تنظيف عدة قطع سجاد أو الجمع مع خدمات أخرى
              (مثل تنظيف الكنب أو الستائر). تواصل معنا الآن عبر واتساب أو الهاتف للحصول على عرض سعر
              دقيق ومخصص لاحتياجاتك.
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              نصائح مهمة للحفاظ على نظافة السجاد
            </h2>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  1. التنظيف اليومي بالمكنسة:
                </h4>
                <p className="leading-relaxed">
                  نظف السجاد بالمكنسة الكهربائية 2-3 مرات أسبوعياً على الأقل (يومياً في المناطق ذات
                  الحركة العالية). هذا يمنع تراكم الأتربة في عمق الألياف ويطيل عمر السجاد. استخدم
                  مكنسة ذات شفط قوي وفرشاة دوارة للنتائج الأفضل.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  2. معالجة البقع فوراً:
                </h4>
                <p className="leading-relaxed">
                  عند انسكاب أي شيء، تصرف بسرعة! امسح السائل فوراً بمنشفة ماصة نظيفة (اطبق ولا تفرك
                  لتجنب انتشار البقعة). استخدم ماء فاتر مع قطرات قليلة من صابون لطيف. كلما عالجت
                  البقعة أسرع، كان إزالتها أسهل.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">3. استخدم ممسحة الأقدام:</h4>
                <p className="leading-relaxed">
                  ضع ممسحة جيدة عند كل مدخل. هذا يقلل كمية الأتربة، الرمل، والأوساخ التي تدخل إلى
                  المنزل وتستقر في السجاد. في جدة حيث الأتربة والرمال كثيرة، هذا يحدث فرقاً كبيراً.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">4. اطلب من الضيوف خلع الأحذية:</h4>
                <p className="leading-relaxed">
                  الأحذية تحمل أتربة، بكتيريا، ومواد ضارة من الشارع. خلع الأحذية عند الدخول يحافظ على
                  السجاد أنظف وأكثر صحة لفترة أطول.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  5. قلّب السجاد بانتظام:
                </h4>
                <p className="leading-relaxed">
                  كل 6 أشهر، قلّب السجاد أو غيّر اتجاهه لتوزيع الاستخدام والتآكل بالتساوي. بعض الأماكن
                  تتعرض لحركة أكثر، التقليب يوزع التأثير.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  6. تنظيف احترافي دوري:
                </h4>
                <p className="leading-relaxed">
                  مهما كنت حريصاً في التنظيف اليومي، التنظيف العميق الاحترافي ضروري. احجز تنظيفاً
                  بالبخار كل 6-12 شهر لإزالة الأوساخ المتراكمة، القضاء على البكتيريا، واستعادة جمال
                  وحيوية السجاد.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">الضمان ومعايير السلامة</h2>

            <p className="leading-relaxed">
              <strong>ضمان الرضا 100%:</strong> نحن واثقون تماماً من جودة عملنا. إذا لم تكن راضياً عن
              النتيجة لأي سبب، اتصل بنا خلال 24 ساعة وسنعيد تنظيف السجاد دون أي رسوم إضافية. رضاك
              هو هدفنا الأول.
            </p>

            <p className="leading-relaxed">
              <strong>مواد آمنة ومعتمدة:</strong> جميع المنظفات والمعقمات التي نستخدمها آمنة 100% على
              الأطفال والحيوانات الأليفة، معتمدة من وزارة الصحة السعودية، ولا تترك أي بقايا كيميائية
              ضارة. يمكن للعائلة استخدام السجاد بعد جفافه دون أي قلق.
            </p>

            <p className="leading-relaxed">
              <strong>التأمين والمسؤولية:</strong> شركتنا مرخصة رسمياً ومؤمّنة بالكامل. في الحالة
              النادرة جداً لحدوث أي ضرر أثناء التنظيف (وهو أمر نادر جداً)، تأميننا يغطي التعويض.
              نتعامل مع سجادك بعناية فائقة كأنه ملكنا الخاص.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف السجاد" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/upholstery-sofa"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف الكنب</h3>
                <p className="text-gray-600">تنظيف المفروشات بالبخار الساخن</p>
              </Link>
              <Link
                href="/services/curtains"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف الستائر</h3>
                <p className="text-gray-600">غسيل الستائر بالبخار دون فك</p>
              </Link>
              <Link
                href="/services/mattress"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المراتب</h3>
                <p className="text-gray-600">تعقيم وتنظيف المراتب عميقاً</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
