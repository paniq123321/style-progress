import { useProgressbarStore } from "../../../stores";
import { CardComponent } from "../../card";

export const MainComponent = () => {
 const progress = useProgressbarStore(state => state.progress);

  return (
    <main className="py-4">
      <section className="flex gap-5 bg-gray-100 p-4 mb-5"
               style={{
                 transform: `translateX(${100 - progress}%)`,
               }}
      >
        {Array.from(Array(3).keys()).map((_, i) => (
          <CardComponent
            content={`${i + 1}`}
            key={i}
          />
        ))}
      </section>

      <section className="flex gap-5 bg-gray-100 p-4"
               style={{
                 transform: `translateX(${-100 + progress}%)`,
               }}
      >
        {Array.from(Array(3).keys()).map((_, i) => (
          <CardComponent
            content={`${i + 1}`}
            key={i}
          />
        ))}
      </section>

    </main>
  );
};