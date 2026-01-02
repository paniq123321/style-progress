import { useProgressbarStore } from "../../../stores";

export const FooterComponent = () => {
  const progress = useProgressbarStore(state => state.progress);
  return(
    <footer
      className="bg-black p-6 text-[white] sticky-bottom flex items-center justify-center min-h-[12rem]"
      style={{
        opacity: `${progress}%`
      }}
    >
      footer
    </footer>
  )
}