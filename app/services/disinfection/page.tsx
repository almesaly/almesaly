import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التعقيم والتطهير بجدة | قضاء على الجراثيم",
  description: "خدمات تعقيم وتطهير احترافية في جدة. القضاء على الفيروسات والبكتيريا بمواد معتمدة وآمنة.",
  alternates: { canonical: `${site.url}/services/disinfection` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "التعقيم والتطهير", url: "/services/disinfection" }];

const faqs = [
  { question: "ما الفرق بين التنظيف والتعقيم؟", answer: "التنظيف يزيل الأوساخ المرئية. التعقيم يقتل الجراثيم والبكتيريا والفيروسات غير المرئية." },
  { question: "هل المواد آمنة؟", answer: "نعم، نستخدم معقمات معتمدة من وزارة الصحة، آمنة على الأطفال والحيوانات الأليفة." },
  { question: "متى أحتاج التعقيم؟", answer: "بعد المرض، قبل مناسبة مهمة، بشكل دوري في الأماكن العامة، أو كإجراء وقائي." },
];

export default function DisinfectionPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="التعقيم والتطهير - حماية صحية شاملة" subtitle="التعقيم والتطهير" description="احمِ عائلتك وموظفيك من الفيروسات والبكتيريا مع خدمات التعقيم المتخصصة." image="disinfecting service.jpg" imageAlt="التعقيم والتطهير في جدة" context={{ service: "التعقيم" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">خدمات التعقيم والتطهير في جدة</h2>
            <p className="text-lg leading-relaxed">
              النظافة المرئية لا تكفي. البكتيريا والفيروسات غير مرئية لكنها خطيرة على الصحة. التعقيم الدوري ضروري خاصة في المنازل، المكاتب، المدارس، والأماكن العامة.
            </p>
            <p className="leading-relaxed">
              نقدم خدمات تعقيم وتطهير احترافية في جدة. نستخدم معقمات معتمدة من وزارة الصحة تقتل 99.9% من الجراثيم والفيروسات. آمنة على البشر والحيوانات. نعقم جميع الأسطح الملامسة، الأرضيات، والهواء (عند الحاجة).
            </p>
            <h3 className="text-2xl font-bold text-gray-900">متى تحتاج التعقيم؟</h3>
            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>بعد إصابة أحد أفراد الأسرة بمرض معدٍ</li>
              <li>قبل استقبال مولود جديد</li>
              <li>بشكل دوري في المدارس والمستشفيات</li>
              <li>في المكاتب والشركات للوقاية</li>
              <li>بعد حدث أو تجمع كبير</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "التعقيم" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

