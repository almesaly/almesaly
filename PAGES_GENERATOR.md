# مولد الصفحات المتبقية

## الصفحات المكتملة ✅

### الخدمات
- ✅ home-cleaning-jeddah
- ✅ villa-cleaning-jeddah  
- ✅ deep-cleaning
- ✅ upholstery-sofa

### القطاعات
- ✅ offices

### المناطق
- ✅ al-hamra

### الأساسية
- ✅ blog

## الصفحات المتبقية

### خدمات (12 صفحة)
1. apartment-cleaning-jeddah
2. post-construction
3. carpet
4. mattress
5. curtains
6. kitchen-bathroom
7. ac-cleaning
8. glass-facade
9. marble-polishing
10. water-tank
11. pool-cleaning
12. disinfection

### قطاعات (5 صفحات)
1. restaurants
2. hotels
3. schools
4. healthcare
5. warehouses

### مناطق (20 صفحة)
1. ash-shati
2. al-rawdah
3. as-salama
4. al-naeem
5. al-murjan
6. an-nahdah
7. an-nuzha
8. az-zahraa
9. al-safa
10. al-aziziyah
11. al-bawadi
12. an-naseem
13. bani-malik
14. al-khalidiya
15. al-andalus
16. al-hamdaniyah
17. obhur-north
18. obhur-south
19. az-zahra
20. al-ruwais

### مقالات المدونة (3 مقالات)
1. steam-cleaning-guide
2. post-construction-checklist
3. ac-cleaning-maintenance-guide

## كيفية إنشاء الصفحات المتبقية

### 1. للخدمات
انسخ `app/services/home-cleaning-jeddah/page.tsx` واستبدل:
- العنوان والوصف
- الأسئلة الشائعة (FAQs)
- قائمة الخدمات المشمولة
- المحتوى النصي

### 2. للقطاعات  
انسخ `app/sectors/offices/page.tsx` واستبدل:
- اسم القطاع
- FAQs المناسبة للقطاع
- المحتوى والتفاصيل

### 3. للمناطق
انسخ `app/jeddah/al-hamra/page.tsx` واستبدل:
- اسم المنطقة
- نوع المنطقة (ساحلي/سكني/تجاري)
- الخصائص المحلية
- FAQs

### 4. للمقالات
أنشئ مجلد في `app/blog/[slug]/` مع محتوى MDX أو صفحة page.tsx

## نموذج سريع لإنشاء صفحة

```typescript
// مثال: app/services/carpet/page.tsx
import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
// ... imports

export const metadata: Metadata = {
  title: "تنظيف السجاد والموكيت بجدة",
  description: "خدمة تنظيف السجاد...",
  alternates: { canonical: `${site.url}/services/carpet` },
};

const faqs = [
  { question: "...", answer: "..." },
  // 5-8 أسئلة
];

export default function CarpetCleaningPage() {
  return (
    <>
      <Hero 
        title="تنظيف السجاد والموكيت بجدة"
        subtitle="تنظيف السجاد"
        description="..."
        image="carpet cleaning Jeddah.jpg"
        imageAlt="..."
        context={{ service: "تنظيف السجاد" }}
      />
      
      {/* المحتوى 1200-2000 كلمة */}
      
      <FAQ faqs={faqs} />
      <CTASection context={{ service: "تنظيف السجاد" }} />
    </>
  );
}
```

## خطة سريعة

1. **أولوية عالية:** أكمل صفحات الخدمات الرئيسية (12 صفحة)
2. **أولوية متوسطة:** القطاعات (5 صفحات) 
3. **أولوية عادية:** المناطق (20 صفحة) - يمكن إنشاؤها تدريجياً
4. **اختياري:** مقالات المدونة المفصلة

الموقع يعمل الآن مع الصفحات الأساسية. الصفحات المتبقية يمكن إضافتها تدريجياً!


