import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";
import { Shield, Users, Award, Clock, Heart, Sparkles, Phone, MessageCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "من نحن - شركة المثالي للتنظيف في جدة",
  description:
    "تعرف على شركة المثالي - شركة تنظيف رائدة في جدة مع أكثر من 10 سنوات خبرة. فريق محترف، خدمات متنوعة، ورضا العملاء هو أولويتنا.",
  alternates: {
    canonical: `${site.url}/about`,
  },
};

const breadcrumbs = [{ name: "من نحن", url: "/about" }];

const values = [
  {
    icon: Shield,
    title: "الجودة والموثوقية",
    description: "نلتزم بأعلى معايير الجودة في كل خدمة نقدمها",
  },
  {
    icon: Users,
    title: "فريق محترف",
    description: "عمالة مدربة وذات خبرة عالية في جميع خدمات التنظيف",
  },
  {
    icon: Award,
    title: "التميز والإتقان",
    description: "نسعى دائماً للتميز والإتقان في كل تفصيلة",
  },
  {
    icon: Clock,
    title: "الالتزام بالمواعيد",
    description: "نحترم وقتك ونلتزم بجميع المواعيد المتفق عليها",
  },
  {
    icon: Heart,
    title: "رضا العميل",
    description: "سعادتك ورضاك هما هدفنا الأول والأخير",
  },
  {
    icon: Sparkles,
    title: "الابتكار والتطوير",
    description: "نستثمر في أحدث التقنيات والمعدات",
  },
];

