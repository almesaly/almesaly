import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { ProcessSteps } from "@/components/process-steps";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { SchemaInjector } from "@/components/schema-injector";
import { site, services, sectors, areas } from "@/app/config/site";
import {
  generateLocalBusinessSchema,
  generateFAQSchema,
} from "@/lib/schema";
import { CheckCircle, Shield, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "الرئيسية",
  alternates: {
    canonical: site.url,
  },
};

const faqs = [
  {
    question: "ما هي المناطق التي تغطيها شركة المثالي في جدة؟",
    answer:
      "نقدم خدماتنا في جميع أحياء جدة بما في ذلك الحمراء، الروضة، الشاطئ، السلامة، النعيم، المرجان، النهضة، النزهة، الزهراء، الصفا، العزيزية، البوادي، النسيم، بني مالك، الخالدية، الأندلس، الحمدانية، أبحر الشمالية والجنوبية وغيرها من الأحياء. فريقنا جاهز للوصول إلى موقعك بسرعة وفي الوقت المحدد.",
  },
  {
    question: "كم تستغرق خدمة تنظيف المنزل أو الفيلا؟",
    answer:
      "تعتمد المدة على حجم المكان ونوع الخدمة المطلوبة. عادةً، تستغرق شقة من غرفتين حوالي 3-4 ساعات، بينما فيلا متوسطة قد تحتاج من 6-8 ساعات للتنظيف العميق. نقدم جدولة مرنة ونلتزم بإنهاء العمل في الوقت المتفق عليه دون التأثير على جودة التنظيف.",
  },
  {
    question: "هل تستخدمون مواد تنظيف آمنة وصديقة للبيئة؟",
    answer:
      "نعم، نستخدم مواد تنظيف عالية الجودة وآمنة للأطفال والحيوانات الأليفة. جميع منتجاتنا معتمدة ومطابقة للمواصفات الصحية السعودية. كما نوفر خيار المنتجات العضوية والصديقة للبيئة بالكامل عند الطلب. نلتزم بأعلى معايير السلامة في التعامل مع المواد الكيميائية.",
  },
  {
    question: "هل تقدمون ضمان على الخدمات؟",
    answer:
      "بالتأكيد! نقدم ضمان رضا العميل بنسبة 100%. إذا لم تكن راضياً تماماً عن جودة التنظيف، سنعيد تنظيف المناطق التي تحتاج إلى تحسين دون أي رسوم إضافية خلال 24 ساعة من انتهاء الخدمة. رضاك وثقتك هما أولويتنا القصوى.",
  },
  {
    question: "كيف يمكنني حجز موعد وما هي طرق الدفع المتاحة؟",
    answer:
      "يمكنك حجز موعد بسهولة عبر الاتصال المباشر، واتساب، أو من خلال نموذج الطلب على موقعنا. نقبل الدفع نقداً، بطاقات الائتمان، والتحويل البنكي. نوفر أيضاً خيارات دفع مرنة للباقات الشهرية والعقود طويلة الأمد للشركات والمؤسسات.",
  },
  {
    question: "هل تقدمون خدمات تنظيف دورية أم فقط خدمات لمرة واحدة؟",
    answer:
      "نقدم كلا الخيارين! خدماتنا متاحة لمرة واحدة، أو يمكنك الاشتراك في عقود دورية (أسبوعية، نصف شهرية، أو شهرية) بأسعار مخفضة. العقود الدورية تمنحك أولوية في الحجز، وفريق ثابت يعرف تفاصيل منزلك أو منشأتك، وخصومات تصل إلى 20% على الأسعار العادية.",
  },
  {
    question: "هل فريق العمل مدرب ومؤمّن؟",
    answer:
      "نعم، جميع أفراد فريقنا مدربون بشكل احترافي على أحدث تقنيات التنظيف، ويخضعون لفحوصات أمنية شاملة. نحن مؤمّنون بالكامل ضد أي أضرار قد تحدث أثناء العمل. كما يلتزم فريقنا بمعايير صارمة من الاحترافية والسلوك الأخلاقي، ويرتدون زياً موحداً ويحملون بطاقات تعريف رسمية.",
  },
  {
    question: "ما الفرق بين التنظيف العادي والتنظيف العميق؟",
    answer:
      "التنظيف العادي يشمل الأعمال اليومية: كنس، مسح الأرضيات، تنظيف الأسطح المرئية، والحمامات. أما التنظيف العميق فيشمل تنظيف شامل ومكثف: غسل الستائر، تنظيف النوافذ من الداخل والخارج، فرك البلاط والفواصل، تنظيف خلف الأجهزة، تلميع الأثاث، والوصول إلى الأماكن الصعبة. نوصي بالتنظيف العميق مرة واحدة كل 3-6 أشهر.",
  },
];

