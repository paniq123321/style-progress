import { useProgressbarStore } from "../../../stores";

export const HeaderComponent = () => {
  const progress = useProgressbarStore(state => state.progress)

  const deg = (progress / 20) * 360
  const transform = (100 - progress) / 10

  return (
    <header className="bg-gray-200 flex justify-between items-center px-6 py-4 overflow-hidden"
    style={{
      opacity: `${progress / 20}`
    }}
    >
      <div
        className=""
           style={{
             transform: `translateX(-${transform}rem)`,
           }}
      >
        <span>
      <a>logo</a>
          </span>
      </div>
      <nav>
      <ul className="flex gap-6 mx-2">
        <li
        style={{
          transform: `translateY(-${(20 - progress) / 10}rem)`,
        }}
        >
          <div style={{
            rotate: `${deg <= 360? deg : 360}deg`,
          }}>
          <a>
          link 1
        </a>
          </div>
        </li>
        <li
          style={{
            transform: `translateY(-${(40 - progress) / 10}rem)`,
          }}
        > <div
          style={{
            rotate: `${deg <= 720? deg : 720}deg`,
          }}
        >
          <a>
            link 2
          </a>
        </div>
        </li>
        <li
          style={{
            transform: `translateY(-${(60 - progress) / 10}rem)`,
          }}
        > <div
          style={{
            rotate: `${deg <= 1080? deg : 1080}deg`,
          }}
        >
          <a>
            link 3
          </a>
        </div>
        </li>
        <li
          style={{
            transform: `translateY(-${(80 - progress) / 10}rem)`,
          }}
        > <div
          style={{
            rotate: `${deg <= 1440? deg : 1440}deg`,
          }}
        >
          <a>
            link 4
          </a>
        </div></li>
        <li
          style={{
            transform: `translateY(-${(100 - progress) / 10}rem)`,
          }}
        > <div
          style={{
            rotate: `${deg <= 1800? deg : 1800}deg`,
          }}
        >
          <a>
            link 5
          </a>
        </div></li>
      </ul>
      </nav>
      <div
           style={{
             transform: `translateX(${transform}rem)`,
           }}
      >
        <button>
          btn
        </button>
      </div>
  </header>)
}