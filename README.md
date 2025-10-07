# شركة المثالي - موقع شركة تنظيف في جدة

موقع ويب احترافي متكامل لشركة المثالي للتنظيف في جدة، مبني باستخدام Next.js 14 و TypeScript و Tailwind CSS.

## 🚀 التقنيات المستخدمة

- **Next.js 14** (App Router)
- **TypeScript** للأمان والكتابة القوية
- **Tailwind CSS** للتصميم
- **shadcn/ui** للمكونات الجاهزة
- **lucide-react** للأيقونات
- **Zod** للتحقق من البيانات
- **React Hook Form** للنماذج

## 📁 هيكل المشروع

```
almesaly/
├── app/
│   ├── layout.tsx                 # التخطيط الأساسي (Arabic RTL)
│   ├── page.tsx                   # الصفحة الرئيسية
│   ├── about/                     # صفحة من نحن
│   ├── contact/                   # صفحة التواصل
│   ├── offers/                    # صفحة العروض والباقات
│   ├── services/                  # مجلد الخدمات
│   │   ├── page.tsx              # صفحة hub الخدمات
│   │   ├── home-cleaning-jeddah/ # خدمة تنظيف المنازل (مثال)
│   │   ├── deep-cleaning/        # خدمة التنظيف العميق (مثال)
│   │   └── upholstery-sofa/      # خدمة تنظيف الكنب (مثال)
│   ├── sectors/                   # مجلد القطاعات التجارية
│   │   ├── page.tsx              # صفحة hub القطاعات
│   │   └── offices/              # قطاع المكاتب (مثال)
│   ├── jeddah/                    # مجلد المناطق في جدة
│   │   ├── page.tsx              # صفحة hub المناطق
│   │   └── al-hamra/             # حي الحمراء (مثال)
│   ├── blog/                      # المدونة (يحتاج إنشاء)
│   ├── api/
│   │   └── contact/route.ts      # API لنموذج التواصل
│   ├── sitemap.ts                 # خريطة الموقع التلقائية
│   ├── robots.ts                  # ملف robots.txt
│   ├── config/
│   │   └── site.ts               # إعدادات الموقع (NAP, خدمات, قطاعات, مناطق)
│   └── globals.css                # الأنماط العامة
│
├── components/
│   ├── ui/                        # مكونات shadcn/ui
│   │   ├── button.tsx
│   │   ├── accordion.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── label.tsx
│   ├── header.tsx                 # الهيدر الثابت
│   ├── footer.tsx                 # الفوتر
│   ├── hero.tsx                   # مكون Hero
│   ├── service-card.tsx           # بطاقة الخدمة
│   ├── faq.tsx                    # الأسئلة الشائعة
│   ├── contact-form.tsx           # نموذج التواصل
│   ├── process-steps.tsx          # خطوات العمل
│   ├── breadcrumbs.tsx            # التنقل التفرعي
│   ├── cta-section.tsx            # قسم CTA
│   ├── whatsapp-float.tsx         # زر واتساب العائم
│   └── schema-injector.tsx        # حقن JSON-LD Schema
│
├── lib/
│   ├── utils.ts                   # دوال مساعدة
│   └── schema.ts                  # دوال توليد Schema.org
│
└── public/
    └── images/                     # الصور (موجودة مسبقاً)
```

## 🛠️ التثبيت والتشغيل

### 1. تثبيت الحزم

```bash
npm install
```

### 2. تشغيل المشروع في وضع التطوير

```bash
npm run dev
```

الموقع سيعمل على: `http://localhost:3000`

### 3. بناء المشروع للإنتاج

```bash
npm run build
npm start
```

## ✅ الصفحات المنجزة

### الصفحات الرئيسية
- ✅ الصفحة الرئيسية (/) - محتوى شامل 2000+ كلمة
- ✅ من نحن (/about)
- ✅ تواصل معنا (/contact)
- ✅ العروض والباقات (/offers)

### صفحات Hub
- ✅ hub الخدمات (/services)
- ✅ hub القطاعات (/sectors)
- ✅ hub المناطق (/jeddah)

### صفحات خدمات (أمثلة منجزة)
- ✅ تنظيف منازل (/services/home-cleaning-jeddah)
- ✅ التنظيف العميق (/services/deep-cleaning)
- ✅ تنظيف الكنب (/services/upholstery-sofa)

### صفحات قطاعات (أمثلة منجزة)
- ✅ تنظيف مكاتب (/sectors/offices)

### صفحات مناطق (أمثلة منجزة)
- ✅ حي الحمراء (/jeddah/al-hamra)

