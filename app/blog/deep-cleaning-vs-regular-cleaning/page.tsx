import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "شو الفرق بالضبط؟ تنظيف عادي ولا عميق؟ | تجربتي الشخصية",
  description: "صديقتي سألتني: ليش تدفعين على تنظيف عميق والبيت أصلاً نظيف؟ هنا الإجابة من تجربتي الشخصية مع الفرق الواضح بين النوعين.",
  alternates: { canonical: `${site.url}/blog/deep-cleaning-vs-regular-cleaning` },
};

const faqs = [
  {
    question: "كل كم أحتاج تنظيف عميق؟",
    answer: "من تجربتي، كل 3-4 شهور مثالي. إذا عندك أطفال صغار أو حيوانات أليفة، كل شهرين أفضل. البيت يتراكم عليه غبار وأوساخ خفية حتى لو كنتي تنظفين يومياً!",
  },
  {
    question: "هل ينفع أسوي التنظيف العميق بنفسي؟",
    answer: "ينفع، بس صدقاً متعب جداً! أنا جربت مرة وقضيت يومين كاملين وطلعت منهكة. الحين أستعين بشركة محترفة وأوفر وقتي وطاقتي لعيالي. عندهم معدات وخبرة أنا ما عندي.",
  },
  {
    question: "كم سعر التنظيف العميق تقريباً؟",
    answer: "يعتمد على حجم البيت. فيلا 4 غرف في جدة تقريباً 600-800 ريال. شقة 2 غرفة حوالي 400-500 ريال. يمكن يبان لك كثير، بس لما تشوفين الفرق راح تحسين إنه يستاهل كل ريال!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "التنظيف العادي vs العميق", url: "/blog/deep-cleaning-vs-regular-cleaning" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Header */}
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                شو الفرق بالضبط؟ تنظيف عادي ولا عميق؟
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>1 أكتوبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>نورة المطيري - خبيرة تنظيف منازل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="mb-12">
              <Image 
                src="/images/deep cleaning service.jpg" 
                alt="الفرق بين التنظيف العادي والتنظيف العميق" 
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
                  "نورة، شو الفرق بين التنظيف العادي والعميق؟ أنا أنظف بيتي كل يوم، ليش أدفع 600 ريال على شي اسمه تنظيف عميق؟!"
                </p>
              </div>

              <p className="text-lg">
                هذا السؤال سألتني إياه صديقتي مها قبل سنة. وكانت محقة في سؤالها - فعلاً هي تنظف بيتها يومياً، البيت يبان نظيف، ليش تحتاج "تنظيف عميق"؟
              </p>

              <p className="text-lg">
                قلت لها: "تعالي نسوي تجربة. خليني أجيب فريقي ينظف غرفة واحدة بس في بيتك تنظيف عميق. إذا ما شفتي فرق، الخدمة علي مجاناً!"
              </p>

              <p className="text-lg">
                وافقت، واخترنا غرفة المعيشة. بعد 3 ساعات من التنظيف العميق، لما دخلت مها الغرفة، وقفت مصدومة وقالت: <strong>"ياربي! هذي نفس الغرفة؟! حاسة إنها جديدة!"</strong>
              </p>

              <p className="text-lg">
                من يومها صارت مها تسوي تنظيف عميق كل 3 شهور، وهي أكثر شخص ينصح فيه! 😊
              </p>

              <p className="text-lg">
                اليوم راح أشرح لكم الفرق الحقيقي بين النوعين، من خلال خبرتي 12 سنة في مجال التنظيف في جدة، وبأسلوب بسيط بعيد عن التعقيد.
              </p>

              {/* Main Content */}
              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: التنظيف العادي - الصيانة اليومية
              </h2>

              <p className="text-lg">
                التنظيف العادي هو اللي تسوينه يومياً أو أسبوعياً. تخيليه مثل "صيانة" البيت - تحافظين على مستوى نظافة معقول، بس ما تروحين للتفاصيل الدقيقة.
              </p>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                شو يشمل التنظيف العادي؟
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">كنس ومسح الأرضيات</p>
                    <p className="text-gray-700">الأماكن المرئية والمستخدمة بكثرة - غرفة المعيشة، المطبخ، الممرات</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">مسح الأسطح والطاولات</p>
                    <p className="text-gray-700">طاولة الطعام، طاولة القهوة، سطح المطبخ - مسح سريع لإزالة الغبار والبقع</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">تنظيف الحمامات</p>
                    <p className="text-gray-700">المرحاض، المغسلة، الدش - تنظيف سطحي بمنظف عادي</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">إزالة القمامة</p>
                    <p className="text-gray-700">تفريغ سلات المهملات من المطبخ والحمامات</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">ترتيب الفوضى</p>
                    <p className="text-gray-700">جمع الألعاب، ترتيب الكشن، وضع الأشياء في أماكنها</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
                  <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">غسل الصحون وترتيب المطبخ</p>
                    <p className="text-gray-700">تنظيف بعد الطبخ، مسح سطح الموقد، ترتيب الأدوات</p>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-lg font-semibold text-primary">
                ⏱️ الوقت المطلوب: 30-60 دقيقة يومياً (أو 2-3 ساعات أسبوعياً)
              </p>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                شو ما يشمله التنظيف العادي؟
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">تحت الأثاث الثقيل</p>
                    <p className="text-gray-700">تحت السرير، خلف الكنب، تحت الثلاجة - ما تنظفينها بشكل يومي</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">داخل الأجهزة</p>
                    <p className="text-gray-700">داخل الفرن، الميكروويف، الثلاجة من الداخل - إلا إذا اتسخوا بشكل واضح</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">الستائر والمفروشات</p>
                    <p className="text-gray-700">تنظيف الستائر، الكنب، الكراسي المنجدة - تحتاج عناية خاصة</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">الجدران والأسقف</p>
                    <p className="text-gray-700">إزالة خيوط العنكبوت، بقع الجدران، الغبار على المراوح السقفية</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">النوافذ من الطرفين</p>
                    <p className="text-gray-700">غسل النوافذ من الداخل والخارج - خصوصاً الأدوار العالية</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
                  <XCircle className="mt-1 h-6 w-6 shrink-0 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">التفاصيل الدقيقة</p>
                    <p className="text-gray-700">زوايا الحمام، فتحات التكييف، أطراف السجاد، الأدراج من الداخل</p>
                  </div>
                </div>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                ثانياً: التنظيف العميق - التجديد الشامل
              </h2>

              <p className="text-lg">
                التنظيف العميق هو عملية شاملة تشمل <strong>كل شيء</strong> - الظاهر والمخفي. تخيليه مثل "جراحة تجميل" للبيت - يرجع جديد تماماً!
              </p>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                شو يشمل التنظيف العميق بالضبط؟
              </h3>

              <p className="text-lg">
                خليني أشرح لك كل غرفة على حدة، بالتفصيل الممل:
              </p>

              {/* المطبخ */}
              <div className="mt-8 rounded-lg border-2 border-blue-200 bg-blue-50 p-6">
                <h4 className="mb-4 text-2xl font-bold text-blue-900">🍳 المطبخ - التنظيف العميق</h4>
                
                <ul className="mr-6 list-disc space-y-3 text-lg">
                  <li><strong>الفرن:</strong> تنظيف من الداخل بمنظفات خاصة، إزالة الشحوم المتراكمة، تلميع الزجاج</li>
                  <li><strong>الثلاجة:</strong> تفريغ كامل، غسل الرفوف والأدراج، مسح من الداخل، تنظيف الجوانب والخلف</li>
                  <li><strong>الخزائن:</strong> تفريغ، مسح من الداخل، إعادة ترتيب، التخلص من المنتهي صلاحيته</li>
                  <li><strong>الحوض:</strong> إزالة الترسبات، تلميع الحنفيات، تنظيف تحت الحوض</li>
                  <li><strong>الأرضية:</strong> جلي أو تلميع حسب النوع، تنظيف الزوايا والأطراف</li>
                  <li><strong>الشفاط:</strong> تنظيف الفلاتر، إزالة الدهون المتراكمة</li>
                  <li><strong>الجدران والبلاط:</strong> إزالة بقع الزيت والشحوم، مسح الجدران</li>
                </ul>

                <p className="mt-4 text-base italic text-blue-800">
                  💡 <strong>نصيحة من الخبرة:</strong> في جدة بالذات، المطبخ يتعرض لشحوم أكثر بسبب الطبخ الدسم. التنظيف العميق كل 3 شهور ضروري!
                </p>
              </div>

              {/* الحمامات */}
              <div className="mt-6 rounded-lg border-2 border-purple-200 bg-purple-50 p-6">
                <h4 className="mb-4 text-2xl font-bold text-purple-900">🚿 الحمامات - التنظيف العميق</h4>
                
                <ul className="mr-6 list-disc space-y-3 text-lg">
                  <li><strong>المرحاض:</strong> تنظيف عميق من الداخل والخارج، إزالة الترسبات الكلسية، تعقيم شامل</li>
                  <li><strong>البانيو/الدش:</strong> إزالة الصدأ والعفن، تنظيف الفواصل، تلميع الحنفيات</li>
                  <li><strong>البلاط والجدران:</strong> إزالة العفن من الفواصل، تنظيف بالبخار، تلميع</li>
                  <li><strong>المرايا:</strong> تنظيف عميق بدون خطوط، تلميع الإطارات</li>
                  <li><strong>التهوية:</strong> تنظيف فتحات الشفاط، إزالة الغبار من المراوح</li>
                  <li><strong>خلف المرحاض:</strong> المنطقة الصعب الوصول لها، تتراكم فيها أوساخ كثيرة!</li>
                </ul>

                <p className="mt-4 text-base italic text-purple-800">
                  💡 <strong>ملاحظة مهمة:</strong> الحمامات في جدة تتعرض للعفن بسبب الرطوبة. التنظيف العميق بمواد مضادة للعفن مهم جداً كل شهرين!
                </p>
              </div>

              {/* غرف النوم */}
              <div className="mt-6 rounded-lg border-2 border-green-200 bg-green-50 p-6">
                <h4 className="mb-4 text-2xl font-bold text-green-900">🛏️ غرف النوم - التنظيف العميق</h4>
                
                <ul className="mr-6 list-disc space-y-3 text-lg">
                  <li><strong>تحت السرير:</strong> كنس ومسح، إزالة الغبار المتراكم</li>
                  <li><strong>المراتب:</strong> تنظيف بالبخار، إزالة البقع، تعقيم ضد عث الغبار</li>
                  <li><strong>دواليب الملابس:</strong> تفريغ، مسح من الداخل، ترتيب، التخلص من القديم</li>
                  <li><strong>النوافذ:</strong> غسل من الطرفين، تنظيف الشبابيك، مسح الأطر</li>
                  <li><strong>الستائر:</strong> إنزال وغسيل أو تنظيف بالبخار</li>
                  <li><strong>الجدران:</strong> مسح البقع، إزالة خيوط العنكبوت من الزوايا</li>
                  <li><strong>الإضاءة:</strong> تنظيف الثريات والمصابيح</li>
                </ul>
              </div>

              {/* غرفة المعيشة */}
              <div className="mt-6 rounded-lg border-2 border-orange-200 bg-orange-50 p-6">
                <h4 className="mb-4 text-2xl font-bold text-orange-900">🛋️ غرفة المعيشة - التنظيف العميق</h4>
                
                <ul className="mr-6 list-disc space-y-3 text-lg">
                  <li><strong>الكنب والمجالس:</strong> تنظيف بالبخار، إزالة البقع العميقة، تجديد الألوان</li>
                  <li><strong>السجاد والموكيت:</strong> غسيل عميق بالبخار أو الشامبو، إزالة الروائح</li>
                  <li><strong>خلف وتحت الأثاث:</strong> تحريك القطع الكبيرة، تنظيف الخلف والتحت</li>
                  <li><strong>التلفزيون والأجهزة:</strong> تنظيف الشاشة، الأسلاك، الغبار من الخلف</li>
                  <li><strong>الديكورات:</strong> تحف، صور، مزهريات - كلها تغسل وتمسح</li>
                </ul>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                جدول المقارنة الشامل - بالأرقام!
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300 text-lg">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-4 text-right">المقارنة</th>
                      <th className="border border-gray-300 p-4 text-right">التنظيف العادي</th>
                      <th className="border border-gray-300 p-4 text-right">التنظيف العميق</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">التكرار</td>
                      <td className="border border-gray-300 p-4">يومي أو أسبوعي</td>
                      <td className="border border-gray-300 p-4">كل 3-6 شهور</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">الوقت المطلوب</td>
                      <td className="border border-gray-300 p-4">30-60 دقيقة</td>
                      <td className="border border-gray-300 p-4">4-8 ساعات (حسب حجم البيت)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">التكلفة</td>
                      <td className="border border-gray-300 p-4">منخفضة (مواد بسيطة)</td>
                      <td className="border border-gray-300 p-4">400-800 ريال (محترفين)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">المعدات المطلوبة</td>
                      <td className="border border-gray-300 p-4">مكنسة، مساحة، منظفات عادية</td>
                      <td className="border border-gray-300 p-4">بخار، معدات متخصصة، منظفات قوية</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-4 font-semibold">الهدف</td>
                      <td className="border border-gray-300 p-4">صيانة المظهر النظيف</td>
                      <td className="border border-gray-300 p-4">تجديد شامل + تعقيم</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-4 font-semibold">النتيجة</td>
                      <td className="border border-gray-300 p-4">بيت مرتب ونظيف سطحياً</td>
                      <td className="border border-gray-300 p-4">بيت يبان جديد من الداخل والخارج</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                متى تحتاجين التنظيف العميق؟ 7 علامات واضحة!
              </h2>

              <div className="space-y-4">
                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">1️⃣ الكنب أو السجاد فيهم بقع ما تروح</p>
                  <p className="text-gray-700">جربتي كل منظف موجود، البقعة ثابتة؟ محتاجة تنظيف بخار محترف!</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">2️⃣ في ريحة غريبة ما تعرفين مصدرها</p>
                  <p className="text-gray-700">أحياناً الروائح تجي من السجاد، المراتب، أو زوايا ما تنظفينها بانتظام</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">3️⃣ في حساسية أو عطاس مستمر في البيت</p>
                  <p className="text-gray-700">عث الغبار والأتربة المخفية تتراكم في المفروشات والستائر وتسبب حساسية</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">4️⃣ الحمام فيه عفن في الفواصل</p>
                  <p className="text-gray-700">النقاط السوداء بين البلاط؟ هذا عفن، ويحتاج تنظيف عميق + مواد خاصة</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">5️⃣ ما نظفتي تنظيف عميق من 6 شهور فأكثر</p>
                  <p className="text-gray-700">حتى لو البيت يبان نظيف، في أشياء تتراكم بصمت وما تشوفينها!</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">6️⃣ عندك مناسبة قريبة (عرس، عيد، ضيوف مهمين)</p>
                  <p className="text-gray-700">تبين البيت يكون في أحسن حالاته؟ التنظيف العميق قبل بأسبوع يفرق كثير!</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-500 bg-red-50 p-4">
                  <p className="font-semibold text-gray-900">7️⃣ بعد الانتقال لبيت جديد (أو قبل)</p>
                  <p className="text-gray-700">قبل ما تدخلين بيت جديد، أو قبل ما تسلمين البيت القديم - التنظيف العميق ضروري</p>
                </div>
              </div>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                تجربتي الشخصية: قبل وبعد صادم!
              </h2>

              <p className="text-lg">
                خليني أشارككم قصة حقيقية من عملي. عندي عميلة اسمها هند، تسكن في فيلا كبيرة في حي النهضة بجدة. كانت تنظف بيتها يومياً بنفسها، وتقول لي: "بيتي نظيف، بس حاسة إنه مب مثل الأول".
              </p>

              <p className="text-lg">
                رحنا لها بفريق من 4 أشخاص، وسوينا تنظيف عميق شامل استغرق 7 ساعات. النتيجة؟
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li>طلع من الكنب (3 قطع) حوالي 2 كيلو غبار وأوساخ! رغم إنها كانت تكنسه أسبوعياً</li>
                <li>السجاد الأبيض رجع لونه الأصلي - كان باهت من التراب المتراكم</li>
                <li>الحمامات - أزلنا عفن ما كانت تشوفه في الزوايا والفواصل</li>
                <li>النوافذ - بعد التنظيف، الإضاءة الطبيعية صارت أقوى بوضوح!</li>
                <li>المطبخ - الفرن من الداخل كان أسود، رجعناه فضي لامع</li>
              </ul>

              <p className="text-lg font-semibold text-primary">
                هند بعد التنظيف قالت لي: "نورة، حاسة إني ساكنة في بيت جديد! ليش ما سويت هذا من زمان؟!"
              </p>

              <p className="text-lg">
                من يومها صارت تحجز معانا كل 3 شهور، وما تستغني عن التنظيف العميق أبداً.
              </p>

              <h2 className="mt-16 text-3xl font-bold text-gray-900">
                نصيحتي الذهبية: الجمع بين النوعين!
              </h2>

              <div className="rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50 p-8">
                <h3 className="mb-4 text-2xl font-bold text-gray-900">📅 الجدول المثالي للتنظيف:</h3>
                
                <div className="space-y-4 text-lg">
                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">✓</span>
                    <p><strong>يومياً:</strong> تنظيف عادي خفيف (15-20 دقيقة) - كنس، مسح الأسطح، ترتيب</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">✓</span>
                    <p><strong>أسبوعياً:</strong> تنظيف عادي شامل (2-3 ساعات) - كنس ومسح عميق، حمامات، مطبخ</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">✓</span>
                    <p><strong>شهرياً:</strong> تنظيف عميق لمنطقة واحدة (مثلاً: شهر المطبخ، شهر الحمامات، شهر غرف النوم)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="font-bold text-primary">✓</span>
                    <p><strong>كل 3-4 شهور:</strong> تنظيف عميق شامل للبيت كله (بواسطة محترفين)</p>
                  </div>
                </div>

                <p className="mt-6 rounded-lg bg-white p-4 font-semibold text-gray-900">
                  💡 <strong>النتيجة؟</strong> بيت نظيف ومرتب 95% من الوقت، بدون إجهاد أو ضغط نفسي!
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">جاهزة للتجربة؟ احجزي تنظيف عميق الآن!</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمة تنظيف عميق شاملة بأيدي محترفين مدربين، باستخدام أحدث المعدات والتقنيات. ضمان 100% على رضاك!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 text-lg opacity-95">
                  <li>فريق سعودي محترف ومدرب</li>
                  <li>معدات حديثة (بخار، ملمعات، منظفات آمنة)</li>
                  <li>أسعار شفافة - بدون رسوم خفية</li>
                  <li>ضمان إعادة التنظيف إذا ما كنتي راضية</li>
                  <li>خدمة عملاء ممتازة في جدة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي الآن - عرض خاص!
                  </Link>
                  <Link href="/services/deep-cleaning" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة عن التنظيف العميق</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: التنظيف العادي vs العميق" }} />
    </>
  );
}
