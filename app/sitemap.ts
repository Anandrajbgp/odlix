import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://odlix.com";

  const routes = [
    "",
    "/about",
    "/privacy",
    "/terms",
    "/learning",
    "/learning/courses",
    "/learning/packages",
    "/agency",
    "/agency/portfolio",
    "/agency/about",
    "/agency/contact",
    "/tests",
    "/broker",
    "/apps",
    "/mart",
    "/login",
    "/signup",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}

