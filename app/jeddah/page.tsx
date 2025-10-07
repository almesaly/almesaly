import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { site, areas } from "@/app/config/site";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "خدماتنا في جميع أحياء جدة",
  description:
    "شركة المثالي تخدم جميع أحياء جدة - من الشمال إلى الجنوب، من الساحل إلى الداخل. خدمة سريعة ومضمونة في حيّك.",
  alternates: {
    canonical: `${site.url}/jeddah`,
  },
};

const breadcrumbs = [{ name: "المناطق في جدة", url: "/jeddah" }];

export default function JeddahAreasPage() {
  const coastalAreas = areas.filter((a) => a.type === "ساحلي");
  const residentialAreas = areas.filter((a) => a.type === "سكني");
  const commercialAreas = areas.filter((a) => a.type === "تجاري");

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      <Hero
        title="نخدم جميع أحياء جدة - خدمة سريعة وموثوقة"
        subtitle="خدماتنا في جدة"
        description="أينما كنت في جدة، فريقنا جاهز للوصول إليك بسرعة. نقدم خدمات تنظيف احترافية في جميع الأحياء بنفس الجودة والأسعار العادلة."
        image="cleaning services Jeddah.jpg"
        imageAlt="خدمات تنظيف في جميع أحياء جدة - شركة المثالي"
        context={{ page: "جدة" }}
      />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              تغطية شاملة لجميع أحياء جدة
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              نفخر بخدمة جميع أحياء جدة دون استثناء. من الأحياء الساحلية الرطبة التي تحتاج عناية
              خاصة بسبب الرطوبة والملوحة، إلى الأحياء السكنية الراقية، والمناطق التجارية المزدحمة -
              فريقنا المحترف مجهز ومدرب للتعامل مع خصوصية كل منطقة.
            </p>
            <p className="text-gray-700">
              نفهم أن كل حي في جدة له طابعه الخاص وتحدياته المختلفة. لذا، نُكيّف خدماتنا وأساليبنا
              لتناسب احتياجات كل منطقة، مع الحفاظ على نفس المعايير العالية من الجودة والاحترافية.
            </p>
          </div>

          {/* Coastal Areas */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              الأحياء الساحلية
            </h3>
            <p className="mb-6 text-gray-700">
              الأحياء الساحلية في جدة تتميز بإطلالات رائعة على البحر، لكنها تواجه تحديات خاصة مثل
              الرطوبة العالية، ترسبات الملح على النوافذ والواجهات، والعفن. نقدم خدمات متخصصة لهذه
              المناطق تشمل تنظيف الواجهات الزجاجية، معالجة العفن، وحماية الأسطح من التآكل.
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {coastalAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/jeddah/${area.slug}`}
                  className="group flex items-center gap-3 rounded-lg border bg-white p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Residential Areas */}
          <div className="mb-12">
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              الأحياء السكنية
            </h3>
            <p className="mb-6 text-gray-700">
              الأحياء السكنية في جدة تتنوع بين الفلل الفاخرة والشقق السكنية. نقدم خدمات تنظيف منازل
              شاملة، تنظيف دوري، وخدمات متخصصة مثل تنظيف المفروشات، المسابح، والحدائق. نعرف أن منزلك
              هو مملكتك الخاصة، ونعامله بكل احترام وعناية.
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {residentialAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/jeddah/${area.slug}`}
                  className="group flex items-center gap-3 rounded-lg border bg-white p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Commercial Areas */}
          <div>
            <h3 className="mb-6 text-2xl font-bold text-gray-900">
              المناطق التجارية
            </h3>
            <p className="mb-6 text-gray-700">
              المناطق التجارية تتطلب خدمات تنظيف احترافية تحافظ على الصورة المهنية للأعمال. نقدم
              عقود تنظيف دورية للمكاتب، المحلات، المطاعم، والمنشآت التجارية بجدول مرن يناسب ساعات
              عملك - صباحاً قبل الافتتاح أو مساءً بعد الإغلاق.
            </p>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
              {commercialAreas.map((area) => (
                <Link
                  key={area.slug}
                  href={`/jeddah/${area.slug}`}
                  className="group flex items-center gap-3 rounded-lg border bg-white p-4 transition-all hover:border-primary hover:shadow-md"
                >
                  <MapPin className="h-5 w-5 shrink-0 text-primary" />
                  <span className="font-semibold text-gray-900 transition-colors group-hover:text-primary">
                    {area.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">
              لماذا نُعتبر الأفضل في جميع أحياء جدة؟
            </h2>

            <ul className="space-y-4">
              <li className="leading-relaxed">
                <strong>معرفة محلية عميقة:</strong> أكثر من 10 سنوات من العمل في جدة منحتنا فهماً
                دقيقاً لخصوصية كل حي ومتطلباته. نعرف التحديات المناخية، أنواع البناء السائدة، وتفضيلات
                السكان في كل منطقة.
              </li>
              <li className="leading-relaxed">
                <strong>استجابة سريعة:</strong> لدينا فرق موزعة استراتيجياً في جدة لضمان وصول سريع
                إلى أي حي. في معظم الحالات، يمكننا ترتيب موعد خلال 24 ساعة أو أقل.
              </li>
              <li className="leading-relaxed">
                <strong>بدون رسوم إضافية للمناطق البعيدة:</strong> نخدم جميع أحياء جدة بنفس الأسعار
                العادلة. لا نفرض رسوم إضافية على المناطق الطرفية أو البعيدة.
              </li>
              <li className="leading-relaxed">
                <strong>حلول مخصصة لكل منطقة:</strong> نفهم أن الأحياء الساحلية تحتاج معالجة خاصة
                للرطوبة، والأحياء الجديدة قد تحتاج تنظيف ما بعد البناء، والمناطق التجارية تحتاج
                جدولة مرنة. نقدم حلولاً مصممة خصيصاً.
              </li>
              <li className="leading-relaxed">
                <strong>التزام بالمواعيد:</strong> نحترم وقتك ونلتزم بالمواعيد المتفق عليها. إذا
                واجهنا أي تأخير (وهو نادر)، نخطرك فوراً ونعتذر.
              </li>
            </ul>

            <div className="rounded-lg bg-blue-50 p-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                لم تجد حيك في القائمة؟
              </h3>
              <p className="text-gray-700">
                لا تقلق! القائمة أعلاه تضم الأحياء الرئيسية، لكننا نخدم <strong>جميع</strong> أحياء
                جدة دون استثناء - بما في ذلك الأحياء الجديدة والمناطق الطرفية. تواصل معنا وأخبرنا
                بموقعك، وسنصل إليك بنفس الخدمة الممتازة.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900">
              خدمات شائعة في كل حي
            </h2>

            <p className="leading-relaxed">
              بغض النظر عن الحي الذي تسكن فيه، نقدم جميع خدماتنا بنفس الجودة:
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>تنظيف منازل وفلل شامل</li>
                <li>تنظيف شقق سكنية</li>
                <li>التنظيف العميق</li>
                <li>تنظيف ما بعد البناء</li>
                <li>تنظيف الكنب والمجالس</li>
                <li>تنظيف السجاد والموكيت</li>
                <li>تنظيف الستائر بالبخار</li>
                <li>تنظيف المراتب</li>
              </ul>
              <ul className="list-inside list-disc space-y-2 pr-6">
                <li>تنظيف المطابخ والحمامات</li>
                <li>تنظيف المكيفات</li>
                <li>تنظيف الزجاج والواجهات</li>
                <li>جلي وتلميع الرخام</li>
                <li>تنظيف خزانات المياه</li>
                <li>تنظيف المسابح</li>
                <li>التعقيم والتطهير</li>
                <li>خدمات تنظيف تجارية</li>
              </ul>
            </div>

            <p className="text-lg font-semibold text-primary">
              اكتشف خدماتنا المتخصصة في حيّك - انقر على اسم الحي أعلاه!
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="جاهز لتجربة أفضل خدمة تنظيف في حيّك؟"
        description="أينما كنت في جدة، فريقنا جاهز لخدمتك. تواصل معنا الآن!"
        context={{ page: "جدة" }}
      />
    </>
  );
}



