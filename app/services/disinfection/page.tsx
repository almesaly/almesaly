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
import { CheckCircle, Shield, Sparkles, AlertTriangle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات التعقيم والتطهير بجدة | قضاء على الجراثيم",
  description:
    "خدمات تعقيم وتطهير احترافية في جدة. القضاء على الفيروسات والبكتيريا والجراثيم بمواد معتمدة من وزارة الصحة. حماية لك ولعائلتك.",
  alternates: {
    canonical: `${site.url}/services/disinfection`,
  },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "التعقيم والتطهير", url: "/services/disinfection" },
];

const faqs = [
  {
    question: "ما الفرق بين التنظيف والتعقيم؟",
    answer:
      "التنظيف يزيل الأوساخ والأتربة المرئية من الأسطح باستخدام الماء والصابون، مما يقلل عدد الجراثيم لكن لا يقتلها بالضرورة. أما التعقيم والتطهير فيستخدم مواد كيميائية مخصصة (معقمات) تقتل 99.9% من البكتيريا، الفيروسات، والجراثيم على الأسطح. التنظيف ضروري قبل التعقيم لأن الأوساخ يمكن أن تحمي الجراثيم من المعقم. لذا نحن ننظف أولاً ثم نعقم لضمان أقصى فعالية.",
  },
  {
    question: "هل المواد المستخدمة في التعقيم آمنة على الأطفال والحيوانات الأليفة؟",
    answer:
      "نعم، نستخدم معقمات معتمدة من وزارة الصحة السعودية، آمنة للاستخدام في الأماكن المأهولة. هذه المعقمات فعالة ضد الجراثيم لكنها آمنة على البشر والحيوانات بعد جفافها. نطبق المعقم، ننتظر الوقت المطلوب لقتل الجراثيم (عادة 5-10 دقائق)، ثم إذا لزم الأمر نمسح الأسطح الملامسة (مثل مقابض الأبواب، الطاولات) بماء نظيف. بعد ذلك المكان آمن تماماً للاستخدام. يمكنك العودة إلى منزلك أو مكتبك خلال ساعة واحدة من انتهاء الخدمة.",
  },
  {
    question: "متى يجب أن أحجز خدمة التعقيم والتطهير؟",
    answer:
      "نوصي بخدمة التعقيم في هذه الحالات: 1) بعد إصابة أحد أفراد الأسرة بمرض معدٍ (كورونا، إنفلونزا، نزلات معوية)، 2) قبل استقبال مولود جديد أو أشخاص ضعيفي المناعة، 3) بشكل دوري في المنازل التي بها أطفال صغار أو كبار سن (كل 2-3 أشهر)، 4) للمدارس والحضانات (شهرياً أو كل شهرين)، 5) للمستشفيات والعيادات (أسبوعياً)، 6) للمكاتب والشركات (شهرياً كإجراء وقائي)، 7) بعد تجمع كبير أو حفل، 8) عند الانتقال لمنزل جديد.",
  },
  {
    question: "كم تستمر فعالية التعقيم؟",
    answer:
      "التعقيم يقتل الجراثيم الموجودة على الأسطح وقت التطبيق. لكن الفعالية تعتمد على عدة عوامل: مدى استخدام المكان (الأماكن كثيرة الاستخدام تحتاج تعقيماً أكثر تكراراً)، عدد الأشخاص، ومستوى النظافة اليومي. في الظروف العادية، التعقيم يوفر حماية جيدة لمدة 2-4 أسابيع في المنازل، و1-2 أسبوع في الأماكن العامة. نوفر أيضاً خيار الطلاء بمواد مضادة للميكروبات طويلة الأمد توفر حماية تستمر 3-6 أشهر.",
  },
  {
    question: "ما الأماكن التي يتم تعقيمها في المنزل أو المكتب؟",
    answer:
      "نركز على الأسطح الأكثر ملامسة (high-touch surfaces) لأنها الأكثر نقلاً للجراثيم: مقابض الأبواب، مفاتيح الإضاءة، الطاولات، أسطح المكاتب، لوحات المفاتيح، الهواتف، الحنفيات، مقابض الخزائن، الكراسي، الأسرّة، الأجهزة الإلكترونية، المراحيض، الأحواض، وأي أسطح أخرى يتم لمسها بكثرة. كما نعقم الأرضيات والجدران. يمكننا أيضاً تعقيم الهواء باستخدام رذاذ التعقيم في الأماكن المغلقة.",
  },
  {
    question: "هل التعقيم يكفي أم يجب التنظيف أيضاً؟",
    answer:
      "التعقيم والتنظيف يكملان بعضهما ولا يغنيان عن بعض. التنظيف ضروري لإزالة الأوساخ المرئية، الأتربة، والبقع. التعقيم يقتل الجراثيم غير المرئية. الطريقة المثلى هي: تنظيف أولاً لإزالة الأوساخ، ثم تعقيم لقتل الجراثيم. بعض عملائنا يحجزون التنظيف العميق مع التعقيم في نفس الوقت (نقدم خصماً خاصاً عند الجمع بين الخدمتين). كما ننصح بالتنظيف اليومي البسيط مع تعقيم دوري احترافي.",
  },
  {
    question: "ما نوع المعقمات التي تستخدمونها؟",
    answer:
      "نستخدم عدة أنواع من المعقمات حسب نوع السطح والحاجة: 1) معقمات بالكلور (Chlorine-based) - قوية جداً، مثالية للحمامات والمطابخ، تقتل معظم أنواع الفيروسات والبكتيريا. 2) معقمات رباعية الأمونيوم (Quaternary Ammonium) - آمنة ولطيفة، مناسبة للأسطح الحساسة والأثاث. 3) معقمات بالكحول (70% إيثانول) - سريعة المفعول، ممتازة للأجهزة الإلكترونية. 4) بيروكسيد الهيدروجين - صديق للبيئة، فعال ضد معظم الفيروسات. جميع موادنا معتمدة ومطابقة للمواصفات الصحية.",
  },
  {
    question: "هل تقدمون عقود تعقيم دورية للشركات والمنشآت؟",
    answer:
      "نعم، نقدم عقود تعقيم دورية مخصصة للشركات، المكاتب، المدارس، الحضانات، المستشفيات، الفنادق، المطاعم، والمنشآت التجارية. العقود تشمل: زيارات منتظمة (أسبوعياً، نصف شهرياً، أو شهرياً)، أسعار مخفضة، أولوية في الخدمة الطارئة، تقارير دورية، وشهادة تعقيم رسمية يمكن عرضها للعملاء والجهات الرقابية. هذا يوفر راحة بال، يحمي صحة الموظفين والعملاء، ويظهر التزامك بالمعايير الصحية.",
  },
];

