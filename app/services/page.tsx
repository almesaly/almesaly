import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site, services } from "@/app/config/site";

export const metadata: Metadata = {
  title: "خدماتنا - خدمات تنظيف شاملة في جدة",
  description:
    "تعرف على مجموعة خدماتنا الشاملة: تنظيف منازل، فلل، شقق، مفروشات، تعقيم، جلي رخام، تنظيف خزانات وأكثر. خدمات تنظيف احترافية في جدة.",
  alternates: {
    canonical: `${site.url}/services`,
  },
};

const breadcrumbs = [{ name: "الخدمات", url: "/services" }];

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="خدمات تنظيف شاملة ومتنوعة في جدة"
        subtitle="خدماتنا"
        description="نقدم مجموعة واسعة من خدمات التنظيف الاحترافية لتلبية جميع احتياجاتك - من تنظيف المنازل والفلل إلى المفروشات والتعقيم والخدمات المتخصصة."
        image="cleaning services Jeddah.jpg"
        imageAlt="خدمات تنظيف في جدة - شركة المثالي"
        context={{ page: "الخدمات" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              حلول تنظيف شاملة لكل احتياجاتك
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              في شركة المثالي، نفهم أن كل مكان له احتياجاته الخاصة. لذا صممنا مجموعة متنوعة من
              الخدمات لتغطي كل جانب من جوانب النظافة. سواء كنت تبحث عن تنظيف دوري لمنزلك، أو تنظيف
              عميق قبل مناسبة خاصة، أو خدمات متخصصة مثل تنظيف المفروشات والتعقيم، فنحن هنا لخدمتك
              بأعلى معايير الجودة والاحترافية.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.name}
                description={service.shortDesc}
                image={service.image}
                link={`/services/${service.slug}`}
              />
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-6 text-gray-700">
            <h3 className="text-2xl font-bold text-gray-900">
              لماذا تختار خدماتنا المتنوعة؟
            </h3>
            <p className="leading-relaxed">
              <strong>حلول متكاملة:</strong> بدلاً من التعامل مع عدة شركات مختلفة، نوفر لك جميع خدمات
              التنظيف تحت سقف واحد. هذا يوفر عليك الوقت والجهد، ويضمن تناسق الجودة في جميع الخدمات.
            </p>
            <p className="leading-relaxed">
              <strong>مرونة في الاختيار:</strong> سواء كنت تحتاج خدمة واحدة أو باقة شاملة، نقدم لك
              خيارات مرنة تناسب ميزانيتك. يمكنك أيضاً دمج عدة خدمات في باقة واحدة بأسعار مخفضة.
            </p>
            <p className="leading-relaxed">
              <strong>تخصيص حسب الحاجة:</strong> نعلم أن كل عميل فريد. لذا نصمم خطة تنظيف مخصصة بناءً
              على احتياجاتك المحددة، حجم المكان، نوع الأسطح، ومستوى النظافة المطلوب.
            </p>
            <p className="leading-relaxed">
              <strong>ضمان الجودة:</strong> جميع خدماتنا مدعومة بضمان رضا العميل 100%. إذا لم تكن راضياً،
              سنعيد العمل دون أي تكلفة إضافية.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="هل تحتاج استشارة حول الخدمة المناسبة لك؟"
        description="تواصل معنا الآن، وسيساعدك فريقنا في اختيار الخدمات المثالية لاحتياجاتك وميزانيتك"
        context={{ page: "الخدمات" }}
      />
    </>
  );
}



