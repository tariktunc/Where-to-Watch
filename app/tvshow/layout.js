import SectionLayout from "@/Components/common/SectionLayout";

export const metadata = {
  title: "TV Shows",
  description:
    "Browse popular, airing today, on the air, and top rated TV shows. Find where to stream.",
};

export default function TVShowLayout({ children }) {
  return <SectionLayout>{children}</SectionLayout>;
}
