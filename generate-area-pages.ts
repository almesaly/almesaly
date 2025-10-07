// Area Page Content Generator
// This template generates full content for all area pages

const areas = [
  { slug: "al-hamra", name: "الحمراء", type: "ساحلي", char: "منطقة راقية على الكورنيش مع مطاعم ومقاهي شهيرة" },
  { slug: "ash-shati", name: "الشاطئ", type: "ساحلي", char: "قريبة من البحر مع إطلالات خلابة وشواطئ جميلة" },
  { slug: "ash-shatea", name: "الشاطيء", type: "ساحلي", char: "منطقة حديثة ومخططة بعناية" },
  { slug: "al-rawdah", name: "الروضة", type: "سكني", char: "حي سكني راقٍ وهادئ مع فلل فاخرة" },
  { slug: "al-salama", name: "السلامة", type: "سكني", char: "منطقة سكنية عائلية مريحة وآمنة" },
  { slug: "al-salamah", name: "السلامة الجنوبية", type: "سكني", char: "امتداد لحي السلامة" },
  { slug: "al-naeem", name: "النعيم", type: "سكني", char: "حي شعبي نابض بالحياة" },
  { slug: "al-nuzha", name: "النزهة", type: "سكني", char: "منطقة سكنية واسعة ومتنوعة" },
  { slug: "al-zahraa", name: "الزهراء", type: "سكني", char: "حي سكني هادئ ومنظم جيداً" },
  { slug: "bani-malik", name: "بني مالك", type: "سكني", char: "منطقة تقليدية عريقة مع طابع محلي أصيل" },
  { slug: "al-khalidiyah", name: "الخالدية", type: "سكني", char: "حي سكني متوسط نظيف ومنظم" },
  { slug: "al-andalus", name: "الأندلس", type: "سكني", char: "منطقة سكنية راقية بتخطيط حديث" },
  { slug: "al-marwah", name: "المروة", type: "سكني", char: "حي سكني حديث قريب من الخدمات" },
  { slug: "al-mohammadiyah", name: "المحمدية", type: "سكني", char: "منطقة شعبية كبيرة ومزدحمة" },
  { slug: "al-rabwa", name: "الربوة", type: "سكني", char: "حي راقٍ ومخطط جيداً" },
  { slug: "al-basateen", name: "البساتين", type: "سكني", char: "منطقة سكنية واسعة ومتنامية" },
  { slug: "al-faisaliyah", name: "الفيصلية", type: "سكني", char: "حي سكني راقٍ بخدمات ممتازة" },
  { slug: "al-aziziyah", name: "العزيزية", type: "تجاري", char: "مركز تجاري حيوي مع محلات ومكاتب كثيرة" },
  { slug: "al-baghdadiyah", name: "البغدادية", type: "تجاري", char: "منطقة تجارية قديمة وعريقة" },
];

