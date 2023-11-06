import VerticalItem from "@/Components/VerticalItem/VerticalItem";
import WhereToWatch from "@/Components/WhereToWatch/WhereToWatch";

export default function Home() {
    return (
        <div className="flex justify-center">
            <WhereToWatch />
            <VerticalItem
                urlId={
                    "https://api.themoviedb.org/3/trending/movie/day?language=tr-TR"
                }
            />
        </div>
    );
}
