import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { CTASection } from "@/components/cta-section";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدمات التنظيف في حي الروضة بجدة | شركة المثالي",
  description: "خدمات تنظيف المنازل والفلل والشقق في حي الروضة بجدة. خدمة سريعة ومميزة.",
  alternates: { canonical: `${site.url}/jeddah/al-rawdah` },
};

const breadcrumbs = [{ name: "مناطق جدة", url: "/jeddah" }, { name: "حي الروضة", url: "/jeddah/al-rawdah" }];

const services = [
  { title: "تنظيف المنازل", description: "تنظيف شامل للمنازل", image: "home cleaning Jeddah.jpg", link: "/services/home-cleaning-jeddah" },
  { title: "التنظيف العميق", description: "تنظيف عميق ودقيق", image: "deep cleaning service.jpg", link: "/services/deep-cleaning" },
  { title: "تنظيف الكنب", description: "تنظيف بالبخار", image: "sofa cleaning Jeddah.jpg", link: "/services/upholstery-sofa" },
];

export default function AlRawdahPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="خدمات التنظيف في حي الروضة بجدة" subtitle="حي الروضة" description="خدمات تنظيف احترافية لسكان حي الروضة الراقي." image="home cleaning Jeddah.jpg" imageAlt="تنظيف في حي الروضة جدة" context={{ area: "حي الروضة" }} />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">شركة تنظيف في حي الروضة بجدة</h2>
            <p className="text-lg leading-relaxed">
              حي الروضة من أرقى أحياء جدة، ونحن نقدم خدمات تنظيف تليق بسكانه المميزين. فريق محترف ومدرب على أعلى مستوى.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
      <CTASection context={{ area: "حي الروضة" }} />
    </>
  );
}

