import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "رخام بيتي صار باهت من الرطوبة! هالطريقة رجعته جديد",
  description: "عشت 5 سنين في جدة والرخام يفقد لمعته بسبب الرطوبة... جربت كل شي لين لقيت الحل الصح! دليل شامل للعناية بالرخام في مناخ جدة الرطب.",
  alternates: { canonical: `${site.url}/blog/marble-care-tips-jeddah` },
};

const faqs = [
  {
    question: "كل كم يحتاج الرخام جلي في جدة؟",
    answer: "بسبب جو جدة الرطب، الرخام يحتاج جلي كل 6-12 شهر (حسب الاستخدام). لو في حركة كثيرة (مدخل، صالة)، كل 6 شهور أفضل. الأماكن الأقل استخداماً ممكن كل سنة.",
  },
  {
    question: "هل أقدر أجلي الرخام بنفسي؟",
    answer: "لا! الجلي يحتاج معدات خاصة وخبرة. لو حاولتي بنفسك، ممكن تخربينه. التلميع البسيط (بمادة ملمعة) تقدرين تسوينه، لكن الجلي العميق خليه للمحترفين.",
  },
  {
    question: "شو أفضل منظف للرخام؟",
    answer: "منظفات محايدة (pH متوازن) أو صابون خفيف + ماء. تجنبي الخل، الليمون، الكلوركس - كلها تتلف الرخام! أنا شخصياً أستخدم منظف رخام خاص من ساكو.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "العناية بالرخام في جدة", url: "/blog/marble-care-tips-jeddah" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                رخام بيتي صار باهت من الرطوبة! هالطريقة رجعته جديد
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>10 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>خالد الزهراني - مقاول</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 10 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/marble cleaning.jpg" 
                alt="طرق العناية بالرخام في مناخ جدة الرطب" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  "خالد، رخام الصالة صار باهت ومتسخ! وأنا أنظفه أسبوعياً، ما أدري شو المشكلة!" - صاحب فيلا جديدة في جدة
                </p>
              </div>

              <p className="text-lg">
                أشتغل مقاول في جدة من 15 سنة، وهذا السؤال يجيني <strong>كل أسبوع!</strong> الناس تركب رخام غالي (أحياناً 200-300 ريال للمتر)، وبعد 6 شهور يفقد لمعته ويصير باهت.
              </p>

              <p className="text-lg">
                السبب؟ <strong>مناخ جدة الرطب + طريقة العناية الخطأ!</strong>
              </p>

              <p className="text-lg">
                الرخام حجر طبيعي حساس جداً. في جدة، الرطوبة العالية + الحرارة + الأملاح في الماء = كابوس للرخام! لو ما عرفت كيف تعتني فيه صح، راح يفقد لمعته بسرعة.
              </p>

              <p className="text-lg">
                اليوم راح أشارككم خبرتي 15 سنة في التعامل مع الرخام في جدة - الأخطاء اللي لازم تتجنبوها، والطريقة الصحيحة للعناية والتلميع.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: ليش الرخام يفقد لمعته في جدة بالذات؟
              </h2>

              <p className="text-lg">
                جدة مختلفة عن باقي المدن السعودية. المناخ عندنا فيه 3 عوامل تدمر الرخام:
              </p>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg border-r-4 border-blue-500 bg-blue-50 p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">1. الرطوبة العالية (60-80%)</h3>
                  <p className="text-lg">
                    الرطوبة تخترق مسامات الرخام → تسبب بقع ماء → تتراكم الأملاح → الرخام يصير باهت
                  </p>
                  <p className="mt-3 text-sm italic text-blue-700">
                    💡 لهذا الرخام في جدة يفقد لمعته أسرع من الرياض مثلاً (جافة)
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-yellow-500 bg-yellow-50 p-6">
                  <h3 className="text-2xl font-bold text-yellow-900 mb-3">2. الأملاح في الماء</h3>
                  <p className="text-lg">
                    ماء جدة فيه نسبة أملاح عالية → لما تنظف الرخام وما تجففه صح → الأملاح تترسب على السطح → بقع بيضاء
                  </p>
                  <p className="mt-3 text-sm italic text-yellow-700">
                    ⚠️ هذا سبب البقع البيضاء اللي تشوفها على الرخام الأسود!
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-green-500 bg-green-50 p-6">
                  <h3 className="text-2xl font-bold text-green-900 mb-3">3. الرمل والأتربة</h3>
                  <p className="text-lg">
                    جو جدة فيه رمال خفيفة تدخل البيت → تمشون عليها → تعمل خدوش صغيرة (زي ورق السنفرة!) → الرخام يفقد لمعته
                  </p>
                  <p className="mt-3 text-sm italic text-green-700">
                    💡 لهذا المداخل تحتاج عناية أكثر!
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الأخطاء الـ 7 اللي تدمر الرخام (توقفوا عنها فوراً!)
              </h2>

              <p className="text-lg">
                من خبرتي، 90% من الناس يسوون هالأخطاء وما يدرون إنهم يدمرون رخامهم!
              </p>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-lg text-red-900 mb-2">❌ الخطأ #1: استخدام الخل أو الليمون للتنظيف</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> الخل والليمون أحماض قوية تذيب سطح الرخام! حتى لو مخفف!
                  </p>
                  <p className="text-sm text-red-700 font-semibold">
                    ✅ البديل: منظف رخام محايد (pH 7) أو صابون خفيف + ماء
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-orange-600 bg-orange-50 p-4">
                  <p className="font-bold text-lg text-orange-900 mb-2">❌ الخطأ #2: استخدام الكلوركس أو منظفات قلوية قوية</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> تتلف سطح الرخام وتبهت لونه
                  </p>
                  <p className="text-sm text-orange-700 font-semibold">
                    ✅ البديل: منظفات خاصة بالرخام (من ساكو أو الدانوب)
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-yellow-600 bg-yellow-50 p-4">
                  <p className="font-bold text-lg text-yellow-900 mb-2">❌ الخطأ #3: المسح بماء كثير وعدم التجفيف</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> الماء الزايد يدخل مسامات الرخام → بقع ماء → ترسبات أملاح
                  </p>
                  <p className="text-sm text-yellow-700 font-semibold">
                    ✅ الصح: مسح خفيف بقماشة مبللة → تجفيف فوري بقماشة جافة!
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-purple-600 bg-purple-50 p-4">
                  <p className="font-bold text-lg text-purple-900 mb-2">❌ الخطأ #4: استخدام فرشاة خشنة أو سكوتش خشن</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> يخدش سطح الرخام! الخدوش تتراكم → الرخام يفقد لمعته
                  </p>
                  <p className="text-sm text-purple-700 font-semibold">
                    ✅ البديل: قماشة ميكروفايبر ناعمة أو إسفنج ناعم
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-pink-600 bg-pink-50 p-4">
                  <p className="font-bold text-lg text-pink-900 mb-2">❌ الخطأ #5: ترك المسكوبات (عصير، قهوة، زيت)</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> السوائل تخترق المسامات → بقع دائمة صعب تطلع!
                  </p>
                  <p className="text-sm text-pink-700 font-semibold">
                    ✅ الصح: امسحي أي مسكوب <strong>فوراً</strong> (خلال دقائق!)
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-blue-600 bg-blue-50 p-4">
                  <p className="font-bold text-lg text-blue-900 mb-2">❌ الخطأ #6: عدم استخدام سجاد/ممسحة عند المدخل</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> الرمال والأتربة من الأحذية تخدش الرخام
                  </p>
                  <p className="text-sm text-blue-700 font-semibold">
                    ✅ الصح: حطي ممسحة قوية عند كل باب (تلتقط الرمال قبل الدخول)
                  </p>
                </div>

                <div className="rounded-lg border-r-4 border-gray-600 bg-gray-50 p-4">
                  <p className="font-bold text-lg text-gray-900 mb-2">❌ الخطأ #7: إهمال الجلي الدوري</p>
                  <p className="text-gray-800 mb-2">
                    <strong>ليش خطأ:</strong> الخدوش الصغيرة تتراكم → الرخام يصير باهت → ما تنفع إلا جلي عميق (غالي!)
                  </p>
                  <p className="text-sm text-gray-700 font-semibold">
                    ✅ الصح: جلي كل 6-12 شهر (حسب الاستخدام) = رخام لامع دايماً
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الطريقة الصحيحة لتنظيف الرخام في جدة (خطوة بخطوة)
              </h2>

              <p className="text-lg">
                هذي الطريقة اللي أنصح فيها كل عملائي، ونتائجها ممتازة:
              </p>

              <div className="mt-6 space-y-6">
                <div className="rounded-lg bg-green-50 border-2 border-green-400 p-6">
                  <p className="font-bold text-xl text-green-900 mb-4">🧹 التنظيف اليومي (5 دقائق):</p>
                  <ol className="mr-6 list-decimal space-y-3">
                    <li className="text-lg">
                      <strong>كنس خفيف:</strong> استخدمي مكنسة ناعمة أو مكنسة كهربائية (بدون فرشاة خشنة)
                    </li>
                    <li className="text-lg">
                      <strong>مسح بقماشة رطبة:</strong> قماشة ميكروفايبر + ماء + نقطتين صابون خفيف
                    </li>
                    <li className="text-lg">
                      <strong>التجفيف الفوري:</strong> قماشة جافة نظيفة → امسحي كل الأرضية (مهم جداً في جدة!)
                    </li>
                  </ol>
                  <p className="mt-4 rounded-lg bg-white p-3 text-sm italic">
                    💡 <strong>سر الرخام اللامع:</strong> التجفيف! لو جففتي صح، ما راح تظهر بقع ماء أو ترسبات أملاح
                  </p>
                </div>

                <div className="rounded-lg bg-blue-50 border-2 border-blue-400 p-6">
                  <p className="font-bold text-xl text-blue-900 mb-4">✨ التنظيف الأسبوعي (15 دقيقة):</p>
                  <ol className="mr-6 list-decimal space-y-3">
                    <li className="text-lg">
                      <strong>استخدمي منظف رخام خاص:</strong> رشي على الأرضية (مو كثير!)
                    </li>
                    <li className="text-lg">
                      <strong>امسحي بحركة دائرية:</strong> قماشة ميكروفايبر → اشتغلي بأقسام صغيرة
                    </li>
                    <li className="text-lg">
                      <strong>اشطفي بماء نظيف:</strong> قماشة نظيفة مبللة بماء فقط
                    </li>
                    <li className="text-lg">
                      <strong>جففي تماماً:</strong> قماشة جافة → امسحي كل شي
                    </li>
                    <li className="text-lg">
                      <strong>التلميع:</strong> استخدمي ملمع رخام (spray) مرة بالأسبوع → يحمي ويلمع
                    </li>
                  </ol>
                </div>

                <div className="rounded-lg bg-purple-50 border-2 border-purple-400 p-6">
                  <p className="font-bold text-xl text-purple-900 mb-4">🔧 الصيانة الشهرية (ساعة):</p>
                  <ol className="mr-6 list-decimal space-y-3">
                    <li className="text-lg">
                      <strong>تفتيش عميق:</strong> دوري على البقع أو الخدوش
                    </li>
                    <li className="text-lg">
                      <strong>معالجة البقع:</strong> لو في بقع، استخدمي معجون خاص (من محل رخام)
                    </li>
                    <li className="text-lg">
                      <strong>إعادة الحماية:</strong> استخدمي مادة عازلة (sealer) كل 3-6 شهور
                    </li>
                  </ol>
                  <p className="mt-4 rounded-lg bg-white p-3 text-sm italic">
                    💡 المادة العازلة تسد المسامات → تمنع دخول الماء والبقع → رخام محمي!
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                متى تحتاج جلي احترافي؟ وكم التكلفة؟
              </h2>

              <p className="text-lg">
                الجلي الاحترافي ضروري لإرجاع لمعان الرخام. بس متى بالضبط؟
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 p-8 border-2 border-orange-400">
                <p className="font-bold text-2xl text-orange-900 mb-4">🛠️ علامات تحتاج جلي:</p>
                <ul className="mr-6 list-disc space-y-3 text-lg">
                  <li>الرخام فقد لمعته وصار باهت (حتى بعد التنظيف)</li>
                  <li>في خدوش واضحة على السطح</li>
                  <li>بقع ماء ما تطلع بالتنظيف العادي</li>
                  <li>الرخام صار خشن (مو ناعم)</li>
                  <li>مضى أكثر من سنة على آخر جلي</li>
                </ul>

                <div className="mt-6 rounded-lg bg-white p-6">
                  <p className="font-bold text-xl text-gray-900 mb-3">💰 تكلفة الجلي في جدة (2024):</p>
                  <table className="w-full text-right">
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2 font-semibold">جلي بسيط (تلميع فقط):</td>
                        <td className="py-2 text-primary font-bold">15-20 ريال/متر</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">جلي متوسط (2 مراحل):</td>
                        <td className="py-2 text-primary font-bold">25-35 ريال/متر</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2 font-semibold">جلي عميق (3-4 مراحل):</td>
                        <td className="py-2 text-primary font-bold">40-60 ريال/متر</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-semibold">جلي + تلميع + عزل:</td>
                        <td className="py-2 text-primary font-bold">60-80 ريال/متر</td>
                      </tr>
                    </tbody>
                  </table>

                  <p className="mt-4 text-sm italic text-gray-600">
                    💡 مثال: صالة 50 متر → جلي متوسط = 50 × 30 = <strong>1500 ريال تقريباً</strong>
                  </p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح خاصة لأنواع الرخام المختلفة
              </h2>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg bg-gray-50 border-2 border-gray-300 p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">⚪ الرخام الأبيض (كرارة، صافي...):</h3>
                  <p className="text-lg mb-3"><strong>المشكلة:</strong> يصفر بسرعة في جدة (بسبب الرطوبة والأملاح)</p>
                  <p className="text-lg"><strong>الحل:</strong></p>
                  <ul className="mr-6 list-disc space-y-2 mt-2">
                    <li>استخدمي منظف خاص بالرخام الأبيض (فيه مواد تبييض)</li>
                    <li>جففي فوراً بعد كل تنظيف</li>
                    <li>استخدمي مادة عازلة كل 3 شهور (مو 6!)</li>
                    <li>لا تستخدمين الكلوركس أبداً!</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-gray-900 text-white border-2 border-gray-700 p-6">
                  <h3 className="text-2xl font-bold mb-3">⚫ الرخام الأسود (جلاكسي، ماركينا...):</h3>
                  <p className="text-lg mb-3"><strong>المشكلة:</strong> بقع الماء البيضاء تظهر واضحة جداً!</p>
                  <p className="text-lg"><strong>الحل:</strong></p>
                  <ul className="mr-6 list-disc space-y-2 mt-2">
                    <li>التجفيف الفوري <strong>ضروري جداً!</strong> (كل قطرة ماء راح تبين)</li>
                    <li>استخدمي ماء مقطر للتنظيف (بدل ماء الحنفية) = ما في أملاح</li>
                    <li>ملمع رخام خاص بالأسود (يخلي اللون عميق وغني)</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-amber-50 border-2 border-amber-300 p-6">
                  <h3 className="text-2xl font-bold text-amber-900 mb-3">🟤 الرخام البيج/البني (امبرادور، كريما...):</h3>
                  <p className="text-lg mb-3"><strong>الميزة:</strong> الأسهل في العناية! البقع ما تبين كثير</p>
                  <p className="text-lg"><strong>نصيحة:</strong></p>
                  <ul className="mr-6 list-disc space-y-2 mt-2">
                    <li>تنظيف عادي يكفي (ما يحتاج عناية خاصة زي الأبيض)</li>
                    <li>جلي كل سنة يكفي (إلا إذا استخدام كثيف)</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                منتجات أنصح فيها (من خبرتي 15 سنة)
              </h2>

              <div className="grid gap-6 md:grid-cols-2 mt-6">
                <div className="rounded-lg bg-blue-50 p-6 border-2 border-blue-300">
                  <p className="font-bold text-lg text-blue-900 mb-3">🧴 منظف رخام:</p>
                  <ul className="space-y-2 text-base">
                    <li>✅ <strong>LTP Waxwash:</strong> ممتاز (من ساكو)</li>
                    <li>✅ <strong>HG Marble Cleaner:</strong> جيد (من الدانوب)</li>
                    <li>✅ <strong>صابون مارسيليا:</strong> طبيعي وآمن</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-6 border-2 border-green-300">
                  <p className="font-bold text-lg text-green-900 mb-3">✨ ملمع رخام:</p>
                  <ul className="space-y-2 text-base">
                    <li>✅ <strong>Tenax Marble Polish:</strong> الأفضل!</li>
                    <li>✅ <strong>Black Diamond Stoneworks:</strong> رهيب للأبيض</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-purple-50 p-6 border-2 border-purple-300">
                  <p className="font-bold text-lg text-purple-900 mb-3">🛡️ مادة عازلة:</p>
                  <ul className="space-y-2 text-base">
                    <li>✅ <strong>511 Impregnator:</strong> الأقوى (يدوم 3-5 سنوات!)</li>
                    <li>✅ <strong>Aqua Mix Sealer:</strong> جيد للاستخدام المنزلي</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-pink-50 p-6 border-2 border-pink-300">
                  <p className="font-bold text-lg text-pink-900 mb-3">🧽 أدوات التنظيف:</p>
                  <ul className="space-y-2 text-base">
                    <li>✅ قماش ميكروفايبر (من ايكيا أو نون)</li>
                    <li>✅ ممسحة ناعمة (لا تخدش)</li>
                    <li>❌ تجنبي: فرش خشنة، سكوتش، سلك</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                خلاصة 15 سنة خبرة في نقاط
              </h2>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <ol className="mr-6 list-decimal space-y-4 text-lg">
                  <li><strong>التجفيف أهم من التنظيف!</strong> في جدة، لو ما جففتي صح، كل شي باطل</li>
                  <li><strong>لا تستخدمين الخل أو الليمون أبداً!</strong> يدمر الرخام نهائياً</li>
                  <li><strong>منظفات محايدة فقط</strong> (pH 7) - لا أحماض، لا قلويات قوية</li>
                  <li><strong>مادة عازلة كل 3-6 شهور</strong> = حماية من الماء والبقع</li>
                  <li><strong>جلي كل 6-12 شهر</strong> = رخام لامع دايماً</li>
                  <li><strong>ممسحة قوية عند المدخل</strong> = تمنع 80% من المشاكل!</li>
                  <li><strong>امسحي أي مسكوب فوراً</strong> (خلال دقائق) قبل ما يخترق المسامات</li>
                  <li><strong>استعين بمحترفين للجلي</strong> - لا تجربين بنفسك!</li>
                </ol>

                <p className="mt-6 rounded-lg bg-white p-4 text-lg font-semibold text-primary">
                  💎 <strong>تذكر:</strong> الرخام استثمار غالي. العناية الصح توفر لك آلاف الريالات في المستقبل!
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">تبي رخامك يرجع جديد؟ احجز جلي احترافي!</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نتخصص في جلي وتلميع الرخام في جدة. معدات إيطالية حديثة + خبرة 20 سنة + نتائج مضمونة!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>جلي احترافي بـ 4 مراحل (خشن → ناعم → تلميع → حماية)</li>
                  <li>مواد عالمية معتمدة (إيطالية وأمريكية)</li>
                  <li>ضمان اللمعان لمدة 6 شهور</li>
                  <li>خدمة سريعة (نفس اليوم متاحة)</li>
                  <li>أسعار منافسة + عروض للمساحات الكبيرة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجز جلي رخام الآن
                  </Link>
                  <Link href="/services/marble-polishing" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول العناية بالرخام في جدة</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: العناية بالرخام في جدة" }} />
    </>
  );
}