const features = [
  {
    icon: CheckCircle,
    title: "جودة مضمونة",
    description: "نستخدم أحدث المعدات والمواد الآمنة",
  },
  {
    icon: Shield,
    title: "مؤمّن ومرخّص",
    description: "شركة مسجلة رسمياً وفريق مدرب",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "عمالة مدربة وذات خبرة عالية",
  },
  {
    icon: Clock,
    title: "خدمة سريعة",
    description: "استجابة فورية ومواعيد مرنة",
  },
];

export default function HomePage() {
  const schemas = [
    generateLocalBusinessSchema(),
    generateFAQSchema(faqs),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />

      <Hero
        title="شركة تنظيف بجدة — خدمات تنظيف احترافية متكاملة"
        subtitle={site.brand}
        description="نقدم خدمات تنظيف شاملة للمنازل والفلل والشركات في جدة. تنظيف عميق، تنظيف مفروشات، تعقيم، جلي رخام، وأكثر. فريق محترف وأسعار منافسة."
        image="cleaning services Jeddah.jpg"
        imageAlt="شركة تنظيف بجدة - شركة المثالي"
        context={{ page: "الرئيسية" }}
      />

      {/* Introduction Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              شركة المثالي للتنظيف في جدة - شريكك الموثوق للنظافة والراحة
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-gray-700">
              <p>
                في عالم اليوم السريع، أصبح الوقت أثمن ما نملك. وعندما يتعلق الأمر بنظافة منزلك أو
                مكان عملك، فإنك تستحق خدمة تنظيف احترافية توفر عليك الجهد والوقت، وتمنحك راحة البال
                التي تبحث عنها. <strong>شركة المثالي</strong> هي واحدة من أفضل شركات التنظيف في
                جدة، حيث نجمع بين الخبرة الطويلة والتقنيات الحديثة لنقدم لك تجربة تنظيف لا مثيل لها.
              </p>

              <p>
                منذ انطلاقتنا، ونحن نخدم سكان وأعمال جدة بشغف والتزام كامل بالجودة. سواء كنت تبحث عن
                <Link href="/services/home-cleaning-jeddah" className="text-primary hover:underline">
                  {" "}
                  تنظيف منزل شامل
                </Link>
                ، أو{" "}
                <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                  تنظيف عميق
                </Link>{" "}
                بعد الانتقال،{" "}
                <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                  تنظيف الكنب والمفروشات
                </Link>{" "}
                بالبخار، أو حتى{" "}
                <Link href="/sectors/offices" className="text-primary hover:underline">
                  تنظيف المكاتب والشركات
                </Link>
                ، فنحن هنا لنقدم لك خدمة تفوق توقعاتك. نفهم أن كل عميل له احتياجات فريدة، لذا نصمم
                حلول تنظيف مخصصة تناسب ميزانيتك وجدولك الزمني.
              </p>

              <p>
                نعمل في جميع أحياء جدة - من{" "}
                <Link href="/jeddah/al-hamra" className="text-primary hover:underline">
                  الحمراء
                </Link>{" "}
                و
                <Link href="/jeddah/ash-shati" className="text-primary hover:underline">
                  الشاطئ
                </Link>{" "}
                على الساحل، إلى{" "}
                <Link href="/jeddah/al-rawdah" className="text-primary hover:underline">
                  الروضة
                </Link>{" "}
                و
                <Link href="/jeddah/as-salama" className="text-primary hover:underline">
                  السلامة
                </Link>{" "}
                في الأحياء السكنية الراقية، ومن{" "}
                <Link href="/jeddah/al-aziziyah" className="text-primary hover:underline">
                  العزيزية
                </Link>{" "}
                التجارية إلى{" "}
                <Link href="/jeddah/obhur-north" className="text-primary hover:underline">
                  أبحر الشمالية
                </Link>{" "}
                والجنوبية. فريقنا جاهز للوصول إلى موقعك بسرعة، مجهز بأحدث المعدات والمواد الآمنة،
                ليحول مكانك إلى بيئة نظيفة ومعقمة تماماً.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
            لماذا تختار شركة المثالي؟
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mx-auto mt-12 max-w-4xl space-y-4 text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">
              ما الذي يجعلنا الخيار الأول للتنظيف في جدة؟
            </h3>
            <p className="leading-relaxed">
              <strong>1. الخبرة والاحترافية:</strong> أكثر من 10 سنوات من الخبرة في خدمة آلاف
              العملاء في جدة. نعرف تحديات المناخ المحلي - من الرطوبة العالية على الساحل إلى الغبار
              والأتربة - ونقدم حلول تنظيف مصممة خصيصاً لمواجهة هذه التحديات.
            </p>
            <p className="leading-relaxed">
              <strong>2. فريق عمل مدرب ومؤمّن:</strong> كل فرد في فريقنا يخضع لتدريب مكثف على أحدث
              تقنيات التنظيف، ويحمل شهادات معتمدة في السلامة والصحة المهنية. نحن مؤمّنون بالكامل
              ومرخصون من الجهات الرسمية، لتحصل على خدمة آمنة ومضمونة.
            </p>
            <p className="leading-relaxed">
              <strong>3. مواد تنظيف آمنة وصديقة للبيئة:</strong> صحتك وصحة عائلتك هي أولويتنا. لذا
              نستخدم منتجات تنظيف عالية الجودة، آمنة للأطفال والحيوانات الأليفة، ومطابقة للمعايير
              الصحية السعودية. كما نوفر خيارات منتجات عضوية 100% لمن يفضل ذلك.
            </p>
            <p className="leading-relaxed">
              <strong>4. معدات حديثة وتقنيات متقدمة:</strong> نستثمر باستمرار في أحدث معدات التنظيف
              - من ماكينات البخار عالية الضغط، إلى أجهزة تنظيف السجاد والمفروشات، وأدوات تلميع الرخام
              والأرضيات. هذا يضمن نتائج فائقة الجودة وسرعة في الإنجاز.
            </p>
            <p className="leading-relaxed">
              <strong>5. مرونة في المواعيد والأسعار:</strong> نقدر أن لكل عميل ظروفه الخاصة. لذا
              نوفر جدولة مرنة (صباحاً، مساءً، أو عطلات نهاية الأسبوع)، وأسعار شفافة ومنافسة بدون
              تكاليف خفية. نقدم خصومات خاصة للعقود الدورية والباقات الشاملة.
            </p>
            <p className="leading-relaxed">
              <strong>6. ضمان الرضا 100%:</strong> نحن واثقون من جودة عملنا. إذا لم تكن راضياً تماماً،
              سنعيد تنظيف المكان دون أي تكلفة إضافية. هدفنا هو أن تصبح عميلاً دائماً، وليس مجرد صفقة
              واحدة.
            </p>
          </div>
        </div>
      </section>

      <ProcessSteps />

      {/* Services Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">خدماتنا الشاملة</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              نقدم مجموعة واسعة من خدمات التنظيف الاحترافية لتلبية جميع احتياجاتك
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 9).map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.shortDesc}
                image={service.image}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <CTASection context={{ page: "الرئيسية" }} />
          </div>
        </div>
      </section>

      {/* Sectors Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              نخدم جميع القطاعات التجارية
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              خدمات تنظيف متخصصة للشركات والمؤسسات
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector) => (
              <ServiceCard
                key={sector.slug}
                title={sector.name}
                description={sector.shortDesc}
                image={sector.image}
                link={`/sectors/${sector.slug}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Content Continuation */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              نطاق خدماتنا: من البيوت إلى الشركات الكبرى
            </h2>
            
            <h3 className="text-2xl font-bold text-gray-900">تنظيف المنازل والفلل</h3>
            <p className="leading-relaxed">
              منزلك هو ملاذك الآمن، ويستحق أن يكون نظيفاً دائماً. نقدم خدمات تنظيف منازل شاملة تشمل
              جميع الغرف، المطابخ، الحمامات، الأرضيات، والنوافذ. سواء كنت بحاجة إلى تنظيف دوري
              أسبوعي، أو تنظيف عميق قبل مناسبة خاصة، أو تنظيف بعد الانتقال أو التشطيب، فنحن نقدم لك
              حلول مرنة تناسب احتياجاتك وميزانيتك.
            </p>
            <p className="leading-relaxed">
              للفلل الكبيرة، نخصص فريق عمل متكامل يضمن تنظيف كل ركن وزاوية - من الحدائق والمداخل،
              إلى غرف النوم والصالات، وصولاً إلى المجالس والملاحق. نهتم بالتفاصيل الصغيرة التي تحدث
              الفرق الكبير.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">تنظيف المفروشات والكنب</h3>
            <p className="leading-relaxed">
              المفروشات والكنب تتعرض للاستخدام اليومي، وتتراكم عليها الأتربة، البقع، والبكتيريا. نقدم
              خدمة{" "}
              <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                تنظيف الكنب والمجالس بالبخار
              </Link>{" "}
              باستخدام أحدث التقنيات التي تزيل الأوساخ العميقة دون إتلاف الأقمشة. كما نوفر خدمات{" "}
              <Link href="/services/carpet" className="text-primary hover:underline">
                تنظيف السجاد والموكيت
              </Link>
              ،{" "}
              <Link href="/services/curtains" className="text-primary hover:underline">
                تنظيف الستائر
              </Link>
              ، و
              <Link href="/services/mattress" className="text-primary hover:underline">
                تنظيف وتعقيم المراتب
              </Link>{" "}
              للتخلص من العث والبكتيريا وضمان بيئة نوم صحية.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              التنظيف العميق والتعقيم
            </h3>
            <p className="leading-relaxed">
              التنظيف العميق ليس مجرد تنظيف سطحي، بل عملية شاملة ومكثفة تشمل الوصول إلى الأماكن
              الصعبة والخفية. نوصي بإجراء{" "}
              <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                تنظيف عميق
              </Link>{" "}
              مرة كل 3-6 أشهر للحفاظ على مستوى عالٍ من النظافة والصحة. كما نقدم خدمات{" "}
              <Link href="/services/disinfection" className="text-primary hover:underline">
                التعقيم والتطهير
              </Link>{" "}
              باستخدام مواد معقمة معتمدة لقتل الفيروسات والبكتيريا، وهي خدمة أساسية للمنشآت الصحية
              والمدارس والأماكن العامة.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              الخدمات المتخصصة
            </h3>
            <ul className="list-inside list-disc space-y-2 pr-6 leading-relaxed">
              <li>
                <Link href="/services/ac-cleaning" className="text-primary hover:underline">
                  تنظيف المكيفات
                </Link>
                : تنظيف الفلاتر، الكويل، والدكتات لتحسين جودة الهواء وكفاءة التبريد.
              </li>
              <li>
                <Link href="/services/water-tank" className="text-primary hover:underline">
                  تنظيف خزانات المياه
                </Link>
                : تعقيم الخزانات وتنظيف الأنابيب لضمان مياه نظيفة وآمنة.
              </li>
              <li>
                <Link href="/services/marble-polishing" className="text-primary hover:underline">
                  جلي وتلميع الرخام والأرضيات
                </Link>
                : استعادة بريق ولمعان الرخام والبلاط القديم.
              </li>
              <li>
                <Link href="/services/glass-facade" className="text-primary hover:underline">
                  تنظيف الزجاج والواجهات العالية
                </Link>
                : تنظيف احترافي للمباني الشاهقة باستخدام معدات خاصة.
              </li>
              <li>
                <Link href="/services/pool-cleaning" className="text-primary hover:underline">
                  تنظيف المسابح
                </Link>
                : صيانة دورية ونظافة مستمرة للمسابح المنزلية والتجارية.
              </li>
              <li>
                <Link href="/services/post-construction" className="text-primary hover:underline">
                  تنظيف ما بعد البناء والتشطيب
                </Link>
                : إزالة الأتربة والمخلفات بعد أعمال البناء والتجديد.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />

      {/* Areas Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">نخدم جميع أحياء جدة</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              فريقنا جاهز للوصول إلى موقعك في أي حي من أحياء جدة
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/jeddah/${area.slug}`}
                className="rounded-lg border bg-white p-4 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <p className="font-semibold text-gray-900">{area.name}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-600">وأحياء أخرى كثيرة في جميع أنحاء جدة</p>
          </div>
        </div>
      </section>

      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في جدة؟"
        description="تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص. فريقنا جاهز لخدمتك على مدار الساعة"
        context={{ page: "الرئيسية" }}
      />
    </>
  );
}


