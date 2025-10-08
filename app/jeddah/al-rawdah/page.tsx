import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2, Home, Sparkles, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في الروضة جدة - خدمات تنظيف للأحياء الراقية | شركة المثالي",
  description:
    "أفضل شركة تنظيف في حي الروضة بجدة. خدمات تنظيف فلل وشقق راقية بأعلى معايير الجودة. فريق محترف، معدات حديثة، وضمان النظافة. اتصل الآن!",
  alternates: { canonical: `${site.url}/jeddah/al-rawdah` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "حي الروضة", url: "/jeddah/al-rawdah" },
];

const faqs = [
  {
    question: "لماذا تعتبر شركة المثالي الخيار الأمثل لتنظيف المنازل في الروضة؟",
    answer:
      "نقدم خدمات تنظيف راقية تتناسب مع مستوى حي الروضة. فريقنا مدرب على أعلى مستوى، نستخدم معدات ومواد تنظيف فاخرة وآمنة، ونلتزم بأعلى معايير الاحترافية والخصوصية. كما نوفر عقود دورية مخصصة للفلل الكبيرة.",
  },
  {
    question: "هل تقدمون خدمات تنظيف دورية للفلل في الروضة؟",
    answer:
      "نعم، نوفر عقود تنظيف دورية (أسبوعية، نصف شهرية، شهرية) مصممة خصيصاً للفلل في الأحياء الراقية. نوفر فريق ثابت يتعرف على تفاصيل منزلك، ونضمن الالتزام بالمواعيد والمعايير العالية في كل زيارة.",
  },
  {
    question: "ما هي أسعار التنظيف في حي الروضة؟",
    answer:
      "الأسعار تبدأ من 400 ريال للشقق و700 ريال للفلل المتوسطة. نقدم عروض خاصة للعقود الدورية وخصومات تصل إلى 20% للعملاء الدائمين. نوفر أيضاً تسعير مخصص للفلل الكبيرة بعد المعاينة المجانية.",
  },
  {
    question: "هل تضمنون سرية وخصوصية العمل؟",
    answer:
      "بالتأكيد! نلتزم بأعلى معايير الخصوصية والسرية. جميع أفراد فريقنا يخضعون لفحوصات أمنية شاملة ويوقعون على اتفاقيات السرية. كما نوفر نفس الفريق في الزيارات الدورية لبناء الثقة والارتياح.",
  },
  {
    question: "هل تنظفون الفلل الكبيرة متعددة الأدوار؟",
    answer:
      "نعم، لدينا خبرة واسعة في تنظيف الفلل الكبيرة والقصور. نوفر فرق متعددة للفلل الكبيرة جداً لضمان إنهاء العمل في الوقت المحدد. كما نوفر خدمات متخصصة مثل تنظيف الثريات، الرخام، والحدائق.",
  },
];

