You are a senior full-stack engineer AND Arabic UX copywriter. 
Build a production-ready, Arabic-only local-SEO website for “almesaly.com” (Brand: "شركة المثالي") targeting Jeddah.

=== Tech & Setup ===
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + shadcn/ui + lucide-react
- Arabic only: html lang="ar" dir="rtl"; NO i18n router. One locale (ar-SA). 
- next/metadata SEO; generate sitemap.xml, robots.txt, canonical, OG/Twitter.
- Performance: next/image (webp/avif), lazy loading, prefetch; Core Web Vitals budgets (LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1).
- ESLint + Prettier; absolute imports; local Arabic font (Tajawal) self-hosted.
- Create app/config/site.ts with NAP placeholders:
  export const site = {
    brand: "شركة المثالي",
    phone: "TBD", // E.164 e.g., +9665XXXXXXXX
    whatsapp: "TBD", // e.g., https://wa.me/9665XXXXXXXX
    address: {
      full: "TBD",
      streetAddress: "TBD",
      addressLocality: "جدة",
      postalCode: "TBD",
      addressCountry: "SA"
    },
    hours: [
      { day:"Monday", opens:"00:00", closes:"23:59" },
      { day:"Tuesday", opens:"00:00", closes:"23:59" },
      { day:"Wednesday", opens:"00:00", closes:"23:59" },
      { day:"Thursday", opens:"00:00", closes:"23:59" },
      { day:"Friday", opens:"00:00", closes:"23:59" },
      { day:"Saturday", opens:"00:00", closes:"23:59" },
      { day:"Sunday", opens:"00:00", closes:"23:59" }
    ]
  };

=== Global UI ===
- Sticky top bar: tel:PHONE + WhatsApp CTA (persistent on all pages).
- Header: الرئيسية، الخدمات، القطاعات (تجاري)، المناطق التي نخدمها، العروض والباقات، المدونة، تواصل.
- Footer: NAP من config + خريطة مصغّرة + روابط سريعة + زر واتساب.
- Floating <WhatsAppFloat> يقرأ السياق (اسم الصفحة/الخدمة/الحي) ويُنشئ prefill نصي.

=== Content Rules (CRITICAL) ===
For EVERY page below (unless specified), generate *Arabic human copy 1200–2000 words*, people-first and locally-relevant to Jeddah. 
- Write like a local expert; avoid keyword stuffing; short paragraphs (≤3 lines), bullet lists, active voice.
- Structure per page:
  H1 includes “بجدة”.
  Intro (50–80 words): pain + promise + primary CTA (Call/WhatsApp).
  H2 sections:
   1) لماذا تختارنا؟
   2) ما الذي تتضمنه الخدمة؟ (نطاق العمل والأدوات والمواد)
   3) خطواتنا (معاينة → خطة → تنفيذ → متابعة)
   4) المدة والتسعير بعوامل واضحة (دون أرقام ثابتة؛ نطاقات وعوامل)
   5) نصائح قبل/بعد الخدمة
   6) الضمان ومعايير السلامة
   7) الأسئلة الشائعة (5–8 أسئلة، كل إجابة 50–80 كلمة)
- *FAQPage JSON-LD* لكل صفحة خدمة/منطقة/قطاع.
- Internal links: من كل صفحة خدمة إلى 2–3 خدمات مرتبطة + العودة إلى Hub.
- Insert CTA blocks (اتصال/واتساب/نموذج) كل ~300–400 كلمة.

=== Media (use ONLY /public/images) ===
- Provide semantic filenames and add Arabic ALT with local context:
  jeddah-cleaning-hero-team.webp, deep-clean-kitchen-jeddah.webp,
  sofa-steam-cleaning.webp, carpet-shampooing.webp, mattress-sanitizing.webp,
  curtains-steam.webp, ac-coil-cleaning.webp, duct-cleaning.webp,
  facade-glass-highrise.webp, marble-polishing-machine.webp,
  water-tank-clean.webp, pool-cleaning-kit.webp.
- Use next/image, webp/avif, lazy below the fold.

=== Schema (JSON-LD via <SchemaInjector/>) ===
- Home: LocalBusiness (name, telephone, PostalAddress, openingHoursSpecification, areaServed:["Jeddah", neighborhoods in Arabic]).
- Service pages: Service + FAQPage (+ Offer if listing packages).
- B2B pages: LocalBusiness/Organization + Service + FAQPage.
- Area pages: LocalBusiness with areaServed = الحي.
- Blog posts: Article. 
- BreadcrumbList + canonical on deep pages.

