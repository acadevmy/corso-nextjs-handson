"use client";

import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavbarItemProps = {
  href: LinkProps["href"];
  label: string;
};

export default function NavbarItem({ href, label }: NavbarItemProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={clsx("btn-link", {
        "text-orange-600": pathname === href,
        "text-4xl": href === "/",
      })}
    >
      {label}
    </Link>
  );
}