### البنية التحتية
- ✅ Sitemap تلقائي
- ✅ Robots.txt
- ✅ API route للتواصل
- ✅ JSON-LD Schema.org
- ✅ Arabic RTL layout
- ✅ SEO metadata

## 📝 الصفحات المتبقية (يجب إنشاؤها)

### صفحات الخدمات (13 صفحة متبقية)
استخدم الأمثلة الموجودة كنموذج لإنشاء:

1. `/services/villa-cleaning-jeddah` - تنظيف فلل
2. `/services/apartment-cleaning-jeddah` - تنظيف شقق
3. `/services/post-construction` - تنظيف ما بعد البناء
4. `/services/carpet` - تنظيف السجاد
5. `/services/mattress` - تنظيف المراتب
6. `/services/curtains` - تنظيف الستائر
7. `/services/kitchen-bathroom` - تنظيف المطابخ والحمامات
8. `/services/ac-cleaning` - تنظيف المكيفات
9. `/services/glass-facade` - تنظيف الزجاج والواجهات
10. `/services/marble-polishing` - جلي الرخام
11. `/services/water-tank` - تنظيف خزانات المياه
12. `/services/pool-cleaning` - تنظيف المسابح
13. `/services/disinfection` - التعقيم والتطهير

### صفحات القطاعات (5 صفحات متبقية)
استخدم `/sectors/offices` كنموذج:

1. `/sectors/restaurants` - تنظيف مطاعم
2. `/sectors/hotels` - تنظيف فنادق
3. `/sectors/schools` - تنظيف مدارس
4. `/sectors/healthcare` - تنظيف منشآت صحية
5. `/sectors/warehouses` - تنظيف مستودعات

### صفحات المناطق (20 صفحة متبقية)
استخدم `/jeddah/al-hamra` كنموذج:

1. `/jeddah/ash-shati` - الشاطئ
2. `/jeddah/al-rawdah` - الروضة
3. `/jeddah/as-salama` - السلامة
4. `/jeddah/al-naeem` - النعيم
5. `/jeddah/al-murjan` - المرجان
6. `/jeddah/an-nahdah` - النهضة
7. `/jeddah/an-nuzha` - النزهة
8. `/jeddah/az-zahraa` - الزهراء
9. `/jeddah/al-safa` - الصفا
10. `/jeddah/al-aziziyah` - العزيزية
11. `/jeddah/al-bawadi` - البوادي
12. `/jeddah/an-naseem` - النسيم
13. `/jeddah/bani-malik` - بني مالك
14. `/jeddah/al-khalidiya` - الخالدية
15. `/jeddah/al-andalus` - الأندلس
16. `/jeddah/al-hamdaniyah` - الحمدانية
17. `/jeddah/obhur-north` - أبحر الشمالية
18. `/jeddah/obhur-south` - أبحر الجنوبية
19. `/jeddah/az-zahra` - الزهرة
20. `/jeddah/al-ruwais` - الرويس

### المدونة
أنشئ `/app/blog/page.tsx` وثلاث مقالات (يمكن استخدام MDX):

1. `/blog/steam-cleaning-guide` - دليل التنظيف بالبخار (1200-1600 كلمة)
2. `/blog/post-construction-checklist` - قائمة فحص بعد التشطيب (1200-1600 كلمة)
3. `/blog/ac-cleaning-guide` - دليل تنظيف المكيف (1200-1600 كلمة)

## 📋 إرشادات إنشاء الصفحات المتبقية

### لإنشاء صفحة خدمة جديدة:
1. انسخ `/app/services/home-cleaning-jeddah/page.tsx`
2. غيّر Metadata (title, description, canonical URL)
3. عدّل breadcrumbs
4. غيّر محتوى Hero (title, subtitle, description, image)
5. اكتب محتوى عربي شامل (1200-2000 كلمة) حسب نوع الخدمة
6. عدّل FAQs لتناسب الخدمة (5-8 أسئلة)
7. عدّل قائمة الخدمات المشمولة
8. غيّر الروابط المرتبطة في نهاية الصفحة

### لإنشاء صفحة قطاع جديد:
1. انسخ `/app/sectors/offices/page.tsx`
2. اتبع نفس الخطوات أعلاه مع تخصيص المحتوى للقطاع

### لإنشاء صفحة منطقة جديدة:
1. انسخ `/app/jeddah/al-hamra/page.tsx`
2. غيّر اسم المنطقة في كل مكان
3. خصّص المحتوى حسب نوع المنطقة (ساحلي، سكني، تجاري)
4. عدّل السيناريوهات الشائعة لتناسب الحي
5. عدّل الخدمات المناسبة للمنطقة

## 🔧 التخصيص

