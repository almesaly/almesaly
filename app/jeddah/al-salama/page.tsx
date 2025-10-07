import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي السلامة بجدة | شركة المثالي",
  description: "خدمات تنظيف المنازل والفلل والشقق في حي السلامة بجدة. خدمة سريعة ومميزة لسكان السلامة.",
  alternates: { canonical: `${site.url}/jeddah/al-salama` },
};

const breadcrumbs = [{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي السلامة", url: "/jeddah/al-salama" }];

const services = [
  { title: "تنظيف المنازل", description: "تنظيف شامل للمنازل في السلامة", image: "home cleaning Jeddah.jpg", link: "/services/home-cleaning-jeddah" },
  { title: "تنظيف الفلل", description: "تنظيف الفلل الكبيرة والواسعة", image: "villa cleaning service.jpg", link: "/services/villa-cleaning-jeddah" },
  { title: "تنظيف الشقق", description: "تنظيف الشقق السكنية", image: "apartment cleaning.jpg", link: "/services/apartment-cleaning-jeddah" },
];

const faqs = [
  { question: "هل تخدمون جميع أنحاء حي السلامة؟", answer: "نعم، نخدم جميع مناطق حي السلامة بجدة دون استثناء." },
  { question: "كم تبعد عني أقرب نقطة خدمة؟", answer: "نحن قريبون جداً من حي السلامة ونصل إليك خلال 30-45 دقيقة من الحجز." },
];

export default function AlSalamaPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="خدمات التنظيف في حي السلامة بجدة" subtitle="حي السلامة" description="خدمات تنظيف احترافية لسكان حي السلامة. فريق مدرب ومعدات حديثة." image="home cleaning Jeddah.jpg" imageAlt="تنظيف في حي السلامة جدة" context={{ area: "حي السلامة" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">شركة تنظيف في حي السلامة بجدة</h2>
            <p className="text-lg leading-relaxed">
              حي السلامة من الأحياء الحيوية والمميزة في جدة، يضم سكاناً يقدرون النظافة والخدمة المميزة. نحن في <strong>شركة المثالي</strong> نفخر بخدمة سكان حي السلامة منذ سنوات.
            </p>
            <p className="leading-relaxed">
              نقدم جميع خدمات التنظيف: تنظيف المنازل، الفلل، الشقق، الكنب، السجاد، المراتب، وخدمات التعقيم. فريقنا قريب منك ويصل خلال دقائق. احجز الآن وجرب الفرق.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">خدماتنا في حي السلامة</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection context={{ area: "حي السلامة" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

