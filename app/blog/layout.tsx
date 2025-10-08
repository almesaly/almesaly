import { Metadata } from "next";
import { site } from "@/app/config/site";

export const metadata: Metadata = {
  title: "المدونة - تجارب حقيقية ونصائح عملية عن التنظيف",
  description:
    "مدونة شركة المثالي - قصص وتجارب حقيقية من سكان جدة، نصائح عملية مجربة، وحلول ذكية لمشاكل التنظيف اليومية.",
  alternates: {
    canonical: `${site.url}/blog`,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

