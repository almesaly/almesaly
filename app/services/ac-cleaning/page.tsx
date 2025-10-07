import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المكيفات بجدة | فلاتر وكويل ودكتات",
  description: "خدمة تنظيف المكيفات الاحترافية في جدة. تنظيف الفلاتر، الكويل، والدكتات لتحسين جودة الهواء والكفاءة.",
  alternates: { canonical: `${site.url}/services/ac-cleaning` },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }, { name: "تنظيف المكيفات", url: "/services/ac-cleaning" }];

const faqs = [
  { question: "كم مرة يجب تنظيف المكيف؟", answer: "يُنصح بتنظيف الفلاتر كل شهر وتنظيف الكويل والدكتات كل 3-6 أشهر حسب الاستخدام." },
  { question: "هل التنظيف يحسن التبريد؟", answer: "نعم بالتأكيد! المكيف النظيف يبرد أسرع، يستهلك طاقة أقل، ويعمل بكفاءة أعلى." },
];

export default function ACCleaningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف المكيفات بجدة - هواء نقي وتبريد أفضل" subtitle="تنظيف المكيفات" description="نظف مكيفك لتحسين جودة الهواء، زيادة الكفاءة، وتوفير الكهرباء." image="cleaning services Jeddah.jpg" imageAlt="تنظيف المكيفات في جدة" context={{ service: "تنظيف المكيفات" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف المكيفات في جدة</h2>
            <p className="text-lg leading-relaxed">
              المكيف المتسخ يعني هواء ملوث، تبريد ضعيف، استهلاك كهرباء عالٍ، وأعطال متكررة. في جدة حيث الحر الشديد والأتربة، المكيفات تحتاج تنظيفاً منتظماً.
            </p>
            <p className="leading-relaxed">
              نقدم خدمة تنظيف شاملة للمكيفات: الفلاتر، الكويل (المبخر)، الدكتات، والمروحة. نستخدم مواد آمنة ومعدات متخصصة. النتيجة: هواء نقي، تبريد أقوى، وتوفير في الكهرباء.
            </p>
          </div>
        </div>
      </section>
      <CTASection context={{ service: "تنظيف المكيفات" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

