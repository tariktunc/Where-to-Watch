import SectionLayout from "@/Components/common/SectionLayout";

export const metadata = {
  title: "Person",
  description: "Actor, director, and crew member details.",
};

export default function PersonLayout({ children }) {
  return (
    <SectionLayout showFooter={false}>
      <main className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md flex items-center justify-center mx-auto p-4">
        {children}
      </main>
    </SectionLayout>
  );
}
