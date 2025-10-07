import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, MessageCircle, Clock } from "lucide-react";
import { site, services, sectors } from "@/app/config/site";
import { formatPhoneNumber } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt={site.brand}
                width={60}
                height={60}
                className="h-14 w-14 rounded-lg bg-white p-1"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{site.brand}</h3>
                <p className="text-sm text-gray-400">للتنظيف في جدة</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              شركة رائدة في مجال خدمات التنظيف الاحترافية في جدة. نقدم خدمات
              تنظيف متكاملة للمنازل والفلل والشركات بأعلى معايير الجودة.
            </p>
            <div className="flex gap-4">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white transition-colors hover:bg-green-600"
                aria-label="واتساب"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links - Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">خدماتنا</h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 8).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Sectors */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">القطاعات</h3>
            <ul className="space-y-2 text-sm">
              {sectors.map((sector) => (
                <li key={sector.slug}>
                  <Link
                    href={`/sectors/${sector.slug}`}
                    className="transition-colors hover:text-primary"
                  >
                    {sector.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/about" className="transition-colors hover:text-primary">
                  من نحن
                </Link>
              </li>
              <li>
                <Link href="/offers" className="transition-colors hover:text-primary">
                  العروض والباقات
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-primary">
                  المدونة
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">تواصل معنا</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <a
                  href={`tel:${site.phone}`}
                  className="transition-colors hover:text-primary"
                >
                  {formatPhoneNumber(site.phone)}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>{site.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span>متاحون على مدار الساعة، طوال أيام الأسبوع</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {site.brand}. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}