export default function AboutPage() {
  const whatsappLink = generateWhatsAppLink(site.whatsapp, { page: "من نحن" });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 py-16 md:py-24">
        {/* Wave Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
              <Award className="h-5 w-5" />
              <span className="font-semibold">أكثر من 10 سنوات من التميز</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              شركة المثالي للتنظيف<br />شريككم الموثوق في جدة
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed opacity-95 md:text-xl">
              رحلة من التميز بدأت منذ عام 2014 - خدمنا آلاف العملاء في جدة بأعلى معايير الجودة والاحترافية. نفخر بثقتكم ونسعى دائماً لتجاوز توقعاتكم
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-emerald-600 hover:bg-gray-100 shadow-xl">
                <a href={`tel:${site.phone}`}>
                  <Phone className="h-5 w-5" />
                  تواصل معنا: {site.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white/10 shadow-xl">
                <Link href="/services">
                  <Sparkles className="h-5 w-5" />
                  اكتشف خدماتنا
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid gap-8 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold">+10</div>
                <p className="text-sm opacity-90">سنوات من الخبرة</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold">+5000</div>
                <p className="text-sm opacity-90">عميل راضٍ</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-2 text-4xl font-bold">+50</div>
                <p className="text-sm opacity-90">موظف محترف</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              قصتنا - من البداية حتى التميز
            </h2>

            <p className="text-lg leading-relaxed">
              بدأت <strong>شركة المثالي</strong> رحلتها في عالم خدمات التنظيف منذ أكثر من 10 سنوات
              برؤية واضحة: أن نكون الخيار الأول والموثوق للعائلات والشركات في جدة عندما يتعلق الأمر
              بالنظافة والصحة. انطلقنا بفريق صغير ولكن متحمس، وحلم كبير بتقديم خدمات تنظيف تتجاوز
              توقعات العملاء.
            </p>

            <p className="leading-relaxed">
              على مر السنين، نمت الشركة بفضل ثقة عملائنا الكرام. خدمنا آلاف المنازل، الفلل،
              المكاتب، والمنشآت التجارية في جميع أنحاء جدة. تطورنا من شركة صغيرة إلى واحدة من أبرز
              شركات التنظيف في المدينة، لكننا لم نفقد أبداً قيمنا الأساسية: الجودة، الأمانة، والاهتمام
              بالتفاصيل.
            </p>

            <p className="leading-relaxed">
              اليوم، نحن فخورون بفريق مكون من أكثر من 50 موظفاً مدرباً ومحترفاً، أسطول من المعدات
              الحديثة، ومجموعة واسعة من الخدمات المتخصصة. لكن ما يميزنا حقاً ليس فقط حجمنا أو
              معداتنا، بل علاقتنا القوية مع عملائنا والتزامنا الثابت بتقديم خدمة استثنائية في كل مرة.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">رؤيتنا ورسالتنا</h3>

            <div className="space-y-4">
              <div className="rounded-lg bg-blue-50 p-6">
                <h4 className="mb-2 text-xl font-bold text-gray-900">رؤيتنا</h4>
                <p className="leading-relaxed">
                  أن نكون الشركة الرائدة والأكثر ثقة في مجال خدمات التنظيف في المملكة العربية
                  السعودية، معروفين بالتميز والابتكار والتزامنا الثابت برضا العملاء.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-6">
                <h4 className="mb-2 text-xl font-bold text-gray-900">رسالتنا</h4>
                <p className="leading-relaxed">
                  نلتزم بتوفير حلول تنظيف شاملة ومبتكرة تلبي وتتجاوز توقعات عملائنا. نسعى لخلق بيئات
                  نظيفة وصحية وآمنة من خلال استخدام أحدث التقنيات، فريق مدرب ومتفانٍ، ومواد آمنة
                  وفعالة. نؤمن بأن النظافة ليست مجرد خدمة، بل استثمار في صحة وراحة عملائنا.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900">قيمنا الأساسية</h3>
            <p className="leading-relaxed">
              قيمنا هي البوصلة التي توجه كل قرار نتخذه وكل خدمة نقدمها:
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">ما يميزنا عن غيرنا</h2>

            <ul className="space-y-4">
              <li className="leading-relaxed">
                <strong>خبرة عميقة:</strong> أكثر من 10 سنوات من العمل المتواصل في جدة أكسبتنا فهماً
                عميقاً للتحديات المحلية (الرطوبة، الغبار، الأتربة) وأفضل الطرق للتعامل معها.
              </li>
              <li className="leading-relaxed">
                <strong>فريق متخصص ومدرب:</strong> نستثمر بكثافة في تدريب فريقنا على أحدث التقنيات
                والمعايير الدولية. كل فرد في فريقنا يخضع لفحوصات أمنية وتدريب مستمر.
              </li>
              <li className="leading-relaxed">
                <strong>معدات ومواد حديثة:</strong> نستخدم أحدث المعدات المستوردة من أوروبا وأمريكا،
                ومواد تنظيف معتمدة وآمنة 100%.
              </li>
              <li className="leading-relaxed">
                <strong>خدمة عملاء ممتازة:</strong> فريق خدمة عملاء متاح دائماً للإجابة على
                استفساراتك، ترتيب المواعيد، ومتابعة رضاك عن الخدمة.
              </li>
              <li className="leading-relaxed">
                <strong>أسعار عادلة وشفافة:</strong> أسعارنا تنافسية وواضحة بدون رسوم خفية. نقدم قيمة
                حقيقية مقابل كل ريال تدفعه.
              </li>
              <li className="leading-relaxed">
                <strong>ضمان الرضا:</strong> نحن واثقون من جودة عملنا. إذا لم تكن راضياً، سنعيد
                العمل دون تكلفة إضافية.
              </li>
              <li className="leading-relaxed">
                <strong>مرونة تامة:</strong> نفهم أن لكل عميل ظروفه الخاصة. لذا نقدم مواعيد مرنة،
                خيارات خدمة متنوعة، وحلول مخصصة.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900">التزامنا تجاه المجتمع</h2>

            <p className="leading-relaxed">
              نؤمن بأن نجاحنا يرتبط ارتباطاً وثيقاً بمجتمعنا. لذا نلتزم بالمسؤولية الاجتماعية من خلال:
            </p>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>استخدام منتجات صديقة للبيئة وتقليل الأثر البيئي لعملياتنا</li>
              <li>توفير فرص عمل كريمة ومستقرة لأفراد المجتمع</li>
              <li>الالتزام بجميع القوانين واللوائح المحلية</li>
              <li>تقديم خدمات مجانية أو مخفضة للحالات الإنسانية والخيرية</li>
              <li>المساهمة في حملات التوعية بأهمية النظافة والصحة العامة</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900">نحن نخدم جدة بأكملها</h2>

            <p className="leading-relaxed">
              من الشمال إلى الجنوب، ومن الساحل إلى الداخل - نخدم جميع أحياء جدة. فريقنا جاهز للوصول
              إليك بسرعة أينما كنت في المدينة.
            </p>

            <div className="rounded-lg border-2 border-primary bg-blue-50 p-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                انضم إلى آلاف العملاء السعداء
              </h3>
              <p className="mb-6 text-lg text-gray-700">
                دع شركة المثالي تهتم بنظافة منزلك أو منشأتك، بينما تركز أنت على ما يهمك حقاً في الحياة.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="هل أنت مستعد لتجربة خدماتنا المتميزة؟"
        description="تواصل معنا الآن واحصل على استشارة مجانية وعرض سعر مخصص"
        context={{ page: "من نحن" }}
      />
    </>
  );
}



