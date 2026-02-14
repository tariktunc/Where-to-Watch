import SectionLayout from "@/Components/common/SectionLayout";

export const metadata = {
  title: "Search",
  description: "Search for movies, TV shows, and people.",
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }) {
  return <SectionLayout>{children}</SectionLayout>;
}
