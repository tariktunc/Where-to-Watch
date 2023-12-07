"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Loading from "@/Components/Loading/Loading";

export default function MediaV({ aggregateCreditsTv }) {
  const [pageLoading, setPageLoading] = useState(true);

  console.log(" =>", aggregateCreditsTv);

  useEffect(() => {
    if (aggregateCreditsTv) {
      setPageLoading(false);
    }
  }, [aggregateCreditsTv]);

  return (
    <div>
      <h3>Top Billed Cast</h3>
    </div>
  );
}
