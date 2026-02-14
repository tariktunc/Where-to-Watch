export function getNavMenus(t) {
  return [
    {
      id: "movie",
      label: t("navbar.movies"),
      href: "/movie/popular",
      items: [
        { label: t("navbar.popular"), href: "/movie/popular" },
        { label: t("navbar.nowPlaying"), href: "/movie/now_playing" },
        { label: t("navbar.upcoming"), href: "/movie/upcoming" },
        { label: t("navbar.topRated"), href: "/movie/top_rated" },
      ],
    },
    {
      id: "tvshow",
      label: t("navbar.tvShows"),
      href: "/tvshow/popular",
      items: [
        { label: t("navbar.popular"), href: "/tvshow/popular" },
        { label: t("navbar.airingToday"), href: "/tvshow/airing_today" },
        { label: t("navbar.onTheAir"), href: "/tvshow/on_the_air" },
        { label: t("navbar.topRated"), href: "/tvshow/top_rated" },
      ],
    },
    {
      id: "people",
      label: t("navbar.people"),
      href: "/people/popular",
      items: [{ label: t("navbar.popular"), href: "/people/popular" }],
    },
    {
      id: "awards",
      label: t("navbar.awards"),
      href: "/awards",
      items: [
        { label: t("navbar.allAwards"), href: "/awards" },
        { label: t("navbar.upcomingAwards"), href: "/awards/upcoming" },
      ],
    },
  ];
}

export const NAVBAR_COLORS = {
  bg: "#0A1A38",
  bgDark: "#071228",
  accent: "#0A1A38",
  accentHover: "#FF9C43",
  accentGreen: "#D2E4C7",
};
