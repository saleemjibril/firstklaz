import { useRef } from "react";
import ArrowIcon from "./ArrowIcon";

// Horizontal scroller with prev/next arrows. Each click moves by one item.
export default function Slider({ className, innerClassName, children }) {
  const innerRef = useRef(null);

  const scrollByItem = (direction) => {
    const inner = innerRef.current;
    const item = inner.firstElementChild;
    if (!item) return;
    const gap = parseFloat(getComputedStyle(inner).columnGap) || 0;
    inner.scrollLeft += direction * (item.getBoundingClientRect().width + gap);
  };

  return (
    <div className={className}>
      <ArrowIcon
        className="prev_btn"
        label="Previous"
        onClick={() => scrollByItem(-1)}
      />
      <div className={innerClassName} ref={innerRef}>
        {children}
      </div>
      <ArrowIcon
        className="next_btn"
        label="Next"
        onClick={() => scrollByItem(1)}
      />
    </div>
  );
}
