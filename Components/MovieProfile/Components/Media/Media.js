import Image from "next/image";

export default function Media(props) {
  return (
    <Image
      key={props.index}
      width={1000}
      height={1000}
      src={props.filePath}
      alt={props.filePath}
    />
  );
}
