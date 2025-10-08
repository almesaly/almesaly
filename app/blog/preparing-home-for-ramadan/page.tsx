import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "كيف جهزت بيتي لرمضان في 3 أيام فقط؟ خطتي المجربة",
  description: "السنة الماضية قضيت أسبوعين تنظيف! هالسنة خلصت كل شي في 3 أيام بخطة ذكية وبدون تعب. خطة مفصلة لتحضير منزلك لرمضان في جدة.",
  alternates: { canonical: `${site.url}/blog/preparing-home-for-ramadan` },
};

const faqs = [
  {
    question: "متى أبدأ التنظيف لرمضان؟",
    answer: "الأفضل قبل رمضان بأسبوع. بس لو ما عندك وقت، 3-4 أيام كافية لو اتبعتي خطة منظمة زي اللي في المقال!",
  },
  {
    question: "هل أحتاج شركة تنظيف أو أقدر أسوي كل شي بنفسي؟",
    answer: "يعتمد على وقتك! أنا شخصياً أسوي التنظيف العادي بنفسي، بس أستعين بشركة للتنظيف العميق (الكنب، الستائر، الأرضيات). يوفر لي وقت كثير!",
  },
  {
    question: "شو أهم شي أركز عليه في تنظيف رمضان؟",
    answer: "المطبخ وغرفة الطعام! لأنك راح تقضين فيهم معظم الوقت. بعدين غرفة المعيشة (للضيوف). الباقي تنظيف عادي يكفي.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "تحضير المنزل لرمضان", url: "/blog/preparing-home-for-ramadan" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                كيف جهزت بيتي لرمضان في 3 أيام فقط؟ خطتي المجربة
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>15 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>فاطمة القحطاني - ربة منزل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/home cleaning Jeddah.jpg" 
                alt="خطة تنظيف شاملة لتحضير المنزل لرمضان في 3 أيام" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  السنة الماضية، بديت تنظيف البيت لرمضان قبل بأسبوعين. قضيت الوقت كله أنظف، وأول يوم رمضان دخلت منهكة ومتعبة! 😫
                </p>
              </div>

              <p className="text-lg">
                قررت: هالسنة راح يكون مختلف! راح أجهز البيت بذكاء، مو بمعاناة. ودخلت رمضان مرتاحة ومستانسة!
              </p>

              <p className="text-lg">
                الحين راح أشارككم <strong>خطتي المجربة لتحضير البيت لرمضان في 3 أيام فقط</strong> - خطة منظمة، ذكية، وما تحتاج مجهود خارق!
              </p>

              <div className="rounded-lg bg-green-50 border-2 border-green-400 p-6">
                <p className="font-bold text-xl text-green-900 mb-3">✨ نتيجة الخطة:</p>
                <ul className="mr-6 list-disc space-y-2 text-lg">
                  <li>بيت نظيف 100% من الداخل والخارج</li>
                  <li>مطبخ جاهز ومرتب</li>
                  <li>ديكور رمضاني جميل</li>
                  <li>بدون إرهاق أو تعب</li>
                  <li>وفرت 1000 ريال (سويت كل شي بنفسي تقريباً)</li>
                </ul>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                اليوم الأول: المطبخ وغرفة الطعام (الأولوية القصوى!)
              </h2>

              <p className="text-lg">
                في رمضان، المطبخ هو قلب البيت! راح تقضين فيه ساعات طويلة. لازم يكون نظيف، مرتب، وسهل الحركة فيه.
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                المطبخ - التنظيف العميق (3-4 ساعات)
              </h3>

              <p className="text-lg font-semibold">الخطوات بالتفصيل:</p>

              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 border-r-4 border-blue-500 p-4">
                  <p className="font-bold text-lg mb-2">1. الثلاجة والفريزر - تفريغ وتنظيف</p>
                  <ul className="mr-6 list-disc space-y-1 text-base">
                    <li>طلعي كل شي من الثلاجة</li>
                    <li>رمي الأشياء منتهية الصلاحية</li>
                    <li>اغسلي الرفوف والأدراج</li>
                    <li>امسحي من الداخل بماء + بيكنج صودا (يزيل الروائح)</li>
                    <li>رتبي المحتويات بطريقة عملية</li>
                  </ul>
                  <p className="mt-2 text-sm italic text-blue-700">💡 وفرت ساعة لما رتبت الثلاجة صح - الحين ألاقي أي شي بسرعة!</p>
                </div>

                <div className="rounded-lg bg-purple-50 border-r-4 border-purple-500 p-4">
                  <p className="font-bold text-lg mb-2">2. الفرن والميكروويف - إزالة الشحوم</p>
                  <ul className="mr-6 list-disc space-y-1 text-base">
                    <li>رشي منظف الفرن (أو بيكنج صودا + خل)</li>
                    <li>اتركيه 30 دقيقة</li>
                    <li>امسحي وشوفي المعجزة!</li>
                    <li>الميكروويف: حطي كوب ماء + ليمون → شغليه دقيقتين → امسحي</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 border-r-4 border-green-500 p-4">
                  <p className="font-bold text-lg mb-2">3. الخزائن والأدراج - تنظيم وترتيب</p>
                  <ul className="mr-6 list-disc space-y-1 text-base">
                    <li>طلعي كل شي</li>
                    <li>امسحي من الداخل</li>
                    <li>رمي الأشياء اللي ما تستخدمينها</li>
                    <li>رتبي بمنظمات (علب، سلات)</li>
                    <li>حطي الأشياء المستخدمة في رمضان في مكان سهل</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-orange-50 border-r-4 border-orange-500 p-4">
                  <p className="font-bold text-lg mb-2">4. الحوض وسطح المطبخ - تلميع</p>
                  <ul className="mr-6 list-disc space-y-1 text-base">
                    <li>نظفي الحوض بمنظف قوي</li>
                    <li>تلميع الحنفية (تخلي المطبخ يبان جديد!)</li>
                    <li>امسحي سطح المطبخ وخلفية الموقد</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-yellow-50 p-6">
                <p className="font-bold text-lg text-gray-900 mb-3">🎯 هدفك من اليوم الأول:</p>
                <p className="text-lg">
                  مطبخ نظيف ومرتب 100%، جاهز لماراثون الطبخ في رمضان! لما تدخلين المطبخ، تحسين بالراحة والنشاط، مو الفوضى والتعب.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                اليوم الثاني: الحمامات وغرفة المعيشة
              </h2>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                الحمامات - تنظيف وتعقيم (ساعتين)
              </h3>

              <p className="text-lg">
                في رمضان، الضيوف كثير! الحمام لازم يكون نظيف ومعقم دايماً.
              </p>

              <div className="space-y-4">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-bold mb-2">✅ المرحاض والبانيو:</p>
                  <p>تنظيف عميق بمنظف قوي + تعقيم بالكلوركس المخفف</p>
                </div>

                <div className="rounded-lg bg-green-50 p-4">
                  <p className="font-bold mb-2">✅ البلاط والفواصل:</p>
                  <p>إزالة العفن (لو موجود) + تنظيف الفواصل بفرشاة</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="font-bold mb-2">✅ المرايا والحنفيات:</p>
                  <p>تلميع لامع يخلي الحمام يبان فخم!</p>
                </div>

                <div className="rounded-lg bg-pink-50 p-4">
                  <p className="font-bold mb-2">✅ الستائر والمناشف:</p>
                  <p>غسيل جديد + استبدال بألوان رمضانية (اختياري بس يضيف جو!)</p>
                </div>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                غرفة المعيشة - تنظيف واستقبال (ساعتين)
              </h3>

              <p className="text-lg">
                غرفة المعيشة هي المكان اللي راح تستقبلين فيه الضيوف. لازم تكون جاهزة!
              </p>

              <ul className="mr-6 list-decimal space-y-3 text-lg">
                <li><strong>الكنب:</strong> تنظيف عميق (أنا استعنت بشركة، نظفوه بالبخار ورجع جديد!)</li>
                <li><strong>السجاد:</strong> غسيل أو شامبو (حسب الحاجة)</li>
                <li><strong>الستائر:</strong> غسيل أو تنظيف بالبخار</li>
                <li><strong>الطاولات والأسطح:</strong> مسح وتلميع</li>
                <li><strong>الإضاءة:</strong> تنظيف الثريات (يفرق كثير في الإنارة!)</li>
              </ul>

              <div className="mt-6 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-6 border-2 border-purple-300">
                <p className="font-bold text-xl text-purple-900 mb-3">💡 نصيحة ذهبية:</p>
                <p className="text-lg text-gray-800">
                  <strong>استعيني بشركة تنظيف لليوم الثاني!</strong> أنا دفعت 500 ريال ونظفوا الكنب + السجاد + الستائر في 3 ساعات. لو سويته بنفسي، راح يأخذ يومين وأطلع منهكة!
                </p>
                <p className="mt-3 text-lg text-gray-800 font-semibold">
                  وفرت وقتي وطاقتي لأشياء أهم! في <Link href="/" className="text-primary underline font-bold">شركة المثالي</Link> عملوا شغل رائع بصراحة.
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                اليوم الثالث: غرف النوم والديكور الرمضاني
              </h2>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                غرف النوم - تنظيف سريع (ساعتين)
              </h3>

              <p className="text-lg">
                غرف النوم ما تحتاج تنظيف مكثف مثل المطبخ، بس تحتاج ترتيب وتجديد.
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li>تغيير الملاءات والمخدات (ملاءات نظيفة تعطي إحساس بالتجديد!)</li>
                <li>ترتيب دواليب الملابس</li>
                <li>كنس ومسح الأرضية</li>
                <li>مسح الغبار من الأسطح</li>
                <li>تنظيف تحت السرير (المكان المنسي دايماً!)</li>
              </ul>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                الديكور الرمضاني - إضافة البهجة (ساعة واحدة!)
              </h3>

              <p className="text-lg">
                هذا الجزء المفضل عندي! تحويل البيت لأجواء رمضانية يخلي الكل متحمس.
              </p>

              <div className="rounded-lg bg-gradient-to-br from-green-50 to-teal-50 p-6 border-2 border-green-400">
                <p className="font-bold text-xl text-green-900 mb-4">🌙 أفكار ديكور رمضاني بسيطة وجميلة:</p>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌙</span>
                    <div>
                      <p className="font-semibold">فانوس رمضان:</p>
                      <p className="text-sm">حطي فوانيس على طاولة الطعام أو عند المدخل</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">✨</span>
                    <div>
                      <p className="font-semibold">إضاءة LED:</p>
                      <p className="text-sm">أضواء صغيرة على الحائط أو الستائر (تعطي جو دافئ!)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📿</span>
                    <div>
                      <p className="font-semibold">لافتات "رمضان كريم":</p>
                      <p className="text-sm">علقيها على الحائط أو باب المدخل</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🕌</span>
                    <div>
                      <p className="font-semibold">ملصقات جدارية:</p>
                      <p className="text-sm">رسومات هلال ونجوم (سهلة التركيب والإزالة)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🌺</span>
                    <div>
                      <p className="font-semibold">ورود وشموع:</p>
                      <p className="text-sm">على طاولة الطعام (يعطي لمسة أنيقة)</p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 rounded-lg bg-white p-3 text-sm italic">
                  💸 التكلفة: 150-300 ريال (من محلات الديكور أو نون/أمازون)
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                التسوق والتخزين - الخطوة الأخيرة!
              </h2>

              <p className="text-lg">
                بعد التنظيف، حان وقت التسوق وتخزين الأساسيات.
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                قائمة التسوق الأساسية لرمضان
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h4 className="font-bold text-lg mb-3 text-blue-900">🍚 المواد الغذائية:</h4>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>أرز، طحين، سكر، ملح</li>
                    <li>زيت، سمن، زبدة</li>
                    <li>بهارات (كركم، فلفل، قرفة...)</li>
                    <li>معكرونة، شوربات جاهزة</li>
                    <li>تمر (أنواع مختلفة)</li>
                    <li>عصائر، مشروبات رمضانية</li>
                    <li>حليب، لبن، جبن</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-green-50 p-6">
                  <h4 className="font-bold text-lg mb-3 text-green-900">🧃 أدوات وأطباق:</h4>
                  <ul className="mr-6 list-disc space-y-1 text-sm">
                    <li>أطباق تقديم جديدة (للضيوف)</li>
                    <li>أكواب عصير</li>
                    <li>مناديل ورقية (كمية كبيرة!)</li>
                    <li>أكياس حفظ الطعام</li>
                    <li>فويل، ورق زبدة</li>
                    <li>منظفات (صحون، أرضيات...)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-yellow-50 border-2 border-yellow-400 p-6">
                <p className="font-bold text-lg text-yellow-900 mb-3">💰 ميزانية التجهيز الكاملة:</p>
                <ul className="space-y-2">
                  <li className="flex justify-between"><span>مواد غذائية:</span><strong>800-1200 ريال</strong></li>
                  <li className="flex justify-between"><span>أدوات وأطباق:</span><strong>200-400 ريال</strong></li>
                  <li className="flex justify-between"><span>ديكور رمضاني:</span><strong>150-300 ريال</strong></li>
                  <li className="flex justify-between"><span>تنظيف (لو استعنتي بشركة):</span><strong>500-800 ريال</strong></li>
                  <li className="mt-3 flex justify-between border-t-2 border-yellow-500 pt-3 text-lg font-bold">
                    <span>المجموع:</span><strong>1650-2700 ريال</strong>
                  </li>
                </ul>
                <p className="mt-3 text-sm italic">
                  💡 نصيحة: خصصي ميزانية واضحة ولا تتجاوزينها! السنة الماضية صرفت 4000 ريال لأني ما خططت!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح إضافية لرمضان مريح في جدة
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg">
                <li>
                  <strong>جهزي وجبات مجمدة:</strong> يومين قبل رمضان، اطبخي وجبات وجمديها. توفر لك وقت كثير أول أسبوع!
                </li>
                <li>
                  <strong>رتبي جدول طبخ أسبوعي:</strong> تعرفين شو راح تطبخين كل يوم = تسوق ذكي وما تتعبين
                </li>
                <li>
                  <strong>وزعي المهام على العائلة:</strong> الأطفال يقدرون يساعدون في ترتيب الطاولة، زوجك في التسوق
                </li>
                <li>
                  <strong>اتركي يوم راحة قبل رمضان:</strong> لا تدخلين رمضان متعبة! اليوم الأخير راحة تامة
                </li>
                <li>
                  <strong>خصصي ركن قهوة/تمر:</strong> مكان ثابت فيه التمر والقهوة جاهزين للضيوف = سهولة وسرعة
                </li>
              </ul>

              <div className="mt-8 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  🌙 كلمتي الأخيرة:
                </p>
                <p className="text-lg text-gray-800 mb-3">
                  التحضير لرمضان ما لازم يكون مرهق! بالتخطيط الذكي والتنظيم، تقدرين تجهزين بيت جميل ومرتب في 3 أيام فقط.
                </p>
                <p className="text-lg text-gray-800 mb-3">
                  الهدف مو "البيت المثالي"، الهدف <strong>"بيت مريح تقدرين تستمتعين فيه برمضان مع عائلتك!"</strong>
                </p>
                <p className="text-lg font-semibold text-green-700">
                  رمضان كريم، وربي يعيننا على الصيام والقيام! 🌙✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">تبين مساعدة في تجهيز بيتك لرمضان؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم باقات خاصة لتنظيف المنازل قبل رمضان. تنظيف شامل + تعقيم + جلي رخام - كل شي في يوم واحد!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف المطبخ والحمامات بعمق</li>
                  <li>تنظيف الكنب والستائر بالبخار</li>
                  <li>جلي الأرضيات وتلميعها</li>
                  <li>تعقيم شامل لكل الأسطح</li>
                  <li>خصم 15% على باقات ما قبل رمضان!</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي الآن - عرض رمضان!
                  </Link>
                  <Link href="/services" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الباقات
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول التحضير لرمضان</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: تحضير المنزل لرمضان" }} />
    </>
  );
}
