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
import { CheckCircle, Clock, Droplets, Wind } from "lucide-react";

export const metadata: Metadata = {
  title: "تنظيف الستائر بالبخار بجدة | بدون فك",
  description:
    "خدمة تنظيف الستائر بالبخار في جدة. تنظيف وتعقيم الستائر في مكانها دون الحاجة لفكها أو نقلها. سريع، فعال، وآمن على جميع الأقمشة.",
  alternates: {
    canonical: `${site.url}/services/curtains`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف الستائر", url: "/services/curtains" },
];

const faqs = [
  {
    question: "هل تنظفون الستائر دون فكها حقاً؟",
    answer:
      "نعم! هذه هي الميزة الأساسية لخدمتنا. نستخدم تقنية البخار المتقدمة لتنظيف الستائر وهي معلقة في مكانها دون الحاجة لفكها أو نقلها. هذا يوفر عليك عناء فك الستائر الثقيلة، نقلها للمغسلة، الانتظار أياماً، ثم إعادة تركيبها. كل ذلك بينما ستائرك معلقة! فقط ندفع الأثاث قليلاً بعيداً عن الستارة ونبدأ العمل. الخدمة سريعة ومريحة جداً.",
  },
  {
    question: "هل البخار آمن على جميع أنواع الستائر؟",
    answer:
      "البخار آمن على معظم أنواع أقمشة الستائر: القطن، الكتان، البوليستر، المخمل، والستائر المخلوطة. لكن بعض الأقمشة الحساسة جداً مثل الحرير الطبيعي النقي أو الستائر القديمة جداً الهشة قد تحتاج معاملة خاصة أو طريقة تنظيف مختلفة. قبل البدء، نفحص نوع القماش ونختبر منطقة صغيرة غير ظاهرة (من الخلف أو في الطرف السفلي) لنتأكد من أن القماش يتحمل البخار وأن الألوان ثابتة. نتعامل مع ستائرك بعناية فائقة.",
  },
  {
    question: "كم يستغرق تنظيف الستائر وهل تجف سريعاً؟",
    answer:
      "ستارة عادية بحجم نافذة متوسطة (2×2.5 متر) تستغرق 15-20 دقيقة للتنظيف. ستارة طويلة وكبيرة (3×4 متر) قد تحتاج 30-40 دقيقة. بعد التنظيف بالبخار، الستارة تكون رطبة قليلاً وليست مبللة تماماً (لأن البخار يستخدم ماءً أقل بكثير من الغسيل التقليدي). في الأجواء العادية، تجف الستائر خلال 3-5 ساعات. في جدة مع الطقس الحار، قد تجف خلال 2-3 ساعات فقط، خاصة إذا فتحت النوافذ أو شغّلت المكيف. يمكنك استخدام الغرفة في نفس اليوم.",
  },
  {
    question: "هل التنظيف يزيل البقع من الستائر؟",
    answer:
      "البخار الساخن مع منظفاتنا المتخصصة فعال جداً في إزالة معظم البقع: الأتربة، الدخان، الشحوم الخفيفة، بقع الأصابع، وروائح الطبخ. للبقع العنيدة (حبر، قهوة، إلخ)، نستخدم معالجات مسبقة خاصة. معظم البقع تزول أو تخف بشكل كبير. لكن بعض البقع القديمة جداً أو التي سبق غسلها بطريقة خاطئة وثبتت في القماش قد لا تزول بالكامل - نخبرك بصراحة عن التوقعات قبل البدء. في جميع الأحوال، النتيجة ستكون تحسن ملحوظ في مظهر ونظافة الستائر.",
  },
  {
    question: "هل التنظيف يزيل الروائح من الستائر؟",
    answer:
      "نعم! الستائر تمتص الروائح من الجو بمرور الوقت: روائح الطبخ، الدخان، الرطوبة، وحتى روائح الحيوانات الأليفة. البخار الساخن يقتل البكتيريا المسببة للروائح الكريهة ويزيل جزيئات الروائح العالقة في القماش. نستخدم أيضاً منظفات معطرة لطيفة تترك الستائر برائحة منعشة ونظيفة. بعد التنظيف، ستائرك ستبدو وتشم كأنها جديدة!",
  },
  {
    question: "ماذا عن الستائر الثقيلة جداً أو الطويلة جداً؟",
    answer:
      "نحن متخصصون في تنظيف جميع أنواع الستائر، حتى الثقيلة والطويلة جداً مثل ستائر الفلل والقاعات الكبيرة. لدينا معدات بخار احترافية قوية بخزانات كبيرة وضغط عالٍ تستطيع التعامل مع أي حجم. للستائر الطويلة جداً التي تلامس الأرض، نبدأ من الأعلى ونعمل بالتدرج نحو الأسفل، ثم نترك الستارة تجف معلقة. لا مشكلة مطلقاً في الحجم أو الوزن!",
  },
  {
    question: "كم مرة يجب تنظيف الستائر احترافياً؟",
    answer:
      "يعتمد على عدة عوامل: موقع الستارة، البيئة، ووجود حساسية. للستائر في غرف النوم والصالات العادية، ننصح بالتنظيف كل 6-12 شهر. ستائر المطبخ (إذا وجدت) تحتاج تنظيفاً أكثر تكراراً (كل 3-6 أشهر) لأنها تتعرض للشحوم والروائح. في جدة حيث الأتربة والرمال، قد تحتاج الستائر القريبة من الشوارع تنظيفاً كل 4-6 أشهر. إذا كان لديك أطفال أو حيوانات أليفة أو شخص يعاني من حساسية، فمن الأفضل تنظيفها كل 4-6 أشهر.",
  },
  {
    question: "ماذا عن الستائر الرأسية والستائر الخشبية؟",
    answer:
      "نعم، نظف أيضاً الستائر الرأسية (البلايند العمودي) والستائر الأفقية المعدنية أو الخشبية. للستائر الرأسية القماشية، نستخدم البخار مثل الستائر العادية. للستائر المعدنية أو الخشبية، نستخدم طرق تنظيف مناسبة: مسح بمنظفات خاصة وتلميع. كل نوع له طريقة معاملة مناسبة.",
  },
];

const services = [
  "تنظيف الستائر بالبخار في مكانها",
  "إزالة الأتربة والغبار العميق",
  "إزالة البقع والروائح",
  "القضاء على البكتيريا وعث الغبار",
  "تنظيف الستائر الثقيلة والطويلة",
  "تنظيف الستائر الرأسية (البلايند)",
  "تنظيف جميع أنواع الأقمشة",
  "تعطير لطيف ومنعش",
];

const benefits = [
  {
    icon: Clock,
    title: "بدون فك أو نقل",
    description: "نظف ستائرك وهي معلقة - توفير كبير في الوقت والجهد",
  },
  {
    icon: Droplets,
    title: "تنظيف عميق بالبخار",
    description: "إزالة الأوساخ والبكتيريا من عمق النسيج",
  },
  {
    icon: Wind,
    title: "جفاف سريع",
    description: "استخدام ماء أقل يعني جفافاً أسرع خلال 3-5 ساعات فقط",
  },
  {
    icon: CheckCircle,
    title: "آمن على جميع الأقمشة",
    description: "طريقة لطيفة تحافظ على ألوان وملمس الستائر",
  },
];

export default function CurtainsCleaningPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف الستائر بالبخار بجدة",
      "خدمة تنظيف الستائر بالبخار في جدة. تنظيف في مكانها دون فك أو نقل. سريع وفعال وآمن."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف الستائر", url: `${site.url}/services/curtains` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف الستائر بالبخار في جدة - بدون فك أو نقل"
        subtitle="تنظيف الستائر"
        description="نظف ستائرك في مكانها باستخدام البخار الساخن. سريع، فعال، آمن، ومريح. نتائج مذهلة دون عناء الفك والتركيب."
        image="curtain cleaning.jpg"
        imageAlt="تنظيف الستائر بالبخار في جدة - شركة المثالي"
        context={{ service: "تنظيف الستائر" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف الستائر بالبخار في جدة - راحة لا مثيل لها
            </h2>
            <p className="text-lg leading-relaxed">
              الستائر جزء أساسي من ديكور منزلك - تضيف الجمال، الخصوصية، وتحجب أشعة الشمس القوية،
              خاصة في جدة حيث الحرارة الشديدة. لكن مع الوقت، تتحول ستائرك الجميلة إلى مأوى للأتربة،
              الغبار، عث الغبار، وروائح الطبخ والدخان. التنظيف بالمكنسة العادية يزيل فقط الأتربة
              السطحية، لكن الأوساخ العميقة تبقى عالقة في نسيج القماش.
            </p>

            <p className="leading-relaxed">
              الطريقة التقليدية لتنظيف الستائر مرهقة ومكلفة: عليك فك الستائر الثقيلة (مهمة صعبة جداً
              خاصة للستائر الطويلة)، نقلها للمغسلة، الانتظار أياماً، دفع مبالغ كبيرة، ثم إعادة
              تركيبها (والتأكد أنها لم تتقلص بعد الغسيل!). كل هذا العناء يجعل الكثيرين يؤجلون تنظيف
              الستائر لسنوات، مما يؤثر على صحتهم وجمال منازلهم.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم حلاً عبقرياً ومريحاً:{" "}
              <strong>تنظيف الستائر بالبخار في جدة - بدون فك أو نقل!</strong> نأتي إلى منزلك بمعداتنا
              الاحترافية، ننظف ستائرك بالبخار الساخن وهي معلقة في مكانها، ونتركها نظيفة، منعشة،
              ومعقمة. لا فك، لا نقل، لا انتظار، لا إعادة تركيب - فقط ستائر نظيفة وأنت مرتاح في منزلك!
            </p>

            <div className="relative my-8 h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/curtain cleaning.jpg"
                alt="تنظيف الستائر بالبخار في جدة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا تنظيف الستائر بالبخار هو الخيار الأفضل؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. راحة لا مثيل لها - بدون فك أو نقل
                </h4>
                <p className="leading-relaxed">
                  هذه هي الميزة الأكبر! تخيل أن ستائرك تُنظف بعمق وأنت جالس مرتاح في منزلك، دون الحاجة
                  لفكها أو نقلها. نحن نأتي إليك، ننظف الستائر في مكانها باستخدام معدات بخار متنقلة قوية،
                  ونترك ستائرك نظيفة ومعلقة. توفير هائل في الوقت والجهد والتكلفة. لا مزيد من الصراع مع
                  الستائر الثقيلة أو القلق من تلفها أثناء الفك والتركيب.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. تنظيف عميق وفعال
                </h4>
                <p className="leading-relaxed">
                  البخار الساخن بدرجة حرارة عالية (100-150 درجة) يخترق عمق نسيج الستارة، يذيب ويزيل
                  الأوساخ المتراكمة، الشحوم، والأتربة العالقة التي لا يمكن للتنظيف السطحي إزالتها.
                  النتيجة: ستائر نظيفة تماماً من الداخل والخارج، ألوان أزهى، وملمس أنعم. التنظيف
                  بالبخار أقوى وأعمق من التنظيف الجاف التقليدي.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. القضاء على البكتيريا وعث الغبار
                </h4>
                <p className="leading-relaxed">
                  الستائر، خاصة في جدة حيث الأتربة الكثيرة، تؤوي ملايين من عث الغبار الذي يسبب
                  الحساسية، العطس، وضيق التنفس. البخار الساخن يقتل 99.9% من البكتيريا، الفطريات، وعث
                  الغبار، مما يجعل منزلك أكثر صحة وأماناً، خاصة للأطفال والأشخاص الذين يعانون من
                  الحساسية أو الربو. هذا لا يمكن تحقيقه بالتنظيف العادي أو حتى الغسيل بالماء البارد.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. آمن على جميع أنواع الأقمشة
                </h4>
                <p className="leading-relaxed">
                  التنظيف بالبخار لطيف ولا يستخدم مواد كيميائية قاسية أو عصر عنيف يمكن أن يتلف القماش.
                  يحافظ على ألوان الستائر الزاهية، ملمسها الناعم، وشكلها الأصلي. لا خطر من التقلص أو
                  بهتان الألوان كما يحدث أحياناً مع الغسيل التقليدي. ستائرك ستعود إلى جمالها الأصلي دون
                  أي ضرر.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  5. جفاف سريع واستخدام فوري
                </h4>
                <p className="leading-relaxed">
                  على عكس الغسيل التقليدي الذي يستخدم كميات كبيرة من الماء ويحتاج يوماً كاملاً أو أكثر
                  للجفاف، البخار يستخدم ماءً أقل بكثير. بعد التنظيف، الستائر تكون رطبة قليلاً فقط وتجف
                  خلال 3-5 ساعات. في جدة مع الطقس الحار، قد تجف في 2-3 ساعات فقط. يمكنك استخدام الغرفة
                  في نفس اليوم دون انتظار.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  6. إزالة الروائح الكريهة
                </h4>
                <p className="leading-relaxed">
                  الستائر تمتص روائح الطبخ، الدخان، الرطوبة، والحيوانات الأليفة بمرور الوقت. البخار
                  الساخن يقتل البكتيريا المسببة للروائح ويزيل جزيئات الروائح العالقة في القماش. نستخدم
                  أيضاً معطرات لطيفة آمنة تترك ستائرك برائحة منعشة ونظيفة تدوم أياماً.
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
              مميزات خدمة تنظيف الستائر بالبخار
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
                ما الذي تشمله خدمة تنظيف الستائر؟
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
            <h2 className="text-3xl font-bold text-gray-900">
              خطوات عملنا في تنظيف الستائر بالبخار
            </h2>

            <p className="leading-relaxed">
              نتبع عملية منظمة واحترافية لضمان أفضل النتائج:
            </p>

            <ol className="space-y-4 pr-6">
              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">1. الفحص والتقييم:</strong>
                <br />
                نفحص الستائر: نوع القماش، حالته، مستوى الاتساخ، والبقع الموجودة. نختبر ثبات الألوان
                بوضع بخار على منطقة صغيرة غير ظاهرة (من الخلف أو في الأسفل) للتأكد من أن القماش يتحمل
                البخار. نحدد أفضل طريقة تنظيف مناسبة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">2. تحضير المكان:</strong>
                <br />
                ندفع الأثاث القريب من الستارة قليلاً لنوفر مساحة عمل. نضع أغطية واقية على الأرضية تحت
                الستارة لحمايتها من الماء والأوساخ المتساقطة. نحضر معدات البخار ونملأها بالماء الساخن
                والمنظف المناسب.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">3. التنظيف الأولي:</strong>
                <br />
                نستخدم مكنسة كهربائية ذات فرشاة ناعمة لإزالة الأتربة السطحية والغبار المتراكم. هذا يجعل
                التنظيف بالبخار أكثر فعالية ويقلل من كمية الأوساخ التي ستذوب بالبخار.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">4. معالجة البقع:</strong>
                <br />
                إذا كانت هناك بقع عنيدة، نطبق عليها منظفات متخصصة مناسبة لنوع البقعة والقماش. نترك
                المنظف يتفاعل مع البقعة لبضع دقائق قبل البدء بالبخار.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">5. التنظيف بالبخار:</strong>
                <br />
                نبدأ من الأعلى ونعمل بالتدرج نحو الأسفل. نمرر جهاز البخار ببطء على كامل سطح الستارة،
                الأمامي والخلفي. البخار الساخن يخترق القماش، يذيب الأوساخ، يقتل البكتيريا، ويزيل
                الروائح. نركز أكثر على المناطق المتسخة جداً أو التي بها بقع.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">6. الشفط (إذا لزم):</strong>
                <br />
                لبعض أنواع الستائر السميكة، نستخدم جهاز شفط لسحب الرطوبة الزائدة والأوساخ المذابة. هذا
                يسرع الجفاف ويضمن نظافة أعمق.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">7. التعطير (اختياري):</strong>
                <br />
                نرش معطر لطيف وآمن لرائحة منعشة تدوم طويلاً. يمكنك اختيار رائحتك المفضلة أو تركها
                طبيعية.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">8. التهوية والجفاف:</strong>
                <br />
                ننصحك بفتح النوافذ أو تشغيل المكيف لتسريع الجفاف. ندفع الأثاث إلى مكانه. الستائر ستجف
                خلال 3-5 ساعات وستكون جاهزة للاستخدام.
              </li>
            </ol>

            <p className="text-lg font-semibold text-primary">
              بعد التنظيف، ستائرك ستبدو وتشم كأنها جديدة - ألوان زاهية، قماش نظيف، ورائحة منعشة!
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">أنواع الستائر التي نقوم بتنظيفها</h2>

            <ul className="list-inside list-disc space-y-3 pr-6">
              <li className="leading-relaxed">
                <strong>الستائر القماشية العادية:</strong> قطن، كتان، بوليستر - نظفها بالبخار بسهولة
                وأمان.
              </li>
              <li className="leading-relaxed">
                <strong>الستائر المخملية (القطيفة):</strong> نتعامل معها بحذر للحفاظ على ملمسها الناعم
                المميز.
              </li>
              <li className="leading-relaxed">
                <strong>الستائر الثقيلة المبطنة:</strong> حتى لو كانت ثقيلة جداً، معداتنا القوية تنظفها
                بكفاءة.
              </li>
              <li className="leading-relaxed">
                <strong>الستائر الحريرية والحساسة:</strong> نستخدم درجة حرارة وضغط بخار مناسبين لحمايتها.
              </li>
              <li className="leading-relaxed">
                <strong>الستائر الرأسية (البلايند العمودي):</strong> القماشية، ننظفها قطعة بقطعة بالبخار.
              </li>
              <li className="leading-relaxed">
                <strong>الستائر الرول (Roller Blinds):</strong> إذا كانت قماشية، نظفها بالبخار أو المسح.
              </li>
              <li className="leading-relaxed">
                <strong>الستائر الشفافة (التول):</strong> نظفها بلطف دون تلف النسيج الرقيق.
              </li>
            </ul>

            <p className="leading-relaxed">
              مهما كان نوع ستائرك، لدينا الخبرة والمعدات المناسبة لتنظيفها بأمان واحترافية.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">المدة والتسعير</h2>

            <div className="rounded-lg bg-blue-50 p-6">
              <h4 className="mb-3 text-xl font-bold text-gray-900">تقديرات عامة:</h4>
              <ul className="space-y-2">
                <li>
                  <strong>ستارة صغيرة/متوسطة (2×2.5 متر):</strong> 15-20 دقيقة
                </li>
                <li>
                  <strong>ستارة كبيرة (3×4 متر):</strong> 30-40 دقيقة
                </li>
                <li>
                  <strong>ستارة طويلة جداً (4×5 متر أو أكثر):</strong> 45-60 دقيقة
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة قد تزيد للستائر المتسخة جداً أو التي بها بقع عنيدة كثيرة
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> حجم الستارة (العرض × الطول)، نوع القماش، مستوى الاتساخ،
              عدد البقع، خدمات إضافية (معطر خاص، معالجة البقع المكثفة).
            </p>

            <p className="leading-relaxed">
              نقدم أسعاراً تنافسية وخصومات خاصة عند تنظيف عدة ستائر في نفس الزيارة. تنظيف 4 ستائر أو
              أكثر يحصل على خصم 15%. الجمع مع خدمات أخرى (تنظيف كنب، سجاد) يحصل على خصم إضافي. تواصل
              معنا للحصول على عرض سعر دقيق!
            </p>

            <h2 className="text-3xl font-bold text-gray-900">نصائح للحفاظ على نظافة الستائر</h2>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>نفض الستائر بخفة كل أسبوعين لإزالة الأتربة السطحية</li>
              <li>استخدم مكنسة بفرشاة ناعمة لتنظيف الستائر شهرياً</li>
              <li>افتح النوافذ بانتظام للتهوية وتقليل تراكم الروائح</li>
              <li>لا تترك الستائر مغلقة طوال الوقت - افتحها يومياً للتهوية</li>
              <li>عالج البقع فوراً قبل أن تجف وتثبت</li>
              <li>احجز تنظيفاً احترافياً بالبخار كل 6-12 شهر</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900">الضمان والسلامة</h2>

            <p className="leading-relaxed">
              <strong>ضمان الرضا:</strong> نضمن جودة عملنا. إذا لم تكن راضياً عن النتيجة، سنعيد تنظيف
              الستائر دون رسوم إضافية. رضاك هو هدفنا.
            </p>

            <p className="leading-relaxed">
              <strong>مواد آمنة:</strong> جميع منظفاتنا ومعطراتنا آمنة على الأقمشة، غير سامة، وآمنة على
              الأطفال والحيوانات الأليفة. معتمدة ومختبرة.
            </p>

            <p className="leading-relaxed">
              <strong>فريق محترف:</strong> فنيونا مدربون على التعامل مع جميع أنواع الأقمشة والستائر،
              حتى الثمينة والحساسة منها. نعامل ستائرك بعناية فائقة.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف الستائر" }} />

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
                <p className="text-gray-600">تنظيف بالبخار للمفروشات</p>
              </Link>
              <Link
                href="/services/carpet"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف السجاد</h3>
                <p className="text-gray-600">غسيل السجاد بالبخار</p>
              </Link>
              <Link
                href="/services/home-cleaning-jeddah"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المنازل</h3>
                <p className="text-gray-600">تنظيف شامل لكل المنزل</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
