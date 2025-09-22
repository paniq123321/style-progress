import { useEffect, useState } from "react";

export const ProgressBarComponent = () => {
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);



  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const progressBar = document.getElementById("progress-bar");
      if (!progressBar) return;

      const rect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      let newProgress = (offsetX / rect.width) * 100;

      if (newProgress < 0) newProgress = 0;
      if (newProgress > 100) newProgress = 100;

      setProgress(newProgress);
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);


  return(
    <section className="absolute inset-0 flex justify-center items-center">
    <ul
      id="progress-bar"
      className=" relative h-3  w-[90%] max-w-[25rem] bg-gray-200 rounded-full"
    >
    <li
      className="relative h-full  bg-black/20 rounded-full "
      style={{ width: `${progress}%` }}
    >
      <div
        className="w-4 h-4 rounded-full absolute -right-2 -top-0.5 bottom-0 bg-(--s-bg) cursor-pointer"
        onMouseDown={() => setIsDragging(true)}
      />
    </li>
  </ul>
    </section>)
};