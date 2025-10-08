"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";
import { Calendar, User, ArrowLeft, BookOpen, Lightbulb, Phone, Tag } from "lucide-react";

// Metadata moved to layout or will be added via next/head
const breadcrumbs = [{ name: "المدونة", url: "/blog" }];

const posts = [
  {
    slug: "cleaning-tips-for-working-families",
    title: "10 نصائح واقعية للعائلات المشغولة: كيف تحافظ على بيتك نظيف؟",
    excerpt: "كل واحد فينا يعرف كم صعب ترجع من الشغل والبيت فوضى! جربت هالطرق وفعلاً وفرت لي وقت كثير...",
    image: "home cleaning Jeddah.jpg",
    date: "2024-10-05",
    author: "سارة أحمد - أم لثلاثة أطفال",
    category: "نصائح تنظيف",
  },
  {
    slug: "deep-cleaning-vs-regular-cleaning",
    title: "شو الفرق بالضبط؟ تنظيف عادي ولا عميق؟",
    excerpt: "صديقتي سألتني: ليش تدفعين على تنظيف عميق والبيت أصلاً نظيف؟ هنا الإجابة من تجربتي الشخصية...",
    image: "deep cleaning service.jpg",
    date: "2024-10-01",
    author: "نورة المطيري - خبيرة تنظيف منازل",
    category: "إرشادات",
  },
  {
    slug: "how-to-remove-carpet-stains",
    title: "ولدي سكب عصير على السجادة الجديدة! طريقة سريعة أنقذتني",
    excerpt: "قبل أسبوع صار موقف كارثي - عصير برتقال كامل على سجادة بيج جديدة! جربت هالطريقة والنتيجة ما صدقتها...",
    image: "carpet cleaning Jeddah.jpg",
    date: "2024-09-28",
    author: "ريم السالم - ربة منزل",
    category: "حلول منزلية",
  },
  {
    slug: "5-reasons-to-steam-clean-sofa",
    title: "ليش صرت أنظف كنبي بالبخار كل 3 شهور؟ تجربتي الصادقة",
    excerpt: "كنت أستغرب ليش الناس تدفع على تنظيف الكنب بالبخار... لين جربته بنفسي والفرق واضح جداً خصوصاً في جو جدة الرطب!",
    image: "sofa cleaning Jeddah.jpg",
    date: "2024-09-25",
    author: "منى الغامدي - ساكنة حي الشاطئ",
    category: "نصائح تنظيف",
  },
  {
    slug: "sanitization-importance-after-covid",
    title: "بعد الكورونا، هل فعلاً نحتاج تعقيم دوري؟ رأيي الصريح",
    excerpt: "كنت أفكر إن التعقيم صار موضة بس... لين أخت زوجي مرضت وتعلمت إن النظافة شي والتعقيم شي ثاني تماماً!",
    image: "sanitization company.jpg",
    date: "2024-09-20",
    author: "د. هند العتيبي - صيدلانية",
    category: "صحة وسلامة",
  },
  {
    slug: "preparing-home-for-ramadan",
    title: "كيف جهزت بيتي لرمضان في 3 أيام فقط؟ خطتي المجربة",
    excerpt: "السنة الماضية قضيت أسبوعين تنظيف! هالسنة خلصت كل شي في 3 أيام بخطة ذكية وبدون تعب...",
    image: "home cleaning Jeddah.jpg",
    date: "2024-09-15",
    author: "فاطمة القحطاني - ربة منزل",
    category: "مناسبات",
  },
  {
    slug: "marble-care-tips-jeddah",
    title: "رخام بيتي صار باهت من الرطوبة! هالطريقة رجعته جديد",
    excerpt: "عشت 5 سنين في جدة والرخام يفقد لمعته بسبب الرطوبة... جربت كل شي لين لقيت الحل الصح!",
    image: "marble cleaning.jpg",
    date: "2024-09-10",
    author: "خالد الزهراني - مقاول",
    category: "عناية خاصة",
  },
  {
    slug: "eco-friendly-cleaning-products",
    title: "بنتي عندها حساسية من المنظفات - وصفات طبيعية غيرت حياتنا",
    excerpt: "بعد ما بنتي راحت المستشفى 3 مرات من المنظفات الكيميائية، قررت أسوي منظفات طبيعية... والنتيجة أفضل من المتوقع!",
    image: "eco-friendly cleaning.jpg",
    date: "2024-09-05",
    author: "أمل الحربي - أم لطفلين",
    category: "صديق للبيئة",
  },
  {
    slug: "organizing-tips-small-apartments",
    title: "شقتي 60 متر وصارت تبين 90! حيل التنظيم اللي استخدمتها",
    excerpt: "كنت مكتئبة من ضيق شقتي... بعد ما جربت هالأفكار البسيطة، كل الضيوف يسألون: شقتك كبيرة كذا؟!",
    image: "apartment cleaning.jpg",
    date: "2024-08-30",
    author: "لينا محمود - موظفة وطالبة ماجستير",
    category: "تنظيم",
  },
  {
    slug: "cleaning-kitchen-after-eid",
    title: "مطبخي بعد العيد كان كارثة! خلصته في ساعتين بس",
    excerpt: "3 أيام عيد = مطبخ مدمر تماماً! كنت بأنهار... بس بهالطريقة رجع نظيف في وقت قياسي",
    image: "kitchen cleaning Jeddah.jpg",
    date: "2024-08-25",
    author: "هيفاء الشهري - ربة منزل",
    category: "مناسبات",
  },
  {
    slug: "pet-friendly-cleaning-tips",
    title: "عندي قطتين والبيت نظيف دايم! سر النظافة مع الحيوانات الأليفة",
    excerpt: "كثير ناس يقولون ماينفع قطط ونظافة مع بعض... أنا عندي قطتين والبيت دايماً نظيف! كيف؟",
    image: "home cleaning Jeddah.jpg",
    date: "2024-08-20",
    author: "عبدالله السلمي - محب للقطط",
    category: "نصائح تنظيف",
  },
  {
    slug: "window-cleaning-tips",
    title: "سر نوافذي اللامعة بدون خطوط - جربته وما صدقت النتيجة!",
    excerpt: "كنت أنظف النوافذ وتطلع مخططة دايماً... لين جارتي علمتني طريقة بسيطة والنتيجة مثل المحترفين!",
    image: "window cleaning Jeddah.jpg",
    date: "2024-08-15",
    author: "سلمى الأحمدي - ربة منزل",
    category: "حلول منزلية",
  },
  {
    slug: "bathroom-mold-prevention",
    title: "العفن في الحمام كابوسي في جدة! وقفته بطريقة بسيطة جداً",
    excerpt: "كل أسبوعين أشوف عفن جديد في الحمام من الرطوبة... جربت كل منظف موجود لين لقيت الحل!",
    image: "bathroom cleaning.jpg",
    date: "2024-08-10",
    author: "وفاء الدوسري - ساكنة حي الحمراء",
    category: "صحة وسلامة",
  },
  {
    slug: "move-in-cleaning-checklist",
    title: "شقتي الجديدة كانت وسخة جداً! كيف نظفتها قبل الانتقال؟",
    excerpt: "انتقلنا لشقة جديدة بس الملاك السابق تركها متسخة... هالقائمة ساعدتني أنظفها من الألف للياء",
    image: "move in cleaning.jpg",
    date: "2024-08-05",
    author: "محمد العمري - موظف جديد في جدة",
    category: "إرشادات",
  },
  {
    slug: "office-cleaning-productivity",
    title: "نظفت مكتبي وزادت إنتاجيتي 40%! قصتي مع الترتيب",
    excerpt: "كنت أشتغل من بين فوضى وأوراق... قررت أنظم المكتب والتغيير اللي صار ما توقعته أبداً!",
    image: "office cleaning Jeddah.jpg",
    date: "2024-07-30",
    author: "أحمد الغامدي - مدير تسويق",
    category: "بيئة عمل",
  },
  {
    slug: "seasonal-cleaning-jeddah",
    title: "جدول التنظيف الموسمي اللي غير حياتي - مخصص لجو جدة",
    excerpt: "كنت أنظف على كيفي ودايماً البيت مب مرتب... لين سويت جدول موسمي يناسب جو جدة بالضبط!",
    image: "cleaning services Jeddah.jpg",
    date: "2024-07-25",
    author: "نجلاء الحكمي - ربة منزل منظمة",
    category: "إرشادات",
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("الكل");
  const whatsappLink = generateWhatsAppLink(site.whatsapp, { page: "المدونة" });

  // Get unique categories
  const categories = ["الكل", ...Array.from(new Set(posts.map(p => p.category)))];
  
  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "الكل" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {/* Enhanced Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 py-16 md:py-24">
        {/* Decorative Elements */}
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-6 py-2 backdrop-blur-sm">
              <BookOpen className="h-5 w-5" />
              <span className="font-semibold">16 مقالة قيّمة</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              مدونة النظافة والعناية<br />بمنزلك في جدة
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed opacity-95 md:text-xl">
              نصائح عملية من خبراء التنظيف - تعلم أفضل الطرق للحفاظ على منزل نظيف وصحي طوال العام
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="gap-2 bg-white text-purple-600 hover:bg-gray-100 shadow-xl">
                <a href={`tel:${site.phone}`}>
                  <Phone className="h-5 w-5" />
                  احجز تنظيف احترافي
                </a>
              </Button>
              <Button asChild size="lg" className="gap-2 border-2 border-white bg-transparent text-white hover:bg-white/10 shadow-xl">
                <Link href="#articles">
                  <Lightbulb className="h-5 w-5" />
                  اقرأ النصائح
                </Link>
              </Button>
            </div>

            {/* Interactive Categories Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full border-2 px-5 py-2.5 text-sm font-bold backdrop-blur-sm transition-all ${
                    selectedCategory === cat
                      ? "border-white bg-white text-purple-600 shadow-lg scale-110"
                      : "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:border-white/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                {selectedCategory === "الكل" 
                  ? "جميع المقالات" 
                  : `مقالات ${selectedCategory}`}
              </h2>
              <p className="text-lg text-gray-600">
                {filteredPosts.length} {filteredPosts.length === 1 ? "مقالة" : filteredPosts.length === 2 ? "مقالتين" : "مقالات"} 
                {selectedCategory !== "الكل" && ` في تصنيف ${selectedCategory}`}
              </p>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="py-20 text-center">
                <p className="text-xl text-gray-500">لا توجد مقالات في هذا التصنيف حالياً</p>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                <article
                  key={post.slug}
                  className="overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={`/images/${post.image}`}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString("ar-SA")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="mb-4 text-gray-600 line-clamp-3">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      اقرأ المزيد
                      <ArrowLeft className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              لماذا تتابع مدونة شركة المثالي؟
            </h2>

            <p className="text-lg leading-relaxed">
              في مدونتنا، نشارك معك أكثر من 10 سنوات من الخبرة في مجال التنظيف الاحترافي. نقدم:
            </p>

            <ul className="list-inside list-disc space-y-2 pr-6 text-lg">
              <li><strong>نصائح عملية:</strong> يمكنك تطبيقها فوراً في منزلك</li>
              <li><strong>إرشادات متخصصة:</strong> من خبراء محترفين في التنظيف</li>
              <li><strong>حلول لمشاكل شائعة:</strong> البقع العنيدة، الروائح، التنظيف الصعب</li>
              <li><strong>توصيات المنتجات:</strong> أفضل المواد والمعدات للتنظيف المنزلي</li>
              <li><strong>جداول صيانة:</strong> متى وكيف تنظف كل جزء من منزلك</li>
            </ul>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                هل لديك موضوع تريد منا تغطيته؟
              </h3>
              <p className="mb-4 text-gray-700">
                نحب أن نسمع منك! إذا كان لديك سؤال أو موضوع معين تريد أن نكتب عنه في المدونة،
                تواصل معنا وسنسعد بمساعدتك.
              </p>
              <Link
                href="/contact"
                className="inline-block rounded-md bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
              >
                تواصل معنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="تحتاج خدمات تنظيف احترافية؟"
        description="دع الخبراء يتولون الأمر. تواصل معنا للحصول على خدمة تنظيف متخصصة"
        context={{ page: "المدونة" }}
      />
    </>
  );
}


