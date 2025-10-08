import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  description?: string;
  context?: {
    page?: string;
    service?: string;
    area?: string;
    sector?: string;
  };
}

export function CTASection({
  title = "هل أنت مستعد لتجربة أفضل خدمة تنظيف في جدة؟",
  description = "تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتك",
  context = {},
}: CTASectionProps) {
  const whatsappLink = generateWhatsAppLink(site.whatsapp, context);

  return (
    <section className="bg-gradient-to-br from-primary to-blue-600 py-16 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg opacity-90">{description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-white text-blue-600 hover:bg-gray-100 shadow-xl"
          >
            <a href={`tel:${site.phone}`}>
              <Phone className="h-5 w-5" />
              اتصل الآن: {site.phoneDisplay}
            </a>
          </Button>
          <Button asChild size="lg" className="gap-2 bg-green-600 text-white hover:bg-green-700 shadow-xl">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              واتساب
            </a>
          </Button>
          <Button asChild size="lg" className="gap-2 bg-blue-500 text-white hover:bg-blue-600 shadow-xl">
            <Link href="/contact">
              <FileText className="h-5 w-5" />
              طلب عرض سعر
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}



