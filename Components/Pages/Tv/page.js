"use client";

import ItemList from "@/Components/ItemList/ItemList";

export default function Home() {
    return (
        <>
            <ItemList
                urlId={
                    "https://api.themoviedb.org/3/trending/tv/day?language=tr-TR"
                }
            />
        </>
    );
}
