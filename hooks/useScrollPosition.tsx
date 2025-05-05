import * as React from "react";

export function useScrollPosition() {
  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") return;

    const scrollY = localStorage.getItem("scroll_y");

    if (scrollY !== null) {
      window.scrollTo(0, Number(scrollY));
    }

    function saveScroll() {
      localStorage.setItem("scroll_y", window.scrollY.toString());
    }

    window.addEventListener("beforeunload", saveScroll);

    return () => {
      saveScroll();
      window.removeEventListener("beforeunload", saveScroll);
    };
  }, []);
}
