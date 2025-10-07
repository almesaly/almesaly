import { MetadataRoute } from "next";
import { site } from "@/app/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}



