import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "قائمة فحص تنظيف ما قبل الانتقال للمنزل الجديد",
  description: "كل ما تحتاج تنظيفه قبل الانتقال لمنزلك الجديد في جدة.",
  alternates: { canonical: `${site.url}/blog/move-in-cleaning-checklist` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "قائمة تنظيف قبل الانتقال", url: "/blog/move-in-cleaning-checklist" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">قائمة تنظيف قبل الانتقال للمنزل</h1>
              <div className="text-gray-600">تاريخ النشر: 10 أغسطس 2025</div>
            </header>
            <Image src="/images/move in cleaning.jpg" alt="تنظيف قبل الانتقال" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">تنتقل لمنزل جديد؟ قبل نقل الأثاث، نظف هذه المناطق!</p>
              <h2 className="text-3xl font-bold">المطبخ</h2>
              <ul className="list-disc pr-6">
                <li>نظف الفرن من الداخل</li>
                <li>نظف الثلاجة والفريزر</li>
                <li>امسح جميع الخزائن من الداخل</li>
                <li>نظف الحوض والحنفيات</li>
                <li>امسح البلاط والأرضية</li>
              </ul>
              <h2 className="text-3xl font-bold">الحمامات</h2>
              <ul className="list-disc pr-6">
                <li>نظف وعقّم المرحاض</li>
                <li>افرك البانيو/الشاور</li>
                <li>نظف الحوض والمرايا</li>
                <li>امسح البلاط والأرضية</li>
              </ul>
              <h2 className="text-3xl font-bold">الغرف</h2>
              <ul className="list-disc pr-6">
                <li>امسح الجدران (خاصة البقع)</li>
                <li>نظف النوافذ والشبابيك</li>
                <li>نظف الخزائن المدمجة</li>
                <li>كنس أو اغسل الأرضيات</li>
              </ul>
              <p className="mt-8 text-xl">تنظيف شامل قبل الانتقال يضمن بداية نظيفة في منزلك الجديد!</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

