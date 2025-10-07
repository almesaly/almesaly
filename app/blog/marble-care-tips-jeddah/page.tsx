import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "نصائح العناية بالرخام في مناخ جدة",
  description: "كيف تحافظ على بريق الرخام في مناخ جدة الحار والرطب؟",
  alternates: { canonical: `${site.url}/blog/marble-care-tips-jeddah` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "العناية بالرخام في جدة", url: "/blog/marble-care-tips-jeddah" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">نصائح العناية بالرخام في جدة</h1>
              <div className="text-gray-600">تاريخ النشر: 15 سبتمبر 2025</div>
            </header>
            <Image src="/images/marble cleaning.jpg" alt="العناية بالرخام" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">الرخام جميل لكنه حساس. مناخ جدة الحار والرطب يمكن أن يؤثر عليه. إليك نصائح للحفاظ على بريقه.</p>
              <h2 className="text-3xl font-bold">1. امسح السوائل فوراً</h2>
              <p>العصائر، القهوة، والمشروبات الحمضية تتلف الرخام. امسحها فوراً قبل أن تخترق السطح.</p>
              <h2 className="text-3xl font-bold">2. استخدم منظفات محايدة</h2>
              <p>المنظفات الحمضية أو القلوية تضر الرخام. استخدم منظفات خاصة بالرخام أو ماء وصابون خفيف.</p>
              <h2 className="text-3xl font-bold">3. جفف بعد المسح</h2>
              <p>الماء المتبقي يترك بقع. جفف الرخام بقماش ناعم بعد كل مسح.</p>
              <h2 className="text-3xl font-bold">4. جلي سنوي</h2>
              <p>الرخام يفقد بريقه مع الوقت. جلي سنوي يعيد له اللمعان.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

