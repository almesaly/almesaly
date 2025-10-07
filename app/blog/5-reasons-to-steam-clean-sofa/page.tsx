import { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "5 أسباب لتنظيف الكنب بالبخار في جدة",
  description: "لماذا يجب عليك تنظيف الكنب بالبخار؟ فوائد صحية ومذهلة.",
  alternates: { canonical: `${site.url}/blog/5-reasons-to-steam-clean-sofa` },
};

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[{ name: "المدونة", url: "/blog" }, { name: "أسباب تنظيف الكنب بالبخار", url: "/blog/5-reasons-to-steam-clean-sofa" }]} />
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold">5 أسباب لتنظيف الكنب بالبخار</h1>
              <div className="text-gray-600">تاريخ النشر: 28 سبتمبر 2025</div>
            </header>
            <Image src="/images/sofa cleaning Jeddah.jpg" alt="تنظيف الكنب بالبخار" width={800} height={400} className="mb-8 rounded-lg" />
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-xl">الكنب من أكثر الأثاث استخداماً في المنزل. لكن هل تعلم كم من الأوساخ والبكتيريا يحتويه؟ تنظيف الكنب بالبخار حل رائع!</p>
              <h2 className="text-3xl font-bold">1. يقتل البكتيريا والعث</h2>
              <p>البخار الساخن (150-180 درجة) يقتل 99.9% من البكتيريا، الفيروسات، وعث الغبار. مهم جداً للعائلات مع أطفال صغار أو مرضى حساسية.</p>
              <h2 className="text-3xl font-bold">2. ينظف عميقاً دون كيماويات</h2>
              <p>البخار ينظف بقوة الحرارة فقط. لا حاجة لمواد كيميائية قاسية. آمن على الأطفال والحيوانات الأليفة.</p>
              <h2 className="text-3xl font-bold">3. يزيل البقع العنيدة</h2>
              <p>البخار يخترق ألياف القماش ويذيب البقع من الجذور. فعال ضد الدهون، القهوة، والعصير.</p>
              <h2 className="text-3xl font-bold">4. يجفف بسرعة</h2>
              <p>بعكس الغسيل بالماء والصابون، الكنب المنظف بالبخار يجف خلال 2-3 ساعات. يمكنك استخدامه في نفس اليوم!</p>
              <h2 className="text-3xl font-bold">5. ينعش القماش ويزيل الروائح</h2>
              <p>البخار يرفع ألياف القماش ويجددها. كما يزيل الروائح العالقة من الطبخ، الدخان، أو الحيوانات.</p>
              <p className="mt-8 text-xl font-bold">متى يجب تنظيف الكنب؟</p>
              <p>يُنصح بتنظيف الكنب بالبخار كل 6-12 شهر حسب الاستخدام. إذا كان لديك أطفال أو حيوانات، كل 3-6 أشهر أفضل.</p>
            </div>
          </div>
        </div>
      </article>
      <CTASection context={{ page: "مقالة" }} />
    </>
  );
}