### تحديث معلومات الشركة (NAP)
عدّل `/app/config/site.ts`:
```typescript
export const site = {
  brand: "شركة المثالي",
  phone: "+966500000000", // ضع رقم الهاتف الفعلي
  whatsapp: "https://wa.me/966500000000", // ضع رابط واتساب الفعلي
  address: {
    full: "العنوان الكامل",
    streetAddress: "اسم الشارع",
    addressLocality: "جدة",
    postalCode: "الرمز البريدي",
    addressCountry: "SA",
  },
  // ...
};
```

### إضافة خدمة جديدة
أضف الخدمة في `/app/config/site.ts`:
```typescript
export const services = [
  // ...
  {
    slug: "new-service-slug",
    name: "اسم الخدمة بالعربية",
    shortDesc: "وصف مختصر",
    image: "service-image.jpg", // يجب أن تكون في /public/images
  },
];
```

## 🎨 التصميم والألوان

الألوان الأساسية معرفة في `/app/globals.css`:
- Primary: Blue (#0891b2)
- Secondary: Gray
- Background: White
- Foreground: Dark Gray

لتغيير الألوان، عدّل متغيرات CSS في `globals.css`.

## 🚦 Core Web Vitals

الموقع مُحسّن لـ Core Web Vitals:
- استخدام `next/image` لتحسين الصور
- Lazy loading للمحتوى تحت الطية
- معدّات optimized
- Font optimization (Google Fonts)

## 📊 SEO

### Metadata
كل صفحة لديها metadata كامل:
- Title
- Description
- Canonical URL
- Open Graph tags
- Twitter Cards

### JSON-LD Schema
- LocalBusiness schema في الصفحة الرئيسية
- Service schema في صفحات الخدمات
- FAQPage schema في جميع الصفحات
- BreadcrumbList في الصفحات العميقة

### Sitemap و Robots
يتم توليدهما تلقائياً من `/app/sitemap.ts` و `/app/robots.ts`

## 📱 التوافق مع الأجهزة

الموقع responsive بالكامل ويعمل على:
- Mobile phones
- Tablets
- Desktop computers

## 🌐 اللغة والاتجاه

الموقع بالعربية بالكامل مع:
- `dir="rtl"` في HTML
- `lang="ar"` في HTML
- خط Tajawal من Google Fonts
- جميع النصوص والمحتوى بالعربية

## 🔒 الأمان

- التحقق من البيانات باستخدام Zod
- Form validation
- Sanitization للمدخلات
- HTTPS (في الإنتاج)

## 📈 التحليلات

يمكن إضافة:
- Google Analytics
- Google Search Console
- Facebook Pixel
- أي أدوات تحليلات أخرى

أضف scripts التحليلات في `/app/layout.tsx`

## 🐛 استكشاف الأخطاء

### إذا واجهت مشاكل في البناء:
```bash
# احذف الملفات المؤقتة
rm -rf .next
rm -rf node_modules
rm package-lock.json

# أعد التثبيت
npm install
npm run build
```

### لفحص الأخطاء:
```bash
npm run lint
```

## 📞 ملاحظات مهمة

1. **الصور**: جميع الصور في `/public/images/` يجب أن تكون بصيغة WebP أو AVIF للأداء الأمثل
2. **المحتوى**: كل صفحة خدمة/قطاع/منطقة يجب أن تحتوي على 1200-2000 كلمة عربية
3. **FAQs**: كل صفحة يجب أن تحتوي على 5-8 أسئلة شائعة مع إجابات 50-80 كلمة
4. **Internal Linking**: تأكد من وجود روابط داخلية بين الصفحات المرتبطة
5. **CTAs**: ضع CTAs كل 300-400 كلمة في المحتوى الطويل

## 🎯 الخطوات التالية

1. ✅ أكمل إنشاء الصفحات المتبقية (13 خدمة + 5 قطاعات + 20 منطقة)
2. ✅ أنشئ صفحة المدونة و 3 مقالات
3. ✅ حدّث معلومات NAP في `site.ts`
4. ⬜ أضف Google Maps embed في صفحة التواصل
5. ⬜ ربط نموذج التواصل بقاعدة بيانات أو email service
6. ⬜ إضافة Google Analytics
7. ⬜ إضافة WhatsApp Business API (اختياري)
8. ⬜ اختبار الموقع على أجهزة مختلفة
9. ⬜ نشر الموقع على Vercel أو أي hosting

## 📄 الترخيص

هذا المشروع خاص بشركة المثالي للتنظيف في جدة.

---

تم البناء بـ ❤️ باستخدام Next.js 14 و TypeScript



