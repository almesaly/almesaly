import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "شقتي 60 متر وصارت تبين 90! حيل التنظيم اللي استخدمتها",
  description: "كنت مكتئبة من ضيق شقتي... بعد ما جربت هالأفكار البسيطة، كل الضيوف يسألون: شقتك كبيرة كذا؟! أسرار تنظيم المساحات الصغيرة.",
  alternates: { canonical: `${site.url}/blog/organizing-tips-small-apartments` },
};

const faqs = [
  {
    question: "شو أهم شي أبدأ فيه لتنظيم شقة صغيرة؟",
    answer: "التخلص من الأشياء الزايدة! 80% من المشكلة هي كثرة الأغراض. سوي فرز شامل، واحتفظي بس بالأشياء اللي فعلاً تستخدمينها. الباقي بيعي أو تبرعي فيه.",
  },
  {
    question: "كيف أخزن أشياء كثيرة في مساحة صغيرة؟",
    answer: "استخدمي المساحات العمودية! خزائن لين السقف، رفوف معلقة، منظمات خلف الأبواب. الأرضية محدودة، لكن الجدران مساحة كبيرة مهملة!",
  },
  {
    question: "هل الأثاث متعدد الاستخدامات يستاهل؟",
    answer: "100%! سرير بأدراج تخزين وفر لي مساحة خزانة كاملة. طاولة قابلة للطي تصير مكتب أو طاولة طعام. استثمار ذكي جداً!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "تنظيم الشقق الصغيرة", url: "/blog/organizing-tips-small-apartments" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                شقتي 60 متر وصارت تبين 90! حيل التنظيم اللي استخدمتها
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>30 أغسطس 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>لينا محمود - موظفة وطالبة ماجستير</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/apartment cleaning.jpg" 
                alt="حيل ذكية لتنظيم الشقق الصغيرة - تجربة شخصية" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  "لينا، شقتك كبيرة كذا؟! ما شاء الله مرتبة ومافيها فوضى!" - صديقتي لما زارتني أول مرة بعد التنظيم
                </p>
              </div>

              <p className="text-lg">
                ضحكت وقلت لها: "لا يا حبيبتي، 60 متر فقط! بس تنظيم ذكي يخلي المساحة تبان أكبر." 😊
              </p>

              <p className="text-lg">
                قبل سنتين، لما انتقلت لشقتي الجديدة في جدة (موظفة جديدة + ميزانية محدودة = شقة صغيرة!), كنت فعلاً مكتئبة. كل أغراضي ما تدخل، الشقة تبان أصغر، والفوضى في كل مكان.
              </p>

              <p className="text-lg">
                لين قررت: إما أتعلم أنظم المساحة صح، وإلا راح أعيش في فوضى دائمة! بديت أشوف فيديوهات، أقرأ مقالات، وأجرب...
              </p>

              <p className="text-lg font-bold text-green-600">
                والنتيجة؟ شقتي الحين تبان ضعف حجمها! مرتبة، واسعة، ومريحة نفسياً. وكل الضيوف يستغربون: "بس 60 متر؟!"
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>كل الحيل اللي استخدمتها لتحويل شقتي الصغيرة لمساحة واسعة ومنظمة</strong> - أفكار عملية، رخيصة، ومجربة!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: القاعدة الذهبية - قلل أغراضك!
              </h2>

              <p className="text-lg">
                هذي أهم خطوة! مهما كانت المساحة صغيرة، لو قللتي الأغراض، راح تلاقين مساحة كافية.
              </p>

              <div className="mt-6 rounded-lg bg-red-50 border-2 border-red-400 p-6">
                <p className="font-bold text-xl text-red-900 mb-4">❌ الحقيقة المؤلمة:</p>
                <p className="text-lg text-gray-800">
                  <strong>80% من أغراضك ما تستخدمينها!</strong> ملابس ما لبستيها من سنة، أدوات مطبخ ما استخدمتيها، كتب ما قرأتيها، هدايا محفوظة "للذكرى"...
                </p>
                <p className="mt-3 text-lg text-gray-800 font-semibold">
                  كل هذي تأخذ مساحة وتسبب فوضى بدون أي فايدة حقيقية!
                </p>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                طريقة الفرز الذكية (استخدمتها وغيرت حياتي!)
              </h3>

              <p className="text-lg">
                خصصي نهاية أسبوع كاملة. جيبي 3 صناديق كبيرة (أو أكياس):
              </p>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg bg-green-50 p-4 border-r-4 border-green-500">
                  <p className="font-bold text-lg mb-2">📦 صندوق 1: أحتفظ</p>
                  <p>الأشياء اللي فعلاً تستخدمينها (استخدمتيها آخر 3 شهور)</p>
                </div>

                <div className="rounded-lg bg-yellow-50 p-4 border-r-4 border-yellow-500">
                  <p className="font-bold text-lg mb-2">📦 صندوق 2: تبرع/بيع</p>
                  <p>أشياء جيدة بس ما تحتاجينها (تبرعي أو بيعي على حراج)</p>
                </div>

                <div className="rounded-lg bg-red-50 p-4 border-r-4 border-red-500">
                  <p className="font-bold text-lg mb-2">🗑️ صندوق 3: زبالة</p>
                  <p>أشياء تالفة، قديمة، أو عديمة الفائدة</p>
                </div>
              </div>

              <p className="mt-6 rounded-lg bg-blue-50 p-4 text-lg">
                <strong>💡 تجربتي الشخصية:</strong> لما سويت الفرز أول مرة، طلع عندي 6 أكياس زبالة كبيرة + 4 صناديق تبرعات! فكرت: وين كانت كل هذي؟! وبعدها المساحة صارت واضحة جداً.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثانياً: استغلال المساحات العمودية (سر المساحات الصغيرة!)
              </h2>

              <p className="text-lg">
                الشقق الصغيرة مساحة الأرضية محدودة، لكن <strong>الجدران مساحة هائلة مهملة!</strong>
              </p>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">1. رفوف معلقة لين السقف</h3>
                  <p className="mb-3">بدل خزانة قصيرة (ارتفاع 180 سم)، ركبي رفوف لين السقف (240-260 سم)</p>
                  <p className="text-sm italic text-purple-700">
                    💡 أنا ركبت رفوف ايكيا Billy لين السقف = مساحة تخزين ضعفت!
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">2. منظمات خلف الأبواب</h3>
                  <p className="mb-3">باب الحمام، باب الخزانة، باب المطبخ - كلها مساحات مخفية!</p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>خلف باب الحمام: منظم للفوط ومواد التنظيف</li>
                    <li>خلف باب المطبخ: منظم للتوابل أو أكياس البلاستيك</li>
                    <li>خلف باب الخزانة: منظم للإكسسوارات أو الأحذية</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-300">
                  <h3 className="text-xl font-bold text-green-900 mb-3">3. رفوف فوق الأبواب والنوافذ</h3>
                  <p className="mb-3">المساحة فوق الباب عادة فاضية - استغليها!</p>
                  <p className="text-sm">رف صغير فوق الباب = مساحة لكتب، علب، أو ديكورات</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-6 border-2 border-orange-300">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">4. معلقات الحائط</h3>
                  <p className="mb-3">بدل ما تحطين الأشياء على الطاولة، علقيها!</p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>علاقات للمفاتيح والشنط على الحائط</li>
                    <li>رف معلق للنباتات</li>
                    <li>منظم معلق للمجوهرات</li>
                    <li>لوح مثقب (pegboard) للأدوات</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثالثاً: الأثاث الذكي (استثمار يستاهل!)
              </h2>

              <p className="text-lg">
                في الشقق الصغيرة، كل قطعة أثاث لازم يكون لها <strong>أكثر من استخدام!</strong>
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">نوع الأثاث</th>
                      <th className="border border-gray-300 p-3 text-right">الفائدة</th>
                      <th className="border border-gray-300 p-3 text-right">السعر التقريبي</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">سرير بأدراج تخزين</td>
                      <td className="border border-gray-300 p-3">يوفر مساحة خزانة كاملة! (ملابس، أحذية، بطاطين)</td>
                      <td className="border border-gray-300 p-3">800-1500 ريال</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">طاولة قابلة للطي</td>
                      <td className="border border-gray-300 p-3">طاولة طعام → مكتب → تطوى وتختفي!</td>
                      <td className="border border-gray-300 p-3">300-600 ريال</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">كنب سرير</td>
                      <td className="border border-gray-300 p-3">مقعد نهاراً → سرير ليلاً (للضيوف)</td>
                      <td className="border border-gray-300 p-3">1000-2000 ريال</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">طاولة قهوة بتخزين</td>
                      <td className="border border-gray-300 p-3">سطح جميل + أدراج مخفية للريموتات، مجلات...</td>
                      <td className="border border-gray-300 p-3">400-800 ريال</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">مرايا كبيرة</td>
                      <td className="border border-gray-300 p-3">تعكس الإضاءة → الغرفة تبان أوسع!</td>
                      <td className="border border-gray-300 p-3">200-500 ريال</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-lg font-semibold text-green-600">
                💰 استثمرت حوالي 3000 ريال في أثاث ذكي، ووفرت مساحة تساوي غرفة كاملة!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                رابعاً: تنظيم المطبخ الصغير (التحدي الأكبر!)
              </h2>

              <p className="text-lg">
                المطبخ في الشقق الصغيرة عادة ضيق جداً. هذي الحيل خلته وظيفي 100%:
              </p>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>منظمات الأدراج:</strong> بدل أدراج فوضى، صناديق صغيرة تفصل كل شي (ملاعق، سكاكين، أدوات...)
                </li>
                <li>
                  <strong>رفوف داخل الخزائن:</strong> رف إضافي داخل الخزانة = ضعف المساحة!
                </li>
                <li>
                  <strong>علاقات للأكواب:</strong> بدل ما تاخذ مساحة، علقيها تحت الرف
                </li>
                <li>
                  <strong>منظم دوار للتوابل:</strong> يوفر مساحة ويسهل الوصول
                </li>
                <li>
                  <strong>لوح مغناطيسي للسكاكين:</strong> على الحائط بدل الدرج
                </li>
                <li>
                  <strong>سلة معلقة للفواكه:</strong> توفر مساحة سطح المطبخ
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                خامساً: الألوان والإضاءة (تخلي المساحة تبان أوسع!)
              </h2>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-white p-6 border-2 border-gray-300">
                  <h3 className="text-xl font-bold mb-3">🎨 1. ألوان فاتحة = مساحة أوسع</h3>
                  <p className="mb-3">الألوان الفاتحة (أبيض، بيج، رمادي فاتح) تعكس الضوء وتخلي المساحة تبان أكبر</p>
                  <p className="text-sm italic">
                    💡 صبغت جدران شقتي أبيض كريمي → الفرق واضح! المساحة صارت تبان أوسع بكثير
                  </p>
                </div>

                <div className="rounded-lg bg-yellow-50 p-6 border-2 border-yellow-300">
                  <h3 className="text-xl font-bold mb-3">💡 2. إضاءة جيدة = شقة أوسع</h3>
                  <ul className="mr-6 list-disc space-y-2">
                    <li>إضاءة طبيعية: افتحي الستائر، خلي الشمس تدخل!</li>
                    <li>إضاءة LED بيضاء: أفضل من الصفراء (تخلي المكان يبان أكبر)</li>
                    <li>مرايا مقابل النوافذ: تعكس الضوء وتضاعف الإضاءة</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                سادساً: قاعدة "كل شي له مكان" (سر الترتيب الدائم!)
              </h2>

              <p className="text-lg">
                السبب الرئيسي للفوضى: الأشياء ما لها مكان ثابت! تلاقينها منثورة في كل مكان.
              </p>

              <p className="text-lg font-bold text-primary">
                الحل: خصصي مكان محدد لكل شي، وارجعيه لمكانه دايماً!
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-6 border-2 border-blue-400">
                <p className="font-bold text-xl mb-4">📋 أمثلة من شقتي:</p>
                <ul className="space-y-2">
                  <li>✅ المفاتيح: علاقة على الحائط بجانب الباب</li>
                  <li>✅ الشنطة: خطاف خلف باب الغرفة</li>
                  <li>✅ الأحذية: منظم عند الباب (6 أزواج فقط!)</li>
                  <li>✅ الريموتات: صندوق صغير على طاولة القهوة</li>
                  <li>✅ الكتب: رف معين، مرتبة بالحجم</li>
                  <li>✅ الملابس: مطوية ومرتبة في الخزانة</li>
                </ul>
                <p className="mt-4 text-sm italic">
                  💡 استغرق مني أسبوعين لين تعودت، بس بعدها الترتيب صار تلقائي!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح إضافية تعلمتها من التجربة
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>قاعدة "واحد يدخل، واحد يطلع":</strong> لو اشتريتي شي جديد (قميص مثلاً)، تخلصي من واحد قديم. تحافظين على عدد ثابت من الأغراض.
                </li>
                <li>
                  <strong>صناديق شفافة أفضل:</strong> تشوفين المحتوى بدون ما تفتحين = سهولة وسرعة
                </li>
                <li>
                  <strong>ملصقات على كل شي:</strong> علب، أدراج، صناديق - كل شي عليه ملصق يوضح المحتوى
                </li>
                <li>
                  <strong>خصصي 10 دقائق يومياً:</strong> ترتيب سريع قبل النوم → الفوضى ما تتراكم
                </li>
                <li>
                  <strong>استخدمي الفراغ تحت السرير:</strong> صناديق مسطحة للأشياء الموسمية
                </li>
                <li>
                  <strong>علقي الدراجة على الحائط:</strong> لو عندك دراجة، علقيها عمودياً = توفير مساحة أرضية
                </li>
              </ul>

              <div className="mt-8 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💚 تجربتي بعد سنتين من التنظيم:
                </p>
                <ul className="space-y-3 text-lg">
                  <li>✅ <strong>الشقة صارت أوسع بصريا:</strong> كل الضيوف يستغربون من صغر المساحة الفعلية!</li>
                  <li>✅ <strong>راحة نفسية:</strong> البيت المرتب = عقل مرتب. صرت أشتغل وأدرس بتركيز أكبر</li>
                  <li>✅ <strong>سهولة التنظيف:</strong> تنظيف 60 متر مرتبة أسهل بكثير من 60 متر فوضى!</li>
                  <li>✅ <strong>وفرت فلوس:</strong> ما عدت أشتري أشياء "لأني ما لقيت اللي عندي" - كل شي واضح</li>
                  <li>✅ <strong>فخورة بشقتي:</strong> ما أخجل أستقبل ضيوف فيها!</li>
                </ul>
                <p className="mt-6 text-lg font-semibold text-green-700">
                  المساحة الصغيرة مو مشكلة، المشكلة التنظيم السيء! 🏡✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">تبين مساعدة في تنظيم وتنظيف شقتك؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمات تنظيف شاملة للشقق الصغيرة. ننظف بعمق ونساعدك في الترتيب!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف عميق لكل ركن</li>
                  <li>تنظيم احترافي (خدمة إضافية)</li>
                  <li>أسعار خاصة للشقق الصغيرة</li>
                  <li>فريق سريع ومحترف</li>
                  <li>خدمة دورية متاحة (أسبوعي/شهري)</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تنظيف شقتك
                  </Link>
                  <Link href="/services/apartment-cleaning-jeddah" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول تنظيم الشقق الصغيرة</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: تنظيم الشقق الصغيرة" }} />
    </>
  );
}
