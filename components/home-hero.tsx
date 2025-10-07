"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";

const slides = [
  {
    image: "home cleaning Jeddah.jpg",
    title: "شركة المثالي للتنظيف - رائدة خدمات النظافة في جدة",
    subtitle: "خدمات تنظيف احترافية",
    description: "نقدم خدمات تنظيف متكاملة للمنازل والفلل والمنشآت بأحدث المعدات وأفضل المواد",
  },
  {
    image: "villa cleaning service.jpg",
    title: "تنظيف الفلل والقصور بمعايير عالمية",
    subtitle: "تنظيف فلل وقصور",
    description: "فريق متخصص في تنظيف الفلل والقصور مع ضمان أعلى مستويات الجودة والاحترافية",
  },
  {
    image: "deep cleaning service.jpg",
    title: "التنظيف العميق - نظافة شاملة حتى أصغر التفاصيل",
    subtitle: "تنظيف عميق شامل",
    description: "تنظيف متعمق لكل زاوية باستخدام أحدث تقنيات التنظيف والتعقيم المعتمدة عالمياً",
  },
  {
    image: "sofa cleaning Jeddah.jpg",
    title: "تنظيف الكنب والمفروشات بالبخار",
    subtitle: "تنظيف مفروشات",
    description: "تنظيف عميق بالبخار للكنب والمجالس مع إزالة البقع والروائح بشكل نهائي",
  },
  {
    image: "office cleaning Jeddah.jpg",
    title: "خدمات تنظيف المكاتب والشركات",
    subtitle: "تنظيف مكاتب وشركات",
    description: "حلول تنظيف متكاملة للمكاتب والشركات لبيئة عمل نظيفة وصحية",
  },
];

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const whatsappLink = generateWhatsAppLink(site.whatsapp, { page: "الرئيسية" });

  // Auto-play slider every 3 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 5 seconds
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container relative mx-auto px-4 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-8 text-white order-2 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-white/20 px-4 py-2 backdrop-blur-sm">
                <p className="text-sm font-semibold md:text-base">
                  {slides[currentSlide].subtitle}
                </p>
              </div>
              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl xl:text-6xl">
                {slides[currentSlide].title}
              </h1>
            </div>
            <p className="text-lg leading-relaxed text-blue-50 md:text-xl">
              {slides[currentSlide].description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                asChild 
                size="lg" 
                className="gap-2 bg-white text-blue-600 hover:bg-blue-50 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-base md:text-lg px-6 py-6"
              >
                <a href={`tel:${site.phone}`}>
                  <Phone className="h-5 w-5" />
                  اتصل الآن: {site.phoneDisplay}
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="gap-2 bg-green-600 text-white hover:bg-green-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-base md:text-lg px-6 py-6"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  واتساب
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="gap-2 bg-blue-500 text-white hover:bg-blue-400 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 text-base md:text-lg px-6 py-6"
              >
                <Link href="/services">
                  اكتشف خدماتنا
                </Link>
              </Button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-3 pt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "w-12 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`الانتقال إلى الشريحة ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image Slider */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[350px] md:h-[450px] lg:h-[550px] xl:h-[600px]">
              {/* Main Image */}
              <div className="relative h-full overflow-hidden rounded-2xl shadow-2xl">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSlide ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={`/images/${slide.image}`}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-blue-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
                aria-label="الشريحة السابقة"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-blue-600 shadow-lg backdrop-blur-sm transition-all hover:bg-white hover:scale-110"
                aria-label="الشريحة التالية"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-blue-400/20 blur-3xl" />
              <div className="absolute -top-6 -left-6 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 50C240 100 480 0 720 50C960 100 1200 0 1440 50V100H0V50Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

