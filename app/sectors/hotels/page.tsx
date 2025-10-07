import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف فنادق وشقق فندقية بجدة",
  description: "خدمات تنظيف فندقية احترافية في جدة. نحافظ على معايير النظافة العالمية لفندقك.",
  alternates: { canonical: `${site.url}/sectors/hotels` },
};

const faqs = [
  { question: "هل تقدمون خدمات يومية للفنادق؟", answer: "نعم، نقدم خدمات تنظيف يومية وعقود شاملة للفنادق والشقق الفندقية بأسعار تنافسية." },
];

export default function HotelsPage() {
  return (
    <>
      <Hero title="تنظيف فنادق وشقق فندقية بجدة" subtitle="تنظيف الفنادق" description="معايير نظافة عالمية لفندقك مع فريقنا المتخصص في التنظيف الفندقي." image="hotel cleaning service.jpg" imageAlt="تنظيف فنادق في جدة" context={{ service: "تنظيف فنادق" }} />
      <section className="bg-white py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl space-y-6 text-gray-700"><h2 className="text-3xl font-bold text-gray-900">تنظيف فنادق في جدة</h2><p className="leading-relaxed">انطباع الضيف الأول يبدأ بالنظافة. نقدم خدمات تنظيف فندقية شاملة تشمل الغرف، الممرات، اللوبي، المطاعم، وجميع المرافق بمعايير عالمية.</p></div></div></section>
      <CTASection context={{ service: "تنظيف فنادق" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

