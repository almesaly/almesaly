import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "كيف تنظف النوافذ دون ترك خطوط؟",
  description: "نصائح احترافية لتنظيف النوافذ والحصول على نتيجة خالية من الخطوط.",
  alternates: { canonical: `${site.url}/blog/window-cleaning-tips` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "تنظيف النوافذ", url: "/blog/window-cleaning-tips" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">كيف تنظف النوافذ دون ترك خطوط؟</h1>
              <div className="text-gray-600">تاريخ النشر: 20 أغسطس 2025</div>
            </header>
            <Image src="/images/window cleaning Jeddah.jpg" alt="تنظيف النوافذ" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">تنظيف النوافذ يبدو بسيطاً، لكن الخطوط المزعجة تظهر دائماً! إليك الطريقة الصحيحة.</p>
              <h2 className="text-3xl font-bold">الأدوات المطلوبة</h2>
              <ul className="list-disc pr-6">
                <li>دلو ماء دافئ</li>
                <li>سائل جلي (قطرات قليلة)</li>
                <li>ممسحة مطاط (squeegee)</li>
                <li>قماش مايكروفايبر نظيف</li>
              </ul>
              <h2 className="text-3xl font-bold">الطريقة</h2>
              <ol className="list-decimal pr-6">
                <li>اغسل النافذة بالماء والصابون</li>
                <li>استخدم الممسحة المطاطية بحركة من الأعلى للأسفل</li>
                <li>جفف حواف النافذة بقماش المايكروفايبر</li>
                <li>امسح الممسحة بعد كل ضربة</li>
              </ol>
              <h2 className="text-3xl font-bold">نصيحة ذهبية</h2>
              <p>نظف النوافذ في يوم غائم. أشعة الشمس تجفف المنظف بسرعة وتترك خطوطاً.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

