import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { site, services } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";
import { Phone, MessageCircle, Home, Building2, Sparkles, Shield } from "lucide-react";

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
  const whatsappLink = generateWhatsAppLink(site.whatsapp, { page: "الخدمات" });

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-500 to-primary py-16 md:py-24">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-5xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
              <Sparkles className="h-5 w-5" />
              <span className="font-semibold">+16 خدمة متخصصة</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              خدمات تنظيف شاملة<br />لكل احتياجاتك في جدة
            </h1>

            <p className="mx-auto mb-8 max-w-3xl text-lg leading-relaxed opacity-95 md:text-xl">
              من تنظيف المنازل والفلل إلى المفروشات والتعقيم والخدمات المتخصصة - نقدم حلول تنظيف احترافية تناسب جميع المتطلبات بأعلى معايير الجودة
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
                <a href={`tel:${site.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل الآن: {site.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 bg-green-600 text-white hover:bg-green-700 shadow-xl">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
              </Button>
            </div>

            {/* Service Categories Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <Home className="mx-auto mb-3 h-10 w-10" />
                <h3 className="mb-2 text-lg font-bold">خدمات المنازل</h3>
                <p className="text-sm opacity-90">تنظيف منازل، فلل، وشقق</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <Building2 className="mx-auto mb-3 h-10 w-10" />
                <h3 className="mb-2 text-lg font-bold">خدمات تجارية</h3>
                <p className="text-sm opacity-90">مكاتب، شركات، ومنشآت</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <Sparkles className="mx-auto mb-3 h-10 w-10" />
                <h3 className="mb-2 text-lg font-bold">خدمات متخصصة</h3>
                <p className="text-sm opacity-90">مفروشات، رخام، خزانات</p>
              </div>
              <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all hover:bg-white/20">
                <Shield className="mx-auto mb-3 h-10 w-10" />
                <h3 className="mb-2 text-lg font-bold">التعقيم والتطهير</h3>
                <p className="text-sm opacity-90">حماية صحية شاملة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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



