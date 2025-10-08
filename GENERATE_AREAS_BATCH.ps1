# سكريبت لتوليد محتوى صفحات المناطق دفعة واحدة
# Areas Pages Batch Generator

Write-Host "`n=== توليد محتوى صفحات المناطق ===" -ForegroundColor Green

$areas = @(
    @{slug="ash-shatea"; name="الشاطيء"; type="ساحلي"; priority=1},
    @{slug="al-salama"; name="السلامة"; type="سكني"; priority=2},
    @{slug="al-naeem"; name="النعيم"; type="سكني"; priority=2},
    @{slug="al-nuzha"; name="النزهة"; type="سكني"; priority=2},
    @{slug="al-zahraa"; name="الزهراء"; type="سكني"; priority=2},
    @{slug="al-marwah"; name="المروة"; type="سكني"; priority=2},
    @{slug="al-khalidiyah"; name="الخالدية"; type="سكني"; priority=2},
    @{slug="al-andalus"; name="الأندلس"; type="سكني"; priority=2},
    @{slug="al-mohammadiyah"; name="المحمدية"; type="سكني"; priority=3},
    @{slug="al-rabwa"; name="الربوة"; type="سكني"; priority=3},
    @{slug="bani-malik"; name="بني مالك"; type="سكني"; priority=3},
    @{slug="al-basateen"; name="البساتين"; type="سكني"; priority=3},
    @{slug="al-faisaliyah"; name="الفيصلية"; type="سكني"; priority=3},
    @{slug="al-salamah"; name="السلامة الجنوبية"; type="سكني"; priority=3},
    @{slug="al-aziziyah"; name="العزيزية"; type="تجاري"; priority=4},
    @{slug="al-baghdadiyah"; name="البغدادية"; type="تجاري"; priority=4}
)

Write-Host "`nعدد الصفحات: $($areas.Count)" -ForegroundColor Cyan
Write-Host "سيتم توليد محتوى كامل (1200-1500 كلمة) لكل صفحة`n" -ForegroundColor Yellow

foreach ($area in $areas) {
    Write-Host "📝 جاري العمل على: $($area.name) ($($area.slug))..." -ForegroundColor White
}

Write-Host "`n✅ تم تحديد الصفحات المطلوبة!" -ForegroundColor Green
Write-Host "`n⚠️  ملاحظة: سيتم إنشاء المحتوى يدوياً لضمان الجودة" -ForegroundColor Yellow

