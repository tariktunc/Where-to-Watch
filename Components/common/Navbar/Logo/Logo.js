import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 rtl:space-x-reverse">
      <Image
        width={50}
        height={50}
        src="https://flowbite.com/docs/images/logo.svg"
        className="h-10"
        alt="Flowbite Logo"
      />
      <span className="text-md sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
        BLAKFY MOVIE
      </span>
    </Link>
  );
}
