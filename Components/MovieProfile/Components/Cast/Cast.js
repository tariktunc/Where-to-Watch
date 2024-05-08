import Image from "next/image";
import Link from "next/link";

export default function MediaV(props) {
  return (
    <li
      id={props.id}
      className={
        "rounded-t-md mx-2 min-w-[200px] max-w-[200px] h-full rounded-md dark:text-white  shadow-md dark:shadow-sm dark:shadow-gray-500"
      }
    >
      <Link href={`/person/${props.id}`}>
        <Image
          className="rounded-t-md w-full"
          src={props.image}
          width={1000}
          height={1000}
          alt={props.altName}
          decoding="async"
        />
      </Link>
      <div className="p-2 h-28 flex flex-col justify-start items-start rounded-b-md">
        <p className="text-sm font-bold p-1 border-b-2">{props.name}</p>
        <p className="text-sm p-1">{props.characterName}</p>
        <p className="text-xs p-1">{props.episodes}</p>
      </div>
    </li>
  );
}
