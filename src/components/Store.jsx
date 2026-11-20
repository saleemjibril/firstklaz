import Slider from "./Slider";
import BlackBack from "../img/firsty black back.jpg";
import BlackFront from "../img/firsty black front.jpg";
import WhiteBack from "../img/firsty white back.jpg";
import WhiteFront from "../img/firsty white front.jpg";
import SleevelessWhiteFront from "../img/firsty white sleeveless front.png";
import SleevelessWhiteBack from "../img/firsty white sleeveless back.PNG";
import SleevelessBlackFront from "../img/firsty black sleeveless front.png";
import SleevelessBlackBack from "../img/firsty black sleeveless back.png";

const PAYSTACK_LINK = "https://paystack.com/pay/nvdyhwcpxf";

const products = [
  {
    id: 1,
    name: "Tour White Tee",
    front: WhiteFront,
    back: WhiteBack,
    link: PAYSTACK_LINK,
  },
  {
    id: 2,
    name: "Tour Black Tee",
    front: BlackFront,
    back: BlackBack,
    link: PAYSTACK_LINK,
  },
  {
    id: 3,
    name: "Tour Sleeveless White Tee",
    front: SleevelessWhiteFront,
    back: SleevelessWhiteBack,
    link: PAYSTACK_LINK,
  },
  {
    id: 4,
    name: "Tour Sleeveless Black Tee",
    front: SleevelessBlackFront,
    back: SleevelessBlackBack,
    link: PAYSTACK_LINK,
  },
];

export default function Store() {
  return (
    <div className="music">
      <Slider className="music_slider" innerClassName="music_inner">
        {products.map((product) => (
          <a
            key={product.id}
            href={product.link}
            target="_blank"
            rel="noreferrer"
            className="slider_item"
          >
            <img
              className="music_artwork"
              src={product.front}
              alt={`${product.name} (front)`}
            />
            <div className="music_gif store_gif">
              <img src={product.back} alt={`${product.name} (back)`} />
            </div>
            <div className="music_name">{product.name}</div>
            <button className="music_button" tabIndex={-1}>
              Buy now
            </button>
          </a>
        ))}
      </Slider>
    </div>
  );
}
