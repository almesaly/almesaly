import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "10 نصائح واقعية للعائلات المشغولة: كيف تحافظ على بيتك نظيف؟",
  description: "كل واحد فينا يعرف كم صعب ترجع من الشغل والبيت فوضى! جربت هالطرق وفعلاً وفرت لي وقت كثير. نصائح عملية مجربة من أم عاملة.",
  alternates: { canonical: `${site.url}/blog/cleaning-tips-for-working-families` },
};

const faqs = [
  {
    question: "كم من الوقت أحتاج للتنظيف اليومي؟",
    answer: "صدقيني، 15-20 دقيقة يومياً كافية جداً! المهم الاستمرارية. أنا شخصياً أقضي 10 دقائق في المساء و10 دقائق في الصباح وهذا يخليني مرتاحة طول الأسبوع.",
  },
  {
    question: "كيف أخلي أطفالي يساعدون في التنظيف؟",
    answer: "اجعليها لعبة! ولدي عمره 5 سنوات أخليه يسابق المؤقت في جمع الألعاب. بنتي 8 سنوات تحب تمسح الطاولة بالفوطة الملونة. المهم ما تخلينها واجب ثقيل، خليها شي ممتع.",
  },
  {
    question: "متى أحتاج شركة تنظيف محترفة؟",
    answer: "أنا شخصياً أستعين بشركة تنظيف مرة كل شهر للتنظيف العميق. الزوايا اللي ما أوصل لها، الستائر، النوافذ من برا، تنظيف الكنب بالبخار - هذي أشياء تحتاج محترفين.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "نصائح للعائلات العاملة", url: "/blog/cleaning-tips-for-working-families" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                10 نصائح واقعية للعائلات المشغولة: كيف تحافظ على بيتك نظيف؟
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>5 أكتوبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>سارة أحمد - أم لثلاثة أطفال</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 8 دقائق</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <Image 
                src="/images/home cleaning Jeddah.jpg" 
                alt="نصائح تنظيف للعائلات العاملة في جدة" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              {/* Introduction */}
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  كل واحد فينا يعرف كم صعب ترجع من الشغل والبيت فوضى! أنا سارة، أم لثلاثة أطفال وموظفة full-time في جدة. قبل سنتين كنت أوشك على الجنون من كثر الضغط - الشغل، الأطفال، البيت، الطبخ... كل شي!
                </p>
              </div>

              <p className="text-lg">
                كنت أقضي كل نهاية أسبوع في التنظيف المكثف، وبالإثنين البيت يرجع فوضى من جديد. جربت كل شي - جداول تنظيف معقدة، تطبيقات، قوائم طويلة... ما في فايدة!
              </p>

              <p className="text-lg">
                لين يوم من الأيام صديقتي نورة (وهي أم لأربعة أطفال!) زارتني وبيتها دايماً نظيف. سألتها: "كيف تسوينها؟" وقالت لي جملة غيرت حياتي: <strong>"لا تحاولين تكونين مثالية، حاولي تكونين ذكية!"</strong>
              </p>

              <p className="text-lg">
                من يومها بدأت أجرب طرق جديدة، وبعد سنتين من التجربة والخطأ، لقيت الطريقة اللي تناسبني. البيت صار نظيف 80% من الوقت (مو 100% لأني واقعية 😊)، وأنا مرتاحة نفسياً وعندي وقت ألعب مع عيالي.
              </p>

              <p className="text-lg">
                حابة أشارككم النصائح اللي فعلاً شغالة معاي، مو الكلام النظري اللي ما أحد يطبقه في الواقع!
              </p>

              {/* Main Tips */}
              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة الأولى: قاعدة الـ 10 دقائق - سحر حقيقي!
              </h2>
              
              <p className="text-lg">
                هذي القاعدة غيرت حياتي بالكامل. كل مساء قبل النوم بـ 30 دقيقة، أشغل مؤقت 10 دقائق وأسوي "جولة سريعة" في البيت:
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>دقيقتين في المطبخ:</strong> أمسح السطح، أحط الصحون في الجلاية، أرمي الزبالة إذا ممتلئة</li>
                <li><strong>دقيقتين في غرفة المعيشة:</strong> أجمع الألعاب في السلة، أرتب الكشن على الكنب، أمسح الطاولة</li>
                <li><strong>دقيقة في الحمام:</strong> رش سريع للمرحاض، مسح المغسلة</li>
                <li><strong>5 دقائق للباقي:</strong> جمع الملابس المتناثرة، ترتيب الأحذية عند الباب، أي فوضى ظاهرة</li>
              </ul>

              <p className="rounded-lg bg-yellow-50 p-4 text-lg">
                <strong>💡 تجربتي الشخصية:</strong> أول أسبوع كنت أحس أني ما أخلص شي، بس بعد أسبوعين صرت خبيرة! الحين أخلص في 8 دقائق والبيت يطلع مرتب جداً. السر هو الاستمرارية - كل يوم 10 دقائق أحسن من 3 ساعات يوم السبت!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة الثانية: كل واحد مسؤول عن غرفته (حتى الصغار!)
              </h2>

              <p className="text-lg">
                في البداية كنت أنظف خلف الجميع زي الخادمة. زوجي يترك الفناقيص في كل مكان، الأطفال ألعابهم منثورة في كل حتة، وأنا اللي أجمع خلفهم.
              </p>

              <p className="text-lg">
                لين قررت: خلاص، كل واحد مسؤول عن مساحته الخاصة! وفعلاً طبقت هالنظام:
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>الأطفال (5-12 سنة):</strong> كل واحد يرتب غرفته قبل النوم. ألعابهم في السلة، ملابسهم في السلة المخصصة. ما يطلع للعب إلا إذا رتب!</li>
                <li><strong>المراهقين:</strong> مسؤولين عن غرفهم بالكامل + مهمة إضافية (مسح الأرضية في غرفة المعيشة مثلاً)</li>
                <li><strong>زوجي:</strong> صار مسؤول عن ترتيب الأحذية عند الباب وجمع الجرائد والمجلات</li>
                <li><strong>أنا:</strong> المطبخ، الحمامات، والإشراف العام</li>
              </ul>

              <p className="rounded-lg bg-green-50 p-4 text-lg">
                <strong>✨ النتيجة بعد شهر:</strong> البيت صار أنظف بـ 60%! والأهم: الأطفال صاروا أكثر مسؤولية، وأنا صرت أقل توتراً. الحين بنتي الكبيرة (12 سنة) تنظف غرفتها أحسن مني!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة الثالثة: استراتيجية "التنظيف المركز" - يوم لكل منطقة
              </h2>

              <p className="text-lg">
                بدل ما تحاولين تنظفين البيت كله كل يوم (مستحيل!)، خصصي يوم لكل منطقة:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border border-gray-200 text-lg">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">اليوم</th>
                      <th className="border border-gray-300 p-3 text-right">المنطقة</th>
                      <th className="border border-gray-300 p-3 text-right">الوقت المطلوب</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">الأحد</td>
                      <td className="border border-gray-300 p-3">المطبخ (الفرن، الثلاجة، الأدراج)</td>
                      <td className="border border-gray-300 p-3">20 دقيقة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">الإثنين</td>
                      <td className="border border-gray-300 p-3">الحمامات (تنظيف عميق)</td>
                      <td className="border border-gray-300 p-3">15 دقيقة</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">الثلاثاء</td>
                      <td className="border border-gray-300 p-3">غرف النوم (ترتيب + مسح)</td>
                      <td className="border border-gray-300 p-3">15 دقيقة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">الأربعاء</td>
                      <td className="border border-gray-300 p-3">غرفة المعيشة (كنس + مسح)</td>
                      <td className="border border-gray-300 p-3">15 دقيقة</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">الخميس</td>
                      <td className="border border-gray-300 p-3">الغسيل + كوي</td>
                      <td className="border border-gray-300 p-3">30 دقيقة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">الجمعة</td>
                      <td className="border border-gray-300 p-3">راحة! (إلا الـ 10 دقائق المعتادة)</td>
                      <td className="border border-gray-300 p-3">10 دقائق فقط</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">السبت</td>
                      <td className="border border-gray-300 p-3">تنظيف سريع عام قبل الأسبوع الجديد</td>
                      <td className="border border-gray-300 p-3">20 دقيقة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-lg">
                <strong>المجموع الأسبوعي:</strong> ساعة و45 دقيقة فقط! بدل من 4-5 ساعات كنت أقضيها نهاية الأسبوع قبل.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة الرابعة: "صندوق الطوارئ" في كل غرفة
              </h2>

              <p className="text-lg">
                هذي فكرة عبقرية تعلمتها من أختي. في كل غرفة، حطي صندوق أو سلة جميلة وسميها "صندوق الطوارئ". أي شي ما عرفتي وين تحطينه، ارميه في الصندوق!
              </p>

              <p className="text-lg">
                كل نهاية أسبوع (أو كل أسبوعين)، افتحي الصندوق وفرزي محتوياته. بتلاقين:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li>ألعاب أطفال ضايعة</li>
                <li>أقلام وأوراق</li>
                <li>ريموتات</li>
                <li>إكسسوارات</li>
                <li>أشياء صغيرة ما لها مكان ثابت</li>
              </ul>

              <p className="text-lg">
                الفايدة؟ البيت يبان مرتب دايماً! بدل ما تتركين الأشياء منثورة، كلها في صندوق واحد مخفي أو موضوع بشكل جميل.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة الخامسة: استثمري في الأدوات الصحيحة
              </h2>

              <p className="text-lg">
                قبل كنت أشتري أرخص منظفات من السوبر ماركت، وكنت أقضي ساعات في الفرك والتنظيف. لين اكتشفت إن الأدوات الجيدة توفر لي نص الوقت!
              </p>

              <p className="text-lg">
                <strong>أدواتي المفضلة (والمستحقة كل ريال):</strong>
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>مكنسة كهربائية قوية:</strong> اشتريت واحدة بـ 800 ريال، توفر لي ساعة أسبوعياً. تكنس وتمسح في نفس الوقت!</li>
                <li><strong>منظف بخار محمول:</strong> للكنب، الستائر، الحمامات. ينظف عميق بدون كيماويات قاسية.</li>
                <li><strong>فوط ميكروفايبر:</strong> أفضل 100 مرة من الفوط العادية. تنظف بدون منظفات كثيرة.</li>
                <li><strong>قفازات تنظيف جيدة:</strong> تحمي يديك وتخليك أسرع في التنظيف.</li>
                <li><strong>منظمات أدراج وخزائن:</strong> تخلي كل شي في مكانه، سهل تلاقينه وسهل ترجعينه.</li>
              </ul>

              <p className="rounded-lg bg-blue-50 p-4 text-lg">
                <strong>💰 نصيحة مالية:</strong> أعرف إن الأدوات الجيدة غالية، بس تراها استثمار. اشتريها على دفعات، شوي شوي. أنا استغرقت 6 شهور لين جمعت كل الأدوات، بس فرقت معاي كثير!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة السادسة: طريقة "التنظيف أثناء الانتظار"
              </h2>

              <p className="text-lg">
                في اليوم العادي، كم مرة تنتظرين؟ تنتظرين الماي يغلي، القهوة تتحضر، الميكروويف يخلص، الأطفال يلبسون...
              </p>

              <p className="text-lg">
                استغلي هالأوقات! حتى لو دقيقة أو دقيقتين:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li>أثناء غلي الماي: امسحي سطح المطبخ</li>
                <li>أثناء الميكروويف: رتبي أدوات المطبخ</li>
                <li>أثناء انتظار الأطفال: اطوي قطعة أو اثنتين من الغسيل</li>
                <li>أثناء تحضير القهوة: افرزي البريد أو الأوراق المتراكمة</li>
                <li>أثناء تشغيل الغسالة: امسحي حوض الحمام</li>
              </ul>

              <p className="text-lg">
                صدقيني، لو جمعتي كل هالدقائق في الأسبوع، راح تطلع معاك ساعة كاملة من التنظيف من غير ما تحسين!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة السابعة: قاعدة "الدخول والخروج"
              </h2>

              <p className="text-lg">
                كل ما تدخلين غرفة، اطلعي منها بشي. مثلاً:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li>داخلة غرفة النوم؟ اطلعي بكوب القهوة الفاضي اللي على الطاولة</li>
                <li>رايحة للمطبخ؟ ودي معاك الصحون من غرفة المعيشة</li>
                <li>نازلة من فوق؟ شيلي معاك الغسيل المكوي</li>
                <li>طالعة من الحمام؟ اطلعي بالمناشف المبللة للغسالة</li>
              </ul>

              <p className="text-lg">
                هالعادة البسيطة تمنع تراكم الأشياء في الأماكن الغلط، وتوفر لك جولات تنظيف خاصة!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة الثامنة: جدول التنظيف العميق الشهري
              </h2>

              <p className="text-lg">
                في أشياء ما تحتاج تنظيف يومي أو أسبوعي، بس لازم تنظف مرة في الشهر. سويت لنفسي جدول:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li><strong>الأسبوع الأول من الشهر:</strong> الثلاجة والفريزر (تنظيف عميق وتنظيم)</li>
                <li><strong>الأسبوع الثاني:</strong> النوافذ والستائر</li>
                <li><strong>الأسبوع الثالث:</strong> الفرن والميكروويف</li>
                <li><strong>الأسبوع الرابع:</strong> الكنب والمجالس (تنظيف بالبخار أو مكنسة خاصة)</li>
              </ul>

              <p className="text-lg">
                كل أسبوع 30-45 دقيقة فقط، والبيت يكون نظيف من الداخل والخارج!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة التاسعة: لا تخافين من الاستعانة بمحترفين
              </h2>

              <p className="text-lg">
                أنا كنت أحس بالذنب لما أفكر أستعين بشركة تنظيف. أحس إني أم سيئة أو ربة بيت فاشلة. بس الحقيقة؟ وقتك ثمين!
              </p>

              <p className="text-lg">
                الحين أستعين بـ<Link href="/" className="font-semibold text-primary underline">شركة المثالي</Link> مرة كل شهر للتنظيف العميق. يجون ينظفون الأشياء اللي صعب علي أنظفها:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li>الكنب والمجالس بالبخار</li>
                <li>النوافذ من الداخل والخارج</li>
                <li>الستائر (ينزلونها وينظفونها ويرجعونها)</li>
                <li>الأرضيات (جلي الرخام مثلاً)</li>
                <li>المطبخ من الداخل (الأدراج، خلف الأجهزة)</li>
              </ul>

              <p className="text-lg">
                التكلفة؟ حوالي 400-600 ريال شهرياً. بس تراها توفر لي 4-5 ساعات من التنظيف المتعب، وتعطيني راحة نفسية إني أعرف البيت نظيف عميق.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                النصيحة العاشرة: كوني واقعية ولطيفة مع نفسك
              </h2>

              <p className="text-lg">
                آخر نصيحة (والأهم!): <strong>بيتك ما راح يكون 100% نظيف طول الوقت، وهذا عادي!</strong>
              </p>

              <p className="text-lg">
                في أيام راح تكونين متعبة، وراح تتركين الصحون في المغسلة. في أيام الأطفال راح يخربون البيت بعد ما نظفتيه بـ 10 دقائق. وهذا طبيعي جداً!
              </p>

              <p className="text-lg">
                المهم ما تستسلمين. اليوم اللي بعده ارجعي للروتين. البيت النظيف 80% من الوقت أفضل بمراحل من البيت اللي تحاولين تخلينه مثالي والنتيجة تنهارين نفسياً.
              </p>

              <div className="rounded-lg bg-purple-50 p-6">
                <p className="text-lg font-semibold text-gray-900">
                  <strong>رسالتي لكل أم عاملة:</strong>
                </p>
                <p className="mt-3 text-lg">
                  أنتِ تسوين شغل خارق! تشتغلين، تربين أطفال، تدير بيت، تطبخين، تنظفين... هذا كله ما يسويه إلا super woman حقيقية.
                </p>
                <p className="mt-3 text-lg">
                  لا تقارنين نفسك بالصور في انستقرام. البيوت "المثالية" اللي تشوفينها غالباً مو حقيقية أو فيها ناس تساعد ما يظهرون في الصورة.
                </p>
                <p className="mt-3 text-lg font-semibold text-primary">
                  بيتك النظيف 70-80% من الوقت + صحتك النفسية + وقت جودة مع عيالك = أفضل بـ 1000 مرة من بيت مثالي وأم منهارة! 💙
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-12 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">هل تحتاجين مساعدة في التنظيف العميق؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نفهم ضغوط العائلات العاملة في جدة. نقدم خدمات تنظيف مرنة تناسب جدولك - سواء تنظيف شهري عميق، أسبوعي، أو حتى يومي.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احصلي على عرض سعر مجاني
                  </Link>
                  <Link href="/services" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تعرفي على خدماتنا
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة من أمهات عاملات</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: نصائح للعائلات العاملة" }} />
    </>
  );
}
