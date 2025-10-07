import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف بحي الحمراء جدة — خدمة فورية وأسعار واضحة",
  description:
    "شركة المثالي للتنظيف في حي الحمراء جدة. خدمات تنظيف احترافية للمنازل والفلل الساحلية. فريق متخصص في التعامل مع تحديات المناطق الساحلية.",
  alternates: {
    canonical: `${site.url}/jeddah/al-hamra`,
  },
};

const breadcrumbs = [
  { name: "المناطق في جدة", url: "/jeddah" },
  { name: "الحمراء", url: "/jeddah/al-hamra" },
];

const faqs = [
  {
    question: "كم يستغرق وصول الفريق إلى حي الحمراء؟",
    answer:
      "نضمن وصول فريقنا إلى حي الحمراء خلال 30-45 دقيقة في الحالات العادية. للحالات الطارئة، يمكننا ترتيب وصول أسرع. نفهم أهمية الوقت ونلتزم بالمواعيد المتفق عليها.",
  },
  {
    question: "هل لديكم خبرة مع تحديات المنازل الساحلية في الحمراء؟",
    answer:
      "نعم، لدينا خبرة واسعة في خدمة المناطق الساحلية. نستخدم مواد ومعدات متخصصة للتعامل مع الرطوبة العالية، ترسبات الملح على النوافذ والواجهات، والعفن الناتج عن الرطوبة. فريقنا مدرب على معالجة هذه التحديات بفعالية.",
  },
  {
    question: "هل تقدمون خدمة تنظيف الواجهات الزجاجية للمنازل المطلة على البحر؟",
    answer:
      "بالتأكيد! تنظيف الواجهات الزجاجية هي من أكثر خدماتنا طلباً في الحمراء. نستخدم معدات خاصة ومنظفات فعالة لإزالة ترسبات الملح والأتربة، ونترك زجاجك صافياً تماماً لتستمتع بإطلالتك الرائعة على البحر.",
  },
  {
    question: "هل أسعاركم أعلى في المناطق الساحلية مثل الحمراء؟",
    answer:
      "لا، نطبق نفس الأسعار العادلة في جميع أحياء جدة. لا نفرض رسوماً إضافية على المناطق الساحلية. التكلفة تعتمد فقط على حجم المكان ونوع الخدمة المطلوبة، وليس على الموقع.",
  },
  {
    question: "هل تنظفون الفلل والمنتجعات الكبيرة في الحمراء؟",
    answer:
      "نعم، نخدم جميع أنواع العقارات في الحمراء - من الشقق السكنية إلى الفلل الفاخرة والمنتجعات الكبيرة. لدينا فرق متخصصة وخبرة في التعامل مع المشاريع الكبيرة. نقدم عروض سعر مخصصة بعد معاينة المكان.",
  },
];

const popularServices = [
  "تنظيف شامل للمنازل والفلل",
  "تنظيف الواجهات الزجاجية والنوافذ",
  "معالجة الرطوبة والعفن",
  "تنظيف الكنب والمفروشات بالبخار",
  "تنظيف المطابخ والحمامات بعمق",
  "جلي وتلميع الرخام والأرضيات",
  "تنظيف حدائق ومداخل الفلل",
  "تعقيم وتطهير شامل",
];

