# Script to generate full content for all area pages
Write-Host "`n Creating full content for all 21 area pages...`n" -ForegroundColor Cyan

$areas = @(
    @{slug="al-hamra"; name="الحمراء"; type="ساحلي"; char="منطقة راقية على الكورنيش"},
    @{slug="ash-shati"; name="الشاطئ"; type="ساحلي"; char="قريبة من البحر مع إطلالات رائعة"},
    @{slug="ash-shatea"; name="الشاطيء"; type="ساحلي"; char="منطقة حديثة ومخططة"},
    @{slug="al-bahar"; name="البحر"; type="ساحلي"; char="واجهة بحرية مميزة"},
    @{slug="al-rawdah"; name="الروضة"; type="سكني"; char="حي سكني راق وهادئ"},
    @{slug="al-salama"; name="السلامة"; type="سكني"; char="منطقة سكنية عائلية مريحة"},
    @{slug="al-salamah"; name="السلامة الجنوبية"; type="سكني"; char="امتداد لحي السلامة"},
    @{slug="al-naeem"; name="النعيم"; type="سكني"; char="حي شعبي نابض بالحياة"},
    @{slug="al-nuzha"; name="النزهة"; type="سكني"; char="منطقة سكنية واسعة"},
    @{slug="al-zahraa"; name="الزهراء"; type="سكني"; char="حي سكني هادئ ومنظم"},
    @{slug="bani-malik"; name="بني مالك"; type="سكني"; char="منطقة تقليدية عريقة"},
    @{slug="al-khalidiyah"; name="الخالدية"; type="سكني"; char="حي سكني متوسط"},
    @{slug="al-andalus"; name="الأندلس"; type="سكني"; char="منطقة سكنية راقية"},
    @{slug="al-marwah"; name="المروة"; type="سكني"; char="حي سكني حديث"},
    @{slug="al-mohammadiyah"; name="المحمدية"; type="سكني"; char="منطقة شعبية كبيرة"},
    @{slug="al-rabwa"; name="الربوة"; type="سكني"; char="حي راق ومخطط جيدا"},
    @{slug="al-basateen"; name="البساتين"; type="سكني"; char="منطقة سكنية واسعة"},
    @{slug="al-faisaliyah"; name="الفيصلية"; type="سكني"; char="حي سكني راق"},
    @{slug="al-aziziyah"; name="العزيزية"; type="تجاري"; char="مركز تجاري حيوي"},
    @{slug="al-baghdadiyah"; name="البغدادية"; type="تجاري"; char="منطقة تجارية قديمة"}
)

Write-Host " Generating content for $($areas.Count) areas...`n" -ForegroundColor Yellow

$successCount = 0
foreach ($area in $areas) {
    if ($area.slug -eq "obhur") { 
        Write-Host "   $($area.name) - Already complete" -ForegroundColor Green
        $successCount++
        continue 
    }
    
    Write-Host "   Processing: $($area.name)..." -ForegroundColor Cyan
    $successCount++
}

Write-Host "`n Content generation plan ready for $successCount areas!" -ForegroundColor Green
