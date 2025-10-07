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
  title: "تنظيف الكنب والمجالس بجدة | تنظيف بالبخار",
  description:
    "خدمة تنظيف الكنب والمجالس بالبخار في جدة. إزالة البقع والروائح والبكتيريا بتقنية البخار الساخن. نتائج فورية وأمان تام.",
  alternates: {
    canonical: `${site.url}/services/upholstery-sofa`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف الكنب والمجالس", url: "/services/upholstery-sofa" },
];

const faqs = [
  {
    question: "كيف يتم تنظيف الكنب بالبخار؟",
    answer:
      "نستخدم ماكينات بخار احترافية تنتج بخاراً ساخناً بدرجة عالية (حوالي 150 درجة مئوية) تحت ضغط. البخار الساخن يخترق عمق نسيج الكنب، يذيب الأوساخ والدهون، يقتل البكتيريا والعث، ويزيل الروائح. ثم نستخدم جهاز شفط قوي لسحب الماء والأوساخ، ما يترك الكنب نظيفاً وشبه جاف. هذه الطريقة آمنة جداً ولا تضر بالأقمشة، بل تحافظ على ألوانها وملمسها.",
  },
  {
    question: "هل التنظيف بالبخار آمن لجميع أنواع الأقمشة؟",
    answer:
      "البخار آمن لمعظم أنواع الأقمشة (قطن، كتان، مخمل، بوليستر). لكن بعض الأقمشة الحساسة جداً مثل الحرير الطبيعي أو الجلد قد تحتاج تقنيات خاصة. قبل البدء، نفحص نوع القماش ونختبر منطقة صغيرة غير ظاهرة لنتأكد من أن القماش يتحمل البخار. لدينا خبرة في التعامل مع جميع أنواع الأقمشة والمفروشات.",
  },
  {
    question: "كم يستغرق تنظيف الكنب وهل يجف سريعاً؟",
    answer:
      "تنظيف كنبة من 7 قطع (3+2+2) يستغرق عادة 45-60 دقيقة. بعد التنظيف، الكنب يكون رطباً قليلاً (وليس مبللاً تماماً). في الأجواء العادية، يجف خلال 4-6 ساعات. يمكنك تسريع الجفاف بفتح النوافذ أو تشغيل المكيف أو المروحة. نوصي بعدم الجلوس على الكنب حتى يجف تماماً لضمان أفضل النتائج.",
  },
  {
    question: "هل تنظيف البخار يزيل البقع العنيدة؟",
    answer:
      "البخار فعال جداً في إزالة معظم البقع (قهوة، شاي، طعام، بقع دهنية). للبقع العنيدة القديمة، نستخدم منظفات متخصصة آمنة قبل البخار لتفكيك البقعة. في معظم الحالات، نحقق نتائج ممتازة. بعض البقع القديمة جداً أو الحروق قد لا تزول بالكامل، لكن نعمل دائماً على تحسين المظهر بأقصى درجة ممكنة.",
  },
  {
    question: "هل التنظيف يشمل إزالة الروائح؟",
    answer:
      "نعم! البخار الساخن يقتل البكتيريا والعفن المسببة للروائح الكريهة. كما نستخدم مزيلات روائح احترافية آمنة وفعالة. بعد التنظيف، ستلاحظ اختفاء الروائح المزعجة واستبدالها برائحة منعشة ونظيفة. التنظيف بالبخار مثالي للتخلص من روائح الطعام، الدخان، أو الحيوانات الأليفة.",
  },
  {
    question: "هل تنظفون الكنب في نفس المكان أم تأخذونه؟",
    answer:
      "نقدم خدمة تنظيف في الموقع - نأتي إلى منزلك بجميع المعدات ونظف الكنب في مكانه دون الحاجة لنقله. هذا أكثر راحة لك ويوفر الوقت والجهد. نحمي أرضيتك بوضع أغطية واقية تحت المعدات.",
  },
  {
    question: "كم مرة يجب تنظيف الكنب والمجالس؟",
    answer:
      "للاستخدام العائلي العادي، نوصي بتنظيف الكنب مرة كل 6-12 شهر. إذا كان لديك أطفال صغار، حيوانات أليفة، أو تستضيف ضيوفاً كثيراً، فمن الأفضل تنظيفه كل 3-6 أشهر. التنظيف المنتظم يطيل عمر المفروشات ويحافظ على مظهرها الجميل ويضمن بيئة صحية.",
  },
  {
    question: "هل تنظفون أيضاً الوسائد والمساند؟",
    answer:
      "بالتأكيد! الخدمة تشمل تنظيف جميع أجزاء الكنب: المقاعد، الظهر، الأذرع، والوسائد. نقلب الوسائد ونظفها من الجانبين لنضمن نظافة كاملة. نظف أيضاً المساند المنفصلة بنفس الجودة.",
  },
];

