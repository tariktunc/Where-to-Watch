import Error from "@/Pages/Error/page";

export default function Page({ params }) {
  switch (params.profile) {
    case "popular":
      return <p>popular page</p>;
      break;
    default:
      return <Error page={params.profile} />;
      break;
  }
}
