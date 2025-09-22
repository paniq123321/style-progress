import { CardComponent } from '../../card'
export const MainComponent = () => {
  return(
    <main className="py-4">
      <section className="flex gap-5 bg-gray-100 p-4 mb-5">
        {Array.from(Array(3).keys()).map((_, i) => (
          <CardComponent
            content={`${i + 1}`}
            key={i}
          />
        ))}
      </section>

      <section className="flex gap-5 bg-gray-100 p-4">
        {Array.from(Array(3).keys()).map((_, i) => (
          <CardComponent
            content={`${i + 1}`}
            key={i}
          />
        ))}
      </section>

    </main>
  )
}