"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Profile from "./Components/Profile/Profile";
import Detail from "./Components/Details/Details";
import { fetchUrlTheMovieDb } from "@/utils/apiService";

export default function Home(props) {
  const [details, setDetails] = useState([]);
  // Redux
  const language = useSelector((state) => state.languageSetting);
  const isLanguage = `${language.toLowerCase()}-${language}`;

  
  useEffect(() => {
    const detailsUrl = `https://api.themoviedb.org/3/person/${props.params.person}?language=${isLanguage}`;
    // MovieProfile JS içerisinde yapılan isteğin farklı bir şeklidir. Test edilmektedir.
    const fetchData = fetchUrlTheMovieDb(detailsUrl);
    fetchData.then((data) => setDetails(data));
  }, [props.params.person, isLanguage, details]);

  return (
    <section>
      <div id="media_v4">
        <div id="column_wrapper">
          <div id="content_wrapper" className="grid grid-cols-6">
            {/* Grey */}
            <Profile details={details} />
            {/* White */}
            <Detail />
          </div>
        </div>
      </div>
    </section>
  );
}