export default function AlHamraPage() {
  const schemas = [
    generateServiceSchema(
      "خدمات تنظيف في حي الحمراء جدة",
      "خدمات تنظيف احترافية متخصصة في حي الحمراء الساحلي بجدة. تنظيف منازل، فلل، ومعالجة تحديات المناطق الساحلية."
    ),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "المناطق في جدة", url: `${site.url}/jeddah` },
      { name: "الحمراء", url: `${site.url}/jeddah/al-hamra` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف بحي الحمراء جدة - خدمة متخصصة للمنازل الساحلية"
        subtitle="خدمات التنظيف في الحمراء"
        description="نخدم سكان وعقارات حي الحمراء بخدمات تنظيف متخصصة تتعامل مع تحديات المنطقة الساحلية. فريق محترف ونتائج مضمونة."
        image="cleaning services Jeddah.jpg"
        imageAlt="شركة تنظيف في حي الحمراء جدة - شركة المثالي"
        context={{ area: "الحمراء" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              خدمات تنظيف متخصصة في حي الحمراء الساحلي
            </h2>

            <p className="text-lg leading-relaxed">
              حي <strong>الحمراء</strong> هو واحد من أجمل وأرقى الأحياء الساحلية في جدة، يتميز
              بإطلالاته الخلابة على البحر الأحمر، وفللهالفاخرة، ومنتجعاته الراقية. لكن الموقع الساحلي
              يأتي مع تحديات خاصة - الرطوبة العالية، ترسبات الملح على النوافذ والواجهات، احتمالية ظهور
              العفن، والحاجة إلى تنظيف متكرر بسبب الأتربة الممزوجة بالرطوبة.
            </p>

            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمات تنظيف متخصصة ومصممة خصيصاً لتلبية احتياجات
              سكان حي الحمراء. فريقنا المحترف يفهم تماماً التحديات الفريدة للمناطق الساحلية، ومجهز
              بالمعدات والمواد المناسبة لتقديم نتائج استثنائية تدوم طويلاً.
            </p>

            <h3 className="text-2xl font-bold text-gray-900">
              لماذا تحتاج منازل الحمراء عناية خاصة؟
            </h3>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>
                <strong>الرطوبة العالية:</strong> القرب من البحر يعني رطوبة عالية طوال العام، مما يساعد
                على نمو العفن والبكتيريا على الجدران والأسقف والأثاث.
              </li>
              <li>
                <strong>ترسبات الملح:</strong> الهواء المالح يترك ترسبات على النوافذ، الواجهات
                الزجاجية، والأسطح المعدنية، مما يتطلب تنظيفاً متخصصاً ودورياً.
              </li>
              <li>
                <strong>التآكل والصدأ:</strong> الملوحة تسرع تآكل المعادن والأسطح، لذا يحتاج الأثاث
                المعدني والتجهيزات إلى عناية خاصة وحماية.
              </li>
              <li>
                <strong>الأتربة الناعمة:</strong> الرياح البحرية تحمل أتربة ناعمة تتسلل إلى كل مكان
                وتلتصق بالأسطح بسبب الرطوبة.
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900">
              حلولنا المتخصصة لمنازل الحمراء
            </h3>

            <div className="space-y-4">
              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  1. تنظيف ومعالجة الرطوبة والعفن
                </h4>
                <p className="leading-relaxed">
                  نستخدم منتجات متخصصة لإزالة العفن من الجدران، الأسقف، والزوايا. ثم نطبق معالجات
                  واقية تمنع نمو العفن مرة أخرى. هذه الخدمة ضرورية للحفاظ على صحة عائلتك وجودة الهواء
                  في منزلك.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  2. تنظيف الواجهات الزجاجية والنوافذ
                </h4>
                <p className="leading-relaxed">
                  نستخدم منظفات خاصة لإزالة ترسبات الملح والأتربة من الزجاج دون ترك خطوط أو بقايا. نظف
                  من الداخل والخارج لضمان إطلالة صافية تماماً على البحر. للواجهات الكبيرة، نستخدم معدات
                  متخصصة للوصول إلى جميع الأجزاء بأمان.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  3. حماية الأسطح المعدنية والأثاث
                </h4>
                <p className="leading-relaxed">
                  نظف وننظف الأسطح المعدنية (حنفيات، مقابض، إطارات نوافذ) بعناية خاصة، ثم نطبق طبقات
                  حماية تمنع التآكل والصدأ. هذا يطيل عمر تجهيزاتك ويحافظ على مظهرها الجميل.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">
                  4. تنظيف عميق للأرضيات والرخام
                </h4>
                <p className="leading-relaxed">
                  الأرضيات في المنازل الساحلية تتعرض لأوساخ أكثر بسبب الأتربة والرطوبة. نقدم خدمات جلي
                  وتلميع الرخام والأرضيات لاستعادة بريقها، مع تطبيق طبقات حماية تسهل التنظيف المستقبلي.
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
              الخدمات الأكثر طلباً في الحمراء
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              {popularServices.map((service, index) => (
                <div key={index} className="flex items-start gap-3 rounded-lg bg-white p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 space-y-6 text-gray-700">
              <h3 className="text-2xl font-bold text-gray-900">
                سيناريوهات شائعة نتعامل معها في الحمراء
              </h3>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  الفلل المطلة على البحر:
                </h4>
                <p className="leading-relaxed">
                  نقدم تنظيفاً شاملاً يشمل الداخل والخارج، مع تركيز خاص على الواجهات الزجاجية، الشرفات،
                  والحدائق. نزيل الأملاح والترسبات، ونحمي الأسطح من التآكل المستقبلي.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  الشقق في الأبراج الساحلية:
                </h4>
                <p className="leading-relaxed">
                  تنظيف دوري أو عميق مع اهتمام خاص بالنوافذ البانورامية. نستخدم معدات آمنة للعمل في
                  الطوابق العالية، ونضمن نظافة تامة دون أي مخاطر.
                </p>
              </div>

              <div>
                <h4 className="mb-2 text-xl font-semibold text-gray-900">
                  المنتجعات والاستراحات:
                </h4>
                <p className="leading-relaxed">
                  خدمات تنظيف شاملة للمنتجعات بما في ذلك المسابح، الحدائق، الممرات الخارجية، والوحدات
                  السكنية. عقود دورية مرنة تضمن جاهزية المكان دائماً لاستقبال الضيوف.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              وقت الاستجابة والخدمة في الحمراء
            </h2>

            <p className="leading-relaxed">
              نفخر بخدمة سريعة وموثوقة في حي الحمراء. يمكننا الوصول إليك خلال 30-45 دقيقة في معظم
              الأوقات. للحجوزات المسبقة، نضمن الوصول في الموعد المحدد بالضبط. نوفر أيضاً خدمات طارئة
              لحالات الطوارئ (مثل انسكابات كبيرة أو تنظيف قبل حدث مهم).
            </p>

            <p className="leading-relaxed">
              ننصح سكان الحمراء بجدولة تنظيف دوري كل أسبوعين إلى شهر للحفاظ على مستوى عالٍ من النظافة
              ومنع تراكم المشاكل المرتبطة بالرطوبة والملوحة. نقدم خصومات خاصة على العقود الدورية.
            </p>

            <h2 className="text-3xl font-bold text-gray-900">
              خدمات مرتبطة مناسبة لمنازل الحمراء
            </h2>

            <p className="leading-relaxed">
              نظراً لخصوصية المنطقة، نوصي بشدة بهذه الخدمات المتخصصة:
            </p>

            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>
                <Link href="/services/glass-facade" className="text-primary hover:underline">
                  تنظيف الزجاج والواجهات العالية
                </Link>{" "}
                - ضرورية للحفاظ على نظافة إطلالتك على البحر
              </li>
              <li>
                <Link href="/services/disinfection" className="text-primary hover:underline">
                  التعقيم والتطهير
                </Link>{" "}
                - مهمة للقضاء على البكتيريا والعفن الناتج عن الرطوبة
              </li>
              <li>
                <Link href="/services/marble-polishing" className="text-primary hover:underline">
                  جلي وتلميع الرخام
                </Link>{" "}
                - لاستعادة بريق الأرضيات المتأثرة بالرطوبة
              </li>
              <li>
                <Link href="/services/pool-cleaning" className="text-primary hover:underline">
                  تنظيف المسابح
                </Link>{" "}
                - للفلل التي تحتوي على مسابح خاصة
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في حي الحمراء؟"
        description="تواصل معنا الآن للحصول على عرض سعر مجاني ومخصص لمنزلك"
        context={{ area: "الحمراء" }}
      />

      <FAQ faqs={faqs} />
    </>
  );
}



