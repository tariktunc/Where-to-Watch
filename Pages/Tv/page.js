"use client";

import VerticalItem from "@/Components/VerticalItem/VerticalItem";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";

export default function Home() {
  return (
    <div className="flex justify-center">
      <WhereToWatch />
      <VerticalItem urlStatus={"day"} />
    </div>
  );
}
