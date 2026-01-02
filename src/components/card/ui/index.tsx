import { useProgressbarStore } from "../../../stores";


export const CardComponent = ({ content, className, ...m }: { content: string; className?: string }) => {
  const progress = useProgressbarStore(state => state.progress)


  return (
    <div
      className={`min-w-[6rem] min-h-[5rem] flex flex-1 justify-center items-center bg-gray-300/80 rounded ${className}`}
      style={{
        opacity: progress / 20,
      }}
      {...m}
    >
      {content}
    </div>
  );
};