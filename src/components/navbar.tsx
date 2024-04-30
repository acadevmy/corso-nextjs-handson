"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "👩‍💻",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "I miei lavori",
    href: "/works",
  },
];

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-4 mb-10">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={clsx("btn-link", {
            "text-orange-600": pathname === item.href,
            "text-4xl": item.href === "/",
          })}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
