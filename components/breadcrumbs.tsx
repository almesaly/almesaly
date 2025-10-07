import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-600 transition-colors hover:text-primary"
            >
              الرئيسية
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <ChevronLeft className="h-4 w-4 text-gray-400" />
              {index === items.length - 1 ? (
                <span className="font-medium text-gray-900">{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="text-gray-600 transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}



