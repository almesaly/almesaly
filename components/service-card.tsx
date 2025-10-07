import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ServiceCard({ title, description, image, link }: ServiceCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={`/images/${image}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <Button asChild variant="link" className="gap-2 p-0">
          <Link href={link}>
            اقرأ المزيد
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}



