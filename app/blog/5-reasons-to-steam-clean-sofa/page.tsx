import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "ليش صرت أنظف كنبي بالبخار كل 3 شهور؟ تجربتي الصادقة",
  description: "كنت أستغرب ليش الناس تدفع على تنظيف الكنب بالبخار... لين جربته بنفسي والفرق واضح جداً خصوصاً في جو جدة الرطب! 5 أسباب غيرت رأيي تماماً.",
  alternates: { canonical: `${site.url}/blog/5-reasons-to-steam-clean-sofa` },
};

const faqs = [
  {
    question: "كل كم أحتاج أنظف الكنب بالبخار؟",
    answer: "من تجربتي في جدة، كل 3-4 شهور مثالي. لو عندك أطفال صغار أو تدخنون في البيت، كل شهرين أفضل. الرطوبة في جدة تخلي التنظيف بالبخار ضروري أكثر من المدن الثانية!",
  },
  {
    question: "هل التنظيف بالبخار يتلف القماش؟",
    answer: "لا، العكس صحيح! البخار لطيف على القماش وما يستخدم كيماويات قاسية. بس تأكدي إن الشركة تستخدم حرارة مناسبة (مو عالية جداً) وتجفف زين بعدها.",
  },
  {
    question: "كم سعر تنظيف الكنب بالبخار في جدة؟",
    answer: "الأسعار تتراوح: كنبة 3 مقاعد حوالي 200-300 ريال، كنبتين + كرسي حوالي 400-500 ريال، مجلس كامل 600-800 ريال. يعتمد على حجم القطع ودرجة الاتساخ.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "تنظيف الكنب بالبخار", url: "/blog/5-reasons-to-steam-clean-sofa" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                ليش صرت أنظف كنبي بالبخار كل 3 شهور؟ تجربتي الصادقة
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>25 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>منى الغامدي - ساكنة حي الشاطئ</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 8 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/sofa cleaning Jeddah.jpg" 
                alt="تجربتي مع تنظيف الكنب بالبخار في جدة" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  "منى، ليش تدفعين 400 ريال كل 3 شهور على تنظيف الكنب؟! الكنب نظيف، وأنا أكنسه كل يوم!" - صديقتي لما شافت فاتورة شركة التنظيف
                </p>
              </div>

              <p className="text-lg">
                صدقاً، أنا نفسي كنت مثلها! قبل سنتين كنت أستغرب من الناس اللي يدفعون مبالغ على "تنظيف بالبخار" للكنب. أقول في نفسي: "أنا أكنس الكنب أسبوعياً، وأحياناً أمسحه بقماشة مبللة. شو المشكلة؟"
              </p>

              <p className="text-lg">
                لين يوم من الأيام... ولدي (4 سنوات) كان يعاني من سعال مستمر وحساسية. رحنا للدكتور، وقال: <strong>"ممكن يكون عندكم عث غبار في البيت، خصوصاً في الكنب والسجاد."</strong>
              </p>

              <p className="text-lg">
                قررت أجرب تنظيف الكنب بالبخار (بس عشان صحة ولدي). واتصلت بشركة المثالي وقلت لهم: "بس مرة واحدة، تجربة!"
              </p>

              <p className="text-lg font-bold text-green-600">
                لما خلصوا التنظيف، وقفت مصدومة! الماي اللي طلع من الكنب كان أسود! 😱
              </p>

              <p className="text-lg">
                الكنب اللي كنت أحسبه "نظيف" كان فيه كمية رهيبة من الغبار والأوساخ المخفية! ومن يومها، ولدي تحسن كثير، وأنا صرت مدمنة على التنظيف بالبخار كل 3 شهور.
              </p>

              <p className="text-lg">
                اليوم راح أشارككم 5 أسباب خلتني أغير رأيي 180 درجة، وليش التنظيف بالبخار ضروري (خصوصاً في جدة!)
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                السبب الأول: ينظف من العمق (مو بس السطح!)
              </h2>

              <p className="text-lg">
                لما تكنسين الكنب بالمكنسة العادية، أنتِ تزيلين الغبار من السطح فقط. لكن في الداخل؟ <strong>الغبار، عث الغبار، بقايا الجلد الميت، الأوساخ الدقيقة - كلها متراكمة في أعماق القماش!</strong>
              </p>

              <div className="rounded-lg bg-purple-50 border-2 border-purple-300 p-6">
                <p className="font-bold text-lg text-purple-900 mb-3">🔬 حقيقة علمية صادمة:</p>
                <p className="text-gray-800">
                  الكنب العادي (عمره 3 سنوات) يحتوي على:
                </p>
                <ul className="mr-6 mt-3 list-disc space-y-2">
                  <li><strong>ملايين</strong> من عث الغبار (ما تشوفينها بالعين المجردة)</li>
                  <li>حوالي <strong>700 جرام</strong> من الغبار المتراكم</li>
                  <li><strong>بقايا طعام دقيقة</strong> (حتى لو ما تأكلون على الكنب!)</li>
                  <li><strong>بكتيريا وفطريات</strong> (خصوصاً في المناخ الرطب)</li>
                  <li><strong>روائح</strong> متشربة (عرق، طبخ، دخان...)</li>
                </ul>
              </div>

              <p className="text-lg mt-6">
                <strong>التنظيف بالبخار</strong> يدخل البخار الساخن (حوالي 100-120 درجة مئوية) في عمق الألياف، يذوب الأوساخ، يقتل البكتيريا والعث، ويطلعها كلها!
              </p>

              <p className="text-lg font-semibold text-primary">
                💡 تجربتي: لما نظفوا كنبي أول مرة، الماي اللي طلع كان لونه بني غامق! رغم إني كنت أكنسه أسبوعياً. صدمة!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                السبب الثاني: يقتل البكتيريا والعث 99.9% (بدون كيماويات!)
              </h2>

              <p className="text-lg">
                هذا السبب اللي خلاني أستمر في التنظيف بالبخار - <strong>صحة عيالي!</strong>
              </p>

              <p className="text-lg">
                البخار الساخن (فوق 80 درجة) يقتل:
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>عث الغبار:</strong> المسبب الأول للحساسية والربو عند الأطفال</li>
                <li><strong>البكتيريا:</strong> E.coli، Salmonella، وغيرها (خصوصاً لو عندك أطفال يأكلون على الكنب)</li>
                <li><strong>الفيروسات:</strong> حتى فيروسات الإنفلونزا والبرد</li>
                <li><strong>الفطريات:</strong> اللي تنمو في الرطوبة (مشكلة كبيرة في جدة!)</li>
              </ul>

              <p className="rounded-lg bg-green-50 p-4 text-lg">
                <strong>✨ المميز:</strong> كل هذا بدون استخدام أي منظفات كيميائية! فقط ماء وحرارة. آمن 100% على الأطفال والحوامل والحيوانات الأليفة.
              </p>

              <div className="mt-6 rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
                <p className="font-bold text-lg text-blue-900 mb-3">📖 قصتي مع حساسية ولدي:</p>
                <p className="text-gray-800">
                  بعد أول جلسة تنظيف بخار، لاحظت إن ولدي صار ينام أحسن، السعال قل كثير، والعطاس شبه اختفى! الدكتور قال إن تقليل عث الغبار سبب رئيسي في التحسن.
                </p>
                <p className="mt-3 text-gray-800 font-semibold">
                  من يومها، التنظيف بالبخار كل 3 شهور صار <strong>أولوية صحية</strong>، مو بس نظافة!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                السبب الثالث: يطيل عمر الكنب (استثمار ذكي!)
              </h2>

              <p className="text-lg">
                كنبي تكلف 8000 ريال. لو أحافظ عليه وينظف صح، راح يعيش 10-15 سنة. لو أهمله؟ 5-7 سنوات بس!
              </p>

              <p className="text-lg">
                <strong>التنظيف بالبخار يحافظ على القماش بطرق كثيرة:</strong>
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>يزيل الأوساخ المتراكمة</strong> اللي تقطع ألياف القماش مع الوقت</li>
                <li><strong>يحافظ على الألوان</strong> - ينظف بدون كيماويات قاسية تبهت اللون</li>
                <li><strong>يمنع التآكل</strong> - الغبار مثل ورق السنفرة الناعم، يتلف القماش ببطء</li>
                <li><strong>يزيل الروائح</strong> - البكتيريا المسببة للروائح تختفي مع البخار</li>
              </ul>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300 text-lg">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-4 text-right">المقارنة</th>
                      <th className="border border-gray-300 p-4 text-right">بدون تنظيف بخار</th>
                      <th className="border border-gray-300 p-4 text-right">مع تنظيف بخار دوري</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">عمر الكنب</td>
                      <td className="border border-gray-300 p-4 text-red-600">5-7 سنوات</td>
                      <td className="border border-gray-300 p-4 text-green-600 font-bold">10-15 سنة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">لون القماش</td>
                      <td className="border border-gray-300 p-4">باهت ومتسخ</td>
                      <td className="border border-gray-300 p-4">نظيف وزاهي</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">الرائحة</td>
                      <td className="border border-gray-300 p-4">كريهة ومتشربة</td>
                      <td className="border border-gray-300 p-4">منعشة ونظيفة</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">نعومة القماش</td>
                      <td className="border border-gray-300 p-4">خشن ومتصلب</td>
                      <td className="border border-gray-300 p-4">ناعم ومريح</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 rounded-lg bg-yellow-50 p-4 text-lg">
                💰 <strong>الحساب:</strong> لو أدفع 400 ريال كل 3 شهور = 1600 ريال سنوياً. في 10 سنوات = 16,000 ريال. لكن لو ما نظفت، راح أحتاج كنب جديد بـ 8000 ريال كل 5 سنوات = 16,000 ريال برضو! بس الفرق إني مع التنظيف، الكنب دايماً نظيف وجميل! ✨
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                السبب الرابع: يزيل الروائح الكريهة (مو بس يغطيها!)
              </h2>

              <p className="text-lg">
                قبل، كنت أرش معطر جو على الكنب عشان يشم زين. بس الرائحة ترجع بعد ساعات! ليش؟
              </p>

              <p className="text-lg font-semibold text-red-600">
                لأن المعطر يغطي الرائحة، ما يزيلها! المصدر الحقيقي (البكتيريا والعرق والأوساخ) باقي موجود!
              </p>

              <p className="text-lg">
                <strong>التنظيف بالبخار يزيل الرائحة من المصدر:</strong>
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li>يقتل البكتيريا المسببة للروائح</li>
                <li>يزيل بقايا العرق والزيوت من القماش</li>
                <li>ينظف عميق فيطلع الروائح المتشربة</li>
                <li>يترك الكنب برائحة نظيفة طبيعية (مو معطرة صناعية)</li>
              </ul>

              <p className="text-lg font-semibold text-green-600">
                💚 بعد التنظيف بالبخار، كنبي يشم رائحة "نظيف" لمدة 2-3 شهور! ما أحتاج أرش معطر أبداً!
              </p>

              <div className="mt-6 rounded-lg bg-orange-50 border-2 border-orange-300 p-6">
                <p className="font-bold text-lg text-orange-900 mb-3">🏠 خاص لسكان جدة:</p>
                <p className="text-gray-800">
                  جو جدة رطب جداً (خصوصاً الصيف). الرطوبة + الحرارة = بيئة مثالية لنمو البكتيريا والفطريات في الكنب. هذا يسبب روائح كريهة أسرع من المدن الثانية.
                </p>
                <p className="mt-3 text-gray-800 font-semibold">
                  التنظيف بالبخار كل 3 شهور في جدة = <strong>ضرورة</strong>، مو رفاهية!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                السبب الخامس: يجدد مظهر الكنب (يرجع مثل الجديد!)
              </h2>

              <p className="text-lg">
                هذا السبب اللي يسعد قلبي كل مرة! 😍
              </p>

              <p className="text-lg">
                بعد التنظيف بالبخار، الكنب يرجع لونه زاهي، القماش ناعم، ويبان مثل ما اشتريته توه! حتى البقع القديمة (اللي فقدت الأمل فيها) تخف أو تختفي تماماً!
              </p>

              <p className="text-lg">
                <strong>التجديد يشمل:</strong>
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>الألوان تصير أوضح:</strong> الغبار المتراكم يطلع، اللون الأصلي يظهر</li>
                <li><strong>القماش يصير أنعم:</strong> الأوساخ اللي تخشنه تزول</li>
                <li><strong>البقع تختفي:</strong> حتى اللي عمرها شهور!</li>
                <li><strong>الكنب يبان "منفوش":</strong> البخار يرفع ألياف القماش</li>
              </ul>

              <div className="mt-6 rounded-lg bg-pink-50 border-2 border-pink-300 p-6">
                <p className="font-bold text-lg text-pink-900 mb-3">💖 قصة طريفة:</p>
                <p className="text-gray-800">
                  مرة جت أختي تزورني بعد التنظيف بيومين. شافت الكنب وقالت: "ما شاء الله! غيرتي الكنب؟ متى اشتريتيه؟!"
                </p>
                <p className="mt-3 text-gray-800">
                  قلت لها: "لا والله، نفس الكنب! بس نظفته بالبخار!" ما صدقت! قالت: "ما يصير نفس الكنب، شكله جديد تماماً!" 😄
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                شو الفرق بين التنظيف العادي والتنظيف بالبخار؟
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300 text-lg">
                  <thead className="bg-gray-800 text-white">
                    <tr>
                      <th className="border border-gray-300 p-4 text-right">المقارنة</th>
                      <th className="border border-gray-300 p-4 text-right">التنظيف العادي (كنس)</th>
                      <th className="border border-gray-300 p-4 text-right">التنظيف بالبخار</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">العمق</td>
                      <td className="border border-gray-300 p-4">سطحي فقط</td>
                      <td className="border border-gray-300 p-4 bg-green-50 font-bold">عميق جداً (يدخل الألياف)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">قتل البكتيريا</td>
                      <td className="border border-gray-300 p-4">لا</td>
                      <td className="border border-gray-300 p-4 bg-green-50 font-bold">نعم (99.9%)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">إزالة الروائح</td>
                      <td className="border border-gray-300 p-4">مؤقت (تغطية)</td>
                      <td className="border border-gray-300 p-4 bg-green-50 font-bold">دائم (إزالة من المصدر)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">البقع الصعبة</td>
                      <td className="border border-gray-300 p-4">لا تطلع</td>
                      <td className="border border-gray-300 p-4 bg-green-50 font-bold">تطلع معظمها</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">استخدام كيماويات</td>
                      <td className="border border-gray-300 p-4">نعم (منظفات)</td>
                      <td className="border border-gray-300 p-4 bg-green-50 font-bold">لا (ماء فقط!)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">التكلفة</td>
                      <td className="border border-gray-300 p-4">مجاني (تسوينها بنفسك)</td>
                      <td className="border border-gray-300 p-4">200-800 ريال (حسب الحجم)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">التكرار المطلوب</td>
                      <td className="border border-gray-300 p-4">أسبوعي</td>
                      <td className="border border-gray-300 p-4">كل 3-4 شهور</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 rounded-lg bg-blue-50 p-4 text-lg font-semibold text-primary">
                ✅ <strong>رأيي الشخصي:</strong> الاثنين ضروريين! التنظيف العادي للصيانة اليومية، والتنظيف بالبخار للتجديد العميق كل 3 شهور. مو بديل، بل مكملين لبعض!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح مهمة قبل التنظيف بالبخار
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg">
                <li>
                  <strong>اختاري شركة موثوقة:</strong> اسألي عن خبرتهم، شوفي تقييمات العملاء، تأكدي إن عندهم معدات حديثة
                </li>
                <li>
                  <strong>اكنسي الكنب قبل:</strong> إزالة الغبار السطحي يخلي التنظيف بالبخار أكثر فعالية
                </li>
                <li>
                  <strong>أخبريهم بأي بقع صعبة:</strong> عشان يستخدمون منظفات خاصة لها
                </li>
                <li>
                  <strong>افتحي الشبابيك بعد التنظيف:</strong> التهوية تساعد على التجفيف السريع
                </li>
                <li>
                  <strong>لا تجلسون على الكنب لمدة 4-6 ساعات:</strong> لازم يجف تماماً (في جدة ممكن يحتاج وقت أطول بسبب الرطوبة)
                </li>
                <li>
                  <strong>شغلي المكيف أو المراوح:</strong> يساعد على التجفيف
                </li>
              </ul>

              <div className="mt-8 rounded-lg bg-red-50 border-2 border-red-400 p-6">
                <p className="font-bold text-lg text-red-800 mb-3">⚠️ تحذير مهم:</p>
                <p className="text-gray-800">
                  <strong>لا تستخدمين أجهزة التنظيف بالبخار المنزلية الرخيصة!</strong>
                </p>
                <p className="mt-2 text-gray-800">
                  الأجهزة المنزلية (اللي بـ 200-400 ريال) ضعيفة جداً. ما تطلع الأوساخ من العمق، وقد تبلل الكنب أكثر من اللازم وتسبب عفن!
                </p>
                <p className="mt-2 text-gray-800 font-semibold">
                  الأجهزة الاحترافية (اللي عند الشركات) قوتها أعلى بـ 10 مرات، وعندها قوة شفط تجفف الكنب فوراً.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                كلمتي الأخيرة: هل يستاهل؟
              </h2>

              <div className="rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-300">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  نعم، والله يستاهل! 💯
                </p>
                <p className="text-lg text-gray-800 mb-3">
                  كنت أشك في البداية، بس بعد ما جربت ولاحظت الفرق - في صحة عيالي، في شكل البيت، في راحتي النفسية - صار التنظيف بالبخار من أولوياتي.
                </p>
                <p className="text-lg text-gray-800 mb-3">
                  <strong>400 ريال كل 3 شهور</strong> مقابل:
                </p>
                <ul className="mr-6 list-disc space-y-2 text-lg">
                  <li>صحة أفضل لعيالك (أقل حساسية وأمراض)</li>
                  <li>كنب نظيف ومعقم 100%</li>
                  <li>عمر أطول للأثاث (توفير مستقبلي)</li>
                  <li>بيت يشم ريحته منعشة</li>
                  <li>راحة نفسية (تعرفين إن بيتك نظيف من الداخل والخارج)</li>
                </ul>
                <p className="mt-4 text-lg text-gray-800 font-semibold text-green-700">
                  صدقيني، أنتِ ما راح تندمين! جربيها مرة واحدة وشوفي الفرق بنفسك ❤️
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">جاهزة تجربين التنظيف بالبخار؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نتخصص في تنظيف الكنب والمجالس بالبخار. معدات حديثة، فنيين مدربين، ونتائج مضمونة!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>بخار احترافي عالي الحرارة (120 درجة)</li>
                  <li>شفط قوي للتجفيف السريع</li>
                  <li>بدون كيماويات قاسية - آمن للأطفال</li>
                  <li>ضمان إزالة البقع أو إعادة التنظيف مجاناً</li>
                  <li>خدمة سريعة في جميع أحياء جدة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي الآن - عرض خاص!
                  </Link>
                  <Link href="/services/upholstery-sofa" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول تنظيف الكنب بالبخار</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: تنظيف الكنب بالبخار" }} />
    </>
  );
}
