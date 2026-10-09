"use client";

import { useState } from "react";
import Link from "next/link";
import {
  aboutNav,
  whatWeDoNav,
  supportNav,
  type NavGroup,
} from "@/lib/nav-data";
import NavDropdownPanel from "./NavDropdownPanel";

const desktopLinkClass =
  "rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition hover:text-ink";

const mobileLinkClass =
  "border-t border-ink/5 py-2 text-sm font-medium text-ink";

function getGroupHref(group: NavGroup) {
  const firstItem = group.items[0];

  return firstItem?.anchor
    ? `${group.basePath}#${firstItem.anchor}`
    : group.basePath;
}

function DropdownTrigger({ group }: { group: NavGroup }) {
  return (
    <div className="group">
      <Link
        href={getGroupHref(group)}
        className={`${desktopLinkClass} flex items-center gap-1`}
      >
        {group.label}

        <svg
          className="h-3.5 w-3.5 transition group-hover:rotate-180 group-focus-within:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <NavDropdownPanel group={group} />
    </div>
  );
}

type MobileNavGroupProps = {
  group: NavGroup;
  submenuId: string;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
};

function MobileNavGroup({
  group,
  submenuId,
  expanded,
  onToggle,
  onNavigate,
}: MobileNavGroupProps) {
  return (
    <div className="border-t border-ink/5">
      <div className="flex items-center justify-between">
        <Link
          href={getGroupHref(group)}
          className="flex-1 py-2 text-sm font-medium text-ink"
          onClick={onNavigate}
        >
          {group.label}
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded text-xl text-ink transition hover:bg-ink/5"
          aria-label={`${expanded ? "Collapse" : "Expand"} ${
            group.label
          } submenu`}
          aria-expanded={expanded}
          aria-controls={submenuId}
          onClick={onToggle}
        >
          <span aria-hidden="true">{expanded ? "−" : "+"}</span>
        </button>
      </div>

      <div id={submenuId} hidden={!expanded} className="pb-2 pl-4">
        {group.items.map((item) => (
          <Link
            key={`${item.anchor}-${item.title}`}
            href={
              item.anchor
                ? `${group.basePath}#${item.anchor}`
                : group.basePath
            }
            className="block py-2 text-sm text-ink/70 transition hover:text-ink"
            onClick={onNavigate}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  function closeMenu() {
    setOpen(false);
    setMobileExpanded(null);
  }

  function toggleMenu() {
    setOpen((previous) => !previous);
    setMobileExpanded(null);
  }

  function toggleSubmenu(label: string) {
    setMobileExpanded((previous) => (previous === label ? null : label));
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu();
        }
      }}
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-8xl items-center justify-between px-6 py-4 md:px-10"
      >
        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <img
            src="/images/logo.png"
            alt="Christs Hands Skill"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/" className={desktopLinkClass}>
            Home
          </Link>

          <DropdownTrigger group={aboutNav} />
          <DropdownTrigger group={whatWeDoNav} />

          <Link href="/impact" className={desktopLinkClass}>
            Impact
          </Link>

          <DropdownTrigger group={supportNav} />

          <Link href="/contact" className={desktopLinkClass}>
            Contact Us
          </Link>

          {/* Replace "#" with your actual blog URL when available. */}
          <Link href="#" className={desktopLinkClass}>
            Blog
          </Link>
        </div>

        <div className="hidden md:block">
          <Link
            href="/donate"
            className="inline-flex items-center justify-center rounded bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
          >
            Donate
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={toggleMenu}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-ink transition ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />

          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-ink transition ${
              open ? "opacity-0" : ""
            }`}
          />

          <span
            aria-hidden="true"
            className={`h-0.5 w-6 bg-ink transition ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!open}
        className="max-h-[75vh] overflow-y-auto border-t border-ink/10 bg-cream px-6 py-4 md:hidden"
      >
        <div className="flex flex-col gap-1">
          <Link
            href="/"
            className="py-2 text-sm font-medium text-ink"
            onClick={closeMenu}
          >
            Home
          </Link>

          <MobileNavGroup
            group={aboutNav}
            submenuId="mobile-about-submenu"
            expanded={mobileExpanded === aboutNav.label}
            onToggle={() => toggleSubmenu(aboutNav.label)}
            onNavigate={closeMenu}
          />

          <MobileNavGroup
            group={whatWeDoNav}
            submenuId="mobile-what-we-do-submenu"
            expanded={mobileExpanded === whatWeDoNav.label}
            onToggle={() => toggleSubmenu(whatWeDoNav.label)}
            onNavigate={closeMenu}
          />

          <Link
            href="/impact"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Impact
          </Link>

          <MobileNavGroup
            group={supportNav}
            submenuId="mobile-support-submenu"
            expanded={mobileExpanded === supportNav.label}
            onToggle={() => toggleSubmenu(supportNav.label)}
            onNavigate={closeMenu}
          />

          <Link
            href="/contact"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Contact Us
          </Link>

          <Link
            href="#"
            className={mobileLinkClass}
            onClick={closeMenu}
          >
            Blog
          </Link>

          <Link
            href="/donate"
            className="mt-2 inline-flex w-full items-center justify-center rounded bg-terracotta px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
            onClick={closeMenu}
          >
            Donate
          </Link>
        </div>
      </nav>
    </header>
  );
}