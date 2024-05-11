import React from "react";
import Card from "../Components/Card";

export default function Loading() {
  return (
    <div role="status" className="flex flex-wrap dark:bg-gray-900">
      <Card
        key={"1"}
        title={"1"}
        overview={"1"}
        src={"/placeholder-image.svg"}
        link={"/"}
      />
      <Card
        key={"1"}
        title={"1"}
        overview={"1"}
        src={"/placeholder-image.svg"}
        link={"/"}
      />
      <Card
        key={"1"}
        title={"1"}
        overview={"1"}
        src={"/placeholder-image.svg"}
        link={"/"}
      />
    </div>
  );
}
