import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف خزانات المياه بجدة | تعقيم وتطهير",
  description: "خدمة تنظيف وتعقيم خزانات المياه في جدة. نضمن مياه نظيفة وصحية لك ولعائلتك.",
  alternates: { canonical: `${site.url}/services/water-tank` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف خزانات المياه", url: "/services/water-tank" }];

const faqs = [
  { question: "كم مرة يجب تنظيف الخزان؟", answer: "يُنصح بتنظيف الخزان مرتين في السنة على الأقل لضمان نظافة المياه وصحتها." },
  { question: "هل تعقمون الخزان؟", answer: "نعم، بعد التنظيف نستخدم مواد تعقيم معتمدة وآمنة للقضاء على البكتيريا والطحالب." },
];

export default function WaterTankPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف خزانات المياه - مياه نظيفة وآمنة" subtitle="تنظيف الخزانات" description="حافظ على صحة عائلتك بتنظيف وتعقيم خزان المياه بشكل دوري." image="water tank cleaning.jpg" imageAlt="تنظيف خزانات المياه في جدة" context={{ service: "تنظيف خزانات المياه" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف خزانات المياه في جدة</h2>
            <p className="text-lg leading-relaxed">
              خزان المياه هو مصدر المياه لمنزلك. إذا كان متسخاً، فأنت تشرب وتستحم بمياه ملوثة! الخزان يتراكم فيه الطحالب، الطمي، والبكتيريا مع الوقت.
            </p>
            <p className="leading-relaxed">
              نقدم خدمة تنظيف وتعقيم شاملة لخزانات المياه في جدة. نفرغ الخزان، ننظفه بعمق، نزيل الرواسب والطحالب، ثم نعقمه بمواد آمنة ومعتمدة. نضمن مياه نظيفة وصحية لعائلتك.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف خزانات المياه" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

