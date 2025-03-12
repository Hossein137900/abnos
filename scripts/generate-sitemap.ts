import { writeFileSync } from "fs";
import { resolve } from "path";

const baseUrl = "https://abnoosjam.com";

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/products", priority: "0.9", changefreq: "weekly" },
  { url: "/blogs", priority: "0.8", changefreq: "weekly" },
  { url: "/contact", priority: "0.7", changefreq: "monthly" },
  { url: "/products/tempered-glasses", priority: "0.8", changefreq: "monthly" },
  {
    url: "/products/Double-glazed-glass",
    priority: "0.8",
    changefreq: "monthly",
  },
  { url: "/products/aminated-glasses", priority: "0.8", changefreq: "monthly" },
  {
    url: "/products/digital-printin-on-glasses",
    priority: "0.7",
    changefreq: "monthly",
  },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <priority>${page.priority}</priority>
      <changefreq>${page.changefreq}</changefreq>
    </url>
  `
    )
    .join("")}
</urlset>`;

writeFileSync(resolve("./public/sitemap.xml"), sitemap);
