import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0 gap-2">
      {/* TMDB style gradient text logo */}
      <span
        className="text-xl font-extrabold tracking-wide"
        style={{
          background: "linear-gradient(to right, #D2E4C7, #0A1A38)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        WTW
      </span>
      {/* Gradient pill like TMDB */}
      <span
        className="hidden sm:block h-5 w-12 rounded-full"
        style={{
          background: "linear-gradient(to right, #0A1A38, #0A1A38)",
        }}
      />
    </Link>
  );
}
