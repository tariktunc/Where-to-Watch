"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { fetchUrlTheMovieDb } from "@/utils/apiService";
import { useTranslation } from "@/hooks/useTranslation";

function PlayIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="23" stroke="white" strokeWidth="2" fill="rgba(0,0,0,0.4)" />
      <path d="M19 14l16 10-16 10V14z" fill="white" />
    </svg>
  );
}

function TrailerCard({ movie, onPlay }) {
  const title = movie.title || movie.name;
  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
    : null;

  if (!backdrop) return null;

  return (
    <div
      style={{
        flex: "0 0 300px",
        cursor: "pointer",
        transition: "transform 0.2s ease",
      }}
      onClick={() => onPlay(movie)}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          aspectRatio: "16/9",
        }}
      >
        <Image
          src={backdrop}
          width={300}
          height={169}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.3)",
            transition: "background 0.2s",
          }}
        >
          <PlayIcon />
        </div>
      </div>
      <div style={{ padding: "10px 4px" }}>
        <p
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "white",
            margin: 0,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </p>
        <p
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
            margin: "4px 0 0 0",
          }}
        >
          {movie.trailerName || "Official Trailer"}
        </p>
      </div>
    </div>
  );
}

function VideoModal({ videoKey, onClose }) {
  if (!videoKey) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.85)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "min(900px, 90vw)",
          aspectRatio: "16/9",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: "0",
            background: "none",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
            zIndex: 1,
          }}
        >
          &times;
        </button>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "8px",
          }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Trailer"
        />
      </div>
    </div>
  );
}

export default function LatestTrailers() {
  const { t, locale } = useTranslation();
  const [movies, setMovies] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const fetchTrailers = async () => {
      try {
        const res = await fetchUrlTheMovieDb(
          `https://api.themoviedb.org/3/movie/upcoming?language=${locale}&page=1`
        );
        const results = res.data.results || [];
        const moviesWithTrailers = [];

        for (const movie of results.slice(0, 10)) {
          try {
            const videoRes = await fetchUrlTheMovieDb(
              `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=${locale}`
            );
            const videos = videoRes.data.results || [];
            let trailer = videos.find(
              (v) => v.type === "Trailer" && v.site === "YouTube"
            );
            if (!trailer) {
              const enVideoRes = await fetchUrlTheMovieDb(
                `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`
              );
              const enVideos = enVideoRes.data.results || [];
              trailer = enVideos.find(
                (v) => v.type === "Trailer" && v.site === "YouTube"
              );
            }
            if (trailer) {
              moviesWithTrailers.push({
                ...movie,
                trailerKey: trailer.key,
                trailerName: trailer.name,
              });
            }
          } catch {
            // skip this movie
          }
          if (moviesWithTrailers.length >= 6) break;
        }

        setMovies(moviesWithTrailers);
        if (moviesWithTrailers.length > 0 && moviesWithTrailers[0].backdrop_path) {
          setBgImage(
            `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${moviesWithTrailers[0].backdrop_path}`
          );
        }
      } catch (error) {
        // silently handled
      }
    };
    fetchTrailers();
  }, [locale]);

  const handlePlay = (movie) => {
    setActiveVideo(movie.trailerKey);
    if (movie.backdrop_path) {
      setBgImage(
        `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${movie.backdrop_path}`
      );
    }
  };

  if (movies.length === 0) return null;

  return (
    <>
      <section
        style={{
          position: "relative",
          width: "100%",
          backgroundImage: bgImage ? `url(${bgImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,26,56,0.92) 0%, rgba(10,26,56,0.8) 50%, rgba(10,26,56,0.92) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "30px 32px",
          }}
        >
          <h3
            style={{
              fontSize: "24px",
              fontWeight: 600,
              margin: "0 0 20px 0",
              color: "white",
            }}
          >
            {t("home.latestTrailers")}
          </h3>
          <div
            className="custom-scrollbar"
            style={{
              display: "flex",
              gap: "20px",
              overflowX: "auto",
              overflowY: "hidden",
              paddingBottom: "16px",
            }}
          >
            {movies.map((movie) => (
              <TrailerCard key={movie.id} movie={movie} onPlay={handlePlay} />
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        videoKey={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </>
  );
}
