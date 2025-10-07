import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "كيف تؤثر نظافة المكتب على الإنتاجية؟",
  description: "دراسات تثبت أن المكتب النظيف يزيد الإنتاجية. إليك كيف.",
  alternates: { canonical: `${site.url}/blog/office-cleaning-productivity` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "نظافة المكتب والإنتاجية", url: "/blog/office-cleaning-productivity" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">كيف تؤثر نظافة المكتب على الإنتاجية؟</h1>
              <div className="text-gray-600">تاريخ النشر: 5 أغسطس 2025</div>
            </header>
            <Image src="/images/office cleaning Jeddah.jpg" alt="نظافة المكتب" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">هل تعلم أن المكتب النظيف يزيد إنتاجية الموظفين بنسبة 20%؟ إليك كيف.</p>
              <h2 className="text-3xl font-bold">1. يقلل التوتر</h2>
              <p>المكتب المتسخ والفوضوي يزيد مستويات التوتر. البيئة النظيفة تعزز الهدوء والتركيز.</p>
              <h2 className="text-3xl font-bold">2. يقلل الأمراض</h2>
              <p>المكاتب مليئة بالجراثيم. التنظيف المنتظم يقلل أيام المرض بنسبة 40%.</p>
              <h2 className="text-3xl font-bold">3. يحسن المعنويات</h2>
              <p>الموظفون يشعرون بالتقدير عندما يعملون في بيئة نظيفة ومرتبة.</p>
              <h2 className="text-3xl font-bold">4. ينظم التفكير</h2>
              <p>المكتب المنظم = عقل منظم. الفوضى تشتت الذهن.</p>
              <p className="mt-8 text-xl">استثمر في تنظيف مكتبك بانتظام. العائد على الإنتاجية يستحق!</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

