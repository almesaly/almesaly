import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "تحضير المنزل لاستقبال رمضان في جدة",
  description: "دليل شامل لتنظيف وتجهيز منزلك لشهر رمضان المبارك.",
  alternates: { canonical: `${site.url}/blog/preparing-home-for-ramadan` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "تحضير المنزل لرمضان", url: "/blog/preparing-home-for-ramadan" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">تحضير المنزل لاستقبال رمضان</h1>
              <div className="text-gray-600">تاريخ النشر: 20 سبتمبر 2025</div>
            </header>
            <Image src="/images/home cleaning Jeddah.jpg" alt="تنظيف المنزل لرمضان" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">رمضان شهر البركة والضيافة. منزلك يجب أن يكون نظيفاً ومرتباً لاستقبال الضيوف. إليك دليل التحضير.</p>
              <h2 className="text-3xl font-bold">1. التنظيف العميق قبل رمضان</h2>
              <p>ابدأ قبل أسبوعين من رمضان. نظف عميقاً: النوافذ، الستائر، الكنب، السجاد. خلال رمضان لن يكون لديك وقت!</p>
              <h2 className="text-3xl font-bold">2. ترتيب غرفة الضيوف</h2>
              <p>نظف غرفة الضيوف جيداً، غيّر الشراشف، رتب الوسائد. جهزها لاستقبال الأقارب القادمين من خارج جدة.</p>
              <h2 className="text-3xl font-bold">3. تنظيف المطبخ بعمق</h2>
              <p>المطبخ سيكون أكثر مكان استخداماً في رمضان. نظف الفرن، الثلاجة، الخزائن. رتب الأدوات لسهولة الوصول.</p>
              <h2 className="text-3xl font-bold">4. تجهيز صالة الطعام</h2>
              <p>نظف الطاولة، الكراسي، والثريا. اغسل ولمع الأطباق والأكواب المخزنة.</p>
              <h2 className="text-3xl font-bold">5. تعطير المنزل</h2>
              <p>استخدم البخور، العطور المنزلية، أو الزيوت العطرية لإضفاء رائحة جميلة.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

