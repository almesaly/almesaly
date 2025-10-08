import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2, Home, Users, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في السلامة جدة - خدمات تنظيف سكنية احترافية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي السلامة بجدة. خدمات تنظيف منازل وشقق بأسعار مناسبة وجودة عالية. فريق محترف ومواعيد مرنة. اتصل الآن!",
  alternates: { canonical: `${site.url}/jeddah/al-salama` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي السلامة", url: "/jeddah/al-salama" },
];

const faqs = [
  {
    question: "لماذا تعتبر شركة المثالي الخيار الأفضل للتنظيف في السلامة؟",
    answer:
      "نقدم خدمات تنظيف عالية الجودة بأسعار مناسبة لسكان حي السلامة. فريقنا المحترف يصل بسرعة ويعمل بكفاءة لتوفير وقتك. نستخدم مواد آمنة على الأطفال والحيوانات الأليفة، ونوفر عقود شهرية بأسعار مخفضة.",
  },
  {
    question: "ما هي أسعار التنظيف في حي السلامة؟",
    answer:
      "الأسعار تبدأ من 250 ريال للشقق الصغيرة و400 ريال للشقق الكبيرة و600 ريال للفلل. نقدم خصومات تصل إلى 20% على العقود الشهرية. الأسعار شاملة المواد والمعدات.",
  },
  {
    question: "هل تقدمون خدمات تنظيف دورية للعائلات العاملة؟",
    answer:
      "نعم، نوفر عقود تنظيف دورية (أسبوعية، نصف شهرية، شهرية) مثالية للعائلات المشغولة. نرتب مواعيد ثابتة تناسب جدولك، ونوفر نفس الفريق في كل زيارة لضمان الجودة والثقة.",
  },
  {
    question: "كم يستغرق تنظيف شقة متوسطة في السلامة؟",
    answer:
      "شقة من 3 غرف تستغرق عادة 3-4 ساعات للتنظيف العادي و5-6 ساعات للتنظيف العميق. نعمل بكفاءة دون التأثير على جودة التنظيف. يمكننا ترتيب فريقين لتسريع العمل إذا لزم الأمر.",
  },
  {
    question: "هل تنظفون المنازل التي بها أطفال صغار؟",
    answer:
      "بالتأكيد! نستخدم مواد تنظيف آمنة 100% على الأطفال والحيوانات الأليفة. فريقنا مدرب على العمل في المنازل التي بها أطفال مع الحفاظ على سلامتهم وراحتهم. نوفر أيضاً خدمات تعقيم إضافية.",
  },
];

