import Link from "next/link";
import type { NavGroup } from "@/lib/nav-data";

export default function NavDropdownPanel({ group }: { group: NavGroup }) {
  const isNarrow = group.items.length <= 2;

  return (
    <div
      className={`absolute left-1/2 top-full z-40 hidden -translate-x-1/2 pt-3 group-hover:block ${
        isNarrow ? "w-[440px]" : "w-[880px]"
      }`}
    >
      <div className="grid grid-cols-2 gap-4 bg-cream p-4 shadow-2xl sm:grid-cols-5">
        {group.items.map((item) => (
          <Link
            key={item.anchor}
            href={`${group.basePath}#${item.anchor}`}
            className={`flex flex-col items-center border-2 border-ink p-4 text-center transition hover:bg-sand ${
              isNarrow ? "col-span-1" : ""
            }`}
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