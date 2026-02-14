"use client";
import React, { useState } from "react";
import Logo from "./Logo/Logo";
import NavDropdown from "./NavDropdown/NavDropdown";
import NavToolbar from "./NavToolbar/NavToolbar";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import { getNavMenus, NAVBAR_COLORS } from "./navConfig";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const navMenus = getNavMenus(t);

  return (
    <nav style={{ backgroundColor: NAVBAR_COLORS.bg, position: "sticky", top: 0, zIndex: 50, width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Left: Logo + Desktop Navigation */}
        <div style={{ display: "flex", alignItems: "center", height: "100%", gap: "40px" }}>
          <Logo />
          <ul style={{ display: "none" }} className="md:!flex" >
            <div style={{ display: "flex", alignItems: "center", height: "64px", gap: "4px" }}>
              {navMenus.map((menu) => (
                <NavDropdown key={menu.id} menu={menu} />
              ))}
            </div>
          </ul>
        </div>

        {/* Right: Toolbar + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <NavToolbar />
          <HamburgerMenu handleClick={() => setMobileMenuOpen(!mobileMenuOpen)} />
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", backgroundColor: NAVBAR_COLORS.bg }}>
          <MobileMenu onClose={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}
