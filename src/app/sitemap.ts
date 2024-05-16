// App's External Imports
import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      priority: 1.0,
      lastModified: new Date(),
      changeFrequency: "weekly",
      url: String(process.env.NEXT_PUBLIC_BASE_URL),
    },
    {
      priority: 0.9,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: String(`${process.env.NEXT_PUBLIC_BASE_URL}/terms`),
    },
    {
      priority: 0.9,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: String(`${process.env.NEXT_PUBLIC_BASE_URL}/privacy`),
    },
    {
      priority: 0.9,
      lastModified: new Date(),
      changeFrequency: "monthly",
      url: String(`${process.env.NEXT_PUBLIC_BASE_URL}/cookies`),
    },
  ];
};

export default sitemap;
