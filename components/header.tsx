"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/app/config/site";
import { formatPhoneNumber } from "@/lib/utils";

const navigation = [
  { name: "الرئيسية", href: "/" },
  { name: "الخدمات", href: "/services" },
  { name: "القطاعات التجارية", href: "/sectors" },
  { name: "المناطق", href: "/jeddah" },
  { name: "العروض والباقات", href: "/offers" },
  { name: "المدونة", href: "/blog" },
  { name: "من نحن", href: "/about" },
  { name: "تواصل معنا", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white shadow-sm">
      {/* Top Bar */}
      <div className="border-b bg-primary text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 px-4 py-2 text-sm">
          <a
            href={`tel:${site.phone}`}
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Phone className="h-4 w-4" />
            {formatPhoneNumber(site.phone)}
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <MessageCircle className="h-4 w-4" />
            تواصل عبر واتساب
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={site.brand}
              width={50}
              height={50}
              className="h-12 w-12"
              priority
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gray-900">{site.brand}</span>
              <span className="text-xs text-gray-600">للتنظيف في جدة</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-primary"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">احصل على عرض سعر</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t py-4 lg:hidden">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button asChild className="w-full">
                  <Link href="/contact">احصل على عرض سعر</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


