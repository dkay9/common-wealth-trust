"use client";

import { useState } from "react";
import Link from "next/link";
import { aboutNav, whatWeDoNav, supportNav, type NavGroup } from "@/lib/nav-data";
import NavDropdownPanel from "./NavDropdownPanel";
import DonateButton from "./DonateButton";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center px-4 text-sm font-medium text-ink/70 transition hover:text-ink"
    >
      {children}
    </Link>
  );
}

function DropdownTrigger({ group }: { group: NavGroup }) {
  return (
    <div className="group flex items-center">
      <Link
        href={`${group.basePath}#${group.items[0].anchor}`}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink"
      >
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
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-8xl items-stretch justify-between px-6 md:px-10">
        <Link href="/" className="flex items-center py-4">
          <img
            src="/images/logo.png"
            alt="Christs Hands Skill"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-stretch gap-1 md:flex">
          <NavLink href="/">Home</NavLink>

          <DropdownTrigger group={aboutNav} />
          <DropdownTrigger group={whatWeDoNav} />

          <NavLink href="/impact">Impact</NavLink>

          <DropdownTrigger group={supportNav} />

          <NavLink href="/contact">Contact Us</NavLink>
          <NavLink href="#">Blog</NavLink>
        </div>

        <div className="hidden items-center md:flex">
          <DonateButton size="sm" />
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 self-center md:hidden"
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

            {[aboutNav, whatWeDoNav].map((group) => (
              <div key={group.label} className="flex w-full items-center justify-between border-t border-ink/5 py-2">
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
              href="/impact"
              className="border-t border-ink/5 py-2 text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Impact
            </Link>

            <div className="flex w-full items-center justify-between border-t border-ink/5 py-2">
              <Link
                href={`${supportNav.basePath}#${supportNav.items[0].anchor}`}
                className="text-sm font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {supportNav.label}
              </Link>
              <button
                aria-label={`Toggle ${supportNav.label} submenu`}
                onClick={() => setMobileExpanded(mobileExpanded === supportNav.label ? null : supportNav.label)}
              >
                <span>{mobileExpanded === supportNav.label ? "−" : "+"}</span>
              </button>
            </div>

            <Link
              href="/contact"
              className="border-t border-ink/5 py-2 text-sm font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </Link>
            <Link href="#" className="py-2 text-sm font-medium text-ink">
              Blog
            </Link>
            <DonateButton
              size="sm"
              className="mt-2 w-full justify-center"
              onClick={() => setOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}