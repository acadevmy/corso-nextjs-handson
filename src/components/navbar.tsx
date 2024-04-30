"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    label: "Homepage",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
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
          })}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default Navbar;
