# 📤 دليل رفع المشروع إلى GitHub

## ✅ ما تم إنجازه

- ✅ تهيئة Git Repository محلياً
- ✅ إضافة جميع الملفات (165 ملف)
- ✅ Commit أولي بنجاح
- ✅ إضافة Remote Repository

---

## 📋 الخطوات المتبقية

### الخطوة 1: إنشاء Repository على GitHub

1. **افتح الرابط التالي:**
   ```
   https://github.com/new
   ```

2. **املأ المعلومات:**
   - **Repository name:** `almesaly`
   - **Description:** `موقع شركة المثالي للتنظيف في جدة - Next.js 14 + TypeScript + Tailwind CSS`
   - **Visibility:** اختر `Public` أو `Private` حسب رغبتك
   - **❌ لا تفعّل:** 
     - ❌ Add a README file (موجود بالفعل)
     - ❌ Add .gitignore (موجود بالفعل)
     - ❌ Choose a license (يمكن إضافته لاحقاً)

3. **اضغط:** `Create repository`

---

### الخطوة 2: رفع المشروع

بعد إنشاء Repository، ارجع إلى Terminal واكتب:

```powershell
git push -u origin main
```

**ملاحظة:** قد يطلب منك GitHub المصادقة:
- استخدم Personal Access Token بدلاً من كلمة المرور
- أو استخدم GitHub Desktop
- أو استخدم SSH Key

---

### إذا طُلب منك المصادقة:

#### الطريقة 1: Personal Access Token (موصى بها)

1. **أنشئ Token:**
   - افتح: https://github.com/settings/tokens/new
   - اختر: `repo` (full control of private repositories)
   - اضغط: `Generate token`
   - **انسخ Token** (سيظهر مرة واحدة فقط!)

2. **استخدم Token بدلاً من Password:**
   ```powershell
   git push -u origin main
   ```
   - Username: `almesaly`
   - Password: `<paste your token here>`

#### الطريقة 2: GitHub CLI

```powershell
# تثبيت GitHub CLI
winget install GitHub.cli

# المصادقة
gh auth login

# الرفع
git push -u origin main
```

#### الطريقة 3: GitHub Desktop

1. حمّل GitHub Desktop: https://desktop.github.com/
2. افتح المشروع في GitHub Desktop
3. اضغط Publish repository

---

## 🎯 بعد الرفع بنجاح

سيكون مشروعك متاحاً على:
```
https://github.com/almesaly/almesaly
```

---

## 🚀 نشر على Vercel (اختياري)

بعد رفع المشروع على GitHub، يمكنك نشره على Vercel:

### الخطوة 1: ربط Vercel بـ GitHub

1. افتح: https://vercel.com/new
2. سجل دخول بحساب GitHub
3. اختر repository: `almesaly/almesaly`

### الخطوة 2: إعدادات النشر

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

### الخطوة 3: Environment Variables

أضف في Vercel:
```
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### الخطوة 4: Deploy

اضغط **Deploy** - سيستغرق 2-3 دقائق

الموقع سيكون متاحاً على:
```
https://almesaly.vercel.app
```

---

## 📝 أوامر Git المفيدة

### للتحديثات المستقبلية:

```powershell
# بعد تعديل الملفات
git add .
git commit -m "وصف التحديثات"
git push
```

### لإنشاء branch جديد:

```powershell
git checkout -b feature-name
git push -u origin feature-name
```

### للتحقق من الحالة:

```powershell
git status
git log --oneline
```

---

## ✅ Checklist قبل النشر النهائي

- [ ] حدّث `app/config/site.ts` بمعلومات الشركة الفعلية
  - [ ] رقم الهاتف
  - [ ] رابط WhatsApp
  - [ ] العنوان الكامل
  - [ ] أوقات العمل

- [ ] راجع جميع الصفحات
- [ ] اختبر النماذج (Contact Form)
- [ ] تحقق من الصور (جميعها موجودة)
- [ ] اختبر على الموبايل
- [ ] تحقق من SEO (titles, descriptions)

---

## 📊 معلومات المشروع

| البند | القيمة |
|-------|--------|
| **عدد الملفات** | 165 |
| **عدد الصفحات** | 73 |
| **إجمالي الكلمات** | ~70,000 |
| **التقنيات** | Next.js 14, TypeScript, Tailwind CSS, shadcn/ui |
| **اللغة** | العربية (RTL) |

---

## 🆘 استكشاف الأخطاء

### مشكلة: "repository not found"
**الحل:** تأكد من إنشاء Repository على GitHub أولاً

### مشكلة: "Permission denied"
**الحل:** استخدم Personal Access Token بدلاً من Password

### مشكلة: "failed to push some refs"
**الحل:** 
```powershell
git pull origin main --rebase
git push -u origin main
```

---

## 📞 الدعم

إذا واجهت أي مشكلة:
1. راجع: https://docs.github.com/
2. أو: https://vercel.com/docs

---

**تاريخ الإنشاء:** 7 أكتوبر 2025  
**الحالة:** ✅ جاهز للرفع على GitHub


