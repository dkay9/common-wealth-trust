"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "1100", label: "From Survival to Self-Reliance" },
  { value: "102", label: "Safe Learning, Nourished Children" },
  { value: "∞", label: "Healing Beyond Skills" },
  { value: "91%", label: "Of donations go to programs" },
];

function useCountUp(target: number, shouldStart: boolean, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let startTime: number | null = null;
    let frame: number;

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [shouldStart, target, duration]);

  return count;
}

function StatCard({
  stat,
  shouldStart,
}: {
  stat: { value: string; label: string };
  shouldStart: boolean;
}) {
  const match = stat.value.match(/[\d,]+/);
  const isNumeric = Boolean(match);
  const target = isNumeric ? parseInt(match![0].replace(/,/g, ""), 10) : 0;
  const prefix = isNumeric ? stat.value.slice(0, match!.index) : "";
  const suffix = isNumeric
    ? stat.value.slice((match!.index ?? 0) + match![0].length)
    : "";

  const count = useCountUp(target, shouldStart && isNumeric);
  const display = isNumeric
    ? `${prefix}${count.toLocaleString()}${suffix}`
    : stat.value;

  return (
    <div className="border-2 border-cream/25 p-6 text-center transition hover:border-cream/50 md:text-left">
      <p className="font-display text-4xl italic text-terracotta-light md:text-5xl">
        {display}
      </p>
      <p className="mt-2 text-sm text-cream/70">{stat.label}</p>
    </div>
  );
}

export default function ImpactStats() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="impact"
      ref={sectionRef}
      className="bg-forest py-16 text-cream"
    >
      <div className="mx-auto grid max-w-8xl grid-cols-2 gap-6 px-6 md:grid-cols-4 md:px-10">
        {stats.map((stat) => (
          <StatCard key={stat.label} stat={stat} shouldStart={visible} />
        ))}
      </div>
    </section>
  );
}