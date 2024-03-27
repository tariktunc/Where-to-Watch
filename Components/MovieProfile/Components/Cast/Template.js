export default function CastTemplate({ children }) {
  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-screen-xl flex justify-start flex-col pb-5 custom-scrollbar overflow-x-auto ">
        <h3 className="my-2 mx-1 font-bold text-xl w-auto dark:text-white">
          Populer Player
        </h3>
        <ul className="flex justify-start items-center ">{children}</ul>
      </div>
    </div>
  );
}
