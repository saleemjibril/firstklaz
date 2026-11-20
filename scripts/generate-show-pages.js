// Runs after `react-scripts build`. Link previews (WhatsApp, X, iMessage, Slack...) read a page's
// HTML without running JavaScript, so every route would otherwise preview with the site-wide
// title and description. For each show this writes build/shows/<slug>/index.html: the normal app
// shell with that show's title, description and poster in its meta tags. The host serves it for
// /shows/<slug>, and the React app then boots on it exactly as on any other page.

const fs = require("fs");
const path = require("path");
const shows = require("../src/data/shows.json");

const SITE_URL = (process.env.SITE_URL || "https://www.firstklaz.net").replace(/\/$/, "");
const BUILD_DIR = path.join(__dirname, "..", "build");

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Keep in sync with formatShowDate in src/data/shows.js.
const formatShowDate = (date) =>
  new Date(`${date}T12:00:00+01:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Lagos",
  });

// e.g. "Saturday 12 December 2026 · 7PM – 12AM · Bali City Park, Abuja"
const describe = (show) => {
  const time = [show.startTime, show.endTime].filter(Boolean).join(" – ");
  const location = [show.venue, show.city].filter(Boolean).join(", ");
  const parts = [show.date && formatShowDate(show.date), time, location].filter(Boolean);
  if (show.soldOut) parts.unshift("Sold out");
  return parts.length ? parts.join(" · ") : "Firstklaz live show";
};

const imageUrl = (show) => {
  if (/^https?:\/\//.test(show.image)) return show.image;
  if (!fs.existsSync(path.join(BUILD_DIR, show.image))) {
    throw new Error(`Poster for "${show.slug}" not found: public${show.image}`);
  }
  return SITE_URL + show.image;
};

const metaTags = (show) => {
  const url = `${SITE_URL}/shows/${show.slug}`;
  const title = show.name;
  const description = describe(show);
  const image = imageUrl(show);
  return [
    `<title>${escapeHtml(`${title} | Firstklaz`)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}"/>`,
    `<link rel="canonical" href="${escapeHtml(url)}"/>`,
    `<meta property="og:type" content="website"/>`,
    `<meta property="og:site_name" content="Firstklaz"/>`,
    `<meta property="og:url" content="${escapeHtml(url)}"/>`,
    `<meta property="og:title" content="${escapeHtml(title)}"/>`,
    `<meta property="og:description" content="${escapeHtml(description)}"/>`,
    `<meta property="og:image" content="${escapeHtml(image)}"/>`,
    `<meta property="og:image:alt" content="${escapeHtml(`${title} poster`)}"/>`,
    `<meta name="twitter:card" content="summary_large_image"/>`,
    `<meta name="twitter:title" content="${escapeHtml(title)}"/>`,
    `<meta name="twitter:description" content="${escapeHtml(description)}"/>`,
    `<meta name="twitter:image" content="${escapeHtml(image)}"/>`,
  ].join("");
};

const template = fs.readFileSync(path.join(BUILD_DIR, "index.html"), "utf8");
if (!template.includes('<meta charset="utf-8"/>')) {
  throw new Error("build/index.html has no charset tag to insert the show meta tags after");
}

// Remove the site-wide tags that each show page replaces.
const shell = template
  .replace(/<title>[\s\S]*?<\/title>/, "")
  .replace(/<meta name="description"[^>]*>/, "")
  .replace(/<meta (property="og:|name="twitter:)[^>]*>/g, "")
  .replace(/<link rel="canonical"[^>]*>/, "");

for (const show of shows) {
  const html = shell.replace(
    '<meta charset="utf-8"/>',
    `<meta charset="utf-8"/>${metaTags(show)}`
  );
  const outDir = path.join(BUILD_DIR, "shows", show.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), html);
}

console.log(`Wrote link-preview pages for ${shows.length} shows.`);
