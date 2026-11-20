import { useEffect, useState } from "react";

const QUERY = "(max-width: 768px)";

// Matches the 768px breakpoint used throughout App.scss.
export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(QUERY).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(QUERY);
    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isMobile;
}
