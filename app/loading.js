import { SkeletonHero, SkeletonSection } from "@/Components/common/Skeleton";

export default function Loading() {
  return (
    <div className="bg-white dark:bg-primary" style={{ minHeight: "100vh" }}>
      <SkeletonHero />
      <SkeletonSection />
      <SkeletonSection cardWidth="220px" cardHeight="330px" />
      <SkeletonSection />
    </div>
  );
}
