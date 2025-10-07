import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف وتعقيم المستشفيات والمراكز الطبية بجدة",
  description: "خدمات تنظيف وتعقيم متخصصة للمستشفيات والمراكز الطبية في جدة. نلتزم بأعلى معايير النظافة والتعقيم الطبي.",
  alternates: { canonical: `${site.url}/sectors/hospitals` },
};

const breadcrumbs = [
  { name: "القطاعات", url: "/sectors" },
  { name: "المستشفيات", url: "/sectors/hospitals" },
];

const faqs = [
  {
    question: "ما الفرق بين تنظيف المستشفيات والتنظيف العادي؟",
    answer: "تنظيف المستشفيات يتبع بروتوكولات صارمة معتمدة من وزارة الصحة. يشمل تعقيماً طبياً شاملاً، استخدام معقمات معتمدة، والتزام بمعايير مكافحة العدوى. الفريق مدرب على التعامل مع المخلفات الطبية والمناطق الحساسة.",
  },
  {
    question: "هل فريقكم مدرب على معايير النظافة الطبية؟",
    answer: "نعم، جميع أفراد فريق المستشفيات حاصلون على تدريب متخصص في النظافة الطبية، مكافحة العدوى، والتعامل مع المخلفات الطبية. نلتزم بمعايير وزارة الصحة ومنظمة الصحة العالمية.",
  },
  {
    question: "كيف تضمنون عدم نقل العدوى بين الأقسام؟",
    answer: "نتبع بروتوكول صارم: أدوات منفصلة لكل قسم، تعقيم معدات بعد كل استخدام، تقسيم المناطق (نظيفة، متوسطة، ملوثة)، واستخدام ألوان مختلفة للمماسح والقفازات حسب المنطقة.",
  },
];

const services = [
  {
    title: "تعقيم غرف العمليات",
    description: "تعقيم شامل بمعايير طبية صارمة",
    image: "hospital cleaning Jeddah.jpg",
    link: "/services/disinfection",
  },
  {
    title: "تنظيف غرف المرضى",
    description: "تنظيف وتعقيم يومي لغرف المرضى",
    image: "sanitization company.jpg",
    link: "/services/disinfection",
  },
  {
    title: "تنظيف الأرضيات الطبية",
    description: "تنظيف وتلميع بمواد طبية معتمدة",
    image: "floor polishing Jeddah.jpg",
    link: "/services/marble-polishing",
  },
];

export default function HospitalsPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        title="تنظيف وتعقيم المستشفيات - معايير طبية صارمة"
        subtitle="قطاع المستشفيات والمراكز الطبية"
        description="نلتزم بأعلى معايير النظافة والتعقيم الطبي لحماية المرضى والعاملين"
        image="hospital cleaning Jeddah.jpg"
        imageAlt="تنظيف المستشفيات في جدة"
        context={{ sector: "المستشفيات" }}
      />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">تنظيف المستشفيات والمراكز الطبية في جدة</h2>
            <p className="text-lg leading-relaxed">
              النظافة في المستشفيات ليست مسألة مظهر - إنها مسألة حياة أو موت. العدوى المكتسبة من المستشفيات تصيب ملايين المرضى سنوياً، وكثير منها يحدث بسبب نقص النظافة والتعقيم المناسب.
            </p>
            <p className="leading-relaxed">
              في <strong>شركة المثالي</strong>، نقدم خدمات تنظيف وتعقيم متخصصة للمستشفيات والمراكز الطبية في جدة. نلتزم بأعلى معايير النظافة الطبية ومكافحة العدوى. فريقنا مدرب ومعتمد، ونستخدم بروتوكولات معتمدة من وزارة الصحة.
            </p>
            <h3 className="text-2xl font-bold text-gray-900">لماذا نحن مختلفون؟</h3>
            <ul className="list-inside list-disc space-y-2 pr-6">
              <li><strong>تدريب طبي متخصص:</strong> فريقنا حاصل على تدريب في مكافحة العدوى والنظافة الطبية</li>
              <li><strong>بروتوكولات صارمة:</strong> نتبع معايير وزارة الصحة ومنظمة الصحة العالمية</li>
              <li><strong>معقمات معتمدة:</strong> نستخدم معقمات طبية معتمدة فعالة ضد أخطر الجراثيم</li>
              <li><strong>تقسيم المناطق:</strong> نعامل كل منطقة حسب مستوى خطورتها (نظيفة، متوسطة، ملوثة)</li>
              <li><strong>توثيق كامل:</strong> نقدم تقارير تنظيف وتعقيم مفصلة لكل قسم</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">خدماتنا للمستشفيات</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">بروتوكول التنظيف في المستشفيات</h2>
            <div className="space-y-4">
              <div className="rounded-lg bg-red-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-gray-900">مناطق شديدة الخطورة (غرف العمليات، العناية المركزة)</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>تعقيم شامل قبل وبعد كل عملية</li>
                  <li>استخدام معقمات طبية من الدرجة الأولى</li>
                  <li>أدوات ومعدات مخصصة لهذه المناطق فقط</li>
                  <li>فريق متخصص ومدرب</li>
                </ul>
              </div>
              <div className="rounded-lg bg-yellow-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-gray-900">مناطق متوسطة الخطورة (غرف المرضى، الممرات)</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>تنظيف وتعقيم يومي</li>
                  <li>معقمات معتمدة فعالة ضد معظم الجراثيم</li>
                  <li>تغيير المماسح والقفازات بين الغرف</li>
                </ul>
              </div>
              <div className="rounded-lg bg-green-50 p-6">
                <h4 className="mb-3 text-xl font-bold text-gray-900">مناطق قليلة الخطورة (المكاتب، الاستقبال)</h4>
                <ul className="list-inside list-disc space-y-1 pr-6">
                  <li>تنظيف شامل يومي</li>
                  <li>تعقيم دوري للأسطح الملامسة</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTASection context={{ sector: "المستشفيات" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

