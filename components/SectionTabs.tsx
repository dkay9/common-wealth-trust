"use client";

import { useEffect, useState } from "react";

type Tab = {
  label: string;
  anchor: string;
};

export default function SectionTabs({
  pageLabel,
  tabs,
}: {
  pageLabel: string;
  tabs: Tab[];
}) {
  const [active, setActive] = useState(tabs[0]?.anchor ?? "");

  useEffect(() => {
    const sections = tabs
      .map((tab) => document.getElementById(tab.anchor))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [tabs]);

  return (
    <div className="sticky top-[73px] z-30 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-8xl items-center gap-2 overflow-x-auto px-6 py-4 md:px-10">
        <span className="whitespace-nowrap pr-4 text-sm font-semibold text-terracotta">
          {pageLabel}
        </span>
        {tabs.map((tab) => (
          <a
            key={tab.anchor}
            href={`#${tab.anchor}`}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
              active === tab.anchor
                ? "bg-terracotta text-cream"
                : "text-ink/60 hover:bg-sand"
            }`}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </div>
  );
}
