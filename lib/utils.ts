import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppLink(
  phone: string,
  context: { page?: string; service?: string; area?: string }
): string {
  let text = `مرحباً، أرغب بالاستفسار عن خدمات شركة المثالي`;

  if (context.service) {
    text += ` - ${context.service}`;
  }

  if (context.area) {
    text += ` في حي ${context.area}`;
  }

  if (context.page && !context.service) {
    text += ` (${context.page})`;
  }

  return `${phone}?text=${encodeURIComponent(text)}`;
}

export function formatPhoneNumber(phone: string): string {
  // Format +966XXXXXXXXX to a readable format
  return phone.replace(/(\+966)(\d{2})(\d{3})(\d{4})/, "$1 $2 $3 $4");
}



