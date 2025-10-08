import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "انتقلنا للبيت الجديد وندمنا! لو نظفنا قبل كان أحسن...",
  description: "أكبر غلطة: ننقل الأثاث قبل التنظيف العميق! بعدها المعاناة تبدأ. شيك لست التنظيف الكامل قبل الانتقال - وفرت علي شهور من التعب!",
  alternates: { canonical: `${site.url}/blog/move-in-cleaning-checklist` },
};

const faqs = [
  {
    question: "متى أنظف البيت الجديد - قبل الأثاث أو بعده؟",
    answer: "قبل الأثاث 100%! البيت الفاضي أسهل بكثير - توصلين لكل زاوية، السقف، خلف الأبواب... بعد ما تحطين الأثاث، التنظيف العميق يصير شبه مستحيل!",
  },
  {
    question: "كم يحتاج تنظيف بيت جديد قبل الانتقال؟",
    answer: "يعتمد على حجم البيت وحالته. شقة صغيرة (100 متر): يوم واحد. فيلا (300 متر): 2-3 أيام. لو استعنتي بشركة تنظيف، يخلصون في نص الوقت!",
  },
  {
    question: "هل ممكن أنظف بنفسي أو لازم شركة؟",
    answer: "ممكن بنفسك لو عندك وقت وطاقة. لكن شركة محترفة أفضل - معدات قوية، خبرة، وسرعة. أنا جربت الاثنين، والشركة وفرت علي وقت ومجهود كبير!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "تنظيف قبل الانتقال للمنزل الجديد", url: "/blog/move-in-cleaning-checklist" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                انتقلنا للبيت الجديد وندمنا! لو نظفنا قبل كان أحسن...
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>22 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>ريم العتيبي - انتقلت مرتين</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 10 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/move in cleaning.jpg" 
                alt="شيك لست كامل لتنظيف البيت قبل الانتقال - تجربة شخصية" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  أول انتقال لنا: فرحانين بالبيت الجديد، نقلنا الأثاث مباشرة. بعد أسبوع اكتشفنا: غبار خلف الخزائن، بقع في الحمامات، دهون قديمة في المطبخ... كنا نندم كل يوم: "ليتنا نظفنا قبل!" 😔
                </p>
              </div>

              <p className="text-lg">
                الانتقال الثاني (بعد 4 سنوات): تعلمنا من الغلطة. نظفنا البيت الجديد <strong>تنظيف عميق شامل قبل ما ننقل ولو قطعة أثاث واحدة!</strong>
              </p>

              <p className="text-lg font-bold text-primary">
                والفرق؟ سما ومية! البيت صار نظيف 100%، وعشنا براحة نفسية تامة. 😊
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>الشيك لست الكامل اللي استخدمتها في الانتقال الثاني</strong> - غرفة بغرفة، خطوة بخطوة، عشان ما تعيدون نفس غلطتنا!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ليش أنظف البيت قبل الأثاث؟ (أهمية قصوى!)
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-green-50 p-5 border-r-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2">✅ 1. سهولة الوصول</h3>
                  <p>البيت فاضي = توصلين لكل زاوية، السقف، خلف الأبواب، تحت النوافذ... بعد الأثاث؟ مستحيل!</p>
                </div>

                <div className="rounded-lg bg-blue-50 p-5 border-r-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">✅ 2. توفير الوقت والجهد</h3>
                  <p>تنظيف بيت فاضي أسرع 3 مرات! ما تحتاجين تحركين أثاث، تغطين أشياء، تحذرين...</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-5 border-r-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">✅ 3. راحة نفسية</h3>
                  <p>تعيشين في بيت نظيف من اليوم الأول - بدون قلق من أوساخ مخفية!</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-5 border-r-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">✅ 4. صحة العائلة</h3>
                  <p>تنظيف عميق = إزالة بكتيريا، غبار، حشرات من الساكنين السابقين. خاصة مهم لو عندك أطفال!</p>
                </div>

                <div className="rounded-lg bg-pink-50 p-5 border-r-4 border-pink-500">
                  <h3 className="font-bold text-lg mb-2">✅ 5. حماية الأثاث الجديد</h3>
                  <p>ما تبين أثاثك الجديد يتوسخ من غبار وأوساخ البيت القديمة!</p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الأدوات والمنظفات اللي راح تحتاجينها
              </h2>

              <p className="text-lg">
                قبل ما تبدأين، جهزي كل الأدوات. هذا يوفر وقت ويخليك تنظفين بكفاءة:
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 p-6 border-2 border-blue-400">
                <h3 className="text-xl font-bold mb-4">🧰 قائمة الأدوات:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">أدوات التنظيف:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>مكنسة كهربائية قوية</li>
                      <li>ممسحة أرضيات + دلو</li>
                      <li>إسفنج (ناعم + خشن)</li>
                      <li>قماش مايكروفايبر (5-6 قطع)</li>
                      <li>فرشاة خشنة (للجدران والزوايا)</li>
                      <li>فرشاة أسنان قديمة (للتفاصيل)</li>
                      <li>ممسحة نوافذ</li>
                      <li>قفازات مطاطية</li>
                      <li>سلم (للأماكن المرتفعة)</li>
                    </ul>
                  </div>
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">المنظفات:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>منظف متعدد الاستخدامات</li>
                      <li>منظف أرضيات</li>
                      <li>منظف حمامات (قوي للجير)</li>
                      <li>منظف زجاج</li>
                      <li>منظف فرن ومطبخ</li>
                      <li>كلور (مخفف - للتعقيم)</li>
                      <li>خل أبيض (طبيعي وفعال)</li>
                      <li>بيكنج صودا</li>
                      <li>معطر جو</li>
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-sm italic text-blue-700">
                  💡 التكلفة التقريبية: 200-300 ريال (تكفي لتنظيف شامل)
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الشيك لست الكامل: غرفة بغرفة
              </h2>

              <p className="text-lg mb-6">
                هذا الترتيب اللي اتبعته - منطقي ويوفر الوقت:
              </p>

              {/* المطبخ */}
              <div className="mt-8 rounded-lg bg-orange-50 border-2 border-orange-400 p-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">🍳 1. المطبخ (الأصعب - ابدأي فيه!)</h3>
                
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الفرن والموقد:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>نظفي الفرن من الداخل (منظف فرن قوي)</li>
                      <li>شيلي عيون الموقد واغسليها</li>
                      <li>نظفي سطح الموقد من الدهون</li>
                      <li>نظفي الشفاط (مرشحات + خارج)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الخزائن:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>نظفي من الداخل (رفوف + جدران)</li>
                      <li>امسحي الأبواب (داخل + خارج)</li>
                      <li>نظفي الأدراج</li>
                      <li>لو في رائحة: حطي بيكنج صودا ليلة كاملة</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الحوض والحنفيات:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>نظفي الحوض (بيكنج صودا + خل)</li>
                      <li>لمعي الحنفيات</li>
                      <li>نظفي تحت الحوض (شيكي على تسريبات!)</li>
                      <li>صبي كلور في البالوعة (تعقيم)</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الجدران والسقف:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>امسحي الجدران (خاصة فوق الموقد - دهون!)</li>
                      <li>نظفي السقف (استخدمي سلم)</li>
                      <li>نظفي المفاتيح والمقابس</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الأرضية:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>اكنسي جيداً</li>
                      <li>امسحي بمنظف قوي</li>
                      <li>ركزي على الزوايا</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-sm italic text-orange-700">
                  ⏱️ الوقت المتوقع: 2-3 ساعات
                </p>
              </div>

              {/* الحمامات */}
              <div className="mt-6 rounded-lg bg-blue-50 border-2 border-blue-400 p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">🚿 2. الحمامات (تعقيم شامل!)</h3>
                
                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">المرحاض:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>نظفي من الداخل (منظف قوي + فرشاة)</li>
                      <li>نظفي من الخارج (كامل)</li>
                      <li>لا تنسين خلف المرحاض (منطقة مهملة دايماً!)</li>
                      <li>نظفي قاعدة المرحاض</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الحوض والبانيو/الدش:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>أزيلي الجير (منظف حمامات قوي أو خل ساخن)</li>
                      <li>نظفي الحنفيات ولمعيها</li>
                      <li>نظفي السيليكون (مكان العفن المفضل!)</li>
                      <li>نظفي البالوعة</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الجدران والسقف:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>امسحي السيراميك (خاصة الفواصل - تتراكم فيها أوساخ)</li>
                      <li>نظفي السقف (شيكي على عفن!)</li>
                      <li>نظفي الشفاط</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الأرضية:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>اكنسي</li>
                      <li>امسحي بكلور مخفف (تعقيم)</li>
                      <li>نظفي الزوايا جيداً</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">التعقيم النهائي:</p>
                    <ul className="mr-6 list-disc space-y-1 text-sm">
                      <li>رشي مطهر على كل الأسطح</li>
                      <li>افتحي الشباك للتهوية</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-4 text-sm italic text-blue-700">
                  ⏱️ الوقت المتوقع: ساعة-ساعة ونص لكل حمام
                </p>
              </div>

              {/* غرف النوم */}
              <div className="mt-6 rounded-lg bg-purple-50 border-2 border-purple-400 p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">🛏️ 3. غرف النوم (سريعة نسبياً)</h3>
                
                <ul className="space-y-3">
                  <li>
                    <strong>الجدران:</strong> امسحيها بقماشة مبللة (شيكي على بقع أو أوساخ)
                  </li>
                  <li>
                    <strong>النوافذ:</strong> نظفي الزجاج (داخل + خارج) + الإطارات
                  </li>
                  <li>
                    <strong>الأبواب:</strong> امسحيها (داخل + خارج + الأطراف)
                  </li>
                  <li>
                    <strong>الخزائن:</strong> نظفي من الداخل (رفوف + جدران + أرضية الخزانة)
                  </li>
                  <li>
                    <strong>المفاتيح والمقابس:</strong> امسحيها بقماشة مبللة
                  </li>
                  <li>
                    <strong>السقف:</strong> امسحي الغبار (خاصة الزوايا)
                  </li>
                  <li>
                    <strong>الأرضية:</strong> اكنسي (مكنسة كهربائية للزوايا) + امسحي
                  </li>
                </ul>

                <p className="mt-4 text-sm italic text-purple-700">
                  ⏱️ الوقت المتوقع: 30-45 دقيقة لكل غرفة
                </p>
              </div>

              {/* الصالة والممرات */}
              <div className="mt-6 rounded-lg bg-green-50 border-2 border-green-400 p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">🏠 4. الصالة والممرات</h3>
                
                <ul className="space-y-3">
                  <li>
                    <strong>الجدران:</strong> امسحيها كاملة (خاصة أماكن المفاتيح - تكون متسخة)
                  </li>
                  <li>
                    <strong>النوافذ:</strong> تنظيف شامل
                  </li>
                  <li>
                    <strong>الأبواب:</strong> كل الأبواب (مدخل، غرف، حمامات...)
                  </li>
                  <li>
                    <strong>السقف:</strong> إزالة الغبار والعناكب
                  </li>
                  <li>
                    <strong>الإنارة:</strong> امسحي الثريات والمصابيح (طفيها قبل!)
                  </li>
                  <li>
                    <strong>الأرضية:</strong> كنس شامل + مسح بمنظف جيد
                  </li>
                </ul>

                <p className="mt-4 text-sm italic text-green-700">
                  ⏱️ الوقت المتوقع: ساعة-ساعتين
                </p>
              </div>

              {/* الشرفة والمداخل */}
              <div className="mt-6 rounded-lg bg-pink-50 border-2 border-pink-400 p-6">
                <h3 className="text-2xl font-bold text-pink-900 mb-4">🌿 5. الشرفة والمداخل (لا تنسينها!)</h3>
                
                <ul className="space-y-3">
                  <li>
                    <strong>الشرفة:</strong> اكنسي + امسحي الأرضية، نظفي الزجاج، امسحي الدرابزين
                  </li>
                  <li>
                    <strong>المدخل:</strong> نظفي الباب (داخل + خارج)، امسحي الأرضية، نظفي جرس الباب
                  </li>
                  <li>
                    <strong>السلالم (لو في):</strong> اكنسي كل درجة، امسحي الدرابزين
                  </li>
                </ul>

                <p className="mt-4 text-sm italic text-pink-700">
                  ⏱️ الوقت المتوقع: 30 دقيقة
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                اللمسات الأخيرة (مهمة جداً!)
              </h2>

              <div className="mt-6 space-y-4">
                <div className="rounded-lg bg-blue-50 p-5 border-r-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">1. التهوية الشاملة</h3>
                  <p>افتحي كل النوافذ 2-3 ساعات - تدخل هواء نقي وتطلع روائح المنظفات</p>
                </div>

                <div className="rounded-lg bg-green-50 p-5 border-r-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2">2. جولة تفتيش نهائية</h3>
                  <p>دوري على كل البيت - شيكي إذا نسيتي شي، أو في مكان يحتاج تنظيف إضافي</p>
                </div>

                <div className="rounded-lg bg-purple-50 p-5 border-r-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">3. معطر جو</h3>
                  <p>رشي معطر جو طبيعي - يعطي إحساس بالنظافة والانتعاش</p>
                </div>

                <div className="rounded-lg bg-orange-50 p-5 border-r-4 border-orange-500">
                  <h3 className="font-bold text-lg mb-2">4. التصوير (اختياري)</h3>
                  <p>صوري البيت النظيف - للذكرى، ولحماية حقوقك (إثبات إنك استلمته نظيف)</p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح من تجربتي
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>ابدأي من الأعلى للأسفل:</strong> سقف → جدران → أرضية. الأوساخ تنزل، فتنظفينها في النهاية.
                </li>
                <li>
                  <strong>خصصي يوم كامل (أو اثنين):</strong> لا تستعجلين - التنظيف العميق يحتاج وقت.
                </li>
                <li>
                  <strong>استعيني بمساعدة:</strong> زوجك، صديقاتك، أخواتك - الشغل الجماعي أسرع وأمتع!
                </li>
                <li>
                  <strong>خذي استراحات:</strong> كل ساعة، استريحي 10 دقائق. ما تستهلكين نفسك.
                </li>
                <li>
                  <strong>نظفي الحمامات أولاً:</strong> عشان تستخدمينها خلال التنظيف!
                </li>
                <li>
                  <strong>جهزي وجبات خفيفة:</strong> التنظيف متعب - لازمك طاقة!
                </li>
                <li>
                  <strong>شغلي موسيقى:</strong> تحفزك وتخلي الوقت يمر أسرع.
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                هل أنظف بنفسي أو أستعين بشركة؟
              </h2>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border-2 border-gray-300">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="border border-gray-300 p-3 text-right">الجانب</th>
                      <th className="border border-gray-300 p-3 text-right">التنظيف الذاتي</th>
                      <th className="border border-gray-300 p-3 text-right">شركة تنظيف</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">التكلفة</td>
                      <td className="border border-gray-300 p-3">منخفضة (200-300 ريال أدوات)</td>
                      <td className="border border-gray-300 p-3">متوسطة-عالية (500-1500 ريال)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">الوقت</td>
                      <td className="border border-gray-300 p-3">1-3 أيام</td>
                      <td className="border border-gray-300 p-3">4-8 ساعات</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">المجهود</td>
                      <td className="border border-gray-300 p-3">كبير ومتعب</td>
                      <td className="border border-gray-300 p-3">صفر - ترتاحين</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-semibold">النتيجة</td>
                      <td className="border border-gray-300 p-3">جيدة (لو عندك خبرة)</td>
                      <td className="border border-gray-300 p-3">ممتازة (معدات احترافية)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-gray-300 p-3 font-semibold">مناسب لـ</td>
                      <td className="border border-gray-300 p-3">شقق صغيرة + ميزانية محدودة</td>
                      <td className="border border-gray-300 p-3">بيوت كبيرة + ضيق وقت + راحة</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-lg font-semibold text-primary">
                رأيي الشخصي: لو الميزانية تسمح، شركة تنظيف = استثمار ممتاز! وفرت علي وقت ومجهود كبير.
              </p>

              <div className="mt-12 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💚 مقارنة تجربتي (الانتقال الأول vs الثاني):
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="rounded-lg bg-red-50 p-5 border-2 border-red-400">
                    <p className="font-bold text-xl text-red-900 mb-3">❌ الانتقال الأول (بدون تنظيف مسبق):</p>
                    <ul className="space-y-2 text-sm">
                      <li>😔 اكتشفنا أوساخ بعد الأثاث - صعب التنظيف!</li>
                      <li>😫 عشنا 3 شهور نشيل الأثاث ننظف تحته</li>
                      <li>😷 رائحة كريهة من الخزائن</li>
                      <li>🦗 اكتشفنا حشرات في زاوية مخفية!</li>
                      <li>😤 ندم دائم: "ليتنا نظفنا قبل!"</li>
                    </ul>
                  </div>

                  <div className="rounded-lg bg-green-50 p-5 border-2 border-green-400">
                    <p className="font-bold text-xl text-green-900 mb-3">✅ الانتقال الثاني (تنظيف عميق قبل!):</p>
                    <ul className="space-y-2 text-sm">
                      <li>😊 بيت نظيف 100% من اليوم الأول</li>
                      <li>🤩 راحة نفسية تامة - صفر قلق</li>
                      <li>🌸 رائحة منعشة في كل مكان</li>
                      <li>🏡 استمتعنا بالبيت الجديد فوراً</li>
                      <li>💚 أفضل قرار اتخذناه!</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-lg font-semibold text-green-700">
                  الفرق واضح جداً! التنظيف قبل الانتقال = أساس حياة مريحة في البيت الجديد! 🏡✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">تنتقلين لبيت جديد؟ خلي التنظيف علينا!</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمة تنظيف ما قبل الانتقال في جدة. نظافة عميقة شاملة - بيتك يستقبلك نظيف 100%!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف شامل لكل غرفة (مطبخ، حمامات، غرف، صالات...)</li>
                  <li>تعقيم كامل</li>
                  <li>معدات احترافية</li>
                  <li>فريق خبير وسريع</li>
                  <li>أسعار مناسبة للانتقال</li>
                  <li>ضمان على النظافة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تنظيف ما قبل الانتقال
                  </Link>
                  <Link href="/services/deep-cleaning-jeddah" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول تنظيف البيت قبل الانتقال</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: تنظيف قبل الانتقال للمنزل الجديد" }} />
    </>
  );
}
