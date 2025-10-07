import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المنشآت والمجمعات التجارية بجدة",
  description: "خدمات تنظيف متخصصة للمنشآت الكبيرة والمجمعات التجارية في جدة. حلول شاملة لكل احتياجات النظافة.",
  alternates: { canonical: `${site.url}/sectors/facilities` },
};

const breadcrumbs = [{ name: "القطاعات", url: "/sectors" }, { name: "المنشآت", url: "/sectors/facilities" }];

const faqs = [
  { question: "ما حجم المنشآت التي تخدمونها؟", answer: "نخدم منشآت من جميع الأحجام، من مباني صغيرة إلى مجمعات تجارية ضخمة بمئات الآلاف من الأمتار المربعة." },
  { question: "هل تقدمون عقود سنوية؟", answer: "نعم، نقدم عقود صيانة وتنظيف سنوية بأسعار مناسبة وخدمة مستمرة ومضمونة." },
];

export default function FacilitiesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف المنشآت والمجمعات - حلول شاملة" subtitle="قطاع المنشآت" description="خدمات تنظيف احترافية للمباني والمنشآت الكبيرة. فريق كبير ومعدات متقدمة." image="building cleaning Jeddah.jpg" imageAlt="تنظيف المنشآت في جدة" context={{ sector: "المنشآت" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف المنشآت والمجمعات في جدة</h2>
            <p className="text-lg leading-relaxed">
              المنشآت الكبيرة تحتاج حلول تنظيف احترافية ومنظمة. عدد كبير من العاملين، معدات متقدمة، وإدارة فعالة ضرورية للحفاظ على نظافة دائمة.
            </p>
            <p className="leading-relaxed">
              نخدم المجمعات التجارية، المولات، المباني الإدارية، والمنشآت الكبيرة في جدة. لدينا فريق كبير من العمال المدربين، معدات احترافية، ونظام إدارة متطور. نضمن نظافة دائمة وخدمة احترافية.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ sector: "المنشآت" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

