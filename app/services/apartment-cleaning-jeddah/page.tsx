import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف شقق بجدة | خدمة سريعة واحترافية",
  description: "شركة تنظيف شقق في جدة - خدمات تنظيف شاملة للشقق السكنية بأسعار مناسبة وجودة عالية.",
  alternates: { canonical: `${site.url}/services/apartment-cleaning-jeddah` },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "تنظيف شقق بجدة", url: "/services/apartment-cleaning-jeddah" },
];

const faqs = [
  { question: "كم تستغرق خدمة تنظيف الشقة؟", answer: "شقة من غرفتين تحتاج 2-3 ساعات للتنظيف العادي، و4-5 ساعات للتنظيف العميق. المدة تعتمد على حجم الشقة وحالتها." },
  { question: "هل يمكنني البقاء في الشقة أثناء التنظيف؟", answer: "بالتأكيد! يمكنك البقاء أو المغادرة حسب راحتك. فريقنا محترف ويعمل بكفاءة دون إزعاج." },
  { question: "هل تنظفون الشقق الصغيرة (غرفة واحدة)؟", answer: "نعم، نقدم خدماتنا لجميع أحجام الشقق من غرفة واحدة إلى أربع غرف وأكثر. الأسعار تتناسب مع الحجم." },
];

export default function ApartmentCleaningPage() {
  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <Hero title="تنظيف شقق بجدة - نظافة شاملة بأسعار مناسبة" subtitle="تنظيف الشقق" description="خدمة تنظيف شقق احترافية تناسب جميع الأحجام والميزانيات. نظافة مضمونة وخدمة سريعة." image="apartment cleaning.jpg" imageAlt="تنظيف شقق في جدة" context={{ service: "تنظيف شقق" }} />
      <section className="bg-white py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl space-y-6 text-gray-700"><h2 className="text-3xl font-bold text-gray-900">تنظيف شقق بجدة - الحل الأمثل للعائلات المشغولة</h2><p className="text-lg leading-relaxed">الشقق السكنية تحتاج تنظيفاً منتظماً للحفاظ على بيئة صحية ومريحة. في شركة المثالي، نقدم خدمات تنظيف شقق مرنة تناسب جدولك وميزانيتك - سواء كنت تحتاج تنظيفاً أسبوعياً، شهرياً، أو لمرة واحدة.</p></div></div></section>
      <CTASection context={{ service: "تنظيف شقق" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

