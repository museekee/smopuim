import styles from "./styles/main.module.scss"
import Icon from "./components/icon"
import TaskIcon from "./components/taskIcon"
import logo from "./logo.svg"
import { useEffect, useState } from "react"
import Internet from "./assets/images/internet.svg"
import Window from "./components/window"
import Browser, { reset as browserReset } from "./components/windows/browser"

function Main() {
  const Clock = () =>{
    const [date, setDate] = useState(() => new Date())

    useEffect(() => {
      const timeId = setInterval(() => tick(), 500)

      return () => {
        clearInterval(timeId)
      }
    })
    const tick =() =>{
      setDate(new Date())
    }
    return date
  }

  return (
    <>
    <div id={styles["main"]}>
      <div id={styles["icons"]}>
        <Icon name="인터넷" image={Internet} onDoubleClick={() => opencloseWindow("internet")} />
        <Icon name="인터넷" image={Internet} onDoubleClick={() => opencloseWindow("internet")} />
        <Icon name="인터넷" image={Internet} onDoubleClick={() => opencloseWindow("internet")} />
        <Icon name="인터넷" image={Internet} onDoubleClick={() => opencloseWindow("internet")} />
      </div>
      <div id={styles["taskbar"]}>
        <button id={styles["startBtn"]} className={styles["icon"]}>
          <img src={logo} alt="시작 버튼" />
          <span>시작</span>
        </button>
        <div id={styles["taskIcons"]}>
          <TaskIcon icon={Internet} onclick={() => opencloseWindow("internet")} />
        </div>
        <div id={styles["taskTime"]}>
          <span>{
            new Intl.DateTimeFormat("ko", {
              hour: "numeric",
              minute: "numeric"
            }).format(Clock())
          }</span>
          <span>{
            new Intl.DateTimeFormat("ko", {
              year: "numeric",
              month: "numeric",
              day: "numeric"
            }).format(Clock())
          }</span>
        </div>
      </div>
    </div>
    <div id={styles["windows"]}>
      <Window width={600} height={400} id="internet" reset={browserReset}>
        <Browser />
      </Window>
    </div>
    </>
  )
}

export function opencloseWindow(id: string) {
  const elem = document.getElementById(id)
  if (elem) elem.classList.toggle(styles["visibility"])
}
export function maximumWindow(id: string) {
  const elem = document.getElementById(id)
  if (elem) {
    elem.classList.toggle(styles["maximumsize"])
    elem.style.top = "0"
  }
}
export default Main