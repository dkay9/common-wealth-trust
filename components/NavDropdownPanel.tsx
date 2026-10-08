import Link from "next/link";
import type { NavGroup } from "@/lib/nav-data";

export default function NavDropdownPanel({ group }: { group: NavGroup }) {
  return (
    <div className="absolute left-1/2 top-full z-40 hidden w-max -translate-x-1/2 group-hover:block">
      <div className="flex gap-4 bg-cream p-4 shadow-2xl">
        {group.items.map((item) => (
          <Link
            key={item.anchor}
            href={`${group.basePath}#${item.anchor}`}
            className="flex w-48 flex-col items-center border-2 border-ink p-4 text-center transition hover:bg-sand"
          >
            <span className="h-16 w-16 overflow-hidden rounded-full border-2 border-terracotta/20">
              <img
                src={item.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </span>
            <span className="mt-3 text-sm font-semibold leading-snug text-ink">
              {item.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}