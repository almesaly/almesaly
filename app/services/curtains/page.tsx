import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف الستائر بالبخار بجدة | بدون فك",
  description: "خدمة تنظيف الستائر بالبخار في جدة. تنظيف وتعقيم الستائر في مكانها دون الحاجة لفكها أو نقلها.",
  alternates: { canonical: `${site.url}/services/curtains` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف الستائر", url: "/services/curtains" }];

const faqs = [
  { question: "هل تنظفون الستائر دون فكها؟", answer: "نعم! نستخدم تقنية البخار لتنظيف الستائر في مكانها دون الحاجة لفكها. هذا يوفر الوقت والجهد." },
  { question: "هل البخار آمن على جميع أنواع الستائر؟", answer: "البخار آمن على معظم أنواع الأقمشة. لكن بعض الأقمشة الحساسة جداً مثل الحرير قد تحتاج طريقة مختلفة. نفحص القماش أولاً." },
];

export default function CurtainsCleaningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف الستائر بالبخار - بدون فك أو نقل" subtitle="تنظيف الستائر" description="نظف ستائرك في مكانها باستخدام البخار الساخن. سريع، فعال، وآمن." image="curtain cleaning.jpg" imageAlt="تنظيف الستائر في جدة" context={{ service: "تنظيف الستائر" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف الستائر بالبخار في جدة</h2>
            <p className="text-lg leading-relaxed">
              الستائر تتراكم عليها الأتربة والغبار بمرور الوقت، خاصة في جدة حيث الرياح والأتربة. فك الستائر، نقلها للمغسلة، ثم إعادة تركيبها عملية مرهقة ومكلفة.
            </p>
            <p className="leading-relaxed">
              نقدم حلاً أسهل - <strong>تنظيف الستائر بالبخار في مكانها</strong>. نأتي إلى منزلك بمعداتنا، ننظف ستائرك باستخدام البخار الساخن، ونتركها نظيفة ومعقمة دون الحاجة لفكها أو نقلها. الخدمة سريعة، فعالة، وتحافظ على قماش الستائر.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف الستائر" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

