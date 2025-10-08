import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { FAQ } from "@/components/faq";
import { site } from "@/app/config/site";
import { Calendar, User, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "مطبخي بعد العيد كان كارثة! خلصته في ساعتين بس",
  description: "3 أيام عيد = مطبخ مدمر تماماً! كنت بأنهار... بس بهالطريقة رجع نظيف في وقت قياسي. خطة عملية مجربة لتنظيف المطبخ بعد العيد.",
  alternates: { canonical: `${site.url}/blog/cleaning-kitchen-after-eid` },
};

const faqs = [
  {
    question: "كم يحتاج تنظيف المطبخ بعد العيد؟",
    answer: "لو اتبعتي خطة منظمة، ساعتين-ثلاث ساعات كافية! المهم ما تنظفين عشوائي - قسمي المطبخ لمناطق ونظفي وحدة وحدة. أنا شخصياً خلصت في ساعتين ونص.",
  },
  {
    question: "شو أصعب شي في تنظيف المطبخ بعد العيد؟",
    answer: "الدهون المتراكمة على الموقد والفرن! والصحون الكثيرة. بس لو نقعتي الأشياء الدهنية بماء ساخن + منظف قبل، تصير أسهل بكثير.",
  },
  {
    question: "هل ممكن أستعين بشركة تنظيف؟",
    answer: "طبعاً! خصوصاً لو العيد كان فيه ضيوف كثير. شركة محترفة تنظف المطبخ بعمق في ساعة واحدة. أنا جربتها مرة ووفرت علي وقت ومجهود كبير!",
  },
];

