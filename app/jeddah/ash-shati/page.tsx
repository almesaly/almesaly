import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "شركة تنظيف بحي الشاطئ جدة",
  description: "خدمات تنظيف احترافية في حي الشاطئ جدة. فريق متخصص في تنظيف المنازل الساحلية.",
  alternates: { canonical: `${site.url}/jeddah/ash-shati` },
};

const faqs = [
  { question: "كم يستغرق وصولكم إلى حي الشاطئ؟", answer: "نصل خلال 30-45 دقيقة في الأوقات العادية." },
];

export default function AshShatiPage() {
  return (
    <>
      <Hero title="شركة تنظيف بحي الشاطئ جدة" subtitle="التنظيف في الشاطئ" description="خدمات تنظيف متخصصة لسكان حي الشاطئ الساحلي." image="cleaning services Jeddah.jpg" imageAlt="تنظيف في حي الشاطئ" context={{ area: "الشاطئ" }} />
      <section className="bg-white py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl space-y-6 text-gray-700"><h2 className="text-3xl font-bold text-gray-900">خدمات التنظيف في حي الشاطئ</h2><p className="leading-relaxed">حي الشاطئ من الأحياء الساحلية المميزة في جدة. نقدم خدمات تنظيف متخصصة تتعامل مع تحديات الرطوبة والملوحة.</p></div></div></section>
      <CTASection context={{ area: "الشاطئ" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

