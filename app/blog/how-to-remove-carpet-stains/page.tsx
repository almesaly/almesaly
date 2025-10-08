import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "ولدي سكب عصير على السجادة الجديدة! طريقة سريعة أنقذتني",
  description: "قبل أسبوع صار موقف كارثي - عصير برتقال كامل على سجادة بيج جديدة! جربت هالطريقة والنتيجة ما صدقتها. دليل شامل لإزالة جميع أنواع البقع.",
  alternates: { canonical: `${site.url}/blog/how-to-remove-carpet-stains` },
};

const faqs = [
  {
    question: "هل البقعة القديمة (أكثر من أسبوع) ممكن تطلع؟",
    answer: "صعبة بس ممكنة! جربي نقعها بمحلول الخل والماء لمدة 30 دقيقة قبل التنظيف. أحياناً تحتاج 2-3 محاولات. إذا ما طلعت، تنظيف بالبخار الاحترافي يقدر يطلعها.",
  },
  {
    question: "هل الخل يضر السجاد؟",
    answer: "لا، الخل الأبيض آمن على معظم أنواع السجاد. بس لا تستخدمينه مركز - دايماً خففيه بالماء (1:1). وجربيه على زاوية مخفية أول!",
  },
  {
    question: "ليش ما أستخدم كلوركس مباشرة؟",
    answer: "الكلوركس خطير على السجاد! يبهت اللون ويتلف الألياف. استخدميه بس للبقع الصعبة جداً وبنسبة مخففة جداً (ملعقة لكل لتر ماء)، وعلى السجاد الفاتح فقط!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "إزالة بقع السجاد", url: "/blog/how-to-remove-carpet-stains" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                ولدي سكب عصير على السجادة الجديدة! طريقة سريعة أنقذتني
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>28 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>ريم السالم - ربة منزل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 10 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/carpet cleaning Jeddah.jpg" 
                alt="طريقة إزالة بقع السجاد الصعبة - تجربة شخصية" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  الساعة 3 العصر يوم السبت. أنا جالسة مرتاحة بعد أسبوع متعب. فجأة أسمع صوت ولدي (5 سنوات) يصرخ: "ماااما! العصير وقع!" 😱
                </p>
              </div>

              <p className="text-lg">
                ركضت للصالة، ولقيت منظر كابوسي: <strong>كوب عصير برتقال كامل (500 مل!) مسكوب على سجادتي البيج الجديدة</strong> اللي اشتريتها قبل شهرين بـ 2500 ريال!
              </p>

              <p className="text-lg">
                أول شي سويته (غلط طبعاً): صرخت! ثاني شي: جبت منشفة وبديت أفرك البقعة بقوة. والنتيجة؟ البقعة انتشرت أكثر وصارت أكبر! 😭
              </p>

              <p className="text-lg">
                بعدين اتصلت بأمي (اللي دايماً عندها حل)، واتصلت بصديقتي اللي تشتغل في شركة تنظيف. وبعد نصف ساعة من التوتر والذعر، جربت الطريقة اللي قالوا لي عليها...
              </p>

              <p className="text-lg font-bold text-green-600">
                والنتيجة؟ البقعة طلعت 100%! السجادة رجعت مثل الأول - ما أحد يقدر يعرف إن فيها بقعة أصلاً!
              </p>

              <p className="text-lg">
                اليوم راح أشارككم الطريقة اللي استخدمتها (خطوة بخطوة)، + طرق لجميع أنواع البقع (قهوة، شاي، زيت، حبر، دم...). وكل هذا من مواد موجودة في بيتك!
              </p>

              <div className="rounded-lg bg-yellow-50 border-2 border-yellow-400 p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-600 mt-1" />
                  <div>
                    <p className="font-bold text-gray-900 text-lg mb-2">⚠️ تحذير مهم قبل البداية!</p>
                    <p className="text-gray-800">
                      <strong>لا تفركي البقعة بقوة!</strong> هذا أكبر غلط! الفرك ينشر البقعة ويدخلها أعمق في ألياف السجاد. دايماً: <strong>اضغطي بلطف، لا تفركي!</strong>
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الطريقة السريعة اللي أنقذت سجادتي (ونجحت 100%)
              </h2>

              <p className="text-lg">
                هذي الطريقة تشتغل على <strong>البقع الطازجة</strong> (أقل من ساعة). كلما كانت البقعة أحدث، كلما كانت النتيجة أفضل!
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">الخطوة 1: التصرف السريع (أول 30 ثانية!)</h3>
              
              <ul className="mr-6 list-decimal space-y-3 text-lg">
                <li><strong>جيبي منشفة ورقية أو قماش أبيض نظيف</strong> (لا تستخدمين ملون لأنه قد يصبغ السجاد)</li>
                <li><strong>اضغطي بلطف على البقعة</strong> - لا تفركي! اضغطي واسحبي لأعلى، كرري</li>
                <li><strong>امتصي أكبر كمية من السائل</strong> - استمري في الضغط لين ما يطلع شي</li>
              </ul>

              <p className="rounded-lg bg-blue-50 p-4 text-lg italic">
                💡 <strong>نصيحة:</strong> لو البقعة كبيرة (مثل حالتي)، استخدمي أكثر من منشفة. أنا استخدمت 5 مناشف ورقية لين امتصيت معظم العصير!
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">الخطوة 2: تحضير المحلول السحري (3 مكونات فقط!)</h3>

              <div className="rounded-lg bg-green-50 border-2 border-green-300 p-6">
                <p className="font-bold text-xl text-gray-900 mb-4">🧪 المكونات (موجودة في كل بيت):</p>
                <ul className="mr-6 list-disc space-y-2 text-lg">
                  <li>كوب ماء دافئ (ليس ساخن!)</li>
                  <li>ملعقة كبيرة خل أبيض</li>
                  <li>نقطتين سائل جلي (فيري أو أي نوع)</li>
                </ul>
                <p className="mt-4 text-gray-800">
                  <strong>اخلطيهم في بخاخ</strong> (أو صحن عميق) ورجيهم زين.
                </p>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-primary">الخطوة 3: التطبيق الذكي</h3>

              <ul className="mr-6 list-decimal space-y-4 text-lg">
                <li>
                  <strong>رشي المحلول على البقعة</strong> (لا تغرقينها - شوي شوي!)
                </li>
                <li>
                  <strong>اتركيه 5 دقائق</strong> يشتغل على البقعة
                </li>
                <li>
                  <strong>جيبي قماشة بيضاء نظيفة</strong> وابدأي تضغطين على البقعة برفق
                </li>
                <li>
                  <strong>كرري العملية:</strong> رش → انتظار 5 دقائق → ضغط وامتصاص
                </li>
                <li>
                  <strong>استمري</strong> لين تلاحظين إن البقعة بدت تخف
                </li>
              </ul>

              <p className="rounded-lg bg-purple-50 p-4 text-lg">
                <strong>تجربتي الشخصية:</strong> أنا كررت العملية 4 مرات. في المرة الثالثة لاحظت فرق واضح، وبالمرة الرابعة البقعة اختفت تماماً!
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">الخطوة 4: الشطف والتجفيف</h3>

              <ul className="mr-6 list-decimal space-y-3 text-lg">
                <li><strong>جيبي ماء نظيف بارد</strong> في بخاخ أو كوب</li>
                <li><strong>رشي المنطقة</strong> لشطف بقايا المحلول</li>
                <li><strong>امتصي الماء</strong> بمنشفة جافة (نفس طريقة الضغط)</li>
                <li><strong>جيبي مروحة أو فتحي الشباك</strong> واتركي المنطقة تجف طبيعياً (4-6 ساعات)</li>
              </ul>

              <div className="rounded-lg bg-red-50 border-2 border-red-300 p-6">
                <p className="font-bold text-lg text-red-800 mb-2">⚠️ تحذير:</p>
                <p className="text-gray-800">
                  <strong>لا تستخدمين مجفف شعر أو حرارة!</strong> الحرارة تثبت البقعة وتخليها دائمة. دايماً: تجفيف طبيعي بالهواء!
                </p>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                دليل شامل: كيف تزيلين كل نوع بقعة (11 نوع!)
              </h2>

              <p className="text-lg">
                بعد تجربة العصير، صرت خبيرة في إزالة البقع! 😄 هذي كل الأنواع اللي جربتها (ونجحت معاي):
              </p>

              {/* نوع البقعة 1: قهوة/شاي */}
              <div className="mt-8 rounded-lg border-2 border-brown-300 bg-orange-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">☕ بقع القهوة والشاي</h3>
                <p className="text-lg mb-3"><strong>الطريقة:</strong></p>
                <ul className="mr-6 list-disc space-y-2">
                  <li>امتصي السائل فوراً بمنشفة</li>
                  <li>اخلطي: ملعقة خل + كوب ماء بارد + نقطة جلي</li>
                  <li>رشي واتركي 10 دقائق</li>
                  <li>امتصي بقماشة بيضاء</li>
                  <li>اشطفي بماء نظيف</li>
                </ul>
                <p className="mt-3 text-sm italic text-gray-700">
                  💡 <strong>سر إضافي:</strong> لو البقعة قديمة، ضيفي ملعقة صغيرة بيكنج صودا للمحلول - تشتغل رهيب!
                </p>
              </div>

              {/* نوع البقعة 2: زيت/دهون */}
              <div className="mt-6 rounded-lg border-2 border-yellow-300 bg-yellow-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🍕 بقع الزيت والشحوم</h3>
                <p className="text-lg mb-3"><strong>الطريقة:</strong></p>
                <ul className="mr-6 list-disc space-y-2">
                  <li>رشي بودرة التلك أو بيكنج صودا على البقعة (تمتص الزيت)</li>
                  <li>اتركيها 30 دقيقة</li>
                  <li>اكنسي البودرة</li>
                  <li>اخلطي: 3 ملاعق كبيرة سائل جلي + كوب ماء دافئ</li>
                  <li>رشي واتركي 15 دقيقة</li>
                  <li>ادعكي برفق بفرشاة أسنان قديمة</li>
                  <li>اشطفي وجففي</li>
                </ul>
                <p className="mt-3 text-sm italic text-gray-700">
                  💡 البقع الزيتية صعبة بس لو استخدمتي البودرة أول، راح تسهل كثير!
                </p>
              </div>

              {/* نوع البقعة 3: الدم */}
              <div className="mt-6 rounded-lg border-2 border-red-300 bg-red-50 p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">🩸 بقع الدم</h3>
                <p className="text-lg mb-3 font-semibold text-red-700">⚠️ مهم جداً: استخدمي ماء بارد فقط! الماء الساخن يثبت الدم!</p>
                <p className="text-lg mb-3"><strong>الطريقة:</strong></p>
                <ul className="mr-6 list-disc space-y-2">
                  <li>امتصي الدم الطازج بمنشفة (اضغطي، لا تفركي!)</li>
                  <li>اخلطي: ملعقتين ملح + كوب ماء بارد</li>
                  <li>بللي قماشة بيضاء بالمحلول واضغطي على البقعة</li>
                  <li>كرري لين تختفي</li>
                  <li>لو البقعة قديمة: انقعيها بماء أكسجين (بيروكسيد) 3%</li>
                  <li>اتركيه يفور على البقعة 5 دقائق</li>
                  <li>امتصي وكرري</li>
                </ul>
              </div>

              {/* المزيد من الأنواع */}
              <div className="mt-8 space-y-4">
                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    🖊️ بقع الحبر والقلم
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>المحلول:</strong> كحول طبي (سبيرتو) نقي</p>
                    <p><strong>الطريقة:</strong> بللي قطنة بالكحول → اضغطي على البقعة → البقعة تنتقل للقطنة → استخدمي قطنة جديدة → كرري لين تختفي</p>
                    <p className="text-sm italic">⚠️ انتبهي: لا تصبي الكحول مباشرة على السجاد! استخدمي قطنة دايماً</p>
                  </div>
                </details>

                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    🍫 بقع الشوكولاتة
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>الطريقة:</strong> اتركي الشوكولاتة تجمد (لا تلمسينها!) → اكشطيها بملعقة → اخلطي سائل جلي + ماء دافئ → رشي → اتركي 10 دقائق → امتصي → اشطفي</p>
                  </div>
                </details>

                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    🍷 بقع النبيذ/العصير الأحمر
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>المحلول السحري:</strong> ملح + ماء فوار (صودا)</p>
                    <p><strong>الطريقة:</strong> صبي الملح على البقعة فوراً (يمتص اللون) → اتركيه 10 دقائق → اكنسيه → صبي شوية ماء فوار على البقعة → امتصي → اخلطي خل + ماء + جلي → رشي → امتصي</p>
                  </div>
                </details>

                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    🐕 بقع بول الحيوانات الأليفة
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>المحلول:</strong> خل أبيض + بيكنج صودا + ماء</p>
                    <p><strong>الطريقة:</strong> امتصي البول بمنشفة → رشي خل مخفف (1:1) → رشي بيكنج صودا → اتركيه يفور → اتركيه 30 دقيقة → اكنسي → رشي محلول إنزيمي (من محل الحيوانات) → امتصي → جففي</p>
                    <p className="text-sm italic">💡 المحلول الإنزيمي مهم لإزالة الرائحة تماماً!</p>
                  </div>
                </details>

                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    💄 بقع الماكياج/أحمر الشفاه
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>المحلول:</strong> كحول طبي أو كريم حلاقة!</p>
                    <p><strong>الطريقة (كريم الحلاقة):</strong> ضعي كمية صغيرة على البقعة → افركي برفق بإصبعك → اتركيه 5 دقائق → امسحي بقماشة مبللة → كرري لين تختفي</p>
                  </div>
                </details>

                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    🍬 بقع العلكة (اللبان)
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>الطريقة:</strong> حطي كيس ثلج على العلكة لمدة 15 دقيقة → العلكة تصير صلبة → اكشطيها بملعقة أو سكين (برفق!) → لو في بقايا: استخدمي كحول أو زيت + اشطفي</p>
                  </div>
                </details>

                <details className="rounded-lg border-2 border-gray-300 bg-gray-50 p-4">
                  <summary className="cursor-pointer text-xl font-bold text-gray-900">
                    🧴 بقع الصابون/الشامبو
                  </summary>
                  <div className="mt-4 space-y-2 text-lg">
                    <p><strong>الطريقة:</strong> هذي سهلة! رشي ماء نظيف فقط (بدون منظفات) → امتصي → كرري لين تختفي الرغوة → جففي زين</p>
                  </div>
                </details>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                أخطاء شائعة (تجنبيها!)
              </h2>

              <div className="space-y-4">
                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ الفرك بقوة</p>
                  <p className="text-gray-800">يدخل البقعة أعمق في الألياف ويتلف السجاد. دايماً: اضغطي برفق!</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ استخدام الماء الساخن على بقع البروتين (دم، حليب، بيض)</p>
                  <p className="text-gray-800">الحرارة تطبخ البروتين وتثبته! دايماً استخدمي ماء بارد لهذي البقع</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ استخدام منظفات ملونة أو قماش ملون</p>
                  <p className="text-gray-800">قد تصبغ السجاد! دايماً استخدمي قماش أبيض ومنظفات شفافة</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ تجفيف البقعة بالحرارة (مجفف، مكواة)</p>
                  <p className="text-gray-800">تثبت البقعة للأبد! اتركيها تجف طبيعياً</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ استخدام كمية كبيرة من المحلول</p>
                  <p className="text-gray-800">يبلل السجاد من تحت ويسبب عفن! استخدمي شوي شوي</p>
                </div>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                متى تستعينين بشركة تنظيف محترفة؟
              </h2>

              <p className="text-lg">
                من تجربتي الشخصية، في حالات يكون التنظيف الاحترافي أفضل وأوفر:
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>البقع القديمة جداً (أكثر من أسبوعين)</strong> - متشربة في الألياف وتحتاج معدات خاصة</li>
                <li><strong>بقع كبيرة جداً (أكثر من متر)</strong> - صعب تنظفينها بشكل متساوي</li>
                <li><strong>سجاد غالي جداً (حرير، صوف، عتيق)</strong> - لا تخاطرين، استعيني بمحترفين</li>
                <li><strong>جربتي كل شي وما نجح</strong> - المحترفين عندهم مواد ومعدات أقوى</li>
                <li><strong>السجاد يحتاج تنظيف شامل</strong> - مو بقعة واحدة، الكل متسخ</li>
              </ul>

              <p className="text-lg font-semibold text-primary">
                💡 <strong>نصيحتي:</strong> لو عندك بقعة صعبة على سجاد غالي، لا تجربين أكثر من مرتين. اتصلي بمحترفين قبل ما تتلف السجادة!
              </p>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">بقعة صعبة وما قدرتي تطلعينها؟ احنا هنا!</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نتخصص في تنظيف السجاد بالبخار وإزالة البقع المستعصية. عندنا معدات حديثة ومواد آمنة تطلع البقع بدون ما تضر السجاد.
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف عميق بالبخار بحرارة عالية</li>
                  <li>إزالة البقع الصعبة + التعقيم الكامل</li>
                  <li>منظفات آمنة على الأطفال والحيوانات</li>
                  <li>ضمان إزالة البقعة أو إعادة المحاولة مجاناً</li>
                  <li>خدمة سريعة في جدة (نفس اليوم متاحة)</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي الآن - عرض خاص!
                  </Link>
                  <Link href="/services/carpet" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل تنظيف السجاد
                  </Link>
                </div>
              </div>

              <div className="mt-12 rounded-lg bg-green-50 border-2 border-green-400 p-6">
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  💚 <strong>رسالة أخيرة من القلب:</strong>
                </p>
                <p className="text-lg text-gray-800">
                  أعرف كم البقع على السجاد مزعجة ومحبطة. أنا مريت بنفس الإحساس - يوم شفت العصير على سجادتي الجديدة حسيت بيتي خرب! بس صدقيني، معظم البقع ممكن تطلع لو تصرفتي بسرعة واستخدمتي الطريقة الصح.
                </p>
                <p className="mt-3 text-lg text-gray-800">
                  حفظي هالمقال، وشاركيه مع صديقاتك. ولو جربتي أي طريقة منها ونجحت (أو حتى ما نجحت!)، حابة أسمع تجربتك. تواصلي معانا على الواتساب وشاركينا قصتك! ❤️
                </p>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول إزالة بقع السجاد</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: إزالة بقع السجاد" }} />
    </>
  );
}
