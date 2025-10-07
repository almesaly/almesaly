import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المدارس والجامعات بجدة | بيئة تعليمية صحية",
  description: "خدمات تنظيف وتعقيم متخصصة للمدارس والجامعات في جدة. نوفر بيئة نظيفة وصحية للطلاب.",
  alternates: { canonical: `${site.url}/sectors/schools` },
};

const breadcrumbs = [{ name: "القطاعات", url: "/sectors" }, { name: "المدارس", url: "/sectors/schools" }];

const faqs = [
  { question: "متى يتم التنظيف؟", answer: "نفضل التنظيف العميق خلال عطلات نهاية الأسبوع أو الإجازات. التنظيف اليومي يكون بعد انتهاء الدوام المدرسي." },
  { question: "هل المواد آمنة على الأطفال؟", answer: "نعم، نستخدم منظفات ومعقمات معتمدة، آمنة تماماً على الأطفال، وصديقة للبيئة." },
];

export default function SchoolsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف المدارس والجامعات - بيئة صحية للتعلم" subtitle="قطاع التعليم" description="مدرسة نظيفة = طلاب أصحاء. نوفر بيئة تعليمية نظيفة وآمنة." image="professional cleaners.jpg" imageAlt="تنظيف المدارس في جدة" context={{ sector: "المدارس" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف المدارس والجامعات في جدة</h2>
            <p className="text-lg leading-relaxed">
              الأطفال والطلاب يقضون 6-8 ساعات يومياً في المدرسة. البيئة النظيفة ضرورية لصحتهم وتركيزهم. المدارس المتسخة تنشر الأمراض وتؤثر على الحضور والأداء الأكاديمي.
            </p>
            <p className="leading-relaxed">
              نقدم خدمات تنظيف وتعقيم شاملة للمدارس والجامعات في جدة. ننظف الفصول، الحمامات، المختبرات، الساحات، والمرافق. نستخدم مواد آمنة على الأطفال. نضمن بيئة نظيفة وصحية للتعلم.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ sector: "المدارس" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