// Function to generate page content for any area
function generateAreaPageContent(area: typeof areas[0]): string {
  const isCoastal = area.type === "ساحلي";
  const isCommercial = area.type === "تجاري";
  
  return `import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FAQ } from "@/components/faq";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "شركة تنظيف في ${area.name} جدة - خدمات تنظيف احترافية | شركة المثالي",
  description: "أفضل شركة تنظيف في ${area.name} بجدة. نوفر تنظيف فلل، شقق، كنب، سجاد وخزانات في ${area.name}. خدمة سريعة واحترافية. اتصل الآن!",
  alternates: { canonical: \`\${site.url}/jeddah/${area.slug}\` },
};

const breadcrumbs = [
  { name: "مناطق جدة", url: "/jeddah" },
  { name: "${area.name}", url: "/jeddah/${area.slug}" },
];

const faqs = [
  {
    question: "هل تقدمون خدمات تنظيف في حي ${area.name}؟",
    answer: "نعم، نقدم جميع خدمات التنظيف في حي ${area.name} بما في ذلك تنظيف الفلل، الشقق، الكنب، السجاد، والخزانات. لدينا فريق متخصص يعمل في ${area.name} منذ سنوات.",
  },
  {
    question: "ما هي تكلفة خدمات التنظيف في ${area.name}؟",
    answer: "الأسعار تبدأ من 300 ريال للشقق الصغيرة و500 ريال للفلل. نقدم عروض خاصة لسكان ${area.name}. اتصل بنا للحصول على سعر دقيق.",
  },
  {
    question: "كم يستغرق الوصول إلى ${area.name}؟",
    answer: "لدينا فرق موزعة في جدة تصل إلى ${area.name} خلال 30-45 دقيقة. نوفر مواعيد مرنة تناسب وقتك.",
  },${isCoastal ? `
  {
    question: "هل خدماتكم متخصصة للمناطق الساحلية؟",
    answer: "نعم، لدينا خبرة واسعة في تنظيف المناطق الساحلية. نستخدم مواد ومعدات خاصة لإزالة ترسبات الملح ومعالجة الرطوبة العالية.",
  },` : isCommercial ? `
  {
    question: "هل تقدمون عقود تنظيف دورية للمحلات والمكاتب؟",
    answer: "بالتأكيد! نوفر عقود تنظيف يومية، أسبوعية أو شهرية بأسعار تنافسية. جداول مرنة تناسب أوقات العمل.",
  },` : `
  {
    question: "هل تقدمون خدمات تنظيف دورية للمنازل؟",
    answer: "نعم، نوفر خدمات تنظيف دورية يومية أو أسبوعية أو شهرية بأسعار مخفضة. خدمة منتظمة تحافظ على نظافة منزلك.",
  },`}
];

export default function ${area.slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')}Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "خدمات التنظيف في ${area.name} جدة",
    description: "خدمات تنظيف احترافية في حي ${area.name} بجدة",
    provider: {
      "@type": "LocalBusiness",
      name: site.brand,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "${area.name}، جدة",
        addressCountry: "SA",
      },
    },
    areaServed: {
      "@type": "City",
      name: "${area.name}، جدة",
    },
  };

  return (
    <>
      <SchemaInjector schema={schema} />
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="شركة تنظيف في ${area.name} - خدمات احترافية بأعلى جودة"
        subtitle="خدمات التنظيف في ${area.name}"
        description="أفضل شركة تنظيف في ${area.name} بجدة. ${area.char}. خدمات شاملة لجميع أنواع التنظيف."
        image="${isCoastal ? 'cleaning services Jeddah.jpg' : isCommercial ? 'commercial cleaning Jeddah.jpg' : 'home cleaning Jeddah.jpg'}"
        imageAlt="شركة تنظيف في ${area.name} جدة"
        context={{ area: "${area.name}" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-8 text-gray-700">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                خدمات التنظيف الاحترافية في ${area.name}
              </h2>
              <p className="text-lg leading-relaxed">
                ${area.char}. نحن في <strong>شركة المثالي</strong> نقدم خدمات تنظيف متكاملة
                لسكان ${area.name} منذ أكثر من 10 سنوات. فريقنا المتخصص يعرف ${area.name} جيداً
                ويفهم احتياجات سكانها.
              </p>
            </div>

            ${isCoastal ? `<div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">خبرة في المناطق الساحلية</h3>
                <p>نفهم تحديات المناطق الساحلية مثل الرطوبة العالية، ترسبات الملح على النوافذ، والعفن. لدينا الحلول المناسبة.</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">معدات متخصصة</h3>
                <p>نستخدم منظفات ومعدات خاصة للمناطق الساحلية، آمنة وفعالة في إزالة الترسبات ومعالجة الرطوبة.</p>
              </div>
            </div>` : isCommercial ? `<div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">عقود تنظيف دورية</h3>
                <p>نوفر عقود تنظيف مخصصة للمحلات، المكاتب، والشركات بجداول مرنة تناسب أوقات عملكم.</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">خدمة سريعة</h3>
                <p>نفهم أهمية الوقت في الأعمال التجارية. فريقنا سريع وفعال دون التأثير على عملائكم.</p>
              </div>
            </div>` : `<div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">خدمة عائلية</h3>
                <p>نفهم احتياجات العائلات في ${area.name}. فريقنا محترف، مؤمّن، وموثوق تماماً.</p>
              </div>
              <div className="rounded-lg border border-primary/20 bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold text-gray-900">أسعار عادلة</h3>
                <p>أسعار تنافسية مع جودة عالية. عروض خاصة لسكان ${area.name} على الخدمات الدورية.</p>
              </div>
            </div>`}

            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                خدماتنا في ${area.name}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { service: "${isCommercial ? 'تنظيف المحلات التجارية' : 'تنظيف الفلل'}", link: "/services/${isCommercial ? 'offices' : 'villa-cleaning-jeddah'}" },
                  { service: "${isCommercial ? 'تنظيف المكاتب' : 'تنظيف الشقق'}", link: "/services/${isCommercial ? 'offices' : 'apartment-cleaning-jeddah'}" },
                  { service: "التنظيف العميق الشامل", link: "/services/deep-cleaning" },
                  { service: "${isCoastal ? 'تنظيف الواجهات الزجاجية' : 'تنظيف النوافذ'}", link: "/services/glass-facade" },
                  { service: "تنظيف الكنب والمفروشات", link: "/services/upholstery-sofa" },
                  { service: "تنظيف السجاد بالبخار", link: "/services/carpet" },
                  { service: "${isCoastal ? 'تنظيف المسابح' : 'تنظيف المطابخ'}", link: "/services/${isCoastal ? 'pool-cleaning' : 'kitchen-bathroom'}" },
                  { service: "جلي وتلميع الرخام", link: "/services/marble-polishing" },
                  { service: "تنظيف الخزانات", link: "/services/water-tank" },
                  { service: "التعقيم والتطهير", link: "/services/disinfection" },
                ].map((item, index) => (
                  <Link
                    key={index}
                    href={item.link}
                    className="flex items-start gap-3 rounded-lg border bg-white p-4 transition-all hover:border-primary hover:shadow-md"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold text-gray-900 hover:text-primary">{item.service}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                لماذا سكان ${area.name} يثقون بنا؟
              </h2>
              <ul className="space-y-3 pr-6">
                <li className="leading-relaxed">
                  <strong className="text-gray-900">معرفة محلية:</strong> نعمل في ${area.name} منذ سنوات
                  ونعرف خصوصية المنطقة واحتياجات سكانها.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">استجابة سريعة:</strong> فريقنا يصل إلى ${area.name}
                  خلال 30-45 دقيقة في معظم الحالات.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">جودة مضمونة:</strong> نستخدم أفضل المواد والمعدات
                  مع ضمان الرضا التام أو إعادة الخدمة مجاناً.
                </li>
                <li className="leading-relaxed">
                  <strong className="text-gray-900">فريق محترف:</strong> جميع موظفينا مدربون، مؤمّنون،
                  وملتزمون بأعلى معايير الاحترافية.
                </li>
              </ul>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-primary">10+</div>
                <p className="font-semibold text-gray-900">سنوات خبرة</p>
                <p className="text-sm text-gray-600">في ${area.name}</p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-primary">500+</div>
                <p className="font-semibold text-gray-900">عميل راضٍ</p>
                <p className="text-sm text-gray-600">في ${area.name}</p>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-primary">24/7</div>
                <p className="font-semibold text-gray-900">خدمة عملاء</p>
                <p className="text-sm text-gray-600">استجابة فورية</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
              الأسئلة الشائعة عن التنظيف في ${area.name}
            </h2>
            <FAQ items={faqs} />
          </div>
        </div>
      </section>

      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في ${area.name}؟"
        description="فريقنا جاهز لخدمتك في ${area.name}. اتصل الآن واحصل على عرض سعر مجاني!"
        context={{ area: "${area.name}" }}
      />
    </>
  );
}
`;
}

// Export template function
export { generateAreaPageContent, areas };

console.log("✅ Template ready to generate", areas.length, "pages");
console.log("📝 Example usage:");
console.log("   const content = generateAreaPageContent(areas[0]);");
console.log("   // Then save to: app/jeddah/" + areas[0].slug + "/page.tsx");

