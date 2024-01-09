import Error from "@/Components/common/Error/page";
export default function Page({ params }) {
  return <Error page={params.profile} />;
}
