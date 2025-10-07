import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المسابح بجدة | صيانة دورية",
  description: "خدمة تنظيف وصيانة المسابح في جدة. نحافظ على نظافة مسبحك وجاهزيته طوال العام.",
  alternates: { canonical: `${site.url}/services/pool-cleaning` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف المسابح", url: "/services/pool-cleaning" }];

const faqs = [
  { question: "كم مرة يحتاج المسبح للتنظيف؟", answer: "المسبح يحتاج تنظيف أسبوعي خلال موسم الاستخدام وتنظيف شهري خلال موسم عدم الاستخدام." },
  { question: "هل تقدمون صيانة دورية؟", answer: "نعم، نقدم عقود صيانة دورية تشمل التنظيف، فحص الكيماويات، وتنظيف الفلاتر." },
];

export default function PoolCleaningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف المسابح - مسبح نظيف جاهز دائماً" subtitle="تنظيف المسابح" description="حافظ على مسبحك نظيفاً وآمناً مع خدمات التنظيف والصيانة الدورية." image="cleaning services Jeddah.jpg" imageAlt="تنظيف المسابح في جدة" context={{ service: "تنظيف المسابح" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف المسابح في جدة</h2>
            <p className="text-lg leading-relaxed">
              المسبح النظيف هو مسبح آمن. تراكم الطحالب والأوساخ في المسبح يمكن أن يسبب أمراض ويفسد متعة السباحة.
            </p>
            <p className="leading-relaxed">
              نقدم خدمة تنظيف وصيانة شاملة للمسابح في جدة. نستخدم معدات احترافية ومواد آمنة. نظف الجدران والأرضية، ننظف الفلاتر، نفحص الكيماويات، ونضبط التوازن. مسبحك جاهز دائماً للاستخدام.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف المسابح" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

