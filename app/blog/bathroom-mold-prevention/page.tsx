import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "كيف تمنع العفن في الحمام؟ نصائح فعالة",
  description: "العفن في الحمام مشكلة شائعة في جدة. إليك كيف تمنعه وتتخلص منه.",
  alternates: { canonical: `${site.url}/blog/bathroom-mold-prevention` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "منع العفن في الحمام", url: "/blog/bathroom-mold-prevention" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">كيف تمنع العفن في الحمام؟</h1>
              <div className="text-gray-600">تاريخ النشر: 15 أغسطس 2025</div>
            </header>
            <Image src="/images/bathroom cleaning.jpg" alt="منع العفن في الحمام" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">العفن في الحمام مشكلة شائعة، خاصة في مناخ جدة الرطب. إليك كيف تمنعه.</p>
              <h2 className="text-3xl font-bold">1. التهوية الجيدة</h2>
              <p>افتح النافذة أو شغّل المروحة أثناء وبعد الاستحمام. الرطوبة هي سبب العفن الأول.</p>
              <h2 className="text-3xl font-bold">2. جفف الأسطح</h2>
              <p>بعد الاستحمام، امسح الجدران والزجاج بممسحة مطاطية. هذا يزيل الرطوبة.</p>
              <h2 className="text-3xl font-bold">3. نظف بانتظام</h2>
              <p>نظف الحمام أسبوعياً بمنظف يحتوي على مبيض. المبيض يقتل جراثيم العفن.</p>
              <h2 className="text-3xl font-bold">4. أصلح التسريبات</h2>
              <p>أي تسريب ماء يخلق بيئة مثالية للعفن. أصلح الحنفيات والأنابيب المتسربة فوراً.</p>
              <h2 className="text-3xl font-bold">كيف تتخلص من العفن الموجود؟</h2>
              <p>رش خليط من المبيض والماء (1:3) على العفن، اتركه 10 دقائق، ثم افرك.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

