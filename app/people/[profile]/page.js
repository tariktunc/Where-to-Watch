"use client";
import React, { use } from "react";
import Error from "@/Components/common/Error/Error";
import PeopleListPage from "@/Components/PeopleList/PeopleListPage";

export default function Page({ params }) {
  const { profile } = use(params);

  const renderContent = () => {
    switch (profile) {
      case "popular":
        return <PeopleListPage />;
      default:
        return <Error page={profile} />;
    }
  };

  return <>{renderContent()}</>;
}
