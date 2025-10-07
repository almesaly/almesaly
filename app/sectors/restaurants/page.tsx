import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف مطاعم وكافيهات بجدة - خدمات احترافية",
  description: "خدمات تنظيف متخصصة للمطاعم والكافيهات في جدة. نلتزم بمعايير السلامة الغذائية والنظافة العالية.",
  alternates: { canonical: `${site.url}/sectors/restaurants` },
};

const faqs = [
  { question: "هل تنظفون المطاعم بعد ساعات العمل؟", answer: "نعم، نوفر جدولة مرنة تناسب ساعات عملك - بعد الإغلاق أو قبل الافتتاح حسب تفضيلك." },
  { question: "هل تلتزمون بمعايير السلامة الغذائية؟", answer: "بالتأكيد! نستخدم مواد تنظيف معتمدة وآمنة للمطابخ التجارية، ونلتزم بجميع معايير السلامة الغذائية." },
];

export default function RestaurantsPage() {
  return (
    <>
      <Hero title="تنظيف مطاعم وكافيهات بجدة - احترافية وجودة" subtitle="تنظيف المطاعم" description="حافظ على نظافة مطعمك وسمعته مع خدمات تنظيف متخصصة للمطاعم والكافيهات." image="restaurant cleaning.jpg" imageAlt="تنظيف مطاعم في جدة" context={{ service: "تنظيف مطاعم" }} />
      <section className="bg-white py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl space-y-6 text-gray-700"><h2 className="text-3xl font-bold text-gray-900">تنظيف مطاعم وكافيهات في جدة</h2><p className="leading-relaxed">النظافة في المطاعم ليست خياراً - إنها ضرورة. نقدم خدمات تنظيف شاملة للمطاعم تشمل المطابخ، صالات الطعام، الحمامات، والمناطق الخارجية. نلتزم بأعلى معايير النظافة والسلامة الغذائية.</p></div></div></section>
      <CTASection context={{ service: "تنظيف مطاعم" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

