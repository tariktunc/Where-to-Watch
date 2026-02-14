import SectionLayout from "@/Components/common/SectionLayout";

export const metadata = {
  title: "Awards",
  description:
    "Explore Academy Awards, Golden Globes, BAFTA, Emmy, and more. Winners and nominees from 2016 to present.",
};

export default function AwardsLayout({ children }) {
  return <SectionLayout>{children}</SectionLayout>;
}
