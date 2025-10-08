import { Metadata } from "next";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { site, sectors } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";
import { Phone, MessageCircle, Building2, Briefcase, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "خدمات تنظيف تجارية واحترافية في جدة",
  description:
    "خدمات تنظيف متخصصة للشركات والمؤسسات في جدة. تنظيف مكاتب، مطاعم، فنادق، مدارس، عيادات ومستودعات. عقود دورية ومرنة.",
  alternates: {
    canonical: `${site.url}/sectors`,
  },
};

const breadcrumbs = [{ name: "القطاعات التجارية", url: "/sectors" }];

export default function SectorsPage() {
  const whatsappLink = generateWhatsAppLink(site.whatsapp, { page: "القطاعات التجارية" });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24">
        {/* Grid Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold">شريككم الموثوق للتنظيف التجاري</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              حلول تنظيف احترافية<br />لجميع القطاعات التجارية
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed opacity-95 md:text-xl">
              نوفر خدمات تنظيف متخصصة للمكاتب، الفنادق، المطاعم، المدارس، المستشفيات، والمنشآت التجارية. عقود مرنة والتزام بأعلى معايير الجودة والسلامة
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-gray-900 hover:bg-gray-100 shadow-xl">
                <a href={`tel:${site.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل الآن: {site.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 bg-green-600 text-white hover:bg-green-700 shadow-xl">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
              </Button>
            </div>

            {/* Why Choose Us - Commercial */}
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Briefcase className="mx-auto mb-3 h-10 w-10 text-blue-400" />
                <h3 className="mb-2 text-lg font-bold">عقود مخصصة</h3>
                <p className="text-sm opacity-90">حلول مرنة تناسب جدول عملك</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Award className="mx-auto mb-3 h-10 w-10 text-yellow-400" />
                <h3 className="mb-2 text-lg font-bold">جودة معتمدة</h3>
                <p className="text-sm opacity-90">معايير دولية للتنظيف التجاري</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <Clock className="mx-auto mb-3 h-10 w-10 text-green-400" />
                <h3 className="mb-2 text-lg font-bold">متاحون 24/7</h3>
                <p className="text-sm opacity-90">خدمة في أي وقت يناسبك</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              خبرة متخصصة في جميع القطاعات
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              نفهم أن كل قطاع تجاري له متطلباته الخاصة ومعاييره الفريدة. لذا، طورنا حلول تنظيف
              متخصصة لكل قطاع، مع فرق مدربة على فهم واحترام خصوصية كل مجال عمل. من المكاتب الصغيرة
              إلى المنشآت الصناعية الكبرى، نقدم خدمات تنظيف تحافظ على صورتك المهنية وتضمن بيئة عمل
              نظيفة وصحية لموظفيك وعملائك.
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

          <div className="mx-auto mt-16 max-w-4xl space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">
              لماذا تختار خدماتنا التجارية؟
            </h3>

            <ul className="space-y-4">
              <li className="leading-relaxed">
                <strong>عقود مرنة ومخصصة:</strong> نصمم عقود تنظيف تناسب تماماً جدول عملك وميزانيتك.
                يومي، أسبوعي، شهري - أو أي جدول تفضله. نعمل في أوقات لا تعيق عملك (صباحاً مبكراً، مساءً
                بعد الإغلاق، أو عطلات نهاية الأسبوع).
              </li>
              <li className="leading-relaxed">
                <strong>التزام بمعايير الجودة والسلامة:</strong> نلتزم بأعلى معايير الجودة والسلامة
                المهنية. جميع موادنا ومعداتنا معتمدة ومطابقة للمواصفات السعودية والدولية.
              </li>
              <li className="leading-relaxed">
                <strong>فريق محترف ومدرب:</strong> فرقنا التجارية مدربة خصيصاً على التعامل مع البيئات
                التجارية، احترام الخصوصية، والالتزام بقواعد السلامة والسرية.
              </li>
              <li className="leading-relaxed">
                <strong>تقارير وشفافية:</strong> للعقود طويلة الأمد، نقدم تقارير دورية عن الخدمات
                المنفذة ومستوى النظافة، مع قنوات تواصل مفتوحة لأي ملاحظات أو تعديلات.
              </li>
              <li className="leading-relaxed">
                <strong>أسعار تنافسية وقيمة ممتازة:</strong> أسعارنا للعقود التجارية منافسة وعادلة، مع
                خصومات خاصة للعقود طويلة الأمد. تحصل على قيمة حقيقية مقابل كل ريال تستثمره.
              </li>
            </ul>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                قطاعك غير موجود في القائمة؟
              </h3>
              <p className="text-gray-700">
                نخدم أيضاً العديد من القطاعات الأخرى: صالات رياضية، صالونات تجميل، مغاسل ملابس،
                معارض سيارات، قاعات أفراح، مساجد، وأكثر. تواصل معنا وأخبرنا بنوع منشأتك وسنصمم لك حلاً
                مثالياً.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="هل تبحث عن شريك تنظيف موثوق لمنشأتك؟"
        description="تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لقطاعك"
        context={{ page: "القطاعات التجارية" }}
      />
    </>
  );
}



