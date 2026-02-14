import React, { useState } from "react";
import Link from "next/link";
import Country from "@/Components/Country/Country";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun, faSearch } from "@fortawesome/free-solid-svg-icons";
import { setLanguage } from "@/stores/Slices/languageSettingSlice";
import { toggleTheme } from "@/stores/Slices/ThemeSlice";

const menuItems = [
  {
    id: "movie",
    label: "Movies",
    href: "/movie/popular",
    items: [
      { label: "Popular", href: "/movie/popular" },
      { label: "Now Playing", href: "/movie/now_playing" },
      { label: "Upcoming", href: "/movie/upcoming" },
      { label: "Top Rated", href: "/movie/top_rated" },
    ],
  },
  {
    id: "tvshow",
    label: "TV Shows",
    href: "/tvshow/popular",
    items: [
      { label: "Popular", href: "/tvshow/popular" },
      { label: "Airing Today", href: "/tvshow/airing_today" },
      { label: "On The Air", href: "/tvshow/on_the_air" },
      { label: "Top Rated", href: "/tvshow/top_rated" },
    ],
  },
  {
    id: "people",
    label: "People",
    href: "/people/popular",
    items: [{ label: "Popular", href: "/people/popular" }],
  },
];

export default function WebMenu(props) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.languageSetting);
  const theme = useSelector((state) => state.theme.theme);
  const [activeMenu, setActiveMenu] = useState(null);

  const handleCountryChange = (e) => {
    dispatch(setLanguage(e.target.value));
  };

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  // Right side tools only (search, theme, language)
  if (props.rightOnly) {
    return (
      <div className="flex items-center gap-2">
        <Link
          href="/search"
          className="text-white/70 hover:text-white p-2 transition-colors duration-200"
          aria-label="Search"
        >
          <FontAwesomeIcon icon={faSearch} className="w-4 h-4" />
        </Link>
        <button
          onClick={handleThemeChange}
          className="text-white/70 hover:text-white p-2 transition-colors duration-200"
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
            className="w-4 h-4"
          />
        </button>
        <div className="hidden md:block">
          <Country
            handleCountryChange={handleCountryChange}
            language={language}
          />
        </div>
      </div>
    );
  }

  // Mobile menu
  if (props.isMobile) {
    return (
      <div className="flex flex-col gap-1">
        {menuItems.map((menu) => (
          <div key={menu.id}>
            <p className="text-white/50 text-xs font-semibold uppercase tracking-wider px-3 py-2">
              {menu.label}
            </p>
            {menu.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded transition-colors duration-200 text-sm"
                onClick={() => props.setActiveMobileMenu(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="border-t border-white/10 mt-2 pt-2 px-3">
          <Country
            handleCountryChange={handleCountryChange}
            language={language}
          />
        </div>
      </div>
    );
  }

  // Desktop navigation menu
  return (
    <ul className="flex items-center gap-1">
      {menuItems.map((menu) => (
        <li
          key={menu.id}
          className="relative"
          onMouseEnter={() => setActiveMenu(menu.id)}
          onMouseLeave={() => setActiveMenu(null)}
        >
          <Link
            href={menu.href}
            className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-white/90 hover:text-white rounded transition-colors duration-200"
          >
            {menu.label}
            <svg
              className={`w-3 h-3 transition-transform duration-200 ${
                activeMenu === menu.id ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </Link>
          {/* Dropdown */}
          <div
            className={`absolute top-full left-0 mt-0 w-48 rounded-lg shadow-xl overflow-hidden transition-all duration-200 z-50 ${
              activeMenu === menu.id
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-1"
            }`}
            style={{ backgroundColor: "#0A1A38" }}
          >
            <div className="py-1">
              {menu.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2.5 text-sm text-white/80 hover:text-white transition-colors duration-150"
                  style={{ backgroundColor: "inherit" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      "rgba(1, 180, 228, 0.2)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "inherit")
                  }
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
