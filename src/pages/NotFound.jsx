import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

export default function NotFound() {
  return (
    <div className="not_found">
      <div className="four_o_four">404</div>
      <div className="title">OOps! Just Amanda Here</div>
      <div className="subtitle">
        Don't worry, come with me. <br /> I'll lead you back to firstklaz
      </div>
      <Link to="/">
        <button>Follow Amanda</button>
      </Link>
    </div>
  );
}
