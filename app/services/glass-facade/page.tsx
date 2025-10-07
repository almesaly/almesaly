import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف الزجاج والواجهات العالية بجدة",
  description: "خدمة تنظيف الواجهات الزجاجية والنوافذ العالية في جدة. معدات خاصة وفريق مدرب لتنظيف آمن.",
  alternates: { canonical: `${site.url}/services/glass-facade` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف الزجاج والواجهات", url: "/services/glass-facade" }];

const faqs = [
  { question: "هل تنظفون المباني العالية؟", answer: "نعم، لدينا معدات وفريق متخصص في تنظيف الواجهات العالية بأمان تام حتى 20 طابق." },
  { question: "كيف تضمنون السلامة؟", answer: "نستخدم معدات سلامة معتمدة، حبال احترافية، وفريق مدرب ومرخص في أعمال المرتفعات." },
];

export default function GlassFacadePage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف الزجاج والواجهات العالية - نظافة واحترافية" subtitle="تنظيف الواجهات" description="تنظيف احترافي للواجهات الزجاجية والنوافذ العالية بأحدث المعدات." image="window cleaning Jeddah.jpg" imageAlt="تنظيف الواجهات في جدة" context={{ service: "تنظيف الواجهات" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف الزجاج والواجهات في جدة</h2>
            <p className="text-lg leading-relaxed">
              الواجهات الزجاجية والنوافذ العالية تحتاج تنظيفاً متخصصاً. لا يمكن الوصول إليها بالطرق العادية وتحتاج معدات خاصة وفريق مدرب.
            </p>
            <p className="leading-relaxed">
              نقدم خدمة تنظيف احترافية للواجهات الزجاجية والنوافذ في المباني العالية. نستخدم معدات سلامة معتمدة، حبال احترافية، ومنظفات متخصصة. فريقنا مدرب ومرخص في أعمال المرتفعات. نضمن نظافة كاملة بأمان تام.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف الواجهات" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

