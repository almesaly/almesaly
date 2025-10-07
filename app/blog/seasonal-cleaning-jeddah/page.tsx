import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "التنظيف الموسمي في جدة - دليل شامل",
  description: "نصائح تنظيف موسمية خاصة بمناخ جدة. كل موسم له احتياجاته!",
  alternates: { canonical: `${site.url}/blog/seasonal-cleaning-jeddah` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "التنظيف الموسمي في جدة", url: "/blog/seasonal-cleaning-jeddah" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">التنظيف الموسمي في جدة</h1>
              <div className="text-gray-600">تاريخ النشر: 1 أغسطس 2025</div>
            </header>
            <Image src="/images/home cleaning Jeddah.jpg" alt="التنظيف الموسمي" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">كل موسم في جدة له تحدياته. إليك دليل التنظيف الموسمي.</p>
              <h2 className="text-3xl font-bold">الصيف (يونيو - سبتمبر)</h2>
              <p><strong>التحدي:</strong> الحر الشديد والرطوبة</p>
              <ul className="list-disc pr-6">
                <li>نظف فلاتر المكيفات شهرياً</li>
                <li>تحقق من العفن في الحمامات</li>
                <li>نظف المراوح والثريات من الغبار</li>
              </ul>
              <h2 className="text-3xl font-bold">الشتاء (ديسمبر - فبراير)</h2>
              <p><strong>التحدي:</strong> الأتربة والرياح</p>
              <ul className="list-disc pr-6">
                <li>كنس يومي للأتربة</li>
                <li>نظف النوافذ من الغبار</li>
                <li>غسل الستائر</li>
              </ul>
              <h2 className="text-3xl font-bold">الربيع (مارس - مايو)</h2>
              <p><strong>الفرصة:</strong> التنظيف الشامل</p>
              <ul className="list-disc pr-6">
                <li>تنظيف عميق للمنزل</li>
                <li>غسل السجاد والمفروشات</li>
                <li>تنظيف الشرفات والحدائق</li>
              </ul>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

