import { useEffect, useState } from "react";

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media: MediaQueryList = window.matchMedia(query);
    setMatches(media.matches);
    const listener = (event: MediaQueryListEvent): void => {
      setMatches(event.matches);
    };
    media.addEventListener("change", listener);
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;
