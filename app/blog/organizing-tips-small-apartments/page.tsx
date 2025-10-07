import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "نصائح تنظيم الشقق الصغيرة في جدة",
  description: "كيف تنظم شقة صغيرة لتبدو أكبر وأكثر ترتيباً؟",
  alternates: { canonical: `${site.url}/blog/organizing-tips-small-apartments` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "تنظيم الشقق الصغيرة", url: "/blog/organizing-tips-small-apartments" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">نصائح تنظيم الشقق الصغيرة</h1>
              <div className="text-gray-600">تاريخ النشر: 5 سبتمبر 2025</div>
            </header>
            <Image src="/images/apartment cleaning.jpg" alt="تنظيم الشقق" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">شقتك صغيرة؟ لا مشكلة! إليك نصائح لتبدو أكبر وأكثر ترتيباً.</p>
              <h2 className="text-3xl font-bold">1. استخدم التخزين العمودي</h2>
              <p>أرفف عالية، خزائن معلقة. استغل الجدران بدلاً من الأرضية.</p>
              <h2 className="text-3xl font-bold">2. أثاث متعدد الوظائف</h2>
              <p>سرير بأدراج تخزين، طاولة قابلة للطي، كنب سرير. كل قطعة لها وظيفتين.</p>
              <h2 className="text-3xl font-bold">3. تخلص من الفوضى</h2>
              <p>قاعدة السنة: إذا لم تستخدمه منذ سنة، تبرع به أو ارميه.</p>
              <h2 className="text-3xl font-bold">4. ألوان فاتحة</h2>
              <p>الألوان الفاتحة تجعل المكان يبدو أكبر. أبيض، بيج، رمادي فاتح.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

