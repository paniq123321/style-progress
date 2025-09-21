import { useEffect, useState } from "react";

export const ProgressBarComponent = () => {
  const [progress, setProgress] = useState(40);
  const [isDragging, setIsDragging] = useState(false);


  return(
    <section className="absolute inset-0 flex justify-center items-center">
    <ul
      id="progress-bar"
      className=" relative h-3  w-[90%] max-w-[25rem] bg-gray-200 rounded-full"
    >
    <li
      className="relative h-full  bg-black/20 rounded-full"
      style={{ width: `${progress}%` }}
    >
      <div
        className="w-4 h-4 rounded-full absolute right-0 -top-0.5 bottom-0 bg-(--s-bg) cursor-pointer"
        onMouseDown={() => setIsDragging(true)}
      />
    </li>
  </ul>
    </section>)

};