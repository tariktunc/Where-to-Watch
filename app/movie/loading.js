import { SkeletonGrid } from "@/Components/common/Skeleton";

export default function Loading() {
  return (
    <div className="bg-white dark:bg-primary" style={{ minHeight: "60vh" }}>
      <SkeletonGrid cardCount={15} showSidebar />
    </div>
  );
}
