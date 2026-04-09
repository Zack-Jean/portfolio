import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Zack Jean";
  const sub = url.searchParams.get("sub") || "Technical Operations Leader · AI Enablement";

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#ffffff"/>
  <rect x="0" y="0" width="6" height="630" fill="#534AB7"/>
  <text x="80" y="200" font-family="system-ui, sans-serif" font-size="18" fill="#534AB7" letter-spacing="3" text-transform="uppercase">${sub}</text>
  <text x="80" y="300" font-family="system-ui, sans-serif" font-size="64" font-weight="700" fill="#111111" letter-spacing="-2">${title}</text>
  <text x="80" y="520" font-family="system-ui, sans-serif" font-size="24" fill="#666666">zackjean.com</text>
  <rect x="80" y="550" width="60" height="3" fill="#534AB7"/>
</svg>`;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
};