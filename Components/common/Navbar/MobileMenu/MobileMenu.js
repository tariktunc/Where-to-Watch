"use client";
import React from "react";
import Link from "next/link";
import { getNavMenus } from "../navConfig";
import { useTranslation } from "@/hooks/useTranslation";

export default function MobileMenu({ onClose }) {
  const { t } = useTranslation();
  const navMenus = getNavMenus(t);

  return (
    <div className="flex flex-col gap-1 py-2">
      {navMenus.map((menu) => (
        <div key={menu.id}>
          <p className="text-white/40 text-xs font-bold uppercase tracking-widest px-4 py-2">
            {menu.label}
          </p>
          {menu.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-6 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 rounded-md mx-2 transition-colors duration-200"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
