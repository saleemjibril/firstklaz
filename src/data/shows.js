import shows from "./shows.json";

// Show data lives in shows.json so the build script (scripts/generate-show-pages.js) can read
// it too: that script writes a page per show with link-preview tags for WhatsApp, X, etc.
//
// Each show gets a page at /shows/<slug>, in the order listed on /shows (newest first).
//   image              poster: "/shows/<slug>.jpg" in public/shows/, or a full https:// URL
// Optional fields for upcoming shows:
//   date               "YYYY-MM-DD", used to show the day and to retire the show once it's over
//   venue, city, startTime, endTime
//   ticketUrl          where "Get tickets" links to
//   gruveEventAddress  Gruve event address; when set, tickets are sold in-page via the Gruve widget
//   soldOut            true once tickets are gone
export { shows };

export const findShow = (slug) => shows.find((show) => show.slug === slug);

const ONE_DAY = 24 * 60 * 60 * 1000;

// Shows are in Nigeria (WAT, UTC+1) and can run past midnight,
// so a show counts as over at 6AM the morning after its date.
export const isPast = (show, now = new Date()) => {
  if (!show.date) return false;
  const showDay = new Date(`${show.date}T06:00:00+01:00`).getTime();
  return now.getTime() > showDay + ONE_DAY;
};

export const showStatus = (show, now) => {
  if (show.soldOut) return "Sold out";
  if (isPast(show, now)) return "Past show";
  return "Get tickets";
};

export const formatShowDate = (date) =>
  new Date(`${date}T12:00:00+01:00`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Lagos",
  });
