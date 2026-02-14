import FilteredListPage from "@/Components/FilteredList/FilteredListPage";

export default function Home() {
  return <FilteredListPage status={"movie"} lists={"popular"} />;
}
