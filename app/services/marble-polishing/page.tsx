import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "جلي وتلميع الرخام والأرضيات بجدة",
  description: "خدمة جلي وتلميع الرخام والأرضيات في جدة. نعيد البريق واللمعان لأرضياتك بأحدث الماكينات.",
  alternates: { canonical: `${site.url}/services/marble-polishing` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "جلي الرخام", url: "/services/marble-polishing" }];

const faqs = [
  { question: "ما الفرق بين الجلي والتلميع؟", answer: "الجلي يزيل طبقة رقيقة من السطح لإزالة الخدوش والبقع. التلميع يضيف بريقاً ولمعاناً للسطح النظيف." },
  { question: "كم يدوم بريق الرخام بعد الجلي؟", answer: "مع العناية الجيدة، يستمر البريق لسنة أو أكثر. يعتمد على حركة المرور والعناية اليومية." },
];

export default function MarblePolishingPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="جلي وتلميع الرخام - استعادة البريق الأصلي" subtitle="جلي الرخام" description="أعد لأرضيات الرخام بريقها ولمعانها مع خدمة الجلي والتلميع المتخصصة." image="marble cleaning.jpg" imageAlt="جلي الرخام في جدة" context={{ service: "جلي الرخام" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">جلي وتلميع الرخام في جدة</h2>
            <p className="text-lg leading-relaxed">
              الرخام مع الوقت يفقد بريقه ويصبح باهتاً بسبب الاستخدام، الخدوش، والبقع. الحل ليس استبدال الرخام - بل جليه وتلميعه!
            </p>
            <p className="leading-relaxed">
              نقدم خدمة جلي وتلميع الرخام والجرانيت والأرضيات الصلبة في جدة. نستخدم ماكينات إيطالية احترافية ومواد متخصصة. نزيل الخدوش، البقع، والاصفرار، ونعيد البريق واللمعان كأن الرخام جديد.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "جلي الرخام" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

