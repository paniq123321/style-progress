



export const CardComponent = ({ content, className, ...m }: { content: string; className?: string }) => {



  return (
    <div
      className={`min-w-[6rem] min-h-[5rem] flex flex-1 justify-center items-center bg-gray-300/80 rounded ${className}`}
      {...m}
    >
      {content}
    </div>
  );
};