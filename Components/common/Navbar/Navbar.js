"use client";
// React and NextJS
import React, { useState } from "react";

// Components
import Logo from "./Logo/Logo";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";
import WebMenu from "./WebMenu/WebMenu";

export default function Navbar() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);

  const handleClick = () => {
    setActiveMobileMenu(!activeMobileMenu);
  };
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-evenly mx-auto p-4">
        {/* LOGO */}
        <Logo />

        {/* HAMBURGER MENU BUTTON */}
        <HamburgerMenu handleClick={handleClick} />

        {/* ROUTER MENU */}
        <WebMenu
          setActiveMobileMenu={setActiveMobileMenu}
          activeMobileMenu={activeMobileMenu}
        />
      </div>
    </nav>
  );
}
