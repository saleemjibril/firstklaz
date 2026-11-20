import { Component, lazy, Suspense, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { findShow, formatShowDate, isPast } from "../data/shows";
import NotFound from "../pages/NotFound";

// The Gruve checkout widget is ~330 KB, so it only loads on pages that sell tickets through it.
const GruveEventWidgets = lazy(() =>
  import("@gruve/echo").then((module) => ({
    default: module.GruveEventWidgets,
  }))
);

// If the widget fails to load (e.g. a flaky connection), show the plain ticket link
// instead of letting the error take down the whole page.
class WidgetBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function Tickets({ show }) {
  if (show.soldOut) return <div className="show__status">Sold out</div>;
  if (isPast(show)) return <div className="show__status">This show has ended</div>;

  const link = show.ticketUrl ? (
    <a
      className="show__tickets"
      href={show.ticketUrl}
      target="_blank"
      rel="noreferrer"
    >
      Get tickets
    </a>
  ) : null;

  if (!show.gruveEventAddress) return link;

  // Passing our own button as children (instead of config.displayText) makes the widget use
  // the site's button style; clicking it opens Gruve's checkout. themeColor/color style the
  // buttons inside that checkout window.
  return (
    <WidgetBoundary fallback={link}>
      <Suspense fallback={null}>
        <GruveEventWidgets
          eventAddress={show.gruveEventAddress}
          config={{ themeColor: "#000000", color: "#ffffff" }}
        >
          <button type="button" className="show__tickets">
            Buy Ticket
          </button>
        </GruveEventWidgets>
      </Suspense>
    </WidgetBoundary>
  );
}

export default function ShowDetail() {
  const { slug } = useParams();
  const show = findShow(slug);

  useEffect(() => {
    if (show) document.title = `${show.name} | Firstklaz`;
  }, [show]);

  if (!show) return <NotFound />;

  const time = [show.startTime, show.endTime].filter(Boolean).join(" – ");

  return (
    <div className="show">
      <Link to="/shows" className="show__back">
        ← All shows
      </Link>
      <div className="show__inner">
        <img className="show__poster" src={show.image} alt={`${show.name} poster`} />
        <div className="show__details">
          <h1 className="show__title">{show.name}</h1>
          <dl className="show__facts">
            {show.date && (
              <div>
                <dt>Date</dt>
                <dd>{formatShowDate(show.date)}</dd>
              </div>
            )}
            {time && (
              <div>
                <dt>Time</dt>
                <dd>{time}</dd>
              </div>
            )}
            {(show.venue || show.city) && (
              <div>
                <dt>Location</dt>
                <dd>{[show.venue, show.city].filter(Boolean).join(", ")}</dd>
              </div>
            )}
          </dl>
          <Tickets show={show} />
        </div>
      </div>
    </div>
  );
}
