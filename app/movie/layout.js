import SectionLayout from "@/Components/common/SectionLayout";

export const metadata = {
  title: "Movies",
  description:
    "Browse popular, now playing, upcoming, and top rated movies. Find where to stream, rent, or buy.",
};

export default function MovieLayout({ children }) {
  return <SectionLayout>{children}</SectionLayout>;
}
