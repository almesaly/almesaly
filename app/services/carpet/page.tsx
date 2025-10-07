import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف السجاد والموكيت بجدة | غسيل بالبخار",
  description: "خدمة تنظيف السجاد والموكيت بالبخار في جدة. إزالة البقع والروائح بتقنية حديثة وآمنة.",
  alternates: { canonical: `${site.url}/services/carpet` },
};

const faqs = [
  { question: "كم يستغرق جفاف السجاد بعد التنظيف؟", answer: "السجاد يجف خلال 4-6 ساعات في الأجواء العادية. يمكن تسريع الجفاف بالتهوية أو المروحة." },
  { question: "هل تنظفون السجاد في مكانه؟", answer: "نعم، نقدم خدمة تنظيف في الموقع لجميع أنواع السجاد والموكيت دون الحاجة لنقله." },
];

export default function CarpetCleaningPage() {
  return (
    <>
      <Hero title="تنظيف السجاد والموكيت بجدة - تنظيف بالبخار" subtitle="تنظيف السجاد" description="أعد لسجادك نظافته ونضارته مع خدمة التنظيف بالبخار المتخصصة." image="carpet cleaning Jeddah.jpg" imageAlt="تنظيف السجاد في جدة" context={{ service: "تنظيف السجاد" }} />
      <section className="bg-white py-16"><div className="container mx-auto px-4"><div className="mx-auto max-w-4xl space-y-6 text-gray-700"><h2 className="text-3xl font-bold text-gray-900">تنظيف السجاد والموكيت بالبخار في جدة</h2><p className="leading-relaxed">السجاد والموكيت يتراكم عليهما الأتربة والبكتيريا بمرور الوقت. نقدم خدمة تنظيف احترافية بالبخار الساخن تزيل الأوساخ العميقة وتقتل 99.9% من البكتيريا والعث، مع الحفاظ على نسيج السجاد وألوانه.</p></div></div></section>
      <CTASection context={{ service: "تنظيف السجاد" }} />
      <FAQ faqs={faqs} />
    </>
  );
}

