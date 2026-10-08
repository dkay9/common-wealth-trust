"use client"
import Link from "next/link";
import DonateButton from "./DonateButton";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/hero/banner-image1.jpg",
  "/images/hero/banner-image2.jpg",
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;
    const id = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden h-screen">
      <div className="absolute inset-0">
        {heroImages.map((src, i) => (
          <img
            key={src}
            src={src}
            alt="Community members at a new water and computer access point"
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out"
            style={{ opacity: i === imgIndex ? 1 : 0 }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/30" />
      </div>

      <div className="relative mx-auto flex min-h-[620px] max-w-8xl flex-col justify-center px-6 py-24 md:px-10">
        <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-cream text-balance md:text-6xl">
          Welcome to Christ's Hands Skills Training and Child Development Centre.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-cream/80">
          Empowering Single Mothers and Out-of-School youths for a Brighter Future
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <DonateButton
            size="sm"
            className="mt-2 w-48 justify-center px-7 py-4"
            onClick={() => setOpen(false)}
          />
          <Link
            href="/what-we-do"
            className="rounded border border-cream/30 px-7 py-3.5 font-semibold text-cream transition hover:border-cream/60"
          >
            Volunteer With Us
          </Link>
        </div>
      </div>
    </section>
  );
}