import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 rtl:space-x-reverse">
      <Image
        width={50}
        height={50}
        src={"/blackLogo.svg"}
        className="h-auto sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 dark:invert dark:filter dark:grayscale"
        alt="BLAKFY MOVIE"
      />
    </Link>
  );
}
