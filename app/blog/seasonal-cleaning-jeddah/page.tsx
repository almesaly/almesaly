import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "التنظيف الموسمي في جدة: خطة مختلفة لكل موسم!",
  description: "الصيف الحار، الشتاء الرطب، موسم الحج... كل موسم في جدة يحتاج تنظيف خاص! خطة شاملة من تجربتي 10 سنوات في جدة.",
  alternates: { canonical: `${site.url}/blog/seasonal-cleaning-jeddah` },
};

const faqs = [
  {
    question: "ليش التنظيف الموسمي مهم في جدة بالذات؟",
    answer: "جدة مناخها متقلب: صيف حار + رطوبة عالية + رياح + غبار. كل موسم يجيب تحديات مختلفة - الصيف مكيفات وعفن، الشتاء رطوبة ومطر، الربيع غبار... تنظيف موسمي = استعداد مسبق!",
  },
  {
    question: "شو أهم تنظيف في الصيف؟",
    answer: "المكيفات (وجوبي!)، الثلاجة (تعمل أكثر)، النوافذ (عوازل حرارية)، ومنع العفن (بسبب الرطوبة العالية). التركيز على البرودة والتهوية!",
  },
  {
    question: "كم مرة أسوي تنظيف موسمي؟",
    answer: "4 مرات في السنة - مع كل تغيير موسم (سبتمبر، ديسمبر، مارس، يونيو). كل مرة تنظيف عميق لأشياء محددة مناسبة للموسم الجديد.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "التنظيف الموسمي في جدة", url: "/blog/seasonal-cleaning-jeddah" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                التنظيف الموسمي في جدة: خطة مختلفة لكل موسم!
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>10 أكتوبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>فاطمة الحربي - ساكنة جدة 10 سنوات</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 10 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/home cleaning Jeddah.jpg" 
                alt="دليل شامل للتنظيف الموسمي في جدة - 10 سنوات خبرة" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  10 سنوات وأنا أعيش في جدة... تعلمت إن كل موسم يحتاج تنظيف خاص! الصيف غير الشتاء، والربيع غير أي وقت. لو تنظفين صح، تتجنبين مشاكل كثيرة! 🌴🌊
                </p>
              </div>

              <p className="text-lg">
                أول سنة لي في جدة، كنت أنظف بنفس الطريقة طول السنة. النتيجة؟ <strong>مشاكل ما توقعتها!</strong>
              </p>

              <p className="text-lg">
                الصيف: عفن في الحمام (من الرطوبة)، فواتير كهرباء عالية (مكيفات متسخة)، ذباب كثير (بسبب القمامة السريعة التعفن)...
              </p>

              <p className="text-lg">
                الشتاء: روائح رطوبة، ملابس ما تجف، رشح في السقف (ما كنت مستعدة!)...
              </p>

              <p className="text-lg font-bold text-primary">
                لين تعلمت: جدة تحتاج <strong>تنظيف موسمي مخصص!</strong> كل موسم له تركيز معين، وإذا استعديتي صح، البيت يبقى نظيف ومريح طول السنة!
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>خطة التنظيف الموسمي الكاملة اللي طورتها خلال 10 سنوات في جدة</strong> - موسم بموسم، مهمة بمهمة!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: فهم مناخ جدة (علشان نخطط صح!)
              </h2>

              <p className="text-lg">
                جدة مناخها فريد - ساحلية على البحر الأحمر. هذا يعني:
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-orange-50 p-5 border-r-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">☀️ الصيف (مايو - سبتمبر)</h3>
                  <ul className="mr-6 list-disc space-y-1">
                    <li><strong>حرارة عالية:</strong> 35-45 درجة</li>
                    <li><strong>رطوبة قاتلة:</strong> 60-90%!</li>
                    <li><strong>استخدام مكيفات مكثف</strong></li>
                    <li><strong>تحديات:</strong> عفن، حشرات، فواتير كهرباء عالية</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-blue-50 p-5 border-r-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">❄️ الشتاء (ديسمبر - فبراير)</h3>
                  <ul className="mr-6 list-disc space-y-1">
                    <li><strong>حرارة معتدلة:</strong> 20-28 درجة</li>
                    <li><strong>رطوبة مرتفعة:</strong> بسبب البحر</li>
                    <li><strong>أمطار موسمية:</strong> خفيفة لمتوسطة</li>
                    <li><strong>تحديات:</strong> رطوبة داخلية، روائح، ملابس بطيئة الجفاف</li>
                  </ul>
                </div>

                <div className="rounded-lg bg-yellow-50 p-5 border-r-4 border-yellow-500">
                  <h3 className="font-bold text-lg mb-2">🌸 الربيع/الخريف (مارس-أبريل، أكتوبر-نوفمبر)</h3>
                  <ul className="mr-6 list-disc space-y-1">
                    <li><strong>حرارة معتدلة:</strong> 25-35 درجة</li>
                    <li><strong>رياح موسمية:</strong> تحمل غبار ورمل</li>
                    <li><strong>موسم الحج/العمرة:</strong> حركة كثيرة</li>
                    <li><strong>تحديات:</strong> غبار متراكم، نوافذ متسخة</li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الخطة الموسمية الشاملة
              </h2>

              {/* الصيف */}
              <div className="mt-8 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-400 p-6">
                <h3 className="text-3xl font-bold text-orange-900 mb-6">
                  ☀️ الصيف: محاربة الحرارة والرطوبة
                </h3>

                <p className="text-lg mb-6 font-semibold">
                  <strong>التوقيت:</strong> مايو (قبل بداية الحر الشديد!)
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg bg-white p-5 border-r-4 border-red-500">
                    <h4 className="text-xl font-bold mb-3">1. المكيفات (الأولوية القصوى!)</h4>
                    <p className="mb-3">مكيفات نظيفة = برودة أفضل + فاتورة كهرباء أقل + هواء صحي</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li><strong>نظفي الفلاتر:</strong> اشيليها واغسليها (مرة في الشهر خلال الصيف!)</li>
                      <li><strong>نظفي الوحدة الخارجية:</strong> شيلي الأوساخ والأوراق</li>
                      <li><strong>صيانة احترافية:</strong> خلي فني يشيك عليها (قبل الصيف)</li>
                      <li><strong>النتيجة:</strong> توفير 20-30% من الكهرباء! (مجرب!)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3">2. مكافحة العفن</h4>
                    <p className="mb-3">الرطوبة العالية = عفن مضمون لو ما تحذرين!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>نظفي الحمامات بعمق (خاصة الزوايا والسيليكون)</li>
                      <li>تأكدي من عمل الشفاطات</li>
                      <li>استخدمي مزيل رطوبة (dehumidifier) في الحمام/غرف النوم</li>
                      <li>افتحي النوافذ يومياً (الصباح الباكر - قبل الحر!)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-yellow-500">
                    <h4 className="text-xl font-bold mb-3">3. الثلاجة والمطبخ</h4>
                    <p className="mb-3">الحر الشديد يخلي الطعام يفسد أسرع!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>نظفي الثلاجة بعمق (شيلي كل شي، نظفي الرفوف)</li>
                      <li>شيكي تاريخ الصلاحية لكل شي</li>
                      <li>نظفي الفريزر (أزيلي الثلج المتراكم)</li>
                      <li>اغسلي سلة المهملات بكلور (الروائح تزيد في الحر!)</li>
                      <li>استخدمي سلات مهملات محكمة الإغلاق</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-green-500">
                    <h4 className="text-xl font-bold mb-3">4. النوافذ والعوازل</h4>
                    <p className="mb-3">عزل جيد = حرارة أقل داخل البيت</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>نظفي النوافذ (زجاج + إطارات)</li>
                      <li>شيكي العوازل (سد أي فجوات)</li>
                      <li>ستائر عازلة (تمنع الحرارة)</li>
                      <li>فيلم عاكس للحرارة على النوافذ (اختياري - لكن فعال!)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-purple-500">
                    <h4 className="text-xl font-bold mb-3">5. مكافحة الحشرات</h4>
                    <p className="mb-3">الحر يجيب حشرات - استعدي مبكراً!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>رشي مبيد حشري وقائي (في الزوايا، خلف الأثاث)</li>
                      <li>سد الشقوق والفتحات</li>
                      <li>شباك سلك ضد الناموس</li>
                      <li>نظفي المطبخ يومياً (الفتات تجذب النمل!)</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm italic text-orange-700">
                  ⏱️ الوقت المتوقع للتنظيف الصيفي: يومين (يوم كامل + نص يوم)
                </p>
              </div>

              {/* الشتاء */}
              <div className="mt-8 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-400 p-6">
                <h3 className="text-3xl font-bold text-blue-900 mb-6">
                  ❄️ الشتاء: التعامل مع الرطوبة والأمطار
                </h3>

                <p className="text-lg mb-6 font-semibold">
                  <strong>التوقيت:</strong> نوفمبر (قبل موسم الأمطار!)
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg bg-white p-5 border-r-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-3">1. فحص السطح والمزاريب</h4>
                    <p className="mb-3">الأمطار + سطح غير جاهز = كارثة!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>شيكي السطح (أي شقوق أو تشققات)</li>
                      <li>نظفي المزاريب (من الأوراق والأوساخ)</li>
                      <li>تأكدي من تصريف المياه صحيح</li>
                      <li>لو في مشكلة: أصلحيها قبل المطر!</li>
                    </ul>
                    <p className="mt-2 text-xs italic text-blue-700">
                      💡 أنا جربت: مزاريب مسدودة = ماء دخل البيت! أصلحتها وما رجعت المشكلة.
                    </p>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-purple-500">
                    <h4 className="text-xl font-bold mb-3">2. محاربة الرطوبة الداخلية</h4>
                    <p className="mb-3">جدة رطبة حتى في الشتاء - استعدي!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>مزيل رطوبة في الخزائن (أكياس سيليكا جل)</li>
                      <li>افتحي النوافذ يومياً (تهوية حتى لو الجو بارد!)</li>
                      <li>لا تعلقين ملابس مبللة داخل البيت (تزيد الرطوبة!)</li>
                      <li>شغلي المراوح في الحمام بعد الاستحمام</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-green-500">
                    <h4 className="text-xl font-bold mb-3">3. البطانيات والملابس الشتوية</h4>
                    <p className="mb-3">قبل ما تطلعينها من التخزين، لازم تنظفين!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>اغسلي كل البطانيات والملابس الشتوية</li>
                      <li>نشريها تحت الشمس (قبل الاستخدام)</li>
                      <li>شيكي على حشرات/عفن</li>
                      <li>عطريها برائحة منعشة</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3">4. السجاد والموكيت</h4>
                    <p className="mb-3">الشتاء وقت مثالي للتنظيف العميق!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>غسيل شامل للسجاد (بالبخار أو شركة تنظيف)</li>
                      <li>تجفيف تحت الشمس (الشتاء مناسب - ما في حر شديد!)</li>
                      <li>استخدمي معطر سجاد</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-pink-500">
                    <h4 className="text-xl font-bold mb-3">5. المدفأة/السخان</h4>
                    <p className="mb-3">لو عندك مدفأة أو سخان، لازم تنظفين وتصيّنين!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>نظفي المدفأة من الغبار</li>
                      <li>شيكي السخان (صيانة فني لو محتاج)</li>
                      <li>تأكدي من السلامة (أسلاك، توصيلات...)</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm italic text-blue-700">
                  ⏱️ الوقت المتوقع للتنظيف الشتوي: يوم ونص
                </p>
              </div>

              {/* الربيع */}
              <div className="mt-8 rounded-lg bg-gradient-to-br from-green-50 to-yellow-50 border-2 border-green-400 p-6">
                <h3 className="text-3xl font-bold text-green-900 mb-6">
                  🌸 الربيع: تنظيف الغبار والتجديد
                </h3>

                <p className="text-lg mb-6 font-semibold">
                  <strong>التوقيت:</strong> مارس (بعد انتهاء الشتاء)
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg bg-white p-5 border-r-4 border-yellow-500">
                    <h4 className="text-xl font-bold mb-3">1. النوافذ والشبابيك</h4>
                    <p className="mb-3">الرياح الربيعية تجيب غبار كثير!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>غسيل شامل للنوافذ (داخل + خارج)</li>
                      <li>نظفي الشبابيك (الألمنيوم/الخشب)</li>
                      <li>نظفي الشباك السلك (من الغبار والحشرات)</li>
                      <li>شيكي الستائر (اغسليها لو محتاجة)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-green-500">
                    <h4 className="text-xl font-bold mb-3">2. الأرضيات والجدران</h4>
                    <p className="mb-3">الغبار يتراكم على كل سطح!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>امسحي الجدران (خاصة حول النوافذ)</li>
                      <li>غسيل عميق للأرضيات</li>
                      <li>نظفي الزوايا والأطراف جيداً</li>
                      <li>امسحي المراوح السقفية (تتجمع فيها أوساخ كثيرة!)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-3">3. الخزائن والأدراج</h4>
                    <p className="mb-3">وقت الفرز والترتيب!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>فرغي الخزائن (كل شي!)</li>
                      <li>نظفيها من الداخل</li>
                      <li>افرزي الملابس (الشتوية → خزنيها، الصيفية → جهزيها)</li>
                      <li>تخلصي من اللي ما تحتاجينه (قاعدة: ما لبسته سنة = تبرعي فيه!)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-purple-500">
                    <h4 className="text-xl font-bold mb-3">4. التجديد والتحسين</h4>
                    <p className="mb-3">الربيع = بداية جديدة!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>غيري أماكن الأثاث (تجديد للمزاج!)</li>
                      <li>أضيفي نباتات جديدة</li>
                      <li>جددي الديكور (وسائد جديدة، ستائر...)</li>
                      <li>دهني زاوية محتاجة (لو ممكن)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3">5. الشرفة والحديقة</h4>
                    <p className="mb-3">الجو حلو - استغلي الشرفة!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>نظفي الشرفة بعمق</li>
                      <li>اغسلي الأثاث الخارجي</li>
                      <li>نظمي النباتات (قصي، سمدي، رتبي)</li>
                      <li>جهزي الشرفة للجلسات الربيعية!</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm italic text-green-700">
                  ⏱️ الوقت المتوقع للتنظيف الربيعي: يومين (التنظيف الأشمل!)
                </p>
              </div>

              {/* الخريف */}
              <div className="mt-8 rounded-lg bg-gradient-to-br from-orange-50 to-brown-50 border-2 border-orange-400 p-6">
                <h3 className="text-3xl font-bold text-orange-900 mb-6">
                  🍂 الخريف: الاستعداد للشتاء
                </h3>

                <p className="text-lg mb-6 font-semibold">
                  <strong>التوقيت:</strong> أكتوبر (استعداد مبكر!)
                </p>

                <div className="space-y-6">
                  <div className="rounded-lg bg-white p-5 border-r-4 border-orange-500">
                    <h4 className="text-xl font-bold mb-3">1. الملابس الصيفية</h4>
                    <p className="mb-3">وقت تخزين الصيفية وإخراج الشتوية!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>اغسلي كل الملابس الصيفية قبل التخزين</li>
                      <li>خزنيها في أكياس محكمة (مع كرات النفثالين)</li>
                      <li>طلعي الملابس الشتوية واغسليها</li>
                      <li>شيكي على أي ترقيع محتاج</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-blue-500">
                    <h4 className="text-xl font-bold mb-3">2. التكييف والتهوية</h4>
                    <p className="mb-3">نظفي المكيفات قبل ما تطفينها للشتاء!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>نظفي الفلاتر جيداً</li>
                      <li>جففي الوحدة تماماً (قبل الإيقاف)</li>
                      <li>غطي الوحدة الخارجية (حماية من الأمطار)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-green-500">
                    <h4 className="text-xl font-bold mb-3">3. فحص شامل للبيت</h4>
                    <p className="mb-3">شيكي على أي مشاكل قبل الشتاء!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>شيكي الأسقف (أي تشققات → أصلحيها قبل المطر!)</li>
                      <li>شيكي النوافذ (أي فتحات → سديها!)</li>
                      <li>شيكي السباكة (تسريبات؟)</li>
                      <li>شيكي الكهرباء (أسلاك قديمة؟)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-5 border-r-4 border-purple-500">
                    <h4 className="text-xl font-bold mb-3">4. التنظيف العام</h4>
                    <p className="mb-3">تنظيف شامل قبل موسم الأمطار!</p>
                    <ul className="mr-6 list-disc space-y-2 text-sm">
                      <li>غسيل الستائر</li>
                      <li>تنظيف السجاد</li>
                      <li>مسح الجدران</li>
                      <li>تنظيف المطبخ بعمق</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm italic text-orange-700">
                  ⏱️ الوقت المتوقع للتنظيف الخريفي: يوم ونص
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح عامة للتنظيف الموسمي في جدة
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>خططي مسبقاً:</strong> ما تنتظرين لين يبدأ الموسم! استعدي قبلها بأسبوعين.
                </li>
                <li>
                  <strong>استعيني بمساعدة:</strong> التنظيف الموسمي كبير - خلي العائلة تساعد، أو استعيني بشركة تنظيف!
                </li>
                <li>
                  <strong>قسمي المهام:</strong> ما تسوين كل شي في يوم واحد! قسمي على عدة أيام.
                </li>
                <li>
                  <strong>سجلي ملاحظات:</strong> كل موسم، اكتبي شو سويتي وشو نجح. السنة الجاية تكونين أسرع!
                </li>
                <li>
                  <strong>استثمري في أدوات جيدة:</strong> مكنسة قوية، مزيل رطوبة، منظفات فعالة - تسهل عليك كثير!
                </li>
                <li>
                  <strong>استغلي الطقس المناسب:</strong> الصيف للتنظيف الخارجي (يجف بسرعة)، الشتاء للداخلي.
                </li>
                <li>
                  <strong>الوقاية أفضل من العلاج:</strong> صيانة دورية توفر عليك مشاكل كبيرة!
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                جدول سنوي مختصر
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">الشهر</th>
                      <th className="border border-gray-300 p-3 text-right">الموسم</th>
                      <th className="border border-gray-300 p-3 text-right">أولويات التنظيف</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">يناير-فبراير</td>
                      <td className="border border-gray-300 p-3">شتاء</td>
                      <td className="border border-gray-300 p-3">محاربة الرطوبة، تنظيف بطانيات</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">مارس-أبريل</td>
                      <td className="border border-gray-300 p-3">ربيع</td>
                      <td className="border border-gray-300 p-3">تنظيف النوافذ، فرز الخزائن، تجديد</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">مايو-سبتمبر</td>
                      <td className="border border-gray-300 p-3">صيف</td>
                      <td className="border border-gray-300 p-3">المكيفات، مكافحة العفن والحشرات</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">أكتوبر-نوفمبر</td>
                      <td className="border border-gray-300 p-3">خريف</td>
                      <td className="border border-gray-300 p-3">تخزين الصيفية، فحص السطح، استعداد للشتاء</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">ديسمبر</td>
                      <td className="border border-gray-300 p-3">شتاء مبكر</td>
                      <td className="border border-gray-300 p-3">تنظيف نهاية السنة، استعداد للأمطار</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-12 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💚 خلاصة 10 سنوات في جدة:
                </p>
                <p className="text-lg mb-3">
                  التنظيف الموسمي <strong>مو رفاهية - ضرورة!</strong> جدة مناخها متقلب، وكل موسم يجيب تحديات مختلفة.
                </p>
                <p className="text-lg mb-3">
                  لما بديت أخطط للتنظيف موسمياً (بدل العشوائي)، البيت صار أنظف، المشاكل قلت، ووفرت فلوس كثيرة (صيانة + كهرباء + إصلاحات).
                </p>
                <p className="text-lg font-semibold text-green-700">
                  استثمار بسيط من وقت = بيت نظيف ومريح طول السنة! 🏡✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">التنظيف الموسمي متعب؟ خليه علينا!</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمات تنظيف موسمي شاملة في جدة - نعرف مناخ جدة ونحتياجات كل موسم!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف موسمي شامل (حسب الموسم)</li>
                  <li>صيانة المكيفات وتنظيفها</li>
                  <li>مكافحة العفن والحشرات</li>
                  <li>تنظيف عميق لكل أركان البيت</li>
                  <li>خبرة 15+ سنة في جدة</li>
                  <li>باقات موسمية بأسعار خاصة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجز تنظيف موسمي
                  </Link>
                  <Link href="/services/deep-cleaning-jeddah" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول التنظيف الموسمي في جدة</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: التنظيف الموسمي في جدة" }} />
    </>
  );
}
