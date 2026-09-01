"use client";

import { useState } from "react";
import Link from "next/link";
import { navGroups } from "@/lib/nav-data";
import NavDropdownPanel from "./NavDropdownPanel";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest">
            <span className="font-display text-lg italic text-cream">C</span>
          </span>
          <span className="font-display text-xl tracking-tight text-ink">
            Commonwell Trust
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Home
          </Link>

          {navGroups.map((group) => (
            <div key={group.label} className="group relative">
              <Link 
                href={`${group.basePath}#${group.items[0].anchor}`}
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink">
                  {group.label}
                  <svg
                    className="h-3.5 w-3.5 transition group-hover:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
              </Link>
              <NavDropdownPanel group={group} />
            </div>
          ))}

          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Contact Us
          </Link>
          <a
            href="#"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
          >
            Blog
          </a>
        </div>

        <div className="hidden md:block">
          <Link
            href="/donate"
            className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Donate
          </Link>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="max-h-[75vh] overflow-y-auto border-t border-ink/10 bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <Link href="/" className="py-2 text-sm font-medium text-ink" onClick={() => setOpen(false)}>
              Home
            </Link>

            {navGroups.map((group) => (
              <div className="flex w-full items-center justify-between py-1">
                <Link
                  href={`${group.basePath}#${group.items[0].anchor}`}
                  className="text-sm font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {group.label}
                </Link>
                <button
                  aria-label={`Toggle ${group.label} submenu`}
                  onClick={() => setMobileExpanded(mobileExpanded === group.label ? null : group.label)}
                >
                  <span>{mobileExpanded === group.label ? "−" : "+"}</span>
                </button>
              </div>
            ))}

            <Link
              href="/contact"
              className="border-t border-ink/5 py-2 text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <a href="#" className="py-2 text-sm font-medium text-ink">
              Blog
            </a>
            <Link
              href="/donate"
              className="mt-2 rounded-full bg-terracotta px-5 py-2.5 text-center text-sm font-semibold text-cream"
              onClick={() => setOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
