import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface UseScrollToSectionOptions {
  headerOffset?: number;
  behavior?: ScrollBehavior;
}

export const useScrollToSection = (options: UseScrollToSectionOptions = {}) => {
  const { headerOffset = 100, behavior = "smooth" } = options;

  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get("section");
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior,
        });
      }
    }
  }, [searchParams, headerOffset, behavior]);
};