export default function AlSalamaPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي السلامة جدة",
    description: "خدمات تنظيف سكنية احترافية بأسعار مناسبة في حي السلامة بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "السلامة، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "السلامة، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في السلامة - خدمات سكنية بأسعار مناسبة"
        subtitle="خدمات التنظيف في حي السلامة"
        description="أفضل شركة تنظيف في حي السلامة بجدة. نقدم خدمات تنظيف منازل وشقق بجودة عالية وأسعار تنافسية. خدمة سريعة ومواعيد مرنة."
        image="apartment cleaning.jpg"
        imageAlt="شركة تنظيف في حي السلامة جدة"
        context={{ area: "السلامة" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا تختار شركة المثالي للتنظيف في حي السلامة؟
              </h2>
              <p className="text-lg leading-relaxed">
                حي السلامة من أكثر الأحياء السكنية حيوية في جدة، يتميز بكثافته السكانية
                العالية ووجود العديد من العائلات والموظفين. نحن في <strong>شركة المثالي</strong>
                {" "}نفهم احتياجات سكان السلامة من خدمات تنظيف سريعة، فعالة، وبأسعار مناسبة.
                نقدم حلول تنظيف شاملة مصممة للعائلات المشغولة التي تريد منزلاً نظيفاً دون عناء.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                فريقنا المدرب يصل إليك بسرعة ويعمل بكفاءة عالية. نستخدم أفضل المعدات
                والمواد الآمنة، ونوفر أسعاراً تنافسية مع جودة لا تُضاهى. سواء كنت تحتاج
                تنظيف لمرة واحدة أو عقد شهري، نحن الخيار الأمثل في السلامة.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدماتنا في حي السلامة
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Home className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف المنازل والشقق</h3>
                  </div>
                  <p>
                    تنظيف شامل لجميع الغرف، المطابخ، الحمامات، والشرفات. نهتم بكل التفاصيل
                    لنترك منزلك نظيفاً ومنعشاً.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-green-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Users className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">عقود دورية للعائلات</h3>
                  </div>
                  <p>
                    عقود شهرية أو أسبوعية بأسعار مخفضة، مثالية للعائلات العاملة التي
                    تحتاج تنظيف منتظم دون قلق.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-purple-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Clock className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف سريع في نفس اليوم</h3>
                  </div>
                  <p>
                    نوفر خدمة تنظيف سريعة في نفس اليوم للحالات العاجلة. اتصل بنا صباحاً
                    ونصلك في المساء.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">مواد آمنة للأطفال</h3>
                  </div>
                  <p>
                    نستخدم منتجات تنظيف صديقة للبيئة وآمنة 100% على الأطفال والحيوانات
                    الأليفة.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                ما يميزنا في خدمة حي السلامة
              </h2>
              <div className="space-y-3">
                {[
                  "خدمة سريعة: الوصول خلال 30 دقيقة في السلامة",
                  "أسعار مناسبة للجميع مع جودة عالية",
                  "فريق مدرب ومؤمّن ضد أي أضرار",
                  "مواد تنظيف آمنة على الأطفال والحيوانات",
                  "عقود دورية بخصومات تصل إلى 20%",
                  "مواعيد مرنة تناسب جدولك اليومي",
                  "ضمان جودة وإعادة تنظيف مجانية إذا لزم",
                  "خدمة عملاء متاحة 24/7",
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-green-600" />
                    <p className="text-lg">{feature}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                حلول مثالية للعائلات في السلامة
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                نفهم أن العائلات في حي السلامة مشغولة بين العمل، المدارس، والأنشطة اليومية.
                لذلك نقدم حلول تنظيف مرنة:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <strong>تنظيف أسبوعي:</strong> للحفاظ على نظافة دائمة دون عناء
                </li>
                <li>
                  <strong>تنظيف نصف شهري:</strong> مثالي للعائلات متوسطة الحجم
                </li>
                <li>
                  <strong>تنظيف شهري عميق:</strong> تنظيف شامل يشمل كل التفاصيل
                </li>
                <li>
                  <strong>تنظيف طارئ:</strong> لاستقبال الضيوف أو المناسبات
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                احجز خدمة التنظيف في السلامة الآن
              </h2>
              <p className="mb-4 text-lg">
                لا تضيع وقتك في التنظيف! دع خبراءنا يعتنون بمنزلك. احجز الآن واحصل على:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-lg">
                <li>خصم 15% على أول خدمة تنظيف</li>
                <li>تقييم مجاني لاحتياجات منزلك</li>
                <li>عرض خاص: احجز 3 خدمات واحصل على الرابعة مجاناً</li>
                <li>باقات عائلية مخصصة بأسعار مخفضة</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">خدمات مرتبطة للمنازل</h2>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/home-cleaning-jeddah" className="text-primary hover:underline">
                    تنظيف المنازل
                  </Link>{" "}
                  - خدمة شاملة لجميع أنواع المنازل
                </li>
                <li>
                  <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                    التنظيف العميق
                  </Link>{" "}
                  - تنظيف مكثف كل 3-6 أشهر
                </li>
                <li>
                  <Link href="/services/kitchen-bathroom" className="text-primary hover:underline">
                    تنظيف المطابخ والحمامات
                  </Link>{" "}
                  - تنظيف وتعقيم متخصص
                </li>
                <li>
                  <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                    تنظيف الكنب بالبخار
                  </Link>{" "}
                  - للعناية بمفروشاتك
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="جاهز لمنزل نظيف في حي السلامة؟"
        description="تواصل معنا الآن لحجز موعد أو الحصول على عرض سعر مجاني"
        context={{ area: "السلامة" }}
      />
    </>
  );
}
