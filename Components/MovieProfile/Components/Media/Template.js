export default function Template({ children }) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col ">
        <div className="my-2 mx-1 font-bold text-xl w-auto ">
          <h3 className="text-xl font-bold dark:text-white">Backdrops</h3>
        </div>
        <div className="max-w-screen-xl flex justify-start items-center pb-5 custom-scrollbar overflow-x-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
