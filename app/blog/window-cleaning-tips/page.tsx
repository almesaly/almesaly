import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "سر جدتي لنوافذ نظيفة بلا خطوط! جربته ونجح 100%",
  description: "30 سنة جدتي تنظف نوافذها بطريقة واحدة - لامعة بلا خطوط أبداً! ورثت السر منها، والناس تستغرب: كيف نوافذك صافية كذا؟!",
  alternates: { canonical: `${site.url}/blog/window-cleaning-tips` },
};

const faqs = [
  {
    question: "ليش النوافذ تطلع فيها خطوط بعد ما أنظفها؟",
    answer: "السبب الرئيسي: تنظيف تحت الشمس المباشرة! المنظف يجف بسرعة ويترك خطوط. نظفي في الظل أو الصباح الباكر. أيضاً: استخدام منظفات زايدة، أو قماش غير مناسب.",
  },
  {
    question: "شو أفضل منظف للنوافذ؟",
    answer: "الخل الأبيض + ماء (نسبة 1:4) = أفضل منظف طبيعي! رخيص، فعال، وما يترك خطوط. أو منظف زجاج جاهز (بس بكمية قليلة).",
  },
  {
    question: "شو أفضل قماش لتنظيف النوافذ؟",
    answer: "قماش مايكروفايبر 100%! يمتص الماء ويلمع بدون خطوط. أو جرائد قديمة (طريقة جدتي!) - تعطي لمعة رائعة. لا تستخدمين مناديل ورقية - تترك ألياف!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "تنظيف النوافذ بدون خطوط", url: "/blog/window-cleaning-tips" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                سر جدتي لنوافذ نظيفة بلا خطوط! جربته ونجح 100%
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>12 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>منى الزهراني - ربة منزل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 8 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/window cleaning Jeddah.jpg" 
                alt="طريقة جدتي المجربة لتنظيف النوافذ بدون خطوط" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  "منى، ماشاء الله نوافذك صافية وتلمع! شو سرك؟" - جارتي لما زارتني وشافت نوافذي اللامعة 😊
                </p>
              </div>

              <p className="text-lg">
                ضحكت وقلت لها: "السر من جدتي! ورثته منها." 💙
              </p>

              <p className="text-lg">
                جدتي - الله يرحمها - كانت بيتها دايماً نظيف، ونوافذها خاصة كانت تلمع مثل الكريستال! كل الجيران يمدحون: "أم محمد، شو تسوين في النوافذ؟ ما فيها ولا خط!"
              </p>

              <p className="text-lg">
                لما كبرت وصرت ربة منزل، حاولت أنظف نوافذ بيتي... وكانت النتيجة كارثة! خطوط، بقع، ما تلمع...😩 
                قررت أسأل جدتي: "شو سرك؟"
              </p>

              <p className="text-lg font-bold text-primary">
                وعلمتني طريقتها الخاصة - بسيطة، رخيصة، وفعالة 100%!
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>الطريقة الكاملة اللي ورثتها من جدتي</strong> - خطوة بخطوة، مع نصائح إضافية تعلمتها من تجربتي!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: التوقيت المناسب (أهم من المنظف نفسه!)
              </h2>

              <p className="text-lg">
                أول شي علمتني جدتي: <strong>"يا بنتي، لا تنظفين النوافذ والشمس عليها!"</strong>
              </p>

              <div className="mt-6 rounded-lg border-r-4 border-yellow-600 bg-yellow-50 p-6">
                <p className="font-bold text-xl text-yellow-900 mb-4">⚠️ الخطأ الأكبر:</p>
                <p className="text-lg text-gray-800 mb-3">
                  تنظيف النوافذ تحت أشعة الشمس المباشرة! المنظف يجف بسرعة قبل ما تمسحينه → خطوط وبقع مضمونة!
                </p>
                <p className="font-bold text-yellow-900">✅ الحل:</p>
                <ul className="mr-6 list-disc space-y-1 mt-2">
                  <li>نظفي في الصباح الباكر (قبل 9 صباحاً)</li>
                  <li>أو بعد العصر (بعد 5 مساءً)</li>
                  <li>أو في يوم غائم (مثالي!)</li>
                  <li>نظفي الجانب اللي في الظل أولاً</li>
                </ul>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثانياً: الوصفة السحرية لجدتي
              </h2>

              <p className="text-lg">
                جدتي ما كانت تشتري منظفات جاهزة - كانت تسوي منظفها الخاص! وصفة بسيطة ب3 مكونات فقط:
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-6 border-2 border-green-400">
                <h3 className="text-2xl font-bold text-green-900 mb-4">🧪 الوصفة السحرية:</h3>
                <div className="space-y-3">
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">المكونات:</p>
                    <ul className="mr-6 list-disc space-y-1">
                      <li>1 كوب خل أبيض</li>
                      <li>4 أكواب ماء دافئ</li>
                      <li>3 قطرات سائل جلي (اختياري - للشحوم)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الطريقة:</p>
                    <ol className="mr-6 list-decimal space-y-1">
                      <li>اخلطي كل المكونات في بخاخة</li>
                      <li>رجيها جيداً</li>
                      <li>جاهز للاستخدام!</li>
                    </ol>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-green-700">
                  💡 الخل = سحر! يزيل الدهون، يعطي لمعة، وما يترك خطوط. ورخيص جداً!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثالثاً: الأدوات الصحيحة
              </h2>

              <p className="text-lg">
                المنظف مهم، لكن <strong>الأدوات أهم!</strong> استخدام الأدوات الخاطئة = خطوط مضمونة.
              </p>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">1. قماش مايكروفايبر (الخيار الحديث)</h3>
                  <p className="mb-3">
                    أفضل قماش للنوافذ! ناعم، يمتص الماء، وما يترك ألياف أو خطوط.
                  </p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>استخدمي قماشتين: واحدة للمسح، والثانية للتجفيف</li>
                    <li>السعر: 10-20 ريال (قابلة للغسيل والاستخدام المتكرر)</li>
                    <li>متوفرة في أي سوبرماركت</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">2. جرائد قديمة (طريقة جدتي الأصلية!) 📰</h3>
                  <p className="mb-3">
                    جدتي كانت تستخدم جرائد قديمة - تعطي لمعة رائعة بدون خطوط!
                  </p>
                  <p className="text-sm italic">
                    💡 السر: ورق الجرائد يلمع الزجاج بشكل مذهل. جربي وراح تشوفين الفرق!
                  </p>
                  <p className="text-sm text-red-700 mt-2">
                    ⚠️ ملاحظة: استخدمي جرائد جافة، وانتبهي - ممكن تترك حبر على يدك!
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-300">
                  <h3 className="text-xl font-bold text-green-900 mb-3">3. ممسحة النوافذ (للمحترفين!)</h3>
                  <p className="mb-3">
                    ممسحة بشفرة مطاطية - تزيل الماء بحركة واحدة، بدون خطوط!
                  </p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>مثالية للنوافذ الكبيرة</li>
                    <li>تحتاج شوية تدريب، لكن النتيجة احترافية</li>
                    <li>السعر: 30-50 ريال</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-red-50 p-6 border-2 border-red-300">
                  <h3 className="text-xl font-bold text-red-900 mb-3">❌ تجنبي هذي الأدوات:</h3>
                  <ul className="mr-6 list-disc space-y-1">
                    <li><strong>مناديل ورقية:</strong> تترك ألياف صغيرة على الزجاج</li>
                    <li><strong>قماش عادي (قطن):</strong> ما يمتص جيداً، يترك خطوط</li>
                    <li><strong>إسفنج خشن:</strong> يخدش الزجاج!</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                رابعاً: الطريقة الصحيحة (خطوة بخطوة)
              </h2>

              <p className="text-lg">
                هذي طريقة جدتي بالضبط - اتبعيها وما راح تشوفين خطوط أبداً!
              </p>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg bg-blue-50 p-5 border-r-4 border-blue-500">
                  <p className="font-bold text-lg mb-2">الخطوة 1: التنظيف الأولي</p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>شيلي الستائر</li>
                    <li>نظفي إطار النافذة (بقماشة مبللة)</li>
                    <li>شيلي الغبار من الزجاج (بقماشة جافة أو فرشاة ناعمة)</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-5 border-r-4 border-green-500">
                  <p className="font-bold text-lg mb-2">الخطوة 2: الرش</p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>رشي المنظف على الزجاج (كمية معتدلة - لا تبالغين!)</li>
                    <li>غطي كل السطح بالتساوي</li>
                    <li>لو النافذة كبيرة، نظفيها على أقسام</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-purple-50 p-5 border-r-4 border-purple-500">
                  <p className="font-bold text-lg mb-2">الخطوة 3: المسح</p>
                  <p className="text-sm mb-2"><strong>طريقة جدتي (بالجريدة أو المايكروفايبر):</strong></p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>امسحي بحركة دائرية أو متعرجة (S shape)</li>
                    <li>لا تضغطين بقوة - خفيف يكفي</li>
                    <li>امسحي من الأعلى للأسفل</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-orange-50 p-5 border-r-4 border-orange-500">
                  <p className="font-bold text-lg mb-2">الخطوة 4: التجفيف</p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>استخدمي قماشة مايكروفايبر جافة</li>
                    <li>امسحي بحركات سريعة</li>
                    <li>ركزي على الزوايا والأطراف (تتجمع فيها قطرات)</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-pink-50 p-5 border-r-4 border-pink-500">
                  <p className="font-bold text-lg mb-2">الخطوة 5: اللمسة الأخيرة</p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>شيكي على النافذة من زوايا مختلفة (ضوء مختلف يوضح الخطوط)</li>
                    <li>لو شفتي خطوط، امسحيها بقماشة جافة فوراً</li>
                    <li>نظفي الجانب الثاني (الخارجي) بنفس الطريقة</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6 border-2 border-green-400">
                <p className="font-bold text-xl text-gray-900 mb-3">⏱️ المدة الزمنية:</p>
                <ul className="space-y-2">
                  <li>نافذة صغيرة (غرفة نوم): 5 دقائق</li>
                  <li>نافذة كبيرة (صالة): 10 دقائق</li>
                  <li>بيت كامل (6 نوافذ): 40-50 دقيقة</li>
                </ul>
                <p className="mt-3 text-lg font-semibold text-green-700">
                  أقل من ساعة = نوافذ لامعة في كل البيت! 😊
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح إضافية من تجربتي
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>لا تبالغين في المنظف:</strong> كمية قليلة كافية. الزيادة = خطوط!
                </li>
                <li>
                  <strong>غيري الماء إذا صار متسخ:</strong> ماء نظيف = نتيجة أفضل
                </li>
                <li>
                  <strong>نظفي النوافذ مرة كل أسبوعين:</strong> تكون أسهل وأسرع (الأوساخ ما تتراكم)
                </li>
                <li>
                  <strong>للنوافذ المرتفعة:</strong> استخدمي ممسحة بعصا طويلة (آمن وسهل)
                </li>
                <li>
                  <strong>لو في بقع عنيدة (شحوم، لاصق...):</strong> استخدمي سائل جلي مركز، بعدين امسحي بالخل
                </li>
                <li>
                  <strong>نظفي الجانب الخارجي أولاً:</strong> عادة أوسخ. الداخلي بيكون سهل
                </li>
                <li>
                  <strong>في الشتاء:</strong> استخدمي ماء دافئ (بارد يصعب التنظيف)
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أخطاء شائعة (تجنبيها!)
              </h2>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ التنظيف تحت الشمس</p>
                  <p className="text-gray-800">المنظف يجف بسرعة → خطوط مضمونة! نظفي في الظل.</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ استخدام منظفات قوية/زايدة</p>
                  <p className="text-gray-800">الكمية الزايدة صعب إزالتها → خطوط! قليل يكفي.</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ عدم التجفيف الجيد</p>
                  <p className="text-gray-800">قطرات الماء تجف → بقع! جففي تماماً.</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ استخدام قماش متسخ</p>
                  <p className="text-gray-800">ينقل الأوساخ من نافذة لثانية! استخدمي قماش نظيف دايماً.</p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                بدائل أخرى للمنظف
              </h2>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg bg-blue-50 p-5">
                  <h3 className="font-bold text-lg mb-2">1. الليمون + ماء</h3>
                  <p>عصير ليمونة + 2 كوب ماء = منظف طبيعي ورائحة منعشة!</p>
                </div>

                <div className="rounded-lg bg-green-50 p-5">
                  <h3 className="font-bold text-lg mb-2">2. النشا + ماء</h3>
                  <p>ملعقة نشا + لتر ماء = منظف عجيب! يعطي لمعة قوية.</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-5">
                  <h3 className="font-bold text-lg mb-2">3. منظف زجاج جاهز</h3>
                  <p>لو تفضلين جاهز، اختاري نوعية جيدة (بدون أمونيا قوية - ريحتها مزعجة!).</p>
                </div>
              </div>

              <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💜 رسالة من جدتي (رحمها الله):
                </p>
                <p className="text-lg mb-3 italic">
                  "يا بنتي، النافذة النظيفة تدخل النور والبركة للبيت. ما تحتاجين منظفات غالية - فقط خل وماء وشوية صبر!"
                </p>
                <p className="text-lg font-semibold text-purple-700">
                  كل ما نظفت نوافذي، أتذكرها وأقول: الله يرحمك يا جدتي، علمتيني أشياء كثيرة... من ضمنها نوافذ لامعة! 🤍✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">نوافذك كثيرة أو مرتفعة؟ خليها علينا!</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمة تنظيف نوافذ احترافية في جدة. نوافذ لامعة بلا خطوط - مضمونة 100%!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف داخلي وخارجي للنوافذ</li>
                  <li>معدات احترافية (للنوافذ المرتفعة)</li>
                  <li>منظفات آمنة وفعالة</li>
                  <li>بدون خطوط - ضمان 100%</li>
                  <li>أسعار منافسة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تنظيف النوافذ
                  </Link>
                  <Link href="/services/home-cleaning-jeddah" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول تنظيف النوافذ بدون خطوط</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: تنظيف النوافذ بدون خطوط" }} />
    </>
  );
}