export default function AlRawdahPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في حي الروضة جدة",
    description:
      "خدمات تنظيف راقية واحترافية لسكان حي الروضة بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "الروضة، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "الروضة، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في الروضة - خدمات راقية للأحياء الفاخرة"
        subtitle="خدمات التنظيف في حي الروضة"
        description="أفضل شركة تنظيف في حي الروضة بجدة. نقدم خدمات تنظيف فاخرة تتناسب مع مستوى الحي الراقي، مع فريق محترف ومعدات حديثة وضمان النظافة الكاملة."
        image="villa cleaning service.jpg"
        imageAlt="شركة تنظيف في حي الروضة جدة"
        context={{ area: "الروضة" }}
      />

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا تختار شركة المثالي للتنظيف في حي الروضة؟
              </h2>
              <p className="text-lg leading-relaxed">
                حي الروضة من أرقى وأجمل الأحياء السكنية في جدة، يتميز بفللهالفاخرة، شوارعه
                المنظمة، وسكانه من الطبقة الراقية. لذلك، نحن في <strong>شركة المثالي</strong>{" "}
                ندرك أن سكان الروضة يستحقون خدمات تنظيف تتناسب مع مستوى الحي المتميز. نقدم
                خدمات راقية بأعلى معايير الجودة، الاحترافية، والخصوصية التامة.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                فريقنا المدرب على أعلى مستوى يفهم احتياجات الفلل الكبيرة والقصور، ويعمل
                بصمت واحترافية للحفاظ على خصوصيتك وراحتك. نستخدم أفضل المعدات والمواد
                الصديقة للبيئة لضمان نظافة استثنائية تدوم طويلاً.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدماتنا الراقية في حي الروضة
              </h2>
              <p className="mb-6 text-lg">
                نوفر مجموعة شاملة من الخدمات المصممة لتلبية احتياجات الفلل والمنازل الفاخرة:
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-gray-200 bg-blue-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Home className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف الفلل الفاخرة</h3>
                  </div>
                  <p>
                    تنظيف شامل للفلل متعددة الأدوار، مع اهتمام خاص بالتفاصيل الدقيقة مثل
                    الثريات، الرخام، الدرابزين، والديكورات الفاخرة. نضمن العناية الفائقة
                    بممتلكاتك.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-purple-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف وتلميع الرخام</h3>
                  </div>
                  <p>
                    خدمات جلي وتلميع متخصصة للأرضيات الرخامية والجرانيت. نستخدم آلات
                    احترافية ومواد إيطالية لاستعادة بريق الرخام وحمايته من البقع.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-green-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Users className="h-6 w-6 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-900">عقود تنظيف دورية</h3>
                  </div>
                  <p>
                    عقود شهرية أو أسبوعية مع فريق ثابت يتعرف على منزلك ويحافظ على نظافته
                    الدائمة. خصومات خاصة تصل إلى 20% وأولوية في المواعيد.
                  </p>
                </div>

                <div className="rounded-lg border border-gray-200 bg-orange-50 p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <Shield className="h-6 w-6 text-orange-600" />
                    <h3 className="text-xl font-bold text-gray-900">تنظيف الحدائق والمداخل</h3>
                  </div>
                  <p>
                    تنظيف شامل للحدائق، الممرات الخارجية، المداخل، وأماكن الجلوس الخارجية.
                    نهتم بالمظهر الخارجي لفيلتك كما نهتم بالداخل.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                ما يميزنا في خدمة حي الروضة
              </h2>
              <div className="space-y-3">
                {[
                  "خبرة واسعة في تنظيف الفلل الفاخرة والقصور بجدة",
                  "فريق مدرب على أعلى مستوى ويخضع لفحوصات أمنية شاملة",
                  "التزام تام بالخصوصية والسرية المهنية",
                  "مواد تنظيف فاخرة وآمنة 100% على الأطفال والحيوانات الأليفة",
                  "معدات حديثة ومتخصصة للعناية بالرخام والديكورات الفاخرة",
                  "مواعيد مرنة وخدمة سريعة: الوصول خلال ساعة واحدة",
                  "أسعار تنافسية مع ضمان جودة وإعادة تنظيف مجانية",
                  "خدمة عملاء راقية متاحة 24/7",
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
                احتياجات خاصة للفلل في الروضة
              </h2>
              <p className="mb-4 text-lg leading-relaxed">
                الفلل في حي الروضة غالباً ما تكون كبيرة ومتعددة الأدوار، مع ديكورات فاخرة
                وأرضيات رخامية تحتاج عناية خاصة. نحن نفهم هذه الاحتياجات ونوفر:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <strong>فرق متعددة:</strong> للفلل الكبيرة جداً نوفر أكثر من فريق لإنهاء
                  العمل بسرعة
                </li>
                <li>
                  <strong>خدمات متخصصة:</strong> تنظيف الثريات، المرايا الكبيرة، السلالم
                  الرخامية
                </li>
                <li>
                  <strong>منتجات فاخرة:</strong> مواد تنظيف وتلميع من أفضل العلامات العالمية
                </li>
                <li>
                  <strong>احترام الخصوصية:</strong> العمل بصمت واحترافية دون إزعاج
                </li>
                <li>
                  <strong>مرونة في المواعيد:</strong> يمكننا العمل ليلاً أو في عطلة نهاية
                  الأسبوع
                </li>
              </ul>
            </div>

            <div className="rounded-lg bg-blue-50 p-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                احجز خدمة تنظيف راقية في الروضة الآن
              </h2>
              <p className="mb-4 text-lg">
                لا تقبل بأقل من الأفضل لمنزلك الفاخر. احجز معنا الآن واحصل على:
              </p>
              <ul className="mb-6 list-inside list-disc space-y-2 text-lg">
                <li>خصم 20% على أول عقد شهري</li>
                <li>معاينة مجانية مع استشارة مهنية</li>
                <li>فريق ثابت ومدرب على أعلى مستوى</li>
                <li>ضمان رضا 100% أو إعادة التنظيف مجاناً</li>
                <li>خدمة عملاء VIP متاحة على مدار الساعة</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدمات مرتبطة للفلل الفاخرة
              </h2>
              <p className="mb-4 text-lg">
                نوصي بشدة بهذه الخدمات المتخصصة للحفاظ على جمال ونظافة فيلتك:
              </p>
              <ul className="list-inside list-disc space-y-2 text-lg">
                <li>
                  <Link href="/services/marble-polishing" className="text-primary hover:underline">
                    جلي وتلميع الرخام
                  </Link>{" "}
                  - لاستعادة بريق الأرضيات الرخامية
                </li>
                <li>
                  <Link href="/services/deep-cleaning" className="text-primary hover:underline">
                    التنظيف العميق
                  </Link>{" "}
                  - تنظيف شامل كل 3-6 أشهر
                </li>
                <li>
                  <Link href="/services/upholstery-sofa" className="text-primary hover:underline">
                    تنظيف الكنب والمجالس
                  </Link>{" "}
                  - بالبخار للعناية بالمفروشات الفاخرة
                </li>
                <li>
                  <Link href="/services/pool-cleaning" className="text-primary hover:underline">
                    تنظيف المسابح
                  </Link>{" "}
                  - صيانة دورية للمسابح الخاصة
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} />
      <CTASection
        title="جاهز للحصول على خدمة تنظيف راقية في الروضة؟"
        description="تواصل معنا الآن لنقدم لك أفضل خدمة تنظيف تليق بمنزلك الفاخر"
        context={{ area: "الروضة" }}
      />
    </>
  );
}
