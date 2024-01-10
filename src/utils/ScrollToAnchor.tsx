import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

function ScrollToAnchor() {
  const router = useRouter();
  const lastHash = useRef("");

  // https://jasonwatmore.com/react-router-v6-listen-to-location-route-change-without-history-listen
  // (Tweaked for useRouter)
  useEffect(() => {
    if (router.asPath) {
      lastHash.current = router.asPath.slice(1); // safe hash for further use after navigation
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document
          .getElementById(lastHash.current)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
        lastHash.current = "";
      }, 100);
    }
  }, [router]);

  return null;
}

export default ScrollToAnchor;
