import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "كيف تزيل بقع السجاد بنفسك؟ دليل شامل",
  description: "طرق فعالة لإزالة بقع السجاد المختلفة: قهوة، عصير، شوكولاتة، وأكثر.",
  alternates: { canonical: `${site.url}/blog/how-to-remove-carpet-stains` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "إزالة بقع السجاد", url: "/blog/how-to-remove-carpet-stains" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">كيف تزيل بقع السجاد بنفسك؟</h1>
              <div className="text-gray-600">تاريخ النشر: 1 أكتوبر 2025</div>
            </header>
            <Image src="/images/carpet cleaning Jeddah.jpg" alt="إزالة بقع السجاد" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">انسكب عصير على السجادة؟ لا تقلق! إليك دليل شامل لإزالة أشهر البقع.</p>
              <h2 className="text-3xl font-bold">القاعدة الذهبية: اعمل فوراً!</h2>
              <p>كلما أسرعت في التعامل مع البقعة، كان إزالتها أسهل. البقع القديمة عنيدة جداً.</p>
              <h2 className="text-3xl font-bold">خطوات أساسية لكل البقع</h2>
              <ol className="list-decimal pr-6">
                <li><strong>امتص السائل:</strong> استخدم منشفة ورقية واضغط على البقعة (لا تفرك!).</li>
                <li><strong>اختبر المنظف:</strong> جرب المنظف على زاوية مخفية أولاً.</li>
                <li><strong>اعمل من الخارج للداخل:</strong> لمنع انتشار البقعة.</li>
                <li><strong>اشطف جيداً:</strong> بعد التنظيف، امسح بماء نظيف لإزالة المنظف.</li>
              </ol>
              <h2 className="text-3xl font-bold">بقع القهوة والشاي</h2>
              <p>امزج ملعقة خل أبيض + ملعقة سائل جلي + كوبين ماء دافئ. رش على البقعة، اترك 5 دقائق، ثم امسح.</p>
              <h2 className="text-3xl font-bold">بقع العصير والمشروبات الملونة</h2>
              <p>امزج جزء واحد خل أبيض + جزءان ماء. رش ثم امتص. كرر حتى تختفي البقعة.</p>
              <h2 className="text-3xl font-bold">بقع الشوكولاتة</h2>
              <p>اكشط الشوكولاتة الصلبة أولاً. ثم استخدم منظف سجاد أو محلول سائل جلي + ماء.</p>
              <h2 className="text-3xl font-bold">بقع الحبر</h2>
              <p>ضع كحول طبي على قطعة قماش وامسح البقعة. لا ترش الكحول مباشرة على السجادة!</p>
              <h2 className="text-3xl font-bold">متى تستعين بمحترف؟</h2>
              <p>إذا كانت البقعة كبيرة، قديمة، أو عنيدة، الأفضل الاستعانة بشركة تنظيف محترفة. لديهم معدات ومواد قوية.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

