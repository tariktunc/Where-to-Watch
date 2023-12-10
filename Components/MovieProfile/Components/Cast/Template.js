export default function CastTemplate({ children }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-start flex-col pb-5 w-[1200px] min-w-[500px] max-w-[1200px] overflow-x-auto ">
        <h3 className="my-2 mx-1 font-bold text-xl w-auto ">Populer Player</h3>
        <ul className="flex justify-start items-center ">{children}</ul>
      </div>
    </div>
  );
}
