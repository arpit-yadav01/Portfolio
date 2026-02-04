import { useEffect, useState } from "react";

export const useSectionObserver = (sectionIds) => {
  const [activeSection, setActiveSection] = useState(null);
  const [seenSections, setSeenSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;

          if (entry.isIntersecting && !seenSections[id]) {
            setActiveSection(id);
            setSeenSections((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, seenSections]);

  return activeSection;
};
