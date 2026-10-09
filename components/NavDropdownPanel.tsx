import Link from "next/link";
import type { NavGroup } from "@/lib/nav-data";

export default function NavDropdownPanel({ group }: { group: NavGroup }) {
  const itemCount = group.items.length;
  const isNarrow = itemCount <= 2;

  if (itemCount === 0) {
    return null;
  }

  const gridColumns =
    itemCount === 1
      ? "grid-cols-1"
      : itemCount === 2
        ? "grid-cols-2"
        : itemCount === 3
          ? "grid-cols-3"
          : itemCount === 4
            ? "grid-cols-4"
            : "grid-cols-5";

  return (
    <div
      className={`absolute left-1/2 top-full z-40 hidden max-w-[calc(100vw-2rem)] -translate-x-1/2 pt-3 group-hover:block group-focus-within:block ${
        isNarrow ? "w-[440px]" : "w-[880px]"
      }`}
    >
      <div
        className={`grid ${gridColumns} gap-4 rounded-lg bg-cream p-4 shadow-2xl`}
      >
        {group.items.map((item) => (
          <Link
            key={`${item.anchor}-${item.title}`}
            href={
              item.anchor
                ? `${group.basePath}#${item.anchor}`
                : group.basePath
            }
            className="flex flex-col items-center rounded-md border-2 border-ink p-4 text-center transition hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            <span className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-terracotta/20">
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