import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "بعد الكورونا، هل فعلاً نحتاج تعقيم دوري؟ رأيي الصريح",
  description: "كنت أفكر إن التعقيم صار موضة بس... لين أخت زوجي مرضت وتعلمت إن النظافة شي والتعقيم شي ثاني تماماً! تجربتي الشخصية مع التعقيم المنزلي.",
  alternates: { canonical: `${site.url}/blog/sanitization-importance-after-covid` },
};

const faqs = [
  {
    question: "شو الفرق بين التنظيف والتعقيم؟",
    answer: "التنظيف يزيل الأوساخ والغبار من السطح، لكن التعقيم يقتل البكتيريا والفيروسات! تقدرين تنظفين سطح لامع ونظيف، بس لو ما عقمتيه، البكتيريا باقية موجودة وتسبب أمراض. الاثنين مهمين ومكملين لبعض.",
  },
  {
    question: "كل كم أحتاج أعقم البيت؟",
    answer: "للبيت العادي: مرة كل أسبوعين كافية. لكن الأماكن عالية اللمس (مقابض الأبواب، مفاتيح الإنارة، ريموتات) عقميها كل 2-3 أيام. لو في مريض في البيت، عقمي يومياً!",
  },
  {
    question: "هل الكلوركس آمن للتعقيم المنزلي؟",
    answer: "نعم، بس بنسبة مخففة! ملعقة كبيرة لكل لتر ماء كافية. لا تستخدمينه مركز أبداً - خطر على الجهاز التنفسي! وافتحي الشبابيك دايماً عند الاستخدام.",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "أهمية التعقيم بعد كورونا", url: "/blog/sanitization-importance-after-covid" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                بعد الكورونا، هل فعلاً نحتاج تعقيم دوري؟ رأيي الصريح
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>20 سبتمبر 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>د. هند العتيبي - صيدلانية</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 9 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/sanitization company.jpg" 
                alt="أهمية التعقيم المنزلي بعد جائحة كورونا" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  "هند، صرتي مهووسة بالتعقيم! الكورونا خلصت، ليش لسا تعقمين كل شي؟" - صديقتي لما شافتني أعقم مقابض الأبواب
                </p>
              </div>

              <p className="text-lg">
                أعترف، كنت أفكر إن التعقيم المبالغ فيه صار نوع من "الوسواس" بعد الكورونا. الناس رجعت لحياتها الطبيعية، الكمامات اختفت، كل شي رجع طبيعي. فليش أواصل التعقيم؟
              </p>

              <p className="text-lg">
                لين صار موقف غير تفكيري 180 درجة...
              </p>

              <p className="text-lg">
                أخت زوجي (وعندها 3 أطفال) أُصيبت بالتهاب معوي حاد. راحت المستشفى، وطلعت النتيجة: <strong>بكتيريا E.coli</strong> (من عدم النظافة الجيدة). والأسوأ؟ الأطفال كلهم أصيبوا بعدها!
              </p>

              <p className="text-lg">
                لما زرتها في البيت بعد ما طلعت من المستشفى، سألتها: "كيف جاتك البكتيريا؟ بيتك دايماً نظيف!" قالت لي: <strong>"يا هند، النظافة غير التعقيم! أنا كنت أنظف بس ما كنت أعقم."</strong>
              </p>

              <p className="text-lg">
                من يومها، فهمت الفرق الحقيقي بين التنظيف والتعقيم. واليوم راح أشارككم خلاصة خبرتي كصيدلانية + تجربتي الشخصية.
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أولاً: شو الفرق بين النظافة والتعقيم؟ (الفرق اللي غير حياتي!)
              </h2>

              <p className="text-lg">
                كثير ناس يخلطون بين المصطلحين. دعوني أوضح بأسلوب بسيط:
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
                  <h3 className="mb-3 text-2xl font-bold text-blue-900">🧹 التنظيف (Cleaning)</h3>
                  <p className="mb-3 text-lg font-semibold">يزيل الأوساخ المرئية:</p>
                  <ul className="mr-6 list-disc space-y-2">
                    <li>الغبار</li>
                    <li>الأوساخ</li>
                    <li>الدهون</li>
                    <li>البقع</li>
                  </ul>
                  <p className="mt-4 rounded-lg bg-blue-100 p-3 text-sm font-semibold">
                    ✅ النتيجة: سطح نظيف ولامع
                  </p>
                  <p className="mt-2 text-sm text-red-700 font-semibold">
                    ❌ لكن: البكتيريا لا تزال موجودة!
                  </p>
                </div>

                <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6">
                  <h3 className="mb-3 text-2xl font-bold text-green-900">🦠 التعقيم (Disinfection)</h3>
                  <p className="mb-3 text-lg font-semibold">يقتل الميكروبات غير المرئية:</p>
                  <ul className="mr-6 list-disc space-y-2">
                    <li>البكتيريا (99.9%)</li>
                    <li>الفيروسات</li>
                    <li>الفطريات</li>
                    <li>الجراثيم</li>
                  </ul>
                  <p className="mt-4 rounded-lg bg-green-100 p-3 text-sm font-semibold">
                    ✅ النتيجة: سطح معقم وآمن صحياً
                  </p>
                  <p className="mt-2 text-sm text-green-700 font-semibold">
                    ✅ الميكروبات ميتة، لا تسبب أمراض!
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-lg bg-yellow-50 border-2 border-yellow-400 p-6">
                <p className="font-bold text-xl text-gray-900 mb-3">💡 مثال توضيحي من حياتي:</p>
                <p className="text-lg text-gray-800">
                  تخيلي سطح المطبخ بعد تقطيع الدجاج النيء. لو <strong>نظفتيه</strong> بالماء والصابون، راح يبان نظيف ولامع. لكن البكتيريا (السالمونيلا مثلاً) لا تزال حية على السطح!
                </p>
                <p className="mt-3 text-lg text-gray-800">
                  لكن لو <strong>عقمتيه</strong> بمطهر (كلوركس مخفف أو ديتول)، البكتيريا تموت وتصير آمنة!
                </p>
                <p className="mt-3 text-lg font-semibold text-yellow-800">
                  ⚠️ هذا الفرق بين "يبان نظيف" و"فعلاً نظيف وآمن"!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                ليش التعقيم مهم حتى بعد انتهاء الكورونا؟
              </h2>

              <p className="text-lg">
                الكورونا علمتنا درس مهم: <strong>الميكروبات موجودة في كل مكان!</strong> كورونا راحت (أو خفت كثير)، بس البكتيريا والفيروسات الثانية ما راحت!
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                1. البكتيريا موجودة حولنا دايماً (مو بس وقت الوباء!)
              </h3>

              <p className="text-lg">
                في بيتك العادي، في:
              </p>

              <ul className="mr-6 list-disc space-y-3 text-lg">
                <li><strong>المطبخ:</strong> بكتيريا E.coli، السالمونيلا (من اللحوم والدجاج النيئ)</li>
                <li><strong>الحمام:</strong> بكتيريا البراز، الفطريات، العفن</li>
                <li><strong>المقابض والمفاتيح:</strong> بكتيريا Staphylococcus (من اليدين)</li>
                <li><strong>الجوالات:</strong> تحتوي على بكتيريا أكثر من المرحاض بـ10 مرات!</li>
                <li><strong>ليف المواعين:</strong> واحد من أكثر الأماكن تلوثاً في البيت!</li>
              </ul>

              <div className="mt-6 rounded-lg bg-red-50 border-2 border-red-400 p-6">
                <p className="font-bold text-lg text-red-800 mb-3">🔬 حقيقة صادمة من الصيدلية:</p>
                <p className="text-gray-800">
                  لو مسحتي سطح المطبخ بعد تحضير الطعام وفحصتيه تحت الميكروسكوب، راح تشوفين ملايين البكتيريا! حتى لو السطح يبان "نظيف"!
                </p>
                <p className="mt-3 text-gray-800 font-semibold">
                  التنظيف بالماء والصابون يقلل البكتيريا بنسبة 50-70%، لكن التعقيم يقتل 99.9%!
                </p>
              </div>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                2. الفيروسات الموسمية (إنفلونزا، برد، نزلات معوية)
              </h3>

              <p className="text-lg">
                الكورونا راحت، بس الفيروسات الثانية باقية! كل شتاء:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li>الإنفلونزا الموسمية</li>
                <li>نزلات البرد</li>
                <li>فيروسات المعدة (Norovirus)</li>
                <li>فيروسات تنفسية أخرى</li>
              </ul>

              <p className="text-lg">
                هذي الفيروسات تنتشر بسهولة عبر الأسطح! لو أحد في البيت مريض ولمس مقبض الباب، الفيروس ينتقل لكل من يلمسه بعده!
              </p>

              <p className="text-lg font-semibold text-green-600">
                ✅ التعقيم المنتظم يكسر سلسلة العدوى!
              </p>

              <h3 className="mt-8 text-2xl font-bold text-primary">
                3. حماية الأطفال وكبار السن (ذوي المناعة الضعيفة)
              </h3>

              <p className="text-lg">
                الأطفال (خصوصاً تحت 5 سنوات) وكبار السن (فوق 65) عندهم مناعة ضعيفة. البكتيريا اللي ممكن ما تأثر عليك، ممكن تمرض طفلك!
              </p>

              <div className="mt-6 rounded-lg bg-purple-50 border-2 border-purple-300 p-6">
                <p className="font-bold text-lg text-purple-900 mb-3">👶 قصة حقيقية من العيادة:</p>
                <p className="text-gray-800">
                  جتني أم مع بنتها (3 سنوات) تعاني من إسهال مستمر. سألتها عن النظافة في البيت، قالت: "بيتي نظيف جداً، أنظف يومياً!"
                </p>
                <p className="mt-3 text-gray-800">
                  سألتها: "هل تعقمين ألعاب البنت؟" قالت: "لا، بس أمسحها بفوطة مبللة."
                </p>
                <p className="mt-3 text-gray-800 font-semibold">
                  النتيجة؟ الألعاب كانت مليئة بالبكتيريا! البنت تلعب فيها وتحطها في فمها → إسهال مستمر!
                </p>
                <p className="mt-3 text-gray-800 font-semibold text-green-700">
                  بعد ما بدت تعقم الألعاب، البنت تحسنت في أسبوع واحد! ✨
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الأماكن الـ 10 الأكثر خطورة في بيتك (اللي لازم تعقمينها!)
              </h2>

              <p className="text-lg">
                من خبرتي كصيدلانية + دراسات علمية، هذي أكثر 10 أماكن تحتوي على بكتيريا في البيت:
              </p>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-lg text-red-900">🦠 1. ليف المواعين (إسفنجة المطبخ)</p>
                  <p className="text-gray-800">أخطر مكان في البيت! يحتوي على <strong>بكتيريا أكثر من المرحاض!</strong></p>
                  <p className="text-sm mt-2 font-semibold text-red-700">✅ الحل: عقميه يومياً (ميكروويف دقيقة أو اغليه) + غيريه كل أسبوع</p>
                </div>

                <div className="rounded-lg border-r-4 border-orange-600 bg-orange-50 p-4">
                  <p className="font-bold text-lg text-orange-900">🦠 2. لوحة تقطيع اللحوم</p>
                  <p className="text-gray-800">بكتيريا السالمونيلا و E.coli تعيش في الشقوق</p>
                  <p className="text-sm mt-2 font-semibold text-orange-700">✅ الحل: نظفي بالصابون + عقمي بالكلوركس المخفف بعد كل استخدام</p>
                </div>

                <div className="rounded-lg border-r-4 border-yellow-600 bg-yellow-50 p-4">
                  <p className="font-bold text-lg text-yellow-900">🦠 3. مقابض الأبواب والأدراج</p>
                  <p className="text-gray-800">الكل يلمسها، فتنقل البكتيريا من شخص لآخر</p>
                  <p className="text-sm mt-2 font-semibold text-yellow-700">✅ الحل: عقميها كل 2-3 أيام (يومياً لو في مريض)</p>
                </div>

                <div className="rounded-lg border-r-4 border-green-600 bg-green-50 p-4">
                  <p className="font-bold text-lg text-green-900">🦠 4. مفاتيح الإنارة</p>
                  <p className="text-gray-800">نلمسها باستمرار، بس ما أحد يعقمها!</p>
                  <p className="text-sm mt-2 font-semibold text-green-700">✅ الحل: امسحيها بمطهر أسبوعياً</p>
                </div>

                <div className="rounded-lg border-r-4 border-blue-600 bg-blue-50 p-4">
                  <p className="font-bold text-lg text-blue-900">🦠 5. الريموتات (تلفزيون، مكيف)</p>
                  <p className="text-gray-800">الكل يمسكها، وما أحد يفكر ينظفها!</p>
                  <p className="text-sm mt-2 font-semibold text-blue-700">✅ الحل: امسحيها بمناديل مطهرة أسبوعياً</p>
                </div>

                <div className="rounded-lg border-r-4 border-purple-600 bg-purple-50 p-4">
                  <p className="font-bold text-lg text-purple-900">🦠 6. الجوالات والتابلت</p>
                  <p className="text-gray-800">تحتوي على بكتيريا أكثر من المرحاض بـ10 مرات!</p>
                  <p className="text-sm mt-2 font-semibold text-purple-700">✅ الحل: امسحيها يومياً بمناديل كحول طبي</p>
                </div>

                <div className="rounded-lg border-r-4 border-pink-600 bg-pink-50 p-4">
                  <p className="font-bold text-lg text-pink-900">🦠 7. حوض المطبخ وحنفيته</p>
                  <p className="text-gray-800">رطوبة + بقايا طعام = بيئة مثالية للبكتيريا</p>
                  <p className="text-sm mt-2 font-semibold text-pink-700">✅ الحل: عقمي يومياً بعد غسل الصحون</p>
                </div>

                <div className="rounded-lg border-r-4 border-gray-600 bg-gray-50 p-4">
                  <p className="font-bold text-lg text-gray-900">🦠 8. فرش الأسنان وحامل الفرش</p>
                  <p className="text-gray-800">في الحمام قريب من المرحاض = تنتقل لها البكتيريا</p>
                  <p className="text-sm mt-2 font-semibold text-gray-700">✅ الحل: اشطفيها بماء ساخن يومياً + غيريها كل 3 شهور</p>
                </div>

                <div className="rounded-lg border-r-4 border-indigo-600 bg-indigo-50 p-4">
                  <p className="font-bold text-lg text-indigo-900">🦠 9. ألعاب الأطفال</p>
                  <p className="text-gray-800">الأطفال يلعبون فيها ويحطونها في أفواههم</p>
                  <p className="text-sm mt-2 font-semibold text-indigo-700">✅ الحل: عقميها أسبوعياً (اغسليها بماء وصابون + امسحيها بمطهر)</p>
                </div>

                <div className="rounded-lg border-r-4 border-teal-600 bg-teal-50 p-4">
                  <p className="font-bold text-lg text-teal-900">🦠 10. مقبض المرحاض وزر السيفون</p>
                  <p className="text-gray-800">الأكثر وضوحاً، بس كثير ناس ينسونه!</p>
                  <p className="text-sm mt-2 font-semibold text-teal-700">✅ الحل: عقمي يومياً (أو بعد كل استخدام لو في مريض)</p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                طريقتي البسيطة للتعقيم المنزلي (ما تأخذ أكثر من 10 دقائق!)
              </h2>

              <p className="text-lg">
                ما تحتاجين تكونين خبيرة أو تقضين ساعات. هذا جدولي البسيط:
              </p>

              <div className="mt-6 rounded-lg bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-300 p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">📅 جدول التعقيم الأسبوعي:</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="font-bold text-xl text-primary mb-3">🌅 يومياً (5 دقائق):</p>
                    <ul className="mr-6 list-disc space-y-2">
                      <li>سطح المطبخ (بعد الطبخ)</li>
                      <li>حوض المطبخ</li>
                      <li>مقبض المرحاض</li>
                      <li>ليف المواعين (ميكروويف دقيقة)</li>
                      <li>الجوال (مسح بكحول)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-xl text-primary mb-3">📆 كل 2-3 أيام (10 دقائق):</p>
                    <ul className="mr-6 list-disc space-y-2">
                      <li>مقابض الأبواب والأدراج</li>
                      <li>مفاتيح الإنارة</li>
                      <li>الريموتات</li>
                      <li>حنفيات الحمامات</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-bold text-xl text-primary mb-3">📅 أسبوعياً (30 دقيقة):</p>
                    <ul className="mr-6 list-disc space-y-2">
                      <li>ألعاب الأطفال</li>
                      <li>لوحات التقطيع</li>
                      <li>سلة القمامة (من الداخل)</li>
                      <li>حامل فرش الأسنان</li>
                      <li>مقابض الثلاجة</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 rounded-lg bg-white p-4 font-semibold text-lg text-gray-900">
                  💡 <strong>المجموع:</strong> أقل من ساعة أسبوعياً لبيت معقم وآمن 100%!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أفضل 3 مطهرات آمنة للبيت (من خبرتي كصيدلانية)
              </h2>

              <div className="space-y-6 mt-6">
                <div className="rounded-lg border-2 border-green-300 bg-green-50 p-6">
                  <h3 className="text-2xl font-bold text-green-900 mb-3">1. الكلوركس المخفف (الأرخص والأقوى!)</h3>
                  <p className="text-lg mb-3"><strong>النسبة الصحيحة:</strong> ملعقة كبيرة لكل لتر ماء</p>
                  <p className="text-lg mb-3"><strong>يقتل:</strong> 99.9% من البكتيريا والفيروسات (حتى الكورونا!)</p>
                  <p className="text-lg"><strong>الاستخدام:</strong> رشي على السطح → اتركيه 10 دقائق → امسحي</p>
                  <p className="mt-3 rounded-lg bg-red-100 p-3 text-red-800 font-semibold">
                    ⚠️ تحذير: لا تستخدمينه مركز! وافتحي الشبابيك دايماً! ولا تخلطينه مع منظفات أخرى (خطر!)
                  </p>
                </div>

                <div className="rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">2. الكحول الطبي (سبيرتو) 70%</h3>
                  <p className="text-lg mb-3"><strong>مثالي لـ:</strong> الجوالات، الأسطح الحساسة، الألعاب</p>
                  <p className="text-lg mb-3"><strong>الميزة:</strong> يجف سريعاً، ما يحتاج شطف</p>
                  <p className="text-lg"><strong>الاستخدام:</strong> رشي أو امسحي بقماشة → يجف وحده</p>
                  <p className="mt-3 rounded-lg bg-yellow-100 p-3 text-yellow-800 font-semibold">
                    💡 نصيحة: النسبة 70% أفضل من 90%! (الماء يساعد على قتل البكتيريا)
                  </p>
                </div>

                <div className="rounded-lg border-2 border-purple-300 bg-purple-50 p-6">
                  <h3 className="text-2xl font-bold text-purple-900 mb-3">3. ديتول أو سافلون (الأكثر أماناً للأطفال)</h3>
                  <p className="text-lg mb-3"><strong>مثالي لـ:</strong> ألعاب الأطفال، الأرضيات، الحمامات</p>
                  <p className="text-lg mb-3"><strong>الميزة:</strong> آمن، رائحته مقبولة، فعال</p>
                  <p className="text-lg"><strong>النسبة:</strong> حسب التعليمات على العبوة (عادة غطاء واحد لكل لترين ماء)</p>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-yellow-50 border-2 border-yellow-400 p-6">
                <p className="font-bold text-xl text-gray-900 mb-3">🏠 نصيحة خاصة لسكان جدة:</p>
                <p className="text-lg text-gray-800">
                  جو جدة رطب جداً، والرطوبة تساعد على نمو البكتيريا والفطريات أسرع! التعقيم المنتظم في جدة <strong>أهم من المدن الثانية</strong>.
                </p>
                <p className="mt-3 text-lg text-gray-800 font-semibold">
                  خصوصاً الحمامات والمطبخ - عقميهم أكثر (كل يومين بدل كل 3 أيام).
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                رأيي الصريح: هل التعقيم "وسواس" ولا ضرورة؟
              </h2>

              <div className="rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 p-8 border-2 border-purple-300">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  رأيي كصيدلانية وأم: <span className="text-primary">التعقيم المنتظم ضرورة، مو وسواس!</span>
                </p>
                <p className="text-lg text-gray-800 mb-3">
                  بس في فرق كبير بين "التعقيم المنطقي" و"الوسواس":
                </p>
                <ul className="mr-6 list-disc space-y-3 text-lg">
                  <li><strong>✅ التعقيم المنطقي:</strong> تعقمين الأماكن عالية اللمس (مقابض، جوالات، مطبخ) بانتظام</li>
                  <li><strong>❌ الوسواس:</strong> تعقمين كل شي كل ساعة، حتى الأشياء اللي ما أحد يلمسها!</li>
                </ul>
                <p className="mt-4 text-lg text-gray-800 font-semibold">
                  <strong>الخلاصة:</strong> عقمي بذكاء، مو بمبالغة. ركزي على الأماكن الخطرة، واتبعي جدول منطقي.
                </p>
                <p className="mt-4 text-lg text-green-700 font-bold">
                  النتيجة؟ بيت صحي، عائلة سليمة، وراحة بال! 💚
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">تبين تعقيم شامل واحترافي؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمة تعقيم وتطهير شاملة للمنازل والمنشآت. نستخدم مواد معتمدة من وزارة الصحة، آمنة 100% على الأطفال والحوامل.
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تعقيم بالبخار الساخن (يقتل 99.9% من الميكروبات)</li>
                  <li>مطهرات معتمدة من وزارة الصحة</li>
                  <li>تغطية شاملة لكل الأسطح</li>
                  <li>آمن تماماً - بدون روائح ضارة</li>
                  <li>خدمة سريعة في جميع أحياء جدة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تعقيم احترافي
                  </Link>
                  <Link href="/services/disinfection" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول التعقيم المنزلي</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: أهمية التعقيم" }} />
    </>
  );
}
