import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تنظيف المطبخ بعد العيد - دليل سريع",
  description: "كيف تنظف مطبخك بسرعة وكفاءة بعد أيام العيد المليئة بالطبخ؟",
  alternates: { canonical: `${site.url}/blog/cleaning-kitchen-after-eid` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "تنظيف المطبخ بعد العيد", url: "/blog/cleaning-kitchen-after-eid" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">تنظيف المطبخ بعد العيد</h1>
              <div className="text-gray-600">تاريخ النشر: 1 سبتمبر 2025</div>
            </header>
            <Image src="/images/kitchen cleaning Jeddah.jpg" alt="تنظيف المطبخ" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">بعد أيام العيد المليئة بالطبخ، المطبخ يكون بحاجة لتنظيف عميق. إليك دليل سريع.</p>
              <h2 className="text-3xl font-bold">1. ابدأ بالفرن</h2>
              <p>رش منظف فرن، اتركه حسب التعليمات، ثم افرك. هذه أصعب مهمة فافعلها أولاً.</p>
              <h2 className="text-3xl font-bold">2. نظف الثلاجة</h2>
              <p>تخلص من بقايا الطعام القديمة، امسح الأرفف، نظم المحتويات.</p>
              <h2 className="text-3xl font-bold">3. الشفاط والفلاتر</h2>
              <p>انزع الفلاتر، انقعها في ماء ساخن + صابون + خل. اتركها ساعة ثم افركها.</p>
              <h2 className="text-3xl font-bold">4. الأسطح والخزائن</h2>
              <p>امسح جميع الأسطح، الأدراج، والخزائن من الداخل والخارج.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

