import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف وتعقيم المراتب بجدة | القضاء على العث",
  description: "خدمة تنظيف وتعقيم المراتب بالبخار في جدة. القضاء على العث والبكتيريا وإزالة البقع لنوم صحي.",
  alternates: { canonical: `${site.url}/services/mattress` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف المراتب", url: "/services/mattress" }];

const faqs = [
  { question: "كيف تنظفون المراتب؟", answer: "نستخدم البخار الساخن لتنظيف عميق وقتل 99.9% من العث والبكتيريا، ثم نشفط الرطوبة والأوساخ بجهاز قوي." },
  { question: "كم يستغرق جفاف المرتبة؟", answer: "المرتبة تكون رطبة قليلاً وتجف خلال 3-4 ساعات. يمكنك استخدامها في نفس اليوم." },
  { question: "هل تزيلون البقع القديمة؟", answer: "نبذل قصارى جهدنا لإزالة البقع القديمة باستخدام منظفات متخصصة قبل البخار. معظم البقع تزول أو تخف بشكل ملحوظ." },
];

export default function MattressCleaningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف وتعقيم المراتب بجدة - نوم صحي وآمن" subtitle="تنظيف المراتب" description="تخلص من العث والبكتيريا والبقع في مرتبتك مع خدمة التنظيف بالبخار المتخصصة." image="mattress cleaning.jpg" imageAlt="تنظيف المراتب في جدة" context={{ service: "تنظيف المراتب" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف وتعقيم المراتب - لنوم صحي</h2>
            <p className="text-lg leading-relaxed">
              مرتبتك تحتوي على ملايين من عث الغبار والبكتيريا والخلايا الميتة. هذا يمكن أن يسبب حساسية، مشاكل تنفسية، وأمراض جلدية. تنظيف المرتبة بالبخار كل 6-12 شهر ضروري للحفاظ على صحتك وصحة عائلتك.
            </p>
            <p className="leading-relaxed">
              نقدم خدمة تنظيف وتعقيم المراتب بالبخار في جدة. البخار الساخن (150 درجة) يقتل 99.9% من العث والبكتيريا ويزيل الأوساخ العميقة والبقع. نترك مرتبتك نظيفة ومعقمة وجاهزة لنوم صحي وآمن.
            </p>
            <h3 className="text-2xl font-bold text-gray-900">فوائد تنظيف المراتب</h3>
            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>القضاء على عث الغبار والبكتيريا</li>
              <li>تحسين جودة النوم والصحة</li>
              <li>إزالة البقع والروائح</li>
              <li>إطالة عمر المرتبة</li>
              <li>تقليل الحساسية والربو</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف المراتب" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

