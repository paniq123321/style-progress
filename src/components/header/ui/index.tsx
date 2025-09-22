import { useProgressbarStore } from "../../../stores";

export const HeaderComponent = () => {
  const progress = useProgressbarStore(state => state.progress)

  const deg = (progress / 20) * 360

  return (
    <header className="bg-gray-200 flex justify-between items-center px-6 py-4 overflow-hidden"
    style={{
      opacity: `${progress / 20}`
    }}
    >
      <div
        className=""
           style={{
             transform: `translateX(-${(100 - progress) / 10 }rem)`,
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
          rotate: `${deg <= 360? deg : 360}deg`,

        }}
        ><a>
          link 1
        </a></li>
        <li
          style={{
            rotate: `${deg <= 720? deg : 720}deg`,

          }}
        ><a>
          link 2
        </a></li>
        <li
          style={{
            rotate: `${deg <= 1080? deg : 1080}deg`,

          }}
        ><a>
          link 3
        </a>
        </li>
        <li
          style={{
            rotate: `${deg <= 1440? deg : 1440}deg`,

          }}
        ><a>
          link 4
        </a></li>
        <li
          style={{
            rotate: `${deg <= 1800? deg : 1800}deg`,

          }}
        ><a>
          link 5
        </a></li>
      </ul>
      </nav>

      <div
           style={{
             transform: `translateX(${(100 - progress) / 10 }rem)`,
           }}
      >
        <button>
          btn
        </button>
      </div>
  </header>)
}