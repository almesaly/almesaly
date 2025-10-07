import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "منظفات طبيعية وصديقة للبيئة يمكنك صنعها",
  description: "وصفات بسيطة لمنظفات منزلية طبيعية آمنة وفعالة.",
  alternates: { canonical: `${site.url}/blog/eco-friendly-cleaning-products` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "منظفات صديقة للبيئة", url: "/blog/eco-friendly-cleaning-products" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">منظفات طبيعية يمكنك صنعها في المنزل</h1>
              <div className="text-gray-600">تاريخ النشر: 10 سبتمبر 2025</div>
            </header>
            <Image src="/images/eco-friendly cleaning.jpg" alt="منظفات صديقة للبيئة" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">المنظفات التجارية مليئة بالمواد الكيميائية. إليك وصفات بسيطة لمنظفات طبيعية فعالة.</p>
              <h2 className="text-3xl font-bold">منظف متعدد الأغراض</h2>
              <p><strong>المكونات:</strong> كوب ماء + ملعقة خل أبيض + قطرات زيت ليمون</p>
              <p><strong>الاستخدام:</strong> رش على الأسطح وامسح. آمن على معظم الأسطح.</p>
              <h2 className="text-3xl font-bold">منظف زجاج</h2>
              <p><strong>المكونات:</strong> كوب ماء + ربع كوب خل</p>
              <p><strong>الاستخدام:</strong> رش على الزجاج وامسح بقماش نظيف.</p>
              <h2 className="text-3xl font-bold">معطر جو طبيعي</h2>
              <p><strong>المكونات:</strong> ماء + قشور برتقال أو ليمون + عيدان قرفة</p>
              <p><strong>الطريقة:</strong> اغلي المكونات 10 دقائق. الرائحة تنتشر في المنزل.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

