import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaText?: string;
  ctaLink?: string;
  context?: {
    page?: string;
    service?: string;
    area?: string;
    sector?: string;
  };
}

export function Hero({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  ctaText,
  ctaLink,
  context = {},
}: HeroProps) {
  const whatsappLink = generateWhatsAppLink(site.whatsapp, context);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-primary md:text-base">{subtitle}</p>
              <h1 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl lg:text-4xl">
                {title}
              </h1>
            </div>
            <p className="text-base leading-relaxed text-gray-700">{description}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="default" className="gap-2">
                <a href={`tel:${site.phone}`}>
                  <Phone className="h-4 w-4" />
                  اتصل الآن
                </a>
              </Button>
              <Button asChild size="default" variant="secondary" className="gap-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  واتساب
                </a>
              </Button>
            </div>
            {ctaText && ctaLink && (
              <Button asChild variant="outline" size="default">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            )}
          </div>
          <div className="relative h-[250px] md:h-[350px] lg:h-[400px] order-1 lg:order-2">
            <Image
              src={`/images/${image}`}
              alt={imageAlt}
              fill
              className="rounded-lg object-cover shadow-xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}