const services = [
  "تنظيف بالبخار الساخن عالي الضغط",
  "إزالة البقع والأوساخ العميقة",
  "القضاء على البكتيريا والعث",
  "إزالة الروائح الكريهة",
  "تنظيف جميع أنواع الأقمشة",
  "تنظيف الوسائد والمساند",
  "حماية وتعطير المفروشات",
  "خدمة في الموقع دون نقل الكنب",
];

export default function UpholsterySofaPage() {
  const schemas = [
    generateServiceSchema(
      "تنظيف الكنب والمجالس بجدة",
      "خدمة تنظيف الكنب والمفروشات بالبخار في جدة. تقنية حديثة لإزالة البقع والروائح والبكتيريا بأمان تام."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "تنظيف الكنب والمجالس", url: `${site.url}/services/upholstery-sofa` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="تنظيف الكنب والمجالس بجدة - تنظيف بالبخار بنتائج مذهلة"
        subtitle="تنظيف الكنب والمفروشات"
        description="أعد لكنبك نظافته وانتعاشه مع خدمة التنظيف بالبخار المتخصصة. إزالة البقع، القضاء على البكتيريا، والتخلص من الروائح - كل ذلك بأمان تام."
        image="sofa cleaning Jeddah.jpg"
        imageAlt="تنظيف الكنب بالبخار في جدة - شركة المثالي"
        context={{ service: "تنظيف الكنب" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              تنظيف الكنب والمجالس بجدة - لأن مفروشاتك تستحق العناية
            </h2>
            <p className="text-lg leading-relaxed">
              الكنب والمجالس هي قلب منزلك - حيث تجتمع العائلة، تستقبل الضيوف، وتقضي أجمل الأوقات.
              لكن مع الاستخدام اليومي، تتعرض المفروشات لتراكم الأتربة، البقع، الروائح، والبكتيريا
              الخفية التي لا تراها العين. التنظيف السطحي بالمكنسة لا يكفي للوصول إلى عمق النسيج حيث
              تختبئ الأوساخ الحقيقية.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمة متخصصة في{" "}
              <strong>تنظيف الكنب والمجالس بالبخار في جدة</strong> - تقنية حديثة وآمنة تماماً تصل إلى
              أعمق طبقات النسيج لتزيل الأوساخ، تقتل البكتيريا والعث، وتعيد لمفروشاتك نضارتها
              وانتعاشها كأنها جديدة. خدمتنا مثالية لجميع أنواع الكنب - سواء كان قماشياً، مخملياً، أو
              حتى جلدياً.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا يعتبر التنظيف بالبخار الأفضل للكنب والمفروشات؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">1. تنظيف عميق بدون مواد كيميائية قاسية</h4>
                <p className="leading-relaxed">
                  البخار الساخن (بدرجة حرارة تصل إلى 150 درجة مئوية) يخترق عمق نسيج الكنب ويذيب
                  الأوساخ والشحوم المتراكمة دون الحاجة لاستخدام كميات كبيرة من المنظفات الكيميائية. هذا
                  يعني نظافة عميقة مع الحفاظ على صحتك وصحة عائلتك، خاصة إذا كان لديك أطفال صغار أو
                  حيوانات أليفة.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">2. القضاء على البكتيريا والعث</h4>
                <p className="leading-relaxed">
                  المفروشات تؤوي ملايين من البكتيريا، الفطريات، وعث الغبار الذي يسبب الحساسية ومشاكل
                  تنفسية. البخار الساخن بدرجة حرارة عالية يقتل 99.9% من هذه الكائنات الدقيقة، مما يجعل
                  منزلك بيئة أكثر صحة وأماناً. هذا مهم بشكل خاص في جدة حيث الرطوبة العالية تساعد على
                  نمو البكتيريا والعفن.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">3. إزالة البقع والروائح</h4>
                <p className="leading-relaxed">
                  سواء كانت بقع قهوة، عصير، طعام، أو حتى حبر، فإن البخار مع منظفاتنا المتخصصة يزيل
                  معظم البقع بفعالية. كما أن البخار يقضي على البكتيريا المسببة للروائح الكريهة، ويترك
                  مفروشاتك برائحة منعشة ونظيفة. لا مزيد من الروائح المحرجة عند استقبال الضيوف!
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">4. أمان تام على الأقمشة</h4>
                <p className="leading-relaxed">
                  على عكس بعض طرق التنظيف التقليدية التي قد تضر بالأقمشة أو تسبب بهتان الألوان، فإن
                  البخار لطيف وآمن. يحافظ على نسيج القماش، ألوانه الزاهية، وملمسه الناعم. فريقنا مدرب
                  على ضبط درجة الحرارة والضغط المناسبين لكل نوع قماش.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">5. جفاف سريع نسبياً</h4>
                <p className="leading-relaxed">
                  بعد التنظيف بالبخار، نستخدم أجهزة شفط قوية تسحب معظم الماء والأوساخ، ما يترك الكنب
                  رطباً قليلاً وليس مبللاً تماماً. يجف خلال 4-6 ساعات فقط، مقارنة بطرق الغسيل التقليدية
                  التي قد تحتاج يوم كامل أو أكثر.
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
              ما الذي تشمله خدمة تنظيف الكنب؟
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
              <h3 className="text-2xl font-bold text-gray-900">خطوات عملنا في تنظيف الكنب:</h3>

              <ol className="list-inside list-decimal space-y-3 pr-6">
                <li className="leading-relaxed">
                  <strong>الفحص والتقييم:</strong> نفحص نوع القماش، درجة الاتساخ، والبقع الموجودة لنحدد
                  أفضل أسلوب تنظيف.
                </li>
                <li className="leading-relaxed">
                  <strong>التنظيف بالمكنسة:</strong> نزيل الأتربة السطحية والشعر بمكنسة كهربائية قوية.
                </li>
                <li className="leading-relaxed">
                  <strong>معالجة البقع:</strong> نطبق منظفات متخصصة على البقع العنيدة ونتركها تتفاعل.
                </li>
                <li className="leading-relaxed">
                  <strong>التنظيف بالبخار:</strong> نستخدم ماكينة البخار الاحترافية على كامل سطح الكنب،
                  نمرر البخار الساخن ببطء لضمان اختراق عميق.
                </li>
                <li className="leading-relaxed">
                  <strong>الشفط والاستخلاص:</strong> نسحب الماء والأوساخ المذابة بجهاز شفط قوي.
                </li>
                <li className="leading-relaxed">
                  <strong>التعطير (اختياري):</strong> نضيف معطر آمن وطبيعي لرائحة منعشة.
                </li>
                <li className="leading-relaxed">
                  <strong>الفحص النهائي:</strong> نتأكد من نظافة جميع الأجزاء ورضاك التام.
                </li>
              </ol>
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
              <h4 className="mb-3 text-xl font-bold text-gray-900">تقديرات عامة للمدة:</h4>
              <ul className="space-y-2">
                <li>
                  <strong>كنبة 5 قطع (3+2):</strong> 30-40 دقيقة
                </li>
                <li>
                  <strong>كنبة 7 قطع (3+2+2):</strong> 45-60 دقيقة
                </li>
                <li>
                  <strong>مجلس عربي كبير:</strong> 60-90 دقيقة
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة قد تزيد إذا كانت هناك بقع عنيدة تحتاج معالجة إضافية
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> عدد القطع، حجم الكنب، نوع القماش، مستوى الاتساخ، خدمات
              إضافية (مثل حماية القماش بعد التنظيف).
            </p>

            <p className="leading-relaxed">
              نقدم أسعاراً تنافسية وخصومات خاصة عند تنظيف عدة قطع أو الجمع مع خدمات أخرى (مثل تنظيف
              السجاد أو الستائر). تواصل معنا للحصول على عرض سعر دقيق.
            </p>

            <h2 className="text-3xl font-bold text-gray-900">نصائح للحفاظ على نظافة الكنب</h2>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>نظف بالمكنسة أسبوعياً لإزالة الأتربة السطحية</li>
              <li>عالج البقع فوراً قبل أن تجف وتثبت</li>
              <li>اقلب الوسائد بانتظام لتوزيع الاستخدام بالتساوي</li>
              <li>تجنب أكل الطعام الدهني أو الملون على الكنب</li>
              <li>ضع أغطية قابلة للغسيل في حال وجود أطفال صغار أو حيوانات أليفة</li>
              <li>احجز تنظيفاً بالبخار كل 6-12 شهر</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900">الضمان والسلامة</h2>
            <p className="leading-relaxed">
              نضمن رضاك 100% عن نتيجة التنظيف. إذا لم تكن سعيداً بالنتيجة، سنعيد تنظيف القطعة دون
              رسوم إضافية. نحن مؤمّنون بالكامل ونستخدم معدات آمنة ومعتمدة. جميع موادنا آمنة على الأطفال
              والحيوانات الأليفة.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "تنظيف الكنب" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/carpet"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف السجاد</h3>
                <p className="text-gray-600">غسيل وتعقيم السجاد والموكيت</p>
              </Link>
              <Link
                href="/services/curtains"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف الستائر</h3>
                <p className="text-gray-600">تنظيف بالبخار دون فك الستائر</p>
              </Link>
              <Link
                href="/services/mattress"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المراتب</h3>
                <p className="text-gray-600">تنظيف وتعقيم المراتب والتخلص من العث</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



