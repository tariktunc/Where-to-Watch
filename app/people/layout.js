import SectionLayout from "@/Components/common/SectionLayout";

export const metadata = {
  title: "People",
  description:
    "Browse popular actors, directors, and crew in the entertainment industry.",
};

export default function PeopleLayout({ children }) {
  return <SectionLayout>{children}</SectionLayout>;
}
