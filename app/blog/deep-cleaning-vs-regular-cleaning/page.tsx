import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "الفرق بين التنظيف العادي والتنظيف العميق",
  description: "ما الفرق بين التنظيف العادي والعميق؟ متى تحتاج كل منهما؟ دليل شامل.",
  alternates: { canonical: `${site.url}/blog/deep-cleaning-vs-regular-cleaning` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "التنظيف العادي vs العميق", url: "/blog/deep-cleaning-vs-regular-cleaning" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold text-gray-900">الفرق بين التنظيف العادي والتنظيف العميق</h1>
              <div className="text-gray-600">تاريخ النشر: 3 أكتوبر 2025</div>
            </header>
            <Image src="/images/deep cleaning service.jpg" alt="التنظيف العميق" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">كثيراً ما يسألنا العملاء: ما الفرق بين التنظيف العادي والتنظيف العميق؟ وأيهما أحتاج؟ هذا المقال يوضح الفرق بالتفصيل.</p>
              <h2 className="text-3xl font-bold">التنظيف العادي: الصيانة اليومية</h2>
              <p>التنظيف العادي هو ما تفعله أسبوعياً أو كل بضعة أيام. يشمل:</p>
              <ul className="list-disc pr-6">
                <li>كنس ومسح الأرضيات</li>
                <li>تنظيف الأسطح الظاهرة (طاولات، أسطح مطبخ)</li>
                <li>تنظيف الحمامات (مرحاض، حوض، مرايا)</li>
                <li>إخراج القمامة</li>
                <li>ترتيب الفوضى</li>
              </ul>
              <p>الهدف: الحفاظ على نظافة أساسية ومظهر مرتب.</p>
              <h2 className="text-3xl font-bold">التنظيف العميق: التنظيف الشامل</h2>
              <p>التنظيف العميق يذهب أبعد بكثير. يشمل كل ما في التنظيف العادي بالإضافة إلى:</p>
              <ul className="list-disc pr-6">
                <li>تنظيف خلف وتحت الأثاث</li>
                <li>تنظيف داخل الفرن والثلاجة</li>
                <li>فرك البلاط والفواصل</li>
                <li>تنظيف النوافذ من الداخل والخارج</li>
                <li>غسل الستائر أو تنظيفها بالبخار</li>
                <li>تنظيف فوق الخزائن والأرفف العالية</li>
                <li>إزالة الغبار من المراوح والثريات</li>
                <li>تنظيف الألواح الجدارية والأبواب</li>
              </ul>
              <p>الهدف: تنظيف شامل لكل زاوية، حتى المناطق المخفية.</p>
              <h2 className="text-3xl font-bold">متى تحتاج التنظيف العميق؟</h2>
              <ul className="list-disc pr-6">
                <li>عند الانتقال لمنزل جديد أو الانتقال منه</li>
                <li>كل 3-6 أشهر كصيانة دورية</li>
                <li>قبل مناسبات كبيرة (أعياد، أفراح)</li>
                <li>بعد التجديد أو البناء</li>
                <li>إذا أهملت التنظيف لفترة طويلة</li>
              </ul>
              <p>التنظيف العميق يستغرق وقتاً أطول (4-8 ساعات لشقة متوسطة) لكن نتائجه مذهلة!</p>
              <p className="mt-8 rounded-lg bg-blue-50 p-6">احجز <Link href="/services/deep-cleaning" className="text-primary underline">خدمة التنظيف العميق</Link> الآن واستمتع بمنزل نظيف 100%!</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

