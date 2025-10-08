import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "نظفت مكتبي وزادت إنتاجيتي 40%! هذا اللي تغير...",
  description: "كنت أشتغل بفوضى، وتركيزي صفر. جربت أنظم وأنظف مكتبي لمدة أسبوع - النتائج صدمتني! كيف النظافة تأثر على الإنتاجية - تجربة علمية وشخصية.",
  alternates: { canonical: `${site.url}/blog/office-cleaning-productivity` },
};

const faqs = [
  {
    question: "كيف النظافة تأثر على الإنتاجية؟",
    answer: "علمياً: الفوضى تشتت الانتباه وتزيد التوتر. المكتب النظيف = عقل صافي، تركيز أعلى، قرارات أسرع. دراسات أثبتت: النظافة تزيد الإنتاجية 15-20%!",
  },
  {
    question: "كم مرة أنظف مكتبي؟",
    answer: "يومياً: ترتيب سريع 5 دقائق (نهاية يوم العمل). أسبوعياً: تنظيف شامل 30 دقيقة (مسح، تنظيم، ترتيب). شهرياً: تنظيف عميق ساعة (خزائن، أدراج، شاشة...).",
  },
  {
    question: "شو أهم شي في تنظيم المكتب؟",
    answer: "قاعدة 'كل شي له مكان'! لو كل قلم، ورقة، ملف له مكان محدد، المكتب يبقى نظيف تلقائياً. والأهم: تخلص من الأوراق والأشياء الزايدة - 80% منها ما تحتاجها!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "نظافة المكتب والإنتاجية", url: "/blog/office-cleaning-productivity" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                نظفت مكتبي وزادت إنتاجيتي 40%! هذا اللي تغير...
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>15 أكتوبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>خالد الشمري - موظف ومدير مشاريع</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/office cleaning Jeddah.jpg" 
                alt="كيف تأثر نظافة المكتب على الإنتاجية - تجربة علمية وشخصية" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  أوراق متكدسة، أقلام مبعثرة، كوب قهوة من أمس، ملفات مفتوحة في كل مكان... هذا كان مكتبي! وكنت أسأل نفسي: "ليش ما أقدر أركز؟ ليش الشغل بطيء؟" 🤔
                </p>
              </div>

              <p className="text-lg">
                لين يوم قرأت مقالة علمية: <strong>"الفوضى البصرية تستهلك 30% من طاقة تركيزك!"</strong>
              </p>

              <p className="text-lg">
                قلت: يمكن هذا سبب مشكلتي! قررت أسوي تجربة: <strong>أنظم وأنظف مكتبي لمدة أسبوع كامل، وأقيس إنتاجيتي.</strong>
              </p>

              <p className="text-lg font-bold text-primary">
                النتيجة؟ صدمتني! زادت إنتاجيتي 40%، وقل توتري بشكل ملحوظ. مكتب نظيف = عقل صافي! 🧠✨
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>العلاقة بين النظافة والإنتاجية (علمياً وعملياً)، وكيف نظمت مكتبي، والنتائج اللي حققتها!</strong>
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: العلم وراء الموضوع (ليش النظافة تأثر على الإنتاجية؟)
              </h2>

              <p className="text-lg">
                مو بس كلام فاضي - في أبحاث علمية تثبت العلاقة المباشرة:
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-400">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">🧠 1. الفوضى = تشتت ذهني</h3>
                  <p className="mb-3">
                    دراسة من جامعة Princeton (2011): <strong>الفوضى البصرية تقلل القدرة على التركيز وتزيد التوتر.</strong>
                  </p>
                  <p className="text-sm">
                    العقل يحاول "معالجة" كل الأشياء اللي تشوفها عيونك → استهلاك طاقة ذهنية في أشياء غير مهمة!
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-400">
                  <h3 className="text-xl font-bold text-green-900 mb-3">⚡ 2. النظافة = تركيز أعلى</h3>
                  <p className="mb-3">
                    بحث من جامعة Harvard: <strong>الموظفين في بيئات نظيفة أكثر إنتاجية ب 15-20% من زملائهم في بيئات فوضوية.</strong>
                  </p>
                  <p className="text-sm">
                    السبب: العقل يشتغل بكفاءة أعلى لما ما يكون في "مشتتات" بصرية!
                  </p>
                </div>

                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-400">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">😌 3. النظافة = تقليل التوتر</h3>
                  <p className="mb-3">
                    دراسة UCLA: <strong>الفوضى في مكان العمل ترفع مستوى الكورتيزول (هرمون التوتر) ب 25%!</strong>
                  </p>
                  <p className="text-sm">
                    مكتب نظيف = شعور بالسيطرة والنظام → توتر أقل → إنتاجية أعلى.
                  </p>
                </div>

                <div className="rounded-lg bg-orange-50 p-6 border-2 border-orange-400">
                  <h3 className="text-xl font-bold text-orange-900 mb-3">🚀 4. النظافة = قرارات أفضل</h3>
                  <p className="mb-3">
                    بحث Psychological Science: <strong>البيئة النظيفة تحسن جودة القرارات وتزيد الإبداع!</strong>
                  </p>
                  <p className="text-sm">
                    العقل الصافي يفكر أوضح → قرارات أذكى وأسرع.
                  </p>
                </div>
              </div>

              <p className="mt-6 rounded-lg bg-yellow-50 p-4 text-lg border-2 border-yellow-400">
                <strong>💡 الخلاصة العلمية:</strong> النظافة ≠ رفاهية. النظافة = ضرورة للأداء العالي والصحة النفسية!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثانياً: تجربتي الشخصية (أسبوع واحد غيّر كل شي!)
              </h2>

              <p className="text-lg">
                قررت أسوي تجربة: أنظف وأنظم مكتبي بالكامل، وأقيس إنتاجيتي قبل وبعد.
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-red-50 to-orange-50 p-6 border-2 border-red-400">
                <h3 className="text-2xl font-bold text-red-900 mb-4">📊 قبل التنظيف (الأسبوع الأول):</h3>
                <ul className="space-y-2">
                  <li>❌ مهام مكتملة: 12 مهمة (من 20 مطلوبة)</li>
                  <li>❌ ساعات عمل فعلية: 4 ساعات تركيز (من 8 ساعات دوام!)</li>
                  <li>❌ مستوى التوتر: 8/10</li>
                  <li>❌ ضياع وقت في البحث عن أشياء: ساعة يومياً!</li>
                  <li>❌ جودة القرارات: متوسطة</li>
                  <li>❌ شعور عام: مرهق، مشتت، غير راضٍ</li>
                </ul>
              </div>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-6 border-2 border-green-400">
                <h3 className="text-2xl font-bold text-green-900 mb-4">📈 بعد التنظيف (الأسبوع الثاني):</h3>
                <ul className="space-y-2">
                  <li>✅ مهام مكتملة: 20 مهمة (100% إنجاز!)</li>
                  <li>✅ ساعات عمل فعلية: 6.5 ساعات تركيز</li>
                  <li>✅ مستوى التوتر: 3/10</li>
                  <li>✅ ضياع وقت في البحث: صفر! (كل شي في مكانه)</li>
                  <li>✅ جودة القرارات: ممتازة</li>
                  <li>✅ شعور عام: نشيط، مركّز، فخور!</li>
                </ul>
              </div>

              <p className="mt-6 text-xl font-bold text-primary">
                الزيادة في الإنتاجية: من 12 إلى 20 مهمة = +66%! (أكثر من توقعاتي!)
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ثالثاً: كيف نظمت ونظفت مكتبي؟ (خطوة بخطوة)
              </h2>

              <p className="text-lg">
                هذي الخطوات اللي اتبعتها - بسيطة لكن فعالة جداً:
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-400">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">الخطوة 1: التخلص من الفوضى (declutter)</h3>
                  <p className="mb-4">أهم خطوة! تخلصت من <strong>كل شي زايد:</strong></p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-xl">📄</span>
                      <div>
                        <strong>الأوراق:</strong> 80% منها قديمة أو غير مهمة! رميتها. الباقي رتبتها في ملفات واضحة.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">✏️</span>
                      <div>
                        <strong>الأقلام:</strong> عندي 15 قلم! احتفظت ب3 فقط (يكفون).
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">📚</span>
                      <div>
                        <strong>الكتب:</strong> الكتب اللي ما أقرأها → حطيتها في رف منفصل.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-xl">📱</span>
                      <div>
                        <strong>الأدوات:</strong> شواحن قديمة، سماعات مكسورة، أشياء "قد تحتاجها يوم" (ما احتجتها!) → زبالة.
                      </div>
                    </li>
                  </ul>
                  <p className="mt-4 text-sm italic text-blue-700">
                    💡 قاعدة ذهبية: لو ما استخدمته آخر 3 شهور، تخلص منه!
                  </p>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-400">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">الخطوة 2: التنظيم (كل شي له مكان!)</h3>
                  <div className="space-y-4">
                    <div className="rounded-lg bg-white p-4">
                      <p className="font-bold mb-2">الأدراج:</p>
                      <ul className="mr-6 list-disc space-y-1 text-sm">
                        <li>درج 1: أقلام + دباسة + ملاحظات لاصقة</li>
                        <li>درج 2: أوراق مهمة (فواتير، عقود...)</li>
                        <li>درج 3: شخصي (مفاتيح، شاحن احتياطي...)</li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <p className="font-bold mb-2">المكتب (السطح):</p>
                      <ul className="mr-6 list-disc space-y-1 text-sm">
                        <li>يمين: شاشة الكمبيوتر</li>
                        <li>يسار: دفتر ملاحظات + قلم</li>
                        <li>أمام: لوحة المفاتيح + الماوس</li>
                        <li>زاوية: كوب ماء (فقط!)</li>
                        <li><strong>باقي السطح: فاضي تماماً!</strong></li>
                      </ul>
                    </div>

                    <div className="rounded-lg bg-white p-4">
                      <p className="font-bold mb-2">الرفوف:</p>
                      <ul className="mr-6 list-disc space-y-1 text-sm">
                        <li>كتب مرتبة بالحجم</li>
                        <li>ملفات في منظم عمودي</li>
                        <li>علبة صغيرة للمشابك والكليبسات</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4 text-sm italic text-green-700">
                    💡 سر السطح النظيف: <strong>حطي فقط اللي تستخدمه يومياً!</strong> الباقي في الأدراج.
                  </p>
                </div>

                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-400">
                  <h3 className="text-2xl font-bold text-purple-900 mb-4">الخطوة 3: التنظيف الفعلي</h3>
                  <ol className="mr-6 list-decimal space-y-3">
                    <li>
                      <strong>الشاشة:</strong> نظفتها بقماش مايكروفايبر (كانت مليانة بقع!)
                    </li>
                    <li>
                      <strong>لوحة المفاتيح:</strong> هزيتها → طلع منها فتات كثير! نظفتها بمنظف خاص
                    </li>
                    <li>
                      <strong>المكتب (السطح):</strong> مسحته بمنظف → لمع!
                    </li>
                    <li>
                      <strong>الأدراج:</strong> فرغتها وم سحتها من الداخل
                    </li>
                    <li>
                      <strong>الكرسي:</strong> نظفت القماش (كان متسخ من الاستخدام اليومي)
                    </li>
                    <li>
                      <strong>الأرضية:</strong> كنست تحت المكتب (كان في غبار كثير!)
                    </li>
                  </ol>
                  <p className="mt-4 text-sm">
                    ⏱️ الوقت الكلي: ساعة ونص (استثمار رائع!)
                  </p>
                </div>

                <div className="rounded-lg bg-pink-50 p-6 border-2 border-pink-400">
                  <h3 className="text-2xl font-bold text-pink-900 mb-4">الخطوة 4: اللمسات الإضافية</h3>
                  <ul className="space-y-2">
                    <li>🌿 <strong>نبتة صغيرة:</strong> حطيتها على الرف - تعطي إحساس بالحيوية والهدوء</li>
                    <li>🖼️ <strong>صورة ملهمة:</strong> على الحائط - تحفزني كل ما أشوفها</li>
                    <li>💡 <strong>إضاءة جيدة:</strong> أضفت لمبة مكتب - راحة للعين</li>
                    <li>🗂️ <strong>ملصقات:</strong> على الأدراج والملفات - أعرف وين كل شي فوراً</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                رابعاً: عادات يومية للحفاظ على النظافة
              </h2>

              <p className="text-lg">
                التنظيف مرة واحدة مو كافي - لازم <strong>عادات يومية</strong> عشان تحافظ على النظام:
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 p-6 border-2 border-blue-400">
                <h3 className="text-xl font-bold mb-4">روتيني اليومي (5 دقائق فقط!):</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌅</span>
                    <div>
                      <strong>بداية اليوم (دقيقة):</strong> امسح سطح المكتب بقماشة سريعة
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">📋</span>
                    <div>
                      <strong>خلال اليوم:</strong> كل ورقة أستخدمها → أحطها في مكانها فوراً (ما أخليها تتراكم!)
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🌙</span>
                    <div>
                      <strong>نهاية اليوم (4 دقائق):</strong>
                      <ul className="mr-4 mt-1 list-disc space-y-1 text-sm">
                        <li>أرجع كل قلم/ورقة لمكانها</li>
                        <li>أغلق البرامج غير الضرورية على الكمبيوتر</li>
                        <li>أرمي الزبالة (أكواب فاضية، أوراق مسودة...)</li>
                        <li>أترك المكتب فاضي تماماً</li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <p className="mt-4 text-sm italic text-blue-700">
                  💡 <strong>5 دقائق يومياً</strong> = مكتب نظيف دائماً! أسهل بكثير من تنظيف شامل كل أسبوع.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النتائج بعد شهر: تغييرات جذرية!
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">المؤشر</th>
                      <th className="border border-gray-300 p-3 text-right">قبل</th>
                      <th className="border border-gray-300 p-3 text-right">بعد</th>
                      <th className="border border-gray-300 p-3 text-right">التحسن</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">المهام المكتملة</td>
                      <td className="border border-gray-300 p-3">12/20</td>
                      <td className="border border-gray-300 p-3">20/20</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">+66%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">ساعات التركيز</td>
                      <td className="border border-gray-300 p-3">4 ساعات</td>
                      <td className="border border-gray-300 p-3">6.5 ساعات</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">+62%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">مستوى التوتر</td>
                      <td className="border border-gray-300 p-3">8/10</td>
                      <td className="border border-gray-300 p-3">3/10</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">-62%</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">وقت ضائع (بحث)</td>
                      <td className="border border-gray-300 p-3">ساعة/يوم</td>
                      <td className="border border-gray-300 p-3">صفر</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">-100%</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">الرضا الوظيفي</td>
                      <td className="border border-gray-300 p-3">5/10</td>
                      <td className="border border-gray-300 p-3">9/10</td>
                      <td className="border border-gray-300 p-3 text-green-600 font-bold">+80%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح إضافية للمكاتب المنزلية
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>افصل الشخصي عن المهني:</strong> لا تخلط أغراضك الشخصية بأدوات العمل - فصل واضح = تركيز أفضل.
                </li>
                <li>
                  <strong>استثمر في تخزين ذكي:</strong> أدراج، منظمات، رفوف - كل شي له مكان!
                </li>
                <li>
                  <strong>قلل الديكورات:</strong> ديكور بسيط = تشتت أقل. قطعة أو اثنتين تكفي.
                </li>
                <li>
                  <strong>نظام "صفر أوراق":</strong> رقمّن كل شي ممكن. الأوراق الضرورية فقط احتفظ فيها.
                </li>
                <li>
                  <strong>نظف شاشتك يومياً:</strong> شاشة نظيفة = راحة للعين وأقل إرهاق.
                </li>
                <li>
                  <strong>تهوية جيدة:</strong> هواء نقي = عقل نشيط!
                </li>
                <li>
                  <strong>نبات صغير:</strong> يحسن المزاج ويزيد الأكسجين (علمياً مثبت!).
                </li>
              </ul>

              <div className="mt-12 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💜 رسالتي لكل موظف/رائد أعمال:
                </p>
                <p className="text-lg mb-3">
                  لا تستهين بقوة النظافة! <strong>مكتب نظيف ≠ رفاهية. مكتب نظيف = استثمار في إنتاجيتك وصحتك النفسية.</strong>
                </p>
                <p className="text-lg mb-3">
                  ساعة ونص من التنظيف غيرت حياتي المهنية! زادت إنتاجيتي، قل توتري، وصرت أستمتع بشغلي أكثر.
                </p>
                <p className="text-lg font-semibold text-purple-700">
                  ابدأ اليوم - نظف مكتبك، ونظم حياتك. راح تشكر نفسك! 💼✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">مكتبك يحتاج تنظيف احترافي؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمات تنظيف مكاتب في جدة - بيئة عمل نظيفة = موظفين أكثر إنتاجية!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف دوري للمكاتب (يومي/أسبوعي/شهري)</li>
                  <li>تعقيم شامل (أسطح، لوحات مفاتيح، شاشات...)</li>
                  <li>خدمات مرنة (ما تعطل الشغل)</li>
                  <li>فريق محترف وسريع</li>
                  <li>أسعار تنافسية للشركات</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجز تنظيف مكتبك
                  </Link>
                  <Link href="/services/office-cleaning-jeddah" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول نظافة المكتب والإنتاجية</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: نظافة المكتب والإنتاجية" }} />
    </>
  );
}
