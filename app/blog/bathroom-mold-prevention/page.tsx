import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "حمامي كان مليان عفن... الحل اللي نجح معي 100%!",
  description: "عانيت سنة كاملة من العفن الأسود في الحمام - جربت كل شي وما نجح! لين لقيت هالحل البسيط. الحين حمامي نظيف بدون عفن أبداً!",
  alternates: { canonical: `${site.url}/blog/bathroom-mold-prevention` },
};

const faqs = [
  {
    question: "ليش العفن يطلع في الحمام بالذات؟",
    answer: "العفن يحب الرطوبة + الدفء + قلة التهوية. الحمام يجمع الثلاث شروط! خاصة بعد الاستحمام بماء حار - البخار يخلق بيئة مثالية للعفن.",
  },
  {
    question: "كيف أتخلص من العفن الموجود؟",
    answer: "استخدمي الخل الأبيض (رشي مباشرة + اتركيه ساعة + افركي + اشطفي) أو بيكنج صودا (عجينة + افركي). للعفن العنيد: كلور مخفف (1:10 ماء)، لكن بحذر!",
  },
  {
    question: "كيف أمنع العفن من الرجوع؟",
    answer: "أهم 3 أشياء: 1) تهوية ممتازة (شباك/شفاط)، 2) تجفيف الحمام بعد كل استحمام، 3) تنظيف أسبوعي. هذي الثلاثة تمنع 95% من العفن!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "منع العفن في الحمام", url: "/blog/bathroom-mold-prevention" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                حمامي كان مليان عفن... الحل اللي نجح معي 100%!
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>5 أكتوبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>أمل الغامدي - ربة منزل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/bathroom cleaning.jpg" 
                alt="كيف تخلصت من العفن في الحمام نهائياً - تجربة حقيقية" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  كل ما أدخل الحمام، أشوف نقاط سوداء صغيرة على السيليكون... على الستارة... حتى على السقف! نظفتها، وبعد أسبوع رجعت! كنت يائسة تماماً. 😔
                </p>
              </div>

              <p className="text-lg">
                هذا كان حالي قبل سنة ونص. العفن في حمامي كان كابوس حقيقي!
              </p>

              <p className="text-lg">
                جربت <strong>كل المنظفات الممكنة:</strong> كلور، منظفات خاصة للعفن، حتى خلطات من النت... كان ينظف لأيام، بعدين يرجع أقوى!
              </p>

              <p className="text-lg">
                لين يوم قررت: خلاص، راح أفهم ليش العفن يطلع، وكيف أمنعه من الأساس - مو بس أنظفه!
              </p>

              <p className="text-lg font-bold text-primary">
                بديت أقرأ، أسأل، وأجرب... ولقيت الحل! الحين مر 8 شهور، وحمامي نظيف 100% بدون ولا نقطة عفن!
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>كل اللي تعلمته - الأسباب، الحلول الفورية، والأهم: كيف تمنعين العفن من الرجوع نهائياً!</strong>
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: ليش العفن يطلع في الحمام؟ (فهم المشكلة = نص الحل!)
              </h2>

              <p className="text-lg">
                العفن كائن حي (فطر) - يحتاج 3 أشياء عشان يعيش:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-blue-50 p-5 border-r-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">1. 💧 الرطوبة</h3>
                  <p>العفن يحب الماء! الحمام = بخار، رذاذ ماء، رطوبة عالية → جنة للعفن!</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-5 border-r-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">2. 🌡️ الدفء</h3>
                  <p>العفن ينمو في درجات حرارة 15-30°. الحمام (خاصة بعد استحمام حار) = دافئ ومناسب!</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-5 border-r-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">3. 🚫 قلة التهوية</h3>
                  <p>لو ما في هواء متجدد، الرطوبة تبقى محبوسة → العفن يتكاثر بسرعة!</p>
                </div>
              </div>

              <p className="mt-6 rounded-lg bg-yellow-50 p-4 text-lg border-2 border-yellow-400">
                <strong>💡 الفهم الأساسي:</strong> ما دام حمامك رطب + دافئ + ما فيه تهوية = العفن راح يطلع! الحل: نكسر الدائرة!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثانياً: كيف أتخلص من العفن الموجود؟ (العلاج الفوري)
              </h2>

              <p className="text-lg">
                قبل الوقاية، لازم نتخلص من العفن الموجود. هذي الطرق الأفضل:
              </p>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-400">
                  <h3 className="text-xl font-bold text-green-900 mb-4">🥒 الحل الطبيعي: الخل الأبيض (الأكثر أماناً!)</h3>
                  <p className="mb-3">
                    الخل يقتل <strong>82% من أنواع العفن!</strong> طبيعي، آمن، ورخيص.
                  </p>
                  <div className="rounded-lg bg-white p-4 mb-3">
                    <p className="font-bold mb-2">الطريقة:</p>
                    <ol className="mr-6 list-decimal space-y-1">
                      <li>صبي خل أبيض نقي في بخاخة (لا تخففينه!)</li>
                      <li>رشي على كل مناطق العفن</li>
                      <li>اتركيه ساعة كاملة</li>
                      <li>افركي بفرشاة خشنة (فرشاة أسنان قديمة ممتازة!)</li>
                      <li>اشطفي بماء ساخن</li>
                      <li>جففي المنطقة تماماً</li>
                    </ol>
                  </div>
                  <p className="text-sm italic text-green-700">
                    💡 ريحة الخل تروح بعد ساعات. لو ما تحبينها، افتحي الشباك!
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">🧂 بيكنج صودا (للبقع العنيدة)</h3>
                  <p className="mb-3">
                    بيكنج صودا = منظف + مزيل روائح. مثالي للعفن!
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الطريقة:</p>
                    <ol className="mr-6 list-decimal space-y-1">
                      <li>اخلطي 1 ملعقة طعام بيكنج صودا + كوب ماء دافئ</li>
                      <li>رشي على العفن</li>
                      <li>افركي بإسفنج خشن</li>
                      <li>اشطفي</li>
                      <li>لو عنيد: سوي عجينة (بيكنج صودا + شوية ماء) → حطيها على العفن → اتركيها 15 دقيقة → افركي</li>
                    </ol>
                  </div>
                </div>

                <div className="rounded-lg bg-yellow-50 p-6 border-2 border-yellow-400">
                  <h3 className="text-xl font-bold text-yellow-900 mb-4">🧪 خل + بيكنج صودا (الكومبو القوي!)</h3>
                  <p className="mb-3">
                    استخدام الاثنين معاً = قوة مضاعفة!
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الطريقة:</p>
                    <ol className="mr-6 list-decimal space-y-1">
                      <li>رشي بيكنج صودا (بودرة) على العفن</li>
                      <li>رشي خل فوقها → راح تفور (تفاعل طبيعي)</li>
                      <li>خليها تفور دقيقتين</li>
                      <li>افركي بفرشاة</li>
                      <li>اشطفي جيداً</li>
                    </ol>
                  </div>
                </div>

                <div className="rounded-lg bg-red-50 p-6 border-2 border-red-400">
                  <h3 className="text-xl font-bold text-red-900 mb-4">⚠️ الكلور (للحالات الصعبة جداً)</h3>
                  <p className="mb-3">
                    الكلور يقتل كل أنواع العفن - لكن <strong>قوي جداً!</strong> استخدميه بحذر.
                  </p>
                  <div className="rounded-lg bg-white p-4 mb-3">
                    <p className="font-bold mb-2">الطريقة الآمنة:</p>
                    <ol className="mr-6 list-decimal space-y-1">
                      <li>البسي قفازات + افتحي الشباك/الشفاط</li>
                      <li>اخلطي 1 كوب كلور + 10 أكواب ماء (تخفيف مهم!)</li>
                      <li>رشي على العفن</li>
                      <li>اتركيه 10 دقائق</li>
                      <li>افركي بفرشاة</li>
                      <li>اشطفي بماء كثير</li>
                    </ol>
                  </div>
                  <p className="text-sm text-red-800 font-bold">
                    ⚠️ لا تخلطين الكلور مع الخل أو الأمونيا - ينتج غاز سام! خطر جداً!
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثالثاً: كيف أمنع العفن من الرجوع؟ (الوقاية = المفتاح!)
              </h2>

              <p className="text-lg">
                هذا الجزء الأهم! تنظيف العفن سهل - لكن منعه من الرجوع = الحل الحقيقي.
              </p>

              <p className="text-lg font-bold text-primary">
                هذي الخطوات اللي طبقتها، والحين حمامي نظيف 100% منذ 8 شهور:
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-6 border-2 border-blue-400">
                  <h3 className="text-2xl font-bold mb-4">1. 🌬️ التهوية (الأهم على الإطلاق!)</h3>
                  <p className="mb-4 text-lg">
                    <strong>95% من مشاكل العفن سببها: قلة التهوية!</strong> الحل:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <strong>شباك/شفاط دايماً مفتوح:</strong> خاصة خلال وبعد الاستحمام (30 دقيقة على الأقل)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <strong>لو ما عندك شباك:</strong> ركبي شفاط قوي (150-200 ريال) - استثمار يستاهل!
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <strong>خلي باب الحمام مفتوح:</strong> لما ما تستخدمينه (يسمح بتدوير الهواء)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-2xl">✅</span>
                      <div>
                        <strong>مروحة صغيرة:</strong> لو ما في شفاط، حطي مروحة توجه الهواء للخارج
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic text-blue-700">
                    💡 أنا ركبت شفاط (تايمر 30 دقيقة) - يشتغل تلقائي بعد الاستحمام. راحة تامة!
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-400">
                  <h3 className="text-2xl font-bold mb-4">2. 🧽 التجفيف بعد كل استحمام</h3>
                  <p className="mb-4">
                    العفن يحب الماء → جففي الحمام = تمنعين العفن!
                  </p>
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">روتيني بعد كل استحمام (دقيقتين فقط!):</p>
                    <ul className="mr-6 list-disc space-y-1">
                      <li>ممسحة زجاج للحوض والحنفيات</li>
                      <li>ممسحة للجدران (خاصة الزوايا)</li>
                      <li>منشفة سريعة للأرضية</li>
                      <li>ستارة الحمام مفتوحة (عشان تجف)</li>
                    </ul>
                  </div>
                  <p className="mt-3 text-sm italic text-green-700">
                    💡 صارت عادة - دقيقتين يومياً = لا عفن أبداً!
                  </p>
                </div>

                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-400">
                  <h3 className="text-2xl font-bold mb-4">3. 🧼 التنظيف الأسبوعي (بسيط وسريع)</h3>
                  <p className="mb-4">
                    مرة في الأسبوع، نظفي الحمام بمنظف مضاد للفطريات:
                  </p>
                  <ul className="mr-6 list-disc space-y-2">
                    <li>رشي خل على الجدران والزوايا</li>
                    <li>امسحي بقماشة</li>
                    <li>نظفي السيليكون (مكان العفن المفضل!)</li>
                    <li>اغسلي ستارة الحمام (مرة في الشهر)</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-pink-50 p-6 border-2 border-pink-400">
                  <h3 className="text-2xl font-bold mb-4">4. 🛁 منتجات مقاومة للعفن</h3>
                  <ul className="space-y-3">
                    <li>
                      <strong>ستارة حمام مضادة للعفن:</strong> في ستائر مصنوعة من مواد تقاوم العفن (متوفرة في الأسواق)
                    </li>
                    <li>
                      <strong>دهان مقاوم للرطوبة:</strong> لو تعيدين دهان الحمام، استخدمي دهان خاص بالحمامات (يمنع العفن)
                    </li>
                    <li>
                      <strong>سيليكون مضاد للعفن:</strong> لو تجددين السيليكون، اختاري نوع مقاوم
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg bg-yellow-50 p-6 border-2 border-yellow-400">
                  <h3 className="text-2xl font-bold mb-4">5. 🌡️ تقليل الرطوبة</h3>
                  <ul className="mr-6 list-disc space-y-2">
                    <li>استحمام بماء أقل حرارة → بخار أقل</li>
                    <li>استخدمي مزيل رطوبة (dehumidifier) في الحمام لو ممكن</li>
                    <li>لا تعلقين ملابس مبللة في الحمام</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                مناطق خطرة (انتبهي لها!)
              </h2>

              <p className="text-lg">
                العفن يحب يتخبى في هذي الأماكن - ركزي عليها:
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">المنطقة</th>
                      <th className="border border-gray-300 p-3 text-right">ليش خطرة؟</th>
                      <th className="border border-gray-300 p-3 text-right">الحل</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">السيليكون (حول الحوض/البانيو)</td>
                      <td className="border border-gray-300 p-3">رطب دايماً + صعب التنظيف</td>
                      <td className="border border-gray-300 p-3">جففيه بعد كل استحمام + نظفيه بالخل أسبوعياً</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">ستارة الحمام</td>
                      <td className="border border-gray-300 p-3">تبقى رطبة لساعات</td>
                      <td className="border border-gray-300 p-3">افرديها بعد الاستحمام + اغسليها شهرياً</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">السقف والزوايا العلوية</td>
                      <td className="border border-gray-300 p-3">البخار يطلع لفوق ويتكثف</td>
                      <td className="border border-gray-300 p-3">شفاط قوي + تهوية ممتازة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">تحت الحوض</td>
                      <td className="border border-gray-300 p-3">رطب + مظلم + مهمل</td>
                      <td className="border border-gray-300 p-3">شيكي عليه شهرياً + أصلحي أي تسريب فوراً</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">فتحات التصريف</td>
                      <td className="border border-gray-300 p-3">رطوبة + بقايا صابون</td>
                      <td className="border border-gray-300 p-3">صبي خل ساخن فيها أسبوعياً</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                متى أستعين بمحترف؟
              </h2>

              <div className="mt-6 rounded-lg bg-red-50 p-6 border-2 border-red-400">
                <p className="font-bold text-xl text-red-900 mb-4">⚠️ اتصلي بمحترف لو:</p>
                <ul className="space-y-2">
                  <li>✅ العفن منتشر على مساحة كبيرة (أكثر من متر مربع)</li>
                  <li>✅ العفن راجع باستمرار رغم كل محاولاتك</li>
                  <li>✅ في تسريب مياه (لازم تأصلحينه أولاً!)</li>
                  <li>✅ العفن أسود غامق ومنتشر (ممكن يكون نوع خطر)</li>
                  <li>✅ عندك مشاكل صحية (حساسية، ربو) - العفن يزيدها سوءاً</li>
                </ul>
              </div>

              <div className="mt-12 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💚 تجربتي بعد 8 شهور:
                </p>
                <p className="text-lg mb-3">
                  <strong>حمامي الحين نظيف تماماً - صفر عفن!</strong> كل اللي احتجته:
                </p>
                <ul className="space-y-2 text-lg">
                  <li>✅ شفاط بتايمر (150 ريال - لمرة واحدة)</li>
                  <li>✅ ممسحة زجاج (15 ريال)</li>
                  <li>✅ خل أبيض (10 ريال - يكفي شهور)</li>
                  <li>✅ دقيقتين يومياً لتجفيف الحمام</li>
                  <li>✅ تنظيف أسبوعي سريع (10 دقائق)</li>
                </ul>
                <p className="mt-6 text-lg font-semibold text-green-700">
                  المجموع: أقل من 200 ريال + عادات بسيطة = حمام صحي ونظيف للأبد! 🌟
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">العفن منتشر وتبين حل احترافي؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمات تنظيف وتعقيم عميق للحمامات في جدة - نزيل العفن من جذوره!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>إزالة كاملة للعفن (حتى المخفي)</li>
                  <li>تعقيم شامل بمواد آمنة</li>
                  <li>معالجة الأسباب (تسريبات، رطوبة...)</li>
                  <li>نصائح وقائية شخصية</li>
                  <li>ضمان على الخدمة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تنظيف احترافي
                  </Link>
                  <Link href="/services/disinfection-sanitization" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول منع العفن في الحمام</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: منع العفن في الحمام" }} />
    </>
  );
}
