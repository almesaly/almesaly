import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المنزل مع وجود حيوانات أليفة",
  description: "نصائح للحفاظ على نظافة منزلك إذا كان لديك قطط أو كلاب.",
  alternates: { canonical: `${site.url}/blog/pet-friendly-cleaning-tips` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "تنظيف مع الحيوانات الأليفة", url: "/blog/pet-friendly-cleaning-tips" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">تنظيف المنزل مع الحيوانات الأليفة</h1>
              <div className="text-gray-600">تاريخ النشر: 25 أغسطس 2025</div>
            </header>
            <Image src="/images/home cleaning Jeddah.jpg" alt="تنظيف مع حيوانات أليفة" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">الحيوانات الأليفة جزء من العائلة، لكنها تجعل التنظيف أصعب. إليك نصائح فعالة.</p>
              <h2 className="text-3xl font-bold">1. كنس يومي للشعر</h2>
              <p>استخدم مكنسة كهربائية قوية مخصصة لشعر الحيوانات. كنس يومياً يمنع تراكم الشعر.</p>
              <h2 className="text-3xl font-bold">2. غطاء للكنب</h2>
              <p>ضع غطاء قابل للغسيل على الكنب. اغسله أسبوعياً لإزالة الشعر والروائح.</p>
              <h2 className="text-3xl font-bold">3. منظفات إنزيمية للبقع</h2>
              <p>بقع البول والبراز تحتاج منظفات إنزيمية خاصة. المنظفات العادية لا تزيل الرائحة بالكامل.</p>
              <h2 className="text-3xl font-bold">4. استحم حيوانك بانتظام</h2>
              <p>استحمام منتظم للحيوان يقلل الشعر المتساقط والروائح.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