=== Routes (App Router) ===
- / (Home, long-form 1200–2000 words)
- /about
- /services (hub) + child routes (ALL long-form 1200–2000 words):
  - /services/home-cleaning-jeddah         — تنظيف منازل بجدة
  - /services/villa-cleaning-jeddah        — تنظيف فلل بجدة
  - /services/apartment-cleaning-jeddah    — تنظيف شقق بجدة
  - /services/deep-cleaning                — التنظيف العميق بجدة
  - /services/post-construction            — تنظيف ما بعد البناء/التشطيب
  - /services/upholstery-sofa              — تنظيف الكنب والمجالس
  - /services/carpet                       — تنظيف السجاد والموكيت
  - /services/mattress                     — تنظيف وتعقيم المراتب
  - /services/curtains                     — تنظيف الستائر بالبخار
  - /services/kitchen-bathroom             — تنظيف المطابخ والحمّامات
  - /services/ac-cleaning                  — تنظيف المكيفات (فلاتر/كويل/دكت)
  - /services/glass-facade                 — تنظيف الزجاج والواجهات العالية
  - /services/marble-polishing             — جلي وتلميع الرخام والأرضيات
  - /services/water-tank                   — تنظيف خزانات المياه وتعقيم الأنابيب
  - /services/pool-cleaning                — تنظيف المسابح
  - /services/disinfection                 — التعقيم والتطهير
- /sectors (hub) + child routes (each 1200–1600 words):
  - /sectors/offices        — تنظيف مكاتب وشركات
  - /sectors/restaurants    — تنظيف مطاعم وكافيهات
  - /sectors/hotels         — تنظيف فنادق وشقق فندقية
  - /sectors/schools        — تنظيف مدارس ومؤسسات تعليمية
  - /sectors/healthcare     — تنظيف منشآت رعاية صحية وعيادات
  - /sectors/warehouses     — تنظيف مستودعات ومنشآت صناعية
- /jeddah (Areas hub) + area pages (each 1200–1600 words, Arabic headings, EN slugs):
  - al-hamra, ash-shati, al-rawdah, as-salama, al-naeem, al-murjan,
    an-nahdah, an-nuzha, az-zahraa, al-safa, al-aziziyah, al-bawadi,
    an-naseem, bani-malik, al-khalidiya, al-andalus, al-hamdaniyah,
    obhur-north, obhur-south, az-zahra, al-ruwais (you may add more)
  - Each area page: intro محلي، سيناريوهات شائعة، وقت الاستجابة، روابط لخدمات مناسبة (واجهات/عميق/مفروشات)، FAQ + CTA.
- /offers (packages & price-range snippets; 1200–1600 words + FAQ)
- /blog (MDX, seed 3 long posts 1200–1600 words: 
   تنظيف بالبخار، قائمة فحص بعد التشطيب، دليل تنظيف المكيف)
- /contact (نموذج قصير + واتساب + خريطة + NAP + schema)

=== Components ===
- <Hero>, <ServiceCard>, <ProcessSteps>, <ReviewCard>, <FAQ>, <ContactForm>, 
  <WhatsAppFloat>, <AreaGrid>, <Breadcrumbs>, <SchemaInjector>
- ProcessSteps: 4-step flow (معاينة → خطة → تنفيذ → متابعة).
- ContactForm (zod): name, phone, area, service, date/time, message, file upload → API route logs lead + thank-you page with CTA.
- Breadcrumbs + structured data.
- Reusable CTA sections.

=== Titles/Meta (Arabic) ===
- Home:   "شركة تنظيف بجدة — شركة المثالي | تنظيف عميق وتعقيم ومفروشات"
- Service:"<اسم الخدمة> بجدة | فريق مختص وضمان — شركة المثالي"
- Sector: "<القطاع> — خدمات تنظيف احترافية في جدة | شركة المثالي"
- Area:   "شركة تنظيف بحي <الحي> جدة — خدمة فورية وأسعار واضحة"
- Offers: "عروض وباقات تنظيف بجدة — شركة المثالي"
- Contact:"تواصل معنا — شركة المثالي | جدة"

=== Internal Linking & Silo ===
- From Home: link to 6 أبرز خدمات + قطاعات + مناطق.
- From each Service: cross-link 2–3 خدمات مرتبطة (مثلاً: كنب ← سجاد/ستائر)، والعودة إلى /services.
- From Area pages: link لخدمات مناسبة للحي (واجهات للأحياء الساحلية، عميق بعد التشطيب للأحياء الجديدة).
- Blog posts link back to relevant services.

=== QA Checklist ===
- Each AR page meets *1200–2000 words*. No repetition/fluff; people-first.
- FAQPage JSON-LD valid; LocalBusiness/Service schema present.
- CTAs every ~300–400 words (اتصال/واتساب/نموذج).
- Images have Arabic ALT + compressed webp/avif.
- Lighthouse > 90; Core Web Vitals within budget.
- next build passes with zero TS errors.