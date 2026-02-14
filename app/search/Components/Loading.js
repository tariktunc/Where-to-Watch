import React from "react";
import Card from "../Components/Card";

export default function Loading() {
  return (
    <div role="status" className="flex flex-wrap">
      <Card
        key={"1"}
        title={"1"}
        overview={"1"}
        src={"/placeholder-image.svg"}
        link={"/"}
      />
      <Card
        key={"2"}
        title={"2"}
        overview={"2"}
        src={"/placeholder-image.svg"}
        link={"/"}
      />
      <Card
        key={"3"}
        title={"3"}
        overview={"3"}
        src={"/placeholder-image.svg"}
        link={"/"}
      />
    </div>
  );
}
