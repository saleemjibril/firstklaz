import LagosStreetShow from "../img/360098092_18293309251114413_2192173551435584222_n.jpg";
import FAndFPh from "../img/firstKlaz-and-friends-ph.jpg";
import FAndFAbj from "../img/firstKlaz-and-friends-abj.jpg";
import AbujaStreetShow from "../img/351750477_1003886440969838_7863322309839893458_n.jpg";
import FandFKd from "../img/f&f-kaduna.jpg";
import FandFJos from "../img/firstklaz-and-friends-jos.jpg";
import FandFLagos from "../img/firstklaz-and-friends-lagos.jpg";
import FandFIbadan from "../img/firstklaz-and-friends-ibadan.jpg";
import FAndFAbjDec from "../img/firstklaz-and-friends-abuja-dec.jpg";

// Each show gets a page at /shows/<slug>, in this order on /shows (newest first).
//
// Optional fields for upcoming shows:
//   date               "YYYY-MM-DD", used to show the day and to retire the show once it's over
//   venue, city, startTime, endTime
//   ticketUrl          where "Get tickets" links to
//   gruveEventAddress  Gruve event address; when set, tickets are sold in-page via the Gruve widget
//   soldOut            true once tickets are gone
export const shows = [
  {
    slug: "firstklaz-and-friends-abuja-2026",
    name: "Firstklaz & Friends Abuja",
    image: FAndFAbjDec,
    date: "2026-12-12",
    venue: "Bali City Park",
    city: "Abuja",
    startTime: "7PM",
    endTime: "12AM",
    ticketUrl: "https://gruve.events",
    gruveEventAddress: "0bfc5320f82777efbd744d70eb916eb92105a1de",
  },
  {
    slug: "dejavu-experience-abuja",
    name: "Firstklaz & Friends: Dejavu Experience Abuja",
    image:
      "https://res.cloudinary.com/thewebplug/image/upload/v1761082915/SaveClip.App_567401549_18531389671040629_8142344560729940894_n_wwbka0.jpg",
    city: "Abuja",
    soldOut: true,
  },
  {
    slug: "dejavu-listening-party-romies-block",
    name: "Dejavu Listening Party - Romies Block",
    image:
      "https://res.cloudinary.com/thewebplug/image/upload/v1761082919/SaveClip.App_565352714_17927529033132752_2591396414180765074_n_jjwspy.jpg",
    soldOut: true,
  },
  {
    slug: "dejavu-experience-lagos",
    name: "Firstklaz & Friends: Dejavu Experience Lagos",
    image:
      "https://res.cloudinary.com/thewebplug/image/upload/v1761082917/SaveClip.App_563560142_18413947876114413_3655619628076750973_n_kel8wz.jpg",
    city: "Lagos",
    soldOut: true,
  },
  {
    slug: "firstklaz-and-friends-jos",
    name: "Firstklaz & Friends Jos",
    image: FandFJos,
    city: "Jos",
    soldOut: true,
  },
  {
    slug: "firstklaz-and-friends-lagos",
    name: "Firstklaz & Friends Lagos",
    image: FandFLagos,
    city: "Lagos",
    soldOut: true,
  },
  {
    slug: "firstklaz-and-friends-ibadan",
    name: "Firstklaz & Friends Ibadan",
    image: FandFIbadan,
    city: "Ibadan",
    soldOut: true,
  },
  {
    slug: "firstklaz-and-friends-kaduna",
    name: "Firstklaz & Friends Kaduna",
    image: FandFKd,
    city: "Kaduna",
    soldOut: true,
  },
  {
    slug: "firstklaz-and-friends-port-harcourt",
    name: "Firstklaz & Friends PortHarcourt",
    image: FAndFPh,
    city: "Port Harcourt",
    soldOut: true,
  },
  {
    slug: "firstklaz-and-friends-abuja",
    name: "Firstklaz & Friends Abuja",
    image: FAndFAbj,
    city: "Abuja",
    soldOut: true,
  },
  {
    slug: "club-tour-lagos",
    name: "Firstklaz Club Tour Lagos",
    image: LagosStreetShow,
    city: "Lagos",
    soldOut: true,
  },
  {
    slug: "street-show-abuja",
    name: "Firstklaz Street Show Abuja",
    image: AbujaStreetShow,
    city: "Abuja",
    soldOut: true,
  },
];

export const findShow = (slug) => shows.find((show) => show.slug === slug);

// Shows are in Nigeria (WAT, UTC+1) and can run past midnight,
// so a show counts as over at 6AM the morning after its date.
const ONE_DAY = 24 * 60 * 60 * 1000;

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
