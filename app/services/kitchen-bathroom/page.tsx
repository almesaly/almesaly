import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المطابخ والحمامات بجدة | تعقيم شامل",
  description: "خدمة تنظيف وتعقيم متخصصة للمطابخ والحمامات في جدة. نظافة عميقة وتعقيم كامل للأسطح.",
  alternates: { canonical: `${site.url}/services/kitchen-bathroom` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف المطابخ والحمامات", url: "/services/kitchen-bathroom" }];

const faqs = [
  { question: "ما الفرق بين تنظيف المطبخ العادي والعميق؟", answer: "التنظيف العادي يشمل الأسطح والأرضيات. العميق يشمل داخل الفرن، خلف الأجهزة، فوق الخزائن، البلاط والفواصل، والشفاط بالكامل." },
  { question: "هل تنظفون فتحات التصريف؟", answer: "نعم، ننظف ونعقم فتحات التصريف في الحوض والبانيو والشاور لإزالة الانسدادات الطفيفة والروائح." },
];

export default function KitchenBathroomPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف المطابخ والحمامات - نظافة وتعقيم شامل" subtitle="تنظيف المطابخ والحمامات" description="تنظيف متخصص لأكثر المناطق حساسية في منزلك. نظافة عميقة وتعقيم كامل." image="kitchen cleaning Jeddah.jpg" imageAlt="تنظيف المطابخ في جدة" context={{ service: "تنظيف المطابخ" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف المطابخ والحمامات في جدة</h2>
            <p className="text-lg leading-relaxed">
              المطبخ والحمام هما أكثر الأماكن استخداماً في المنزل، وأكثرها عرضة للأوساخ والبكتيريا. المطبخ يتراكم فيه الشحوم والدهون، والحمام يتعرض للرطوبة والعفن. كلاهما يحتاج تنظيفاً متخصصاً ومنتظماً.
            </p>
            <p className="leading-relaxed">
              نقدم خدمة تنظيف متخصصة للمطابخ والحمامات في جدة. نستخدم منظفات قوية وآمنة لإزالة الشحوم، الترسبات الجيرية، العفن، والبكتيريا. نترك مطبخك وحمامك نظيفين تماماً ومعقمين ولامعين.
            </p>
            <h3 className="text-2xl font-bold text-gray-900">ما نقوم به في المطبخ:</h3>
            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>تنظيف عميق للفرن والموقد</li>
              <li>إزالة الشحوم من الشفاط والفلاتر</li>
              <li>تنظيف الثلاجة من الداخل (اختياري)</li>
              <li>فرك البلاط والفواصل</li>
              <li>تلميع الحوض والحنفيات</li>
            </ul>
            <h3 className="text-2xl font-bold text-gray-900">ما نقوم به في الحمام:</h3>
            <ul className="list-inside list-disc space-y-2 pr-6">
              <li>تنظيف وتعقيم المرحاض</li>
              <li>إزالة الترسبات من الحنفيات والشاور</li>
              <li>فرك البلاط وإزالة العفن</li>
              <li>تلميع المرايا والزجاج</li>
              <li>تعقيم شامل لجميع الأسطح</li>
            </ul>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف المطابخ" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