export default function BlogPost() {
  return (
    <>
      <Breadcrumbs items={[
        { name: "المدونة", url: "/blog" }, 
        { name: "تنظيف المطبخ بعد العيد", url: "/blog/cleaning-kitchen-after-eid" }
      ]} />
      
      <article className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <header className="mb-8">
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                مطبخي بعد العيد كان كارثة! خلصته في ساعتين بس
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>25 أغسطس 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>هيفاء الشهري - ربة منزل</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>وقت القراءة: 8 دقائق</span>
                </div>
              </div>
            </header>

            <div className="mb-12">
              <Image 
                src="/images/kitchen cleaning Jeddah.jpg" 
                alt="خطة عملية لتنظيف المطبخ بعد العيد في ساعتين" 
                width={1200} 
                height={600} 
                className="rounded-lg shadow-lg" 
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              
              <div className="rounded-lg border-r-4 border-primary bg-blue-50 p-6">
                <p className="text-xl font-semibold leading-relaxed text-gray-900">
                  يوم رابع العيد، الساعة 8 صباحاً. دخلت المطبخ وشفت المنظر: صحون متكدسة، دهون على الموقد، الأرضية لزجة، الثلاجة مليانة بقايا... قلت في نفسي: "هذا راح يأخذ يوم كامل!" 😫
                </p>
              </div>

              <p className="text-lg">
                بس قررت: ما أستسلم! راح أسوي خطة ذكية وأخلص بأسرع وقت ممكن. وفعلاً، بعد ساعتين ونص، المطبخ رجع نظيف ولامع مثل ما كان قبل العيد!
              </p>

              <p className="text-lg">
                اليوم راح أشارككم <strong>الخطة المنظمة اللي استخدمتها لتنظيف مطبخي بعد 3 أيام عيد حافلة</strong> - خطوة بخطوة، بدون إجهاد ولا ضياع وقت!
              </p>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الاستعداد النفسي (مهم جداً!)
              </h2>

              <p className="text-lg">
                قبل ما تبدأين، لازم تكونين في "مود" التنظيف. هذي الأشياء ساعدتني:
              </p>

              <ul className="mr-6 list-disc space-y-2 text-lg">
                <li><strong>كوب قهوة أو شاي:</strong> يعطيك طاقة ونشاط</li>
                <li><strong>موسيقى محفزة:</strong> شغلي أغاني تحبينها (أنا شغلت بودكاست مفضل)</li>
                <li><strong>ملابس مريحة:</strong> لبسي شي ما يهمك يتوسخ</li>
                <li><strong>شعر مربوط:</strong> ما تبينه يعيقك وأنتِ تشتغلين</li>
                <li><strong>مؤقت:</strong> حددي وقت لكل مهمة - يحفزك تخلصين أسرع</li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                الخطة المنظمة: 5 مراحل في ساعتين ونص
              </h2>

              <p className="text-lg">
                قسمت المطبخ لـ 5 مناطق، وخصصت وقت محدد لكل منطقة. هذا سر السرعة والكفاءة!
              </p>

              {/* المرحلة 1 */}
              <div className="mt-8 rounded-lg bg-blue-50 border-2 border-blue-400 p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  🕐 المرحلة 1: الصحون والأواني (30 دقيقة)
                </h3>
                
                <p className="text-lg mb-4">هذي المهمة الأثقل، لكن لو سويتيها صح، باقي التنظيف سهل!</p>

                <div className="rounded-lg bg-white p-4 mb-4">
                  <p className="font-bold mb-2">الطريقة الذكية:</p>
                  <ol className="mr-6 list-decimal space-y-2">
                    <li>
                      <strong>اجمعي كل الصحون:</strong> من كل مكان (غرف، صالة، حمام!)
                    </li>
                    <li>
                      <strong>فرزي:</strong> صحون عادية / قدور دهنية / أكواب
                    </li>
                    <li>
                      <strong>انقعي القدور الدهنية:</strong> ماء ساخن + منظف قوي → اتركيها 15 دقيقة
                    </li>
                    <li>
                      <strong>اغسلي بالترتيب:</strong> أكواب → صحون → ملاعق → قدور (من الأنظف للأوسخ)
                    </li>
                    <li>
                      <strong>استخدمي الجلاية لو موجودة:</strong> توفر نص الوقت!
                    </li>
                  </ol>
                </div>

                <p className="text-sm italic text-blue-700">
                  💡 <strong>نصيحة:</strong> شغلي مودك المفضل على الجوال - الوقت يمر أسرع!
                </p>
              </div>

              {/* المرحلة 2 */}
              <div className="mt-6 rounded-lg bg-green-50 border-2 border-green-400 p-6">
                <h3 className="text-2xl font-bold text-green-900 mb-4">
                  🕑 المرحلة 2: الموقد والفرن (25 دقيقة)
                </h3>

                <p className="text-lg mb-4">هنا تتراكم الدهون والبقع. الحل؟ منظفات قوية + شوية صبر!</p>

                <div className="space-y-4">
                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الموقد:</p>
                    <ol className="mr-6 list-decimal space-y-1 text-sm">
                      <li>شيلي العيون (الشعلات) واغسليها في المغسلة</li>
                      <li>رشي منظف قوي على سطح الموقد</li>
                      <li>اتركيه 5 دقائق</li>
                      <li>امسحي بإسفنج خشن → الدهون تطلع بسهولة!</li>
                      <li>رجعي العيون وامسحيها</li>
                    </ol>
                  </div>

                  <div className="rounded-lg bg-white p-4">
                    <p className="font-bold mb-2">الفرن:</p>
                    <ol className="mr-6 list-decimal space-y-1 text-sm">
                      <li>رشي منظف الفرن (أو بيكنج صودا + ماء)</li>
                      <li>اتركيه 15 دقيقة (وأنتِ تنظفين شي ثاني)</li>
                      <li>امسحي بقماشة مبللة</li>
                      <li>لو في بقع عنيدة: كرري العملية</li>
                    </ol>
                  </div>
                </div>

                <p className="mt-4 text-sm italic text-green-700">
                  ⚠️ افتحي الشباك - منظفات الفرن ريحتها قوية!
                </p>
              </div>

              {/* المرحلة 3 */}
              <div className="mt-6 rounded-lg bg-purple-50 border-2 border-purple-400 p-6">
                <h3 className="text-2xl font-bold text-purple-900 mb-4">
                  🕒 المرحلة 3: الثلاجة (20 دقيقة)
                </h3>

                <p className="text-lg mb-4">بعد العيد، الثلاجة مليانة بقايا. لازم تفرزين وتنظفين!</p>

                <ol className="mr-6 list-decimal space-y-3">
                  <li>
                    <strong>طلعي كل شي:</strong> بقايا طعام، صحون، علب...
                  </li>
                  <li>
                    <strong>فرزي:</strong> 
                    <ul className="mr-6 mt-2 list-disc space-y-1 text-sm">
                      <li>✅ أكل صالح → احتفظي فيه</li>
                      <li>❌ بقايا قديمة (أكثر من 3 أيام) → ارميها!</li>
                      <li>🥡 صحون فاضية → اغسليها</li>
                    </ul>
                  </li>
                  <li>
                    <strong>امسحي الرفوف:</strong> قماشة + ماء + شوية خل
                  </li>
                  <li>
                    <strong>رتبي المحتويات:</strong> حطي الأكل القديم قدام (تأكلينه أول)
                  </li>
                </ol>

                <p className="mt-4 text-sm italic text-purple-700">
                  💡 حطي علبة بيكنج صودا في الثلاجة - تمتص الروائح!
                </p>
              </div>

              {/* المرحلة 4 */}
              <div className="mt-6 rounded-lg bg-orange-50 border-2 border-orange-400 p-6">
                <h3 className="text-2xl font-bold text-orange-900 mb-4">
                  🕓 المرحلة 4: الأسطح والخزائن (20 دقيقة)
                </h3>

                <ul className="space-y-3">
                  <li>
                    <strong>سطح المطبخ:</strong> امسحي كل شي - حتى الأشياء الصغيرة (برطمانات، علب...)
                  </li>
                  <li>
                    <strong>الحوض:</strong> نظفيه بمنظف قوي + تلميع الحنفية
                  </li>
                  <li>
                    <strong>واجهات الخزائن:</strong> امسحيها بقماشة مبللة (تتسخ من الطبخ!)
                  </li>
                  <li>
                    <strong>المايكروويف:</strong> من الداخل والخارج
                  </li>
                  <li>
                    <strong>الأدراج:</strong> امسحي من الخارج (الداخل لو محتاج)
                  </li>
                </ul>
              </div>

              {/* المرحلة 5 */}
              <div className="mt-6 rounded-lg bg-pink-50 border-2 border-pink-400 p-6">
                <h3 className="text-2xl font-bold text-pink-900 mb-4">
                  🕔 المرحلة 5: الأرضية والقمامة (15 دقيقة)
                </h3>

                <ol className="mr-6 list-decimal space-y-2">
                  <li><strong>اجمعي القمامة:</strong> فرغي كل سلات المهملات</li>
                  <li><strong>اكنسي الأرضية:</strong> اجمعي الفتات والأوساخ</li>
                  <li><strong>امسحي بالماء + منظف:</strong> ابدأي من الداخل للخارج</li>
                  <li><strong>جففي:</strong> لو الأرضية رطبة، افتحي الشباك</li>
                  <li><strong>رشي معطر:</strong> خطوة أخيرة تعطي إحساس بالنظافة!</li>
                </ol>
              </div>

              <div className="mt-8 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6 border-2 border-green-400">
                <p className="font-bold text-xl text-gray-900 mb-3">✅ مجموع الوقت:</p>
                <p className="text-lg">30 + 25 + 20 + 20 + 15 = <strong className="text-primary text-2xl">ساعة و50 دقيقة فقط!</strong></p>
                <p className="mt-3 text-lg">
                  مع استراحات قصيرة بين المراحل، المجموع حوالي <strong>ساعتين ونص</strong> - وقت معقول جداً!
                </p>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                نصائح ذهبية تسهل عليك التنظيف
              </h2>

              <ul className="mr-6 list-decimal space-y-4 text-lg mt-6">
                <li>
                  <strong>نظفي أول بأول خلال العيد:</strong> كل مرة تطبخين، نظفي الموقد فوراً. توفر عليك تراكم الدهون.
                </li>
                <li>
                  <strong>استخدمي أكياس قمامة كبيرة:</strong> بدل ما تفرغينها كل شوي، استخدمي أكياس 100 لتر - تكفي كل العيد!
                </li>
                <li>
                  <strong>صحون ورقية للضيوف:</strong> يوفر عليك غسيل كثير! (بس استخدمي نوعية جيدة)
                </li>
                <li>
                  <strong>وزعي المهام:</strong> خلي العيال أو زوجك يساعدون - التنظيف مو واجبك لحالك!
                </li>
                <li>
                  <strong>حضري أدوات التنظيف قبل:</strong> منظفات، إسفنج، قماش - كل شي جاهز يوفر وقت
                </li>
                <li>
                  <strong>خذي استراحات قصيرة:</strong> كل 30 دقيقة، استريحي 5 دقائق. ما تستهلكين نفسك!
                </li>
              </ul>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                أخطاء شائعة (تجنبيها!)
              </h2>

              <div className="space-y-4 mt-6">
                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ تأجيل التنظيف لآخر يوم عيد</p>
                  <p className="text-gray-800">كل ما تأخرتي، الدهون تتصلب والأوساخ تتراكم. نظفي يومياً شوي شوي!</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ التنظيف العشوائي بدون خطة</p>
                  <p className="text-gray-800">تنظفين هنا شوي، هناك شوي - تضيعين وقت! اتبعي خطة منظمة مثل اللي فوق.</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ استخدام منظفات ضعيفة</p>
                  <p className="text-gray-800">الدهون بعد العيد قوية! استخدمي منظفات قوية (خاصة للفرن والموقد).</p>
                </div>

                <div className="rounded-lg border-r-4 border-red-600 bg-red-50 p-4">
                  <p className="font-bold text-red-900">❌ عدم الاستعانة بمساعدة</p>
                  <p className="text-gray-800">ليش تتعبين نفسك لحالك؟ خلي العائلة تساعد - الكل استمتع بالعيد، الكل ينظف!</p>
                </div>
              </div>

              <h2 className="mt-12 text-3xl font-bold text-gray-900">
                بديل ذكي: استعيني بشركة تنظيف!
              </h2>

              <p className="text-lg">
                مرة من المرات، كان العيد عندي متعب جداً (ضيوف كثير، طبخ 3 أيام متواصل). قررت: خلاص، أستعين بشركة تنظيف!
              </p>

              <div className="mt-6 rounded-lg bg-purple-50 p-6 border-2 border-purple-400">
                <p className="font-bold text-xl text-purple-900 mb-3">✨ النتيجة:</p>
                <ul className="space-y-2">
                  <li>✅ جو فريق من 3 أشخاص</li>
                  <li>✅ نظفوا المطبخ كامل في <strong>ساعة واحدة!</strong></li>
                  <li>✅ تنظيف عميق (حتى خلف الثلاجة والفرن)</li>
                  <li>✅ التكلفة: 300 ريال (يستاهل كل ريال!)</li>
                  <li>✅ وفرت وقتي وطاقتي لعيالي</li>
                </ul>
                <p className="mt-4 text-lg font-semibold text-purple-700">
                  من يومها، كل عيد أفكر: هل أنظف بنفسي أو أستعين بمحترفين؟ يعتمد على حجم الفوضى! 😊
                </p>
              </div>

              <div className="mt-8 rounded-lg bg-gradient-to-br from-green-50 to-blue-50 p-8 border-2 border-green-400">
                <p className="text-xl font-bold text-gray-900 mb-4">
                  💚 رسالتي لكل ربة منزل:
                </p>
                <p className="text-lg mb-3">
                  لا تخلين تنظيف المطبخ بعد العيد يدمر نفسيتك! العيد فرحة، والتنظيف مجرد مهمة بسيطة لو خططتي لها صح.
                </p>
                <p className="text-lg mb-3">
                  وتذكري: <strong>ما في عيب تطلبين مساعدة!</strong> سواء من العائلة أو شركة تنظيف - صحتك النفسية أهم!
                </p>
                <p className="text-lg font-semibold text-green-700">
                  كل عام وأنتم بخير، وعيد سعيد ومطبخ نظيف! 🌙✨
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-16 rounded-lg bg-gradient-to-br from-primary to-blue-600 p-8 text-white">
                <h3 className="mb-4 text-2xl font-bold">متعبة من تنظيف المطبخ بعد العيد؟</h3>
                <p className="mb-6 text-lg opacity-95">
                  في <Link href="/" className="font-bold underline">شركة المثالي</Link>، نقدم خدمة تنظيف مطابخ احترافية - خاصة بعد المناسبات والأعياد. نظافة عميقة في وقت قياسي!
                </p>
                <ul className="mb-6 mr-6 list-disc space-y-2 opacity-95">
                  <li>تنظيف شامل (موقد، فرن، ثلاجة، أسطح، أرضيات)</li>
                  <li>إزالة الدهون المتراكمة بمعدات احترافية</li>
                  <li>فريق سريع ومحترف (ساعة-ساعتين فقط!)</li>
                  <li>أسعار خاصة بعد المناسبات</li>
                  <li>منظفات آمنة وفعالة</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-lg bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-gray-100">
                    احجزي تنظيف المطبخ
                  </Link>
                  <Link href="/services/kitchen-bathroom" className="rounded-lg border-2 border-white bg-transparent px-6 py-3 font-bold text-white transition-colors hover:bg-white/10">
                    تفاصيل الخدمة
                  </Link>
                </div>
              </div>

            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">أسئلة شائعة حول تنظيف المطبخ بعد العيد</h2>
              <FAQ faqs={faqs} />
            </div>

          </div>
        </div>
      </article>
      
      <CTASection context={{ page: "مقالة: تنظيف المطبخ بعد العيد" }} />
    </>
  );
}
