import Image from "next/image";

export default function Media(props) {
  return (
    <>
      <Image
        key={props.key}
        width={1920}
        height={1080}
        className="w-[533px] min-w-[533px] h-[300px] min-h-[300px]"
        src={props.filePath}
        alt={props.filePath}
      />
    </>
  );
}
