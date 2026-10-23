"use client";

import { useEffect } from "react";

export default function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const mobileLinks =
      document.querySelectorAll<HTMLAnchorElement>(".mobile-nav-panel a");
    const closeMobileMenu = () => {
      document.querySelector<HTMLDetailsElement>(".mobile-nav")?.removeAttribute(
        "open",
      );
    };

    mobileLinks.forEach((link) =>
      link.addEventListener("click", closeMobileMenu),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        mobileLinks.forEach((link) =>
          link.removeEventListener("click", closeMobileMenu),
        );
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      mobileLinks.forEach((link) =>
        link.removeEventListener("click", closeMobileMenu),
      );
    };
  }, []);

  return null;
}
