"use client";

import { MessageCircle } from "lucide-react";
import { site } from "@/app/config/site";
import { generateWhatsAppLink } from "@/lib/utils";

interface WhatsAppFloatProps {
  context?: {
    page?: string;
    service?: string;
    area?: string;
  };
}

export function WhatsAppFloat({ context = {} }: WhatsAppFloatProps) {
  const whatsappLink = generateWhatsAppLink(site.whatsapp, context);

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:scale-110 hover:bg-green-600"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}