const services = [
  "تعقيم جميع الأسطح الملامسة",
  "تطهير المطابخ والحمامات",
  "تعقيم الأرضيات والجدران",
  "تعقيم الأجهزة والمعدات",
  "تطهير الهواء (رذاذ التعقيم)",
  "القضاء على الفيروسات والبكتيريا",
  "إزالة الروائح والتعطير",
  "شهادة تعقيم رسمية (عند الطلب)",
];

const benefits = [
  {
    icon: Shield,
    title: "حماية من الأمراض المعدية",
    description: "القضاء على 99.9% من الفيروسات والبكتيريا المسببة للأمراض",
  },
  {
    icon: Users,
    title: "بيئة صحية للعائلة",
    description: "حماية خاصة للأطفال وكبار السن والأشخاص ضعيفي المناعة",
  },
  {
    icon: Sparkles,
    title: "نظافة شاملة ورائحة منعشة",
    description: "مكان نظيف ومعقم برائحة منعشة خالية من الروائح الكريهة",
  },
  {
    icon: AlertTriangle,
    title: "الامتثال للمعايير الصحية",
    description: "مطابقة للاشتراطات الصحية مع إمكانية الحصول على شهادة رسمية",
  },
];

export default function DisinfectionPage() {
  const schemas = [
    generateServiceSchema(
      "التعقيم والتطهير بجدة",
      "خدمات تعقيم وتطهير احترافية في جدة. القضاء على الفيروسات والبكتيريا بمواد معتمدة وآمنة."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: `${site.url}/services` },
      { name: "التعقيم والتطهير", url: `${site.url}/services/disinfection` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="التعقيم والتطهير بجدة - حماية صحية شاملة"
        subtitle="التعقيم والتطهير"
        description="احمِ عائلتك وموظفيك من الفيروسات والبكتيريا مع خدمات التعقيم المتخصصة. مواد معتمدة وآمنة وفعالة."
        image="disinfecting service.jpg"
        imageAlt="التعقيم والتطهير في جدة - شركة المثالي"
        context={{ service: "التعقيم" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              خدمات التعقيم والتطهير في جدة - حماية حقيقية لا تراها لكن تشعر بها
            </h2>
            <p className="text-lg leading-relaxed">
              في عالم اليوم، خاصة بعد جائحة كورونا، أصبح الوعي بأهمية التعقيم والتطهير أكبر من أي
              وقت مضى. النظافة المرئية لا تكفي - فالفيروسات والبكتيريا والجراثيم غير مرئية بالعين
              المجردة، لكنها موجودة في كل مكان: على مقابض الأبواب، الطاولات، مفاتيح الإضاءة، الهواتف،
              وأي سطح يتم لمسه. هذه الجراثيم يمكن أن تسبب أمراضاً خطيرة، خاصة للأطفال الصغار، كبار
              السن، والأشخاص ذوي المناعة الضعيفة.
            </p>

            <p className="leading-relaxed">
              التعقيم والتطهير ليس رفاهية، بل ضرورة صحية في المنازل، المكاتب، المدارس، المستشفيات،
              والأماكن العامة. في جدة، حيث الازدحام السكاني والحركة الكثيفة في الأماكن العامة،
              التعقيم الدوري أكثر أهمية للحد من انتشار العدوى والأمراض المعدية.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمات احترافية في{" "}
              <strong>التعقيم والتطهير في جدة</strong> لجميع أنواع الأماكن: المنازل، الشقق، الفلل،
              المكاتب، المدارس، الحضانات، المستشفيات، العيادات، المطاعم، الفنادق، والمنشآت التجارية.
              نستخدم أحدث التقنيات وأقوى المعقمات المعتمدة من وزارة الصحة السعودية لنضمن لك بيئة
              نظيفة، آمنة، وخالية من الجراثيم بنسبة 99.9%.
            </p>

            <div className="relative my-8 h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/disinfecting service.jpg"
                alt="خدمات التعقيم والتطهير في جدة"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 800px"
              />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا التعقيم والتطهير المنتظم ضروري؟
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. القضاء على الجراثيم غير المرئية
                </h4>
                <p className="leading-relaxed">
                  التنظيف العادي بالماء والصابون يزيل الأوساخ المرئية ويقلل عدد الجراثيم، لكنه لا
                  يقتلها بالضرورة. المعقمات الاحترافية التي نستخدمها مصممة خصيصاً لقتل 99.9% من
                  البكتيريا، الفيروسات (بما في ذلك فيروس كورونا، الإنفلونزا، نوروفيروس)، الفطريات،
                  والجراثيم الأخرى على الأسطح. هذا يوفر حماية حقيقية ضد الأمراض المعدية.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. حماية الفئات الأكثر عرضة للخطر
                </h4>
                <p className="leading-relaxed">
                  الأطفال الصغار الذين يلمسون كل شيء ويضعون أيديهم في أفواههم، كبار السن بمناعتهم
                  الضعيفة، الحوامل، والأشخاص الذين يعانون من أمراض مزمنة أو يتناولون أدوية تضعف
                  المناعة - كل هؤلاء أكثر عرضة للإصابة بالأمراض المعدية. التعقيم المنتظم يقلل بشكل
                  كبير من خطر انتقال العدوى إليهم، ويوفر بيئة آمنة وصحية لهم.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. الوقاية من انتشار الأمراض المعدية
                </h4>
                <p className="leading-relaxed">
                  عندما يمرض أحد أفراد الأسرة بمرض معدٍ (إنفلونزا، كورونا، نزلة معوية)، ينشر الفيروس
                  على جميع الأسطح التي يلمسها. التعقيم الفوري والشامل يمنع انتقال المرض إلى باقي أفراد
                  الأسرة أو الزملاء في العمل. هذا مهم بشكل خاص في المدارس، الحضانات، والمكاتب حيث
                  يمكن لشخص واحد مريض أن ينقل العدوى إلى عشرات الآخرين.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. الامتثال للمعايير الصحية والقانونية
                </h4>
                <p className="leading-relaxed">
                  للمنشآت التجارية، المطاعم، الفنادق، المستشفيات، المدارس، والحضانات - التعقيم ليس
                  اختيارياً بل متطلب قانوني وصحي. وزارة الصحة والبلديات تطلب مستويات معينة من النظافة
                  والتعقيم، وقد تجري تفتيشات دورية. خدمة التعقيم الاحترافية تضمن الامتثال لهذه المعايير،
                  وتحميك من الغرامات أو الإغلاق. نوفر أيضاً شهادات تعقيم رسمية يمكن عرضها.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  5. تحسين الصحة العامة وتقليل الغياب المرضي
                </h4>
                <p className="leading-relaxed">
                  في المكاتب والشركات، الموظف المريض يعني انخفاض الإنتاجية وانتشار العدوى. التعقيم
                  الدوري يقلل من معدلات الإصابة بالأمراض المعدية، مما يقلل الغياب المرضي ويحافظ على
                  إنتاجية الفريق. في المدارس، يقلل من غياب الطلاب ويوفر بيئة تعليمية صحية.
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
              فوائد خدمات التعقيم والتطهير
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
                ما الذي تشمله خدمة التعقيم؟
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
            <h2 className="text-3xl font-bold text-gray-900">خطوات عملنا في التعقيم والتطهير</h2>

            <p className="leading-relaxed">
              نتبع بروتوكولاً علمياً صارماً معتمداً من منظمة الصحة العالمية ووزارة الصحة السعودية:
            </p>

            <ol className="space-y-4 pr-6">
              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">1. التقييم والتخطيط:</strong>
                <br />
                نفحص المكان بالكامل: نوع المبنى، المساحة، نوع الأسطح، مستوى الخطورة (منزل عادي، عيادة
                طبية، حضانة، إلخ). نحدد الأماكن ذات الأولوية (الأسطح الأكثر ملامسة)، ونختار المعقمات
                المناسبة. نشرح لك خطة العمل والوقت المطلوب.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">2. التنظيف الأولي:</strong>
                <br />
                قبل التعقيم، يجب تنظيف الأسطح من الأوساخ المرئية لأن الأوساخ يمكن أن تحمي الجراثيم من
                المعقم. ننظف جميع الأسطح بالماء والمنظفات المناسبة. إذا كان المكان متسخاً جداً، ننصح
                بخدمة التنظيف العميق قبل التعقيم (نقدم خصماً عند الجمع بين الخدمتين).
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">3. اختيار وتحضير المعقم المناسب:</strong>
                <br />
                نختار المعقم الأنسب حسب نوع السطح والجراثيم المستهدفة: معقمات الكلور للحمامات والأرضيات،
                معقمات الأمونيوم الرباعي للأثاث والأسطح الحساسة، الكحول للأجهزة الإلكترونية، إلخ. نحضر
                المحلول بالتركيز الصحيح حسب تعليمات الشركة المصنعة ومعايير وزارة الصحة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">4. تطبيق المعقم على الأسطح:</strong>
                <br />
                نطبق المعقم على جميع الأسطح الملامسة: مقابض الأبواب، مفاتيح الكهرباء، الطاولات،
                الكراسي، أسطح المطبخ، الحمامات، الأجهزة، الهواتف، لوحات المفاتيح، الحنفيات، وغيرها.
                نستخدم عدة طرق حسب الحاجة: المسح بقماش مبلل بالمعقم، الرش المباشر، أو الرذاذ الناعم
                (fogging) للأماكن الواسعة أو الصعبة الوصول.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">5. الانتظار (وقت التلامس المطلوب):</strong>
                <br />
                بعد تطبيق المعقم، يجب تركه على السطح لفترة معينة (5-10 دقائق عادة) ليقتل الجراثيم. هذا
                ما يسمى "وقت التلامس". الكثير من الناس يخطئون برش المعقم ومسحه فوراً، مما يلغي فعاليته.
                نحن نلتزم بالوقت المطلوب لضمان القضاء التام على الجراثيم.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">6. المسح النهائي (إذا لزم):</strong>
                <br />
                بعض المعقمات (خاصة القوية منها) قد تترك بقايا أو رائحة. للأسطح التي تلامس الطعام أو
                اللعب الأطفال، نمسحها بماء نظيف بعد جفاف المعقم لإزالة أي بقايا. هذا اختياري ويعتمد على
                نوع المعقم والسطح.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">7. تعقيم الهواء (اختياري):</strong>
                <br />
                في الأماكن المغلقة أو بعد حالة مرض معدٍ، نقدم خدمة تعقيم الهواء باستخدام أجهزة الرذاذ
                (ULV foggers) التي تنشر رذاذاً ناعماً جداً من المعقم في الهواء. هذا يقتل الجراثيم
                العالقة في الهواء ويصل إلى جميع الأماكن الصعبة والزوايا الخفية.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">8. التهوية:</strong>
                <br />
                بعد التعقيم، نهوي المكان جيداً لتقليل أي روائح متبقية من المعقمات. نفتح النوافذ والأبواب
                لمدة 30-60 دقيقة.
              </li>

              <li className="leading-relaxed">
                <strong className="text-lg text-gray-900">9. الفحص النهائي والتوثيق:</strong>
                <br />
                نفحص جميع المناطق للتأكد من تغطية شاملة. نوثق العمل المنجز، المعقمات المستخدمة،
                والتاريخ. نوفر شهادة تعقيم رسمية (عند الطلب) موضح فيها تفاصيل الخدمة.
              </li>
            </ol>

            <p className="text-lg font-semibold text-primary">
              بعد التعقيم، يمكنك استخدام المكان بأمان خلال ساعة واحدة. مكانك الآن نظيف ومعقم وآمن!
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">الأماكن التي نقدم لها خدمات التعقيم</h2>

            <ul className="grid gap-4 md:grid-cols-2">
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>المنازل والشقق:</strong> تعقيم شامل لجميع الغرف والمرافق
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>المكاتب والشركات:</strong> حماية الموظفين وتقليل الغياب المرضي
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>المدارس والحضانات:</strong> بيئة آمنة للأطفال والطلاب
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>المستشفيات والعيادات:</strong> معايير طبية عالية ومطابقة للاشتراطات
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>المطاعم والمقاهي:</strong> سلامة غذائية وامتثال للمعايير الصحية
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>الفنادق والشقق المفروشة:</strong> ثقة وراحة بال للنزلاء
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>الصالات الرياضية والنوادي:</strong> نظافة المعدات والمرافق المشتركة
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg bg-white p-4">
                <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <div>
                  <strong>وسائل النقل:</strong> سيارات، حافلات، طائرات - تعقيم شامل
                </div>
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
                  <strong>شقة صغيرة (غرفتين):</strong> 45-60 دقيقة
                </li>
                <li>
                  <strong>منزل متوسط (3-4 غرف):</strong> 1-1.5 ساعة
                </li>
                <li>
                  <strong>فيلا كبيرة:</strong> 2-3 ساعات
                </li>
                <li>
                  <strong>مكتب أو عيادة:</strong> 1-2 ساعة حسب المساحة
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-600">
                * المدة تعتمد على المساحة، عدد الأسطح، ومستوى التعقيم المطلوب
              </p>
            </div>

            <p className="leading-relaxed">
              <strong>عوامل التسعير:</strong> مساحة المكان، نوع المنشأة (منزل، مكتب، عيادة، مطعم)،
              مستوى التعقيم (عادي أم مكثف)، نوع المعقمات المستخدمة، خدمات إضافية (تعقيم هواء، شهادة
              رسمية)، التكرار (خدمة واحدة أم عقد دوري).
            </p>

            <p className="leading-relaxed">
              نقدم أسعاراً تنافسية جداً وخصومات خاصة للعقود الدورية (توفير يصل إلى 25%)، عند الجمع مع
              خدمة التنظيف العميق، وللمنشآت التي تحتاج تعقيماً متكرراً. تواصل معنا للحصول على عرض سعر
              مخصص!
            </p>

            <h2 className="text-3xl font-bold text-gray-900">الضمان والمعايير</h2>

            <p className="leading-relaxed">
              <strong>معقمات معتمدة:</strong> جميع المعقمات التي نستخدمها معتمدة من وزارة الصحة
              السعودية والهيئة العامة للغذاء والدواء (SFDA)، ومطابقة للمواصفات العالمية. فعالة ضد
              99.9% من الجراثيم، آمنة على البشر والحيوانات.
            </p>

            <p className="leading-relaxed">
              <strong>فريق مدرب ومعتمد:</strong> فنيونا مدربون على بروتوكولات التعقيم المعتمدة من
              منظمة الصحة العالمية (WHO) ومراكز السيطرة على الأمراض (CDC). نلتزم بإجراءات السلامة
              ونرتدي معدات الحماية الشخصية.
            </p>

            <p className="leading-relaxed">
              <strong>شهادات رسمية:</strong> نوفر شهادة تعقيم رسمية موضح فيها: تاريخ التعقيم، المعقمات
              المستخدمة، المناطق المعقمة، واسم الفني. يمكنك عرضها للجهات الرقابية أو للعملاء لإثبات
              التزامك بالمعايير الصحية.
            </p>

            <p className="leading-relaxed">
              <strong>ضمان الخدمة:</strong> نضمن جودة عملنا. إذا كان لديك أي قلق أو استفسار بعد
              التعقيم، تواصل معنا وسنساعدك فوراً.
            </p>
          </div>
        </div>
      </section>

      <CTASection context={{ service: "التعقيم" }} />

      <FAQ faqs={faqs} />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">خدمات مرتبطة قد تهمك</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Link
                href="/services/deep-cleaning"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">التنظيف العميق</h3>
                <p className="text-gray-600">تنظيف شامل قبل التعقيم لأفضل النتائج</p>
              </Link>
              <Link
                href="/services/ac-cleaning"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف المكيفات</h3>
                <p className="text-gray-600">هواء نقي وصحي في منزلك</p>
              </Link>
              <Link
                href="/services/water-tank"
                className="rounded-lg border bg-gray-50 p-6 transition-all hover:border-primary hover:shadow-md"
              >
                <h3 className="mb-2 text-xl font-bold text-gray-900">تنظيف خزانات المياه</h3>
                <p className="text-gray-600">مياه نظيفة ومعقمة للشرب</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
