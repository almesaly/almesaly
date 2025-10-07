import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site, sectors } from "@/app/config/site";

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
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="خدمات تنظيف احترافية لجميع القطاعات التجارية"
        subtitle="القطاعات التي نخدمها"
        description="نقدم حلول تنظيف متخصصة ومصممة خصيصاً لاحتياجات كل قطاع تجاري. عقود مرنة، جودة عالية، والتزام بمعايير السلامة."
        image="commercial cleaning Jeddah.jpg"
        imageAlt="خدمات تنظيف تجارية في جدة - شركة المثالي"
        context={{ page: "القطاعات التجارية" }}
      />

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



