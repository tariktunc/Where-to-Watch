import ItemList from "@/Components/ItemList/ItemList";

export default function Home() {
    return (
        <>
            <ItemList
                urlId={
                    "https://api.themoviedb.org/3/trending/movie/day?language=tr-TR"
                }
            />
        </>
    );
}
