import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";
import { Calendar, User, ArrowLeft, BookOpen, Lightbulb, Phone, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "المدونة - نصائح ومقالات عن التنظيف",
  description:
    "مدونة شركة المثالي - مقالات ونصائح مفيدة عن التنظيف، العناية بالمنزل، وأفضل الممارسات للحفاظ على نظافة منزلك.",
  alternates: {
    canonical: `${site.url}/blog`,
  },
};

const breadcrumbs = [{ name: "المدونة", url: "/blog" }];

const posts = [
  {
    slug: "cleaning-tips-for-working-families",
    title: "10 نصائح تنظيف للعائلات العاملة في جدة",
    excerpt: "نصائح عملية للعائلات المشغولة للحفاظ على نظافة المنزل بسهولة وبأقل وقت ممكن.",
    image: "home cleaning Jeddah.jpg",
    date: "2024-10-05",
    author: "فريق شركة المثالي",
    category: "نصائح تنظيف",
  },
  {
    slug: "deep-cleaning-vs-regular-cleaning",
    title: "الفرق بين التنظيف العادي والتنظيف العميق",
    excerpt: "تعرف على الفرق بين التنظيف اليومي والتنظيف العميق ومتى تحتاج كل منهما.",
    image: "deep cleaning service.jpg",
    date: "2024-10-01",
    author: "فريق شركة المثالي",
    category: "إرشادات",
  },
  {
    slug: "how-to-remove-carpet-stains",
    title: "كيف تزيل بقع السجاد بنفسك؟ دليل شامل",
    excerpt: "دليل كامل لإزالة جميع أنواع البقع من السجاد باستخدام مواد منزلية بسيطة.",
    image: "carpet cleaning Jeddah.jpg",
    date: "2024-09-28",
    author: "فريق شركة المثالي",
    category: "حلول منزلية",
  },
  {
    slug: "5-reasons-to-steam-clean-sofa",
    title: "5 أسباب لتنظيف الكنب بالبخار في جدة",
    excerpt: "اكتشف لماذا التنظيف بالبخار هو الخيار الأمثل للكنب في مناخ جدة.",
    image: "sofa cleaning Jeddah.jpg",
    date: "2024-09-25",
    author: "فريق شركة المثالي",
    category: "نصائح تنظيف",
  },
  {
    slug: "sanitization-importance-after-covid",
    title: "أهمية التعقيم بعد جائحة كورونا",
    excerpt: "لماذا أصبح التعقيم المنتظم ضرورة وليس رفاهية؟ دليل شامل للتعقيم الصحي.",
    image: "sanitization company.jpg",
    date: "2024-09-20",
    author: "فريق شركة المثالي",
    category: "صحة وسلامة",
  },
  {
    slug: "preparing-home-for-ramadan",
    title: "تحضير المنزل لاستقبال رمضان في جدة",
    excerpt: "خطة تنظيف شاملة لتحضير منزلك لشهر رمضان المبارك وضيوفك الكرام.",
    image: "home cleaning Jeddah.jpg",
    date: "2024-09-15",
    author: "فريق شركة المثالي",
    category: "مناسبات",
  },
  {
    slug: "marble-care-tips-jeddah",
    title: "نصائح العناية بالرخام في مناخ جدة",
    excerpt: "كيف تحافظ على لمعان الرخام في منزلك رغم الرطوبة والحرارة؟",
    image: "marble cleaning.jpg",
    date: "2024-09-10",
    author: "فريق شركة المثالي",
    category: "عناية خاصة",
  },
  {
    slug: "eco-friendly-cleaning-products",
    title: "منظفات طبيعية وصديقة للبيئة يمكنك صنعها",
    excerpt: "وصفات بسيطة لمنظفات منزلية طبيعية فعالة وآمنة على عائلتك.",
    image: "eco-friendly cleaning.jpg",
    date: "2024-09-05",
    author: "فريق شركة المثالي",
    category: "صديق للبيئة",
  },
  {
    slug: "organizing-tips-small-apartments",
    title: "نصائح تنظيم الشقق الصغيرة في جدة",
    excerpt: "حلول ذكية لتنظيم وترتيب المساحات الصغيرة لتبدو أكبر وأكثر راحة.",
    image: "apartment cleaning.jpg",
    date: "2024-08-30",
    author: "فريق شركة المثالي",
    category: "تنظيم",
  },
  {
    slug: "cleaning-kitchen-after-eid",
    title: "تنظيف المطبخ بعد العيد - دليل سريع",
    excerpt: "خطوات عملية لتنظيف المطبخ بسرعة وفعالية بعد أيام الطبخ المكثف في العيد.",
    image: "kitchen cleaning Jeddah.jpg",
    date: "2024-08-25",
    author: "فريق شركة المثالي",
    category: "مناسبات",
  },
  {
    slug: "pet-friendly-cleaning-tips",
    title: "تنظيف المنزل مع وجود حيوانات أليفة",
    excerpt: "نصائح وحلول للحفاظ على نظافة المنزل مع وجود قطط أو كلاب أليفة.",
    image: "home cleaning Jeddah.jpg",
    date: "2024-08-20",
    author: "فريق شركة المثالي",
    category: "نصائح تنظيف",
  },
  {
    slug: "window-cleaning-tips",
    title: "كيف تنظف النوافذ دون ترك خطوط؟",
    excerpt: "أسرار المحترفين للحصول على نوافذ لامعة وشفافة بدون خطوط أو آثار.",
    image: "window cleaning Jeddah.jpg",
    date: "2024-08-15",
    author: "فريق شركة المثالي",
    category: "حلول منزلية",
  },
  {
    slug: "bathroom-mold-prevention",
    title: "كيف تمنع العفن في الحمام؟ نصائح فعالة",
    excerpt: "طرق مجربة لمنع ظهور العفن والرطوبة في الحمامات في مناخ جدة الرطب.",
    image: "bathroom cleaning.jpg",
    date: "2024-08-10",
    author: "فريق شركة المثالي",
    category: "صحة وسلامة",
  },
  {
    slug: "move-in-cleaning-checklist",
    title: "قائمة فحص تنظيف ما قبل الانتقال للمنزل الجديد",
    excerpt: "قائمة شاملة لتنظيف كل ركن قبل الانتقال لمنزلك الجديد في جدة.",
    image: "move in cleaning.jpg",
    date: "2024-08-05",
    author: "فريق شركة المثالي",
    category: "إرشادات",
  },
  {
    slug: "office-cleaning-productivity",
    title: "كيف تؤثر نظافة المكتب على الإنتاجية؟",
    excerpt: "الرابط بين بيئة العمل النظيفة والأداء الوظيفي المتميز.",
    image: "office cleaning Jeddah.jpg",
    date: "2024-07-30",
    author: "فريق شركة المثالي",
    category: "بيئة عمل",
  },
  {
    slug: "seasonal-cleaning-jeddah",
    title: "التنظيف الموسمي في جدة - دليل شامل",
    excerpt: "جدول تنظيف موسمي مُصمم خصيصاً لمناخ جدة وظروفها الخاصة.",
    image: "cleaning services Jeddah.jpg",
    date: "2024-07-25",
    author: "فريق شركة المثالي",
    category: "إرشادات",
  },
];

export default function BlogPage() {
  const whatsappLink = generateWhatsAppLink(site.whatsapp, { page: "المدونة" });

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

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              {["نصائح تنظيف", "إرشادات", "حلول منزلية", "صحة وسلامة", "مناسبات"].map((cat, idx) => (
                <span key={idx} className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">أحدث المقالات</h2>
              <p className="text-lg text-gray-600">
                نشارك معك خبراتنا ونصائحنا المهنية للحفاظ على منزل نظيف وصحي
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
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


