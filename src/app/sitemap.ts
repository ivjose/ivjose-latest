export const baseUrl: string = process.env.NEXT_WEBSITE_URL || ''; 

export default async function sitemap() {
  const routes = [""].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
