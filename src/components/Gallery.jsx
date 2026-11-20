import { useState } from "react";
import Gallery1 from "../img/img_0797.jpg";
import Gallery2 from "../img/img_0802.jpg";
import Gallery3 from "../img/img_0841.jpg";
import Gallery4 from "../img/img_0845.jpg";
import Gallery5 from "../img/img_0847.jpg";
import Gallery6 from "../img/img_0880.jpg";
import Gallery7 from "../img/img_0936.jpg";
import Gallery8 from "../img/img_0956.jpg";
import Gallery9 from "../img/img_0993.jpg";
import Gallery10 from "../img/img_1164.jpg";

const rows = [
  { className: "gallery__grid-1", images: [Gallery1, Gallery2, Gallery3, Gallery4] },
  { className: "gallery__grid-2", images: [Gallery5, Gallery6, Gallery7, Gallery8] },
  { className: "gallery__grid-3", images: [Gallery9, Gallery10, Gallery1, Gallery5] },
];

async function downloadImage(src, fileName) {
  const response = await fetch(src);
  const href = URL.createObjectURL(await response.blob());
  const anchor = document.createElement("a");
  anchor.href = href;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(href);
}

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) setSelected(null);
  };

  return (
    <div className="gallery">
      <div className="gallery__title">press photos</div>
      {rows.map((row) => (
        <div key={row.className} className={row.className}>
          {row.images.map((src, index) => (
            <img
              key={`${src}-${index}`}
              src={src}
              alt="Firstklaz press shot"
              onClick={() => setSelected(src)}
            />
          ))}
        </div>
      ))}

      {selected && (
        <div className="gallery__modal" onClick={handleBackdropClick}>
          <img src={selected} alt="Firstklaz press shot" />
          <button
            className="gallery__modal__button"
            onClick={() =>
              downloadImage(
                selected,
                `Firstklaz press image - ${Math.floor(Math.random() * 90)}.jpg`
              )
            }
          >
            DOWNLOAD IMAGE
          </button>
        </div>
      )}
    </div>
  );
}
