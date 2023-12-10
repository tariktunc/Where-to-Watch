import React from "react";

export default function Template({ children }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-start items-center pb-5 w-[1200px] min-w-[500px] max-w-[1200px] overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
