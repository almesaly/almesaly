import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "أهمية التعقيم بعد جائحة كورونا",
  description: "لماذا يجب الاستمرار في تعقيم منزلك ومكتبك حتى بعد انتهاء الجائحة.",
  alternates: { canonical: `${site.url}/blog/sanitization-importance-after-covid` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "أهمية التعقيم بعد كورونا", url: "/blog/sanitization-importance-after-covid" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">أهمية التعقيم بعد جائحة كورونا</h1>
              <div className="text-gray-600">تاريخ النشر: 25 سبتمبر 2025</div>
            </header>
            <Image src="/images/disinfecting service.jpg" alt="التعقيم والتطهير" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">بعد جائحة كورونا، أصبح التعقيم عادة مهمة. لكن مع تراجع الجائحة، هل يجب الاستمرار؟ الجواب: نعم بالتأكيد!</p>
              <h2 className="text-3xl font-bold">الفيروسات والبكتيريا موجودة دائماً</h2>
              <p>كورونا ليس الفيروس الوحيد. الإنفلونزا، نزلات البرد، والبكتيريا المعوية موجودة طوال الوقت. التعقيم الدوري يحميك منها.</p>
              <h2 className="text-3xl font-bold">الأماكن التي تحتاج تعقيماً دورياً</h2>
              <ul className="list-disc pr-6">
                <li><strong>المنزل:</strong> خاصة إذا كان هناك أطفال، مرضى، أو كبار سن</li>
                <li><strong>المكاتب:</strong> الأسطح المشتركة، لوحات المفاتيح، الهواتف</li>
                <li><strong>المدارس:</strong> الفصول، الحمامات، الكافتيريا</li>
                <li><strong>العيادات والمستشفيات:</strong> تعقيم طبي شامل</li>
              </ul>
              <h2 className="text-3xl font-bold">كم مرة يجب التعقيم؟</h2>
              <p>المنزل: مرة شهرياً على الأقل. المكاتب والأماكن العامة: أسبوعياً أو حسب الحاجة.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

