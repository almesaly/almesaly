# PowerShell Script to Generate All Remaining Pages
# شركة المثالي - مولد الصفحات التلقائي

Write-Host "🚀 بدء إنشاء جميع الصفحات المتبقية..." -ForegroundColor Green

# Service Page Template Function
function New-ServicePage {
    param($slug, $title, $description, $image)
    
    $content = @"
import { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProcessSteps } from "@/components/process-steps";
import { FAQ } from "@/components/faq";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CTASection } from "@/components/cta-section";
import { SchemaInjector } from "@/components/schema-injector";
import { site } from "@/app/config/site";
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "$title",
  description: "$description",
  alternates: { canonical: ```${site.url}/services/$slug``` },
};

const breadcrumbs = [
  { name: "الخدمات", url: "/services" },
  { name: "$title", url: "/services/$slug" },
];

const faqs = [
  { question: "ما هي مدة الخدمة؟", answer: "تعتمد المدة على حجم المكان وحالته. سنقدم لك تقديراً دقيقاً بعد المعاينة." },
  { question: "هل المواد المستخدمة آمنة؟", answer: "نعم، نستخدم مواد آمنة معتمدة ومطابقة للمواصفات الصحية السعودية." },
  { question: "هل تقدمون ضمان؟", answer: "نعم، نقدم ضمان رضا العميل 100%. إذا لم تكن راضياً، سنعيد الخدمة دون رسوم إضافية." },
];

export default function Page() {
  const schemas = [
    generateServiceSchema("$title", "$description"),
    generateFAQSchema(faqs),
    generateBreadcrumbSchema([
      { name: "الرئيسية", url: site.url },
      { name: "الخدمات", url: ```${site.url}/services``` },
      { name: "$title", url: ```${site.url}/services/$slug``` },
    ]),
  ];

  return (
    <>
      <SchemaInjector schemas={schemas} />
      <Breadcrumbs items={breadcrumbs} />
      <Hero
        title="$title"
        subtitle="$title"
        description="$description"
        image="$image"
        imageAlt="$title - شركة المثالي"
        context={{ service: "$title" }}
      />
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl space-y-6 text-gray-700">
            <h2 className="text-3xl font-bold text-gray-900">$title في جدة</h2>
            <p className="text-lg leading-relaxed">
              نقدم خدمة $title احترافية في جدة بأعلى معايير الجودة والأمان. فريقنا المتخصص يستخدم أحدث المعدات والمواد الآمنة لضمان نتائج ممتازة.
            </p>
            <p className="leading-relaxed">
              سواء كنت تحتاج خدمة لمرة واحدة أو عقد دوري، نوفر لك حلولاً مرنة تناسب احتياجاتك وميزانيتك. تواصل معنا الآن للحصول على عرض سعر مجاني.
            </p>
          </div>
        </div>
      </section>
      <ProcessSteps />
      <CTASection context={{ service: "$title" }} />
      <FAQ faqs={faqs} />
    </>
  );
}
"@
    
    $path = "app\services\$slug\page.tsx"
    $content | Out-File -FilePath $path -Encoding UTF8
    Write-Host "✅ تم إنشاء: $path" -ForegroundColor Cyan
}

# Service pages data
$services = @(
    @{slug="apartment-cleaning-jeddah"; title="تنظيف شقق بجدة"; desc="خدمة تنظيف شقق احترافية في جدة"; image="apartment cleaning.jpg"},
    @{slug="post-construction"; title="تنظيف ما بعد البناء"; desc="إزالة مخلفات البناء والتشطيب"; image="post construction cleaning.jpg"},
    @{slug="carpet"; title="تنظيف السجاد والموكيت"; desc="غسيل وتعقيم السجاد بأحدث المعدات"; image="carpet cleaning Jeddah.jpg"},
    @{slug="mattress"; title="تنظيف وتعقيم المراتب"; desc="تنظيف صحي للمراتب والتخلص من العث"; image="mattress cleaning.jpg"},
    @{slug="curtains"; title="تنظيف الستائر بالبخار"; desc="تنظيف وتعقيم الستائر دون فكها"; image="curtain cleaning.jpg"},
    @{slug="kitchen-bathroom"; title="تنظيف المطابخ والحمامات"; desc="تنظيف متخصص وتعقيم كامل"; image="kitchen cleaning Jeddah.jpg"},
    @{slug="ac-cleaning"; title="تنظيف المكيفات"; desc="تنظيف الفلاتر والكويل والدكتات"; image="cleaning services Jeddah.jpg"},
    @{slug="glass-facade"; title="تنظيف الزجاج والواجهات"; desc="تنظيف الواجهات العالية والزجاج"; image="window cleaning Jeddah.jpg"},
    @{slug="marble-polishing"; title="جلي وتلميع الرخام"; desc="جلي وتلميع الرخام والأرضيات"; image="marble cleaning.jpg"},
    @{slug="water-tank"; title="تنظيف خزانات المياه"; desc="تنظيف وتعقيم الخزانات والأنابيب"; image="water tank cleaning.jpg"},
    @{slug="pool-cleaning"; title="تنظيف المسابح"; desc="صيانة ونظافة المسابح المنزلية"; image="cleaning services Jeddah.jpg"},
    @{slug="disinfection"; title="التعقيم والتطهير"; desc="خدمات التعقيم الشامل والتطهير"; image="disinfecting service.jpg"}
)

Write-Host "`n📄 إنشاء صفحات الخدمات..." -ForegroundColor Yellow
foreach ($service in $services) {
    New-ServicePage -slug $service.slug -title $service.title -description $service.desc -image $service.image
}

Write-Host "`n✨ تم إنشاء جميع الصفحات بنجاح!" -ForegroundColor Green
Write-Host "📊 الإحصائيات:" -ForegroundColor Yellow
Write-Host "   - صفحات الخدمات: 12" -ForegroundColor Cyan
Write-Host "`n💡 لإكمال باقي الصفحات (القطاعات والمناطق)، استخدم نفس الطريقة" -ForegroundColor Yellow
"@


