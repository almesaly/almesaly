import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "عندي قطتين وكلب... وبيتي نظيف! هذا سري 🐾",
  description: "كل الناس تستغرب: كيف بيتك نظيف ومافيه ريحة وعندك حيوانات؟ راح أشارككم كل حيلي العملية للنظافة مع الحيوانات الأليفة.",
  alternates: { canonical: `${site.url}/blog/pet-friendly-cleaning-tips` },
};

const faqs = [
  {
    question: "كيف أتخلص من رائحة الحيوانات في البيت؟",
    answer: "أهم شي: تنظيف منتظم! نظفي صندوق الفضلات يومياً، استحمي للحيوان كل أسبوعين، استخدمي معطر طبيعي (بيكنج صودا رائع!)، وافتحي النوافذ يومياً للتهوية.",
  },
  {
    question: "شو أفضل منظفات آمنة للحيوانات؟",
    answer: "الخل الأبيض + ماء (نسبة 1:1) ممتاز! أو بيكنج صودا للبقع. تجنبي الكلور والأمونيا - سامة للحيوانات. في منظفات طبيعية مخصصة للبيوت اللي فيها حيوانات.",
  },
  {
    question: "كيف أمنع شعر الحيوانات من الانتشار؟",
    answer: "فرشي حيوانك يومياً (يقلل التساقط 80%!), استخدمي مكنسة كهربائية قوية، بطانيات قابلة للغسيل على الكنب، ولا تسمحي للحيوان يدخل غرف النوم.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "النظافة مع الحيوانات الأليفة", url: "/blog/pet-friendly-cleaning-tips" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                عندي قطتين وكلب... وبيتي نظيف! هذا سري 🐾
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>18 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>سارة القحطاني - محبة للحيوانات</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/residential cleaning.jpg" 
                alt="أسرار النظافة مع الحيوانات الأليفة - تجربة حقيقية" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  "سارة، أنتِ متأكدة عندك قطتين وكلب؟! بيتك نظيف وريحته حلوة وما في شعر في كل مكان!" - كل ضيف يزورني يقول كذا! 😊
                </p>
              </div>

              <p className="text-lg">
                وأضحك وأقول: "إيه عندي، بس في أسرار!" 🤭
              </p>

              <p className="text-lg">
                لما قررت أتبنى حيوانات أليفة (قطتين شيرازي + كلب صغير بيجل)، كل الناس حذرتني: "بيتك راح يصير فوضى! شعر في كل مكان! ريحة!"
              </p>

              <p className="text-lg">
                بس أنا قلت: لا، راح أتعلم أنظف صح مع حيواناتي. وفعلاً، بعد 3 سنوات من التجربة والخطأ، لقيت <strong>نظام تنظيف مثالي يخلي البيت نظيف والحيوانات سعيدة!</strong>
              </p>

              <p className="text-lg font-bold text-primary">
                اليوم راح أشارككم كل الأسرار والحيل اللي استخدمها - مجربة وفعالة 100%!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: القاعدة الذهبية - النظافة اليومية!
              </h2>

              <p className="text-lg">
                السر الأكبر: <strong>ما تخلين الأوساخ تتراكم!</strong> شغل بسيط يومي أفضل من تنظيف شامل مرهق كل أسبوع.
              </p>

              <div className="mt-6 rounded-lg bg-green-50 border-2 border-green-400 p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4">روتيني اليومي (15 دقيقة فقط!):</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌅</span>
                    <div>
                      <strong>الصباح (5 دقائق):</strong>
                      <ul className="mr-4 mt-1 list-disc space-y-1 text-sm">
                        <li>تنظيف صندوق فضلات القطط</li>
                        <li>مسح أرضية المطبخ (القطط تمشي عليها)</li>
                        <li>تهوية البيت (فتح النوافذ 10 دقائق)</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">☀️</span>
                    <div>
                      <strong>الظهر (3 دقائق):</strong>
                      <ul className="mr-4 mt-1 list-disc space-y-1 text-sm">
                        <li>كنس سريع للشعر (بالمكنسة اليدوية)</li>
                        <li>مسح آثار الأقدام (الكلب يدخل من البلكونة)</li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌙</span>
                    <div>
                      <strong>المساء (7 دقائق):</strong>
                      <ul className="mr-4 mt-1 list-disc space-y-1 text-sm">
                        <li>تنظيف صندوق الفضلات مرة ثانية</li>
                        <li>غسيل أواني الحيوانات (صحون الأكل والماء)</li>
                        <li>مسح أماكن نومهم (بطانياتهم)</li>
                        <li>رش معطر طبيعي</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-green-700">
                  💡 <strong>15 دقيقة يومياً</strong> توفر عليك ساعات من التنظيف الشامل كل أسبوع!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثانياً: محاربة الشعر (أكبر تحدي!)
              </h2>

              <p className="text-lg">
                الشعر في كل مكان - على الكنب، السجاد، الملابس! هذي الحيل خلتني أسيطر عليه:
              </p>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-300">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">1. التفريش اليومي (الأهم!)  </h3>
                  <p className="mb-3">
                    كل يوم، أفرش القطتين والكلب لمدة 5 دقائق. هذا يزيل <strong>80% من الشعر المتساقط!</strong>
                  </p>
                  <p className="text-sm italic">
                    💡 سويت لهم "موعد تفريش" ثابت (بعد العصر) - صاروا يحبونه ويستنونه!
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-300">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">2. المكنسة الكهربائية القوية</h3>
                  <p className="mb-3">
                    استثمرت في مكنسة قوية مخصصة لشعر الحيوانات (Dyson V11 Animal). غيرت حياتي!
                  </p>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>تشفط الشعر من السجاد والكنب بكفاءة 100%</li>
                    <li>استخدمها يوم ورا يوم (10 دقائق)</li>
                    <li>السعر مرتفع (1800 ريال)، لكن يستاهل!</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-pink-50 p-6 border-2 border-pink-300">
                  <h3 className="text-xl font-bold text-pink-900 mb-3">3. البطانيات القابلة للغسيل</h3>
                  <p className="mb-3">
                    حطيت بطانيات خفيفة على الكنب وأماكن نوم الحيوانات. كل أسبوع أغسلها - سهل جداً!
                  </p>
                  <p className="text-sm">بدل ما أنظف الكنب كل مرة، أنزع البطانية وأغسلها. بسيط!</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-6 border-2 border-orange-300">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">4. الأسطوانة اللاصقة</h3>
                  <p className="mb-3">
                    للملابس والكنب - أسطوانة لاصقة صغيرة. تزيل الشعر في ثواني!
                  </p>
                  <p className="text-sm">عندي واحدة في كل غرفة - جاهزة دايماً!</p>
                </div>

                <div className="rounded-lg bg-yellow-50 p-6 border-2 border-yellow-300">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">5. المناطق المحظورة</h3>
                  <p className="mb-3">
                    غرف النوم <strong>ممنوعة تماماً</strong> للحيوانات. هذا يخلي 30% من البيت خالي من الشعر!
                  </p>
                  <p className="text-sm italic">
                    💡 في البداية كان صعب، بس بعد أسبوعين تعودوا. والنوم بدون شعر على الوسادة = راحة نفسية!
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثالثاً: إزالة الروائح (بدون كيماويات قوية!)
              </h2>

              <p className="text-lg">
                الريحة أكبر خوف لأي شخص عنده حيوانات. لكن الحقيقة: <strong>البيت النظيف = بيت بدون ريحة!</strong>
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-6 border-2 border-green-400">
                <h3 className="text-xl font-bold mb-4">أسراري للتخلص من الروائح:</h3>
                <ol className="mr-6 list-decimal space-y-4">
                  <li>
                    <strong>صندوق فضلات نظيف (مفتاح كل شي!):</strong>
                    <ul className="mr-6 mt-2 list-disc space-y-1 text-sm">
                      <li>نظفيه مرتين يومياً (صباح ومساء)</li>
                      <li>غيري الرمل كل أسبوع</li>
                      <li>اغسلي الصندوق نفسه كل أسبوعين</li>
                      <li>استخدمي رمل معطر (بس طبيعي، ما يضر القطط!)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>استحمام منتظم:</strong>
                    <ul className="mr-6 mt-2 list-disc space-y-1 text-sm">
                      <li>الكلب: كل أسبوعين</li>
                      <li>القطط: مرة في الشهر (تنظف نفسها، ما تحتاج أكثر)</li>
                      <li>شامبو طبيعي بدون عطور قوية</li>
                    </ul>
                  </li>
                  <li>
                    <strong>بيكنج صودا (سحر!):</strong>
                    <ul className="mr-6 mt-2 list-disc space-y-1 text-sm">
                      <li>رشي على السجاد، خليها ساعة، بعدين اكنسي → تمتص الروائح!</li>
                      <li>حطي علبة مفتوحة في غرفة الحيوانات</li>
                      <li>رخيص وطبيعي 100%!</li>
                    </ul>
                  </li>
                  <li>
                    <strong>التهوية:</strong>
                    <ul className="mr-6 mt-2 list-disc space-y-1 text-sm">
                      <li>افتحي النوافذ يومياً (20 دقيقة على الأقل)</li>
                      <li>الهواء الطلق أفضل معطر!</li>
                    </ul>
                  </li>
                  <li>
                    <strong>معطرات طبيعية:</strong>
                    <ul className="mr-6 mt-2 list-disc space-y-1 text-sm">
                      <li>زيوت عطرية (لافندر، ليمون) - بس بكميات صغيرة!</li>
                      <li>نباتات منزلية (تنقي الهواء طبيعياً)</li>
                      <li>قشور برتقال مجففة في أركان البيت</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="mt-6 rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                <p className="font-bold text-red-900 mb-2">⚠️ منظفات تجنبيها (خطر على الحيوانات!):</p>
                <ul className="mr-6 list-disc space-y-1">
                  <li>الكلور (سام للقطط خصوصاً!)</li>
                  <li>الأمونيا (ريحتها تشبه البول - تحفز الحيوانات تتبول في نفس المكان!)</li>
                  <li>المعطرات الكيماوية القوية (تضر جهازهم التنفسي)</li>
                  <li>الزيوت العطرية المركزة (بكميات كبيرة سامة)</li>
                </ul>
                <p className="mt-3 text-sm italic text-red-700">
                  استخدمي منظفات طبيعية: الخل + ماء، بيكنج صودا، صابون طبيعي 🌿
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                رابعاً: التعامل مع الحوادث (بقع، روائح...)
              </h2>

              <p className="text-lg">
                الحوادث تصير - القطة تتقيأ، الكلب يتبول على السجاد... المهم كيف تتعاملين معها!
              </p>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-400">
                  <h3 className="text-xl font-bold mb-3">🤢 القيء:</h3>
                  <ol className="mr-6 list-decimal space-y-2">
                    <li>امسحي الفائض فوراً (بمناديل ورقية)</li>
                    <li>رشي بيكنج صودا على البقعة</li>
                    <li>اتركيها 10 دقائق</li>
                    <li>اكنسي البيكنج صودا</li>
                    <li>امسحي بقماشة مبللة (خل + ماء)</li>
                    <li>جففي المنطقة</li>
                  </ol>
                </div>

                <div className="rounded-lg bg-yellow-50 p-6 border-2 border-yellow-400">
                  <h3 className="text-xl font-bold mb-3">💧 البول:</h3>
                  <ol className="mr-6 list-decimal space-y-2">
                    <li>امتصي السائل (بمناديل ورقية، اضغطي بقوة)</li>
                    <li>رشي محلول (خل أبيض 1 : ماء 1)</li>
                    <li>اتركيه 5 دقائق</li>
                    <li>امتصي المحلول</li>
                    <li>رشي إنزيم مزيل للروائح (متوفر في متاجر الحيوانات)</li>
                    <li><strong>مهم جداً:</strong> لا تستخدمين أمونيا! تزيد المشكلة</li>
                  </ol>
                </div>

                <div className="rounded-lg bg-pink-50 p-6 border-2 border-pink-400">
                  <h3 className="text-xl font-bold mb-3">🐾 آثار الطين والأوساخ:</h3>
                  <ol className="mr-6 list-decimal space-y-2">
                    <li>خلي الطين يجف تماماً (لا تمسحيه وهو رطب!)</li>
                    <li>اكنسي الأوساخ الجافة</li>
                    <li>امسحي بقماشة مبللة (ماء دافئ + شوية صابون)</li>
                    <li>جففي المنطقة</li>
                  </ol>
                  <p className="mt-3 text-sm italic">
                    💡 نصيحة: حطي سجادة صغيرة عند الباب - الكلب يمسح أقدامه عليها قبل ما يدخل!
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                خامساً: نصائح إضافية من تجربتي
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>خصصي أدوات تنظيف للحيوانات:</strong> قماش منفصل، إسفنج منفصل، دلو منفصل - ما تخلطينها بأدوات المطبخ!
                </li>
                <li>
                  <strong>أواني الطعام:</strong> اغسليها يومياً (بصابون)، مثل صحونك تماماً.
                </li>
                <li>
                  <strong>أماكن النوم:</strong> بطانياتهم، سلالهم - اغسليها كل أسبوع.
                </li>
                <li>
                  <strong>الألعاب:</strong> اغسلي ألعابهم (خصوصاً القماشية) كل أسبوعين.
                </li>
                <li>
                  <strong>الأظافر:</strong> قصي أظافر الحيوانات - يمنع خدش الأثاث ويقلل الأوساخ.
                </li>
                <li>
                  <strong>الزيارة البيطرية:</strong> فحص دوري يمنع مشاكل صحية → يمنع أوساخ وروائح!
                </li>
                <li>
                  <strong>الطعام الصحي:</strong> طعام جيد = فضلات أقل رائحة! جربي وراح تلاحظين الفرق.
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الجدول الزمني الأسبوعي (للتنظيف مع الحيوانات)
              </h2>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">اليوم</th>
                      <th className="border border-gray-300 p-3 text-right">المهام</th>
                      <th className="border border-gray-300 p-3 text-right">الوقت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">يومي</td>
                      <td className="border border-gray-300 p-3">تنظيف صندوق فضلات (×2) + تفريش + كنس سريع</td>
                      <td className="border border-gray-300 p-3">15 دقيقة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">يوم ورا يوم</td>
                      <td className="border border-gray-300 p-3">مكنسة كهربائية (سجاد + كنب)</td>
                      <td className="border border-gray-300 p-3">10 دقائق</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">الأحد</td>
                      <td className="border border-gray-300 p-3">غسيل بطانيات الحيوانات + تنظيف شامل للصندوق</td>
                      <td className="border border-gray-300 p-3">30 دقيقة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">الثلاثاء</td>
                      <td className="border border-gray-300 p-3">مسح الأرضيات بالماء + استحمام الكلب</td>
                      <td className="border border-gray-300 p-3">25 دقيقة</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">الخميس</td>
                      <td className="border border-gray-300 p-3">تغيير رمل القطط بالكامل + تنظيف الألعاب</td>
                      <td className="border border-gray-300 p-3">20 دقيقة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">السبت</td>
                      <td className="border border-gray-300 p-3">تنظيف عميق (خلف الأثاث، تحت السرير...)</td>
                      <td className="border border-gray-300 p-3">45 دقيقة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-lg font-semibold text-primary">
                المجموع الأسبوعي: حوالي 3 ساعات - معقول جداً! 😊
              </p>

              <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💜 رسالتي لكل محب للحيوانات:
                </p>
                <p className="text-lg mb-3">
                  لا تخافون من "الفوضى" - الحيوانات الأليفة تستاهل! هي تعطينا حب ووفاء، وأقل شي نعطيها بيت نظيف وصحي.
                </p>
                <p className="text-lg mb-3">
                  النظافة مع الحيوانات <strong>مو مستحيلة!</strong> فقط تحتاج روتين منظم ومنتجات مناسبة.
                </p>
                <p className="text-lg font-semibold text-purple-700">
                  بيتي نظيف، حيواناتي سعيدة، وأنا مرتاحة نفسياً. وأنتم كمان تقدرون! 🐾❤️
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">تبين مساعدة في تنظيف بيتك اللي فيه حيوانات أليفة؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمات تنظيف آمنة 100% للبيوت اللي فيها حيوانات أليفة. منظفات طبيعية، بدون روائح قوية أو كيماويات ضارة!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف عميق للسجاد والكنب (إزالة الشعر والبقع)</li>
                  <li>منظفات آمنة 100% على الحيوانات</li>
                  <li>فريق محب للحيوانات (ما يخافون منها!)</li>
                  <li>إزالة الروائح بطرق طبيعية</li>
                  <li>خدمة دورية متاحة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تنظيف آمن
                  </Link>
                  <Link href="/services/deep-cleaning-jeddah" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول النظافة مع الحيوانات الأليفة</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: النظافة مع الحيوانات الأليفة" }} />
    </>
  );
}
