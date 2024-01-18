"use client";
import React from "react";
import Error from "@/Components/common/Error/Error";
import Lists from "@/Components/Items/Lists";
import Loading from "@/app/search/Components/Loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";


export default function Page({ params }) {
  const renderContent = () => {
    switch (params.profile) {
      case "popular":
        return <Lists status={"person"} lists={"popular"} />;
        break;
      default:
        return <Error page={params.profile} />;
        break;
    }
  };

  return (
    <ErrorBoundary fallback={<Error />}>
      <React.Suspense fallback={<Loading />}>{renderContent()}</React.Suspense>
    </ErrorBoundary>
  );
}
