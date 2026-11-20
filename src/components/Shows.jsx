import { Link } from "react-router-dom";
import Slider from "./Slider";
import { shows, showStatus } from "../data/shows";

export default function Shows() {
  return (
    <div className="music">
      <Slider className="music_slider" innerClassName="music_inner">
        {shows.map((show) => (
          <Link
            key={show.slug}
            to={`/shows/${show.slug}`}
            className="slider_item"
          >
            <img
              className="music_artwork shows_image"
              src={show.image}
              alt={show.name}
            />
            <div className="music_name">{show.name}</div>
            <button className="music_button" tabIndex={-1}>
              {showStatus(show)}
            </button>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
