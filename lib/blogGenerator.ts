interface BlogSchemaProps {
  title: string;
  url: string;
  images: string[];
  sections: {
    heading: string;
    content: string;
    images?: string[];
    lists?: string[];
  }[];
}

export function generateBlogSchema(blogData: BlogSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.abnos.vercel.app/${blogData.url}`,
    },
    headline: blogData.title,
    image: blogData.images,
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: "Abnos",
      url: "https://www.abnos.vercel.app/",
    },
    publisher: {
      "@type": "Organization",
      name: "Abnos",
      logo: {
        "@type": "ImageObject",
        url: "https://www.abnos.vercel.app/",
      },
    },
    articleBody: blogData.sections.map((section) => section.content).join(" "),
  };
}
