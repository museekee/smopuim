import styles from "./styles/main.module.scss"
import Icon from "./components/icon"
import TaskIcon from "./components/taskIcon"
import logo from "./logo.svg"
import { useEffect, useState } from "react"
import Internet from "./assets/images/internet.svg"
import Window from "./components/window"

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
        <Icon name="인터넷" image={Internet} onclick={() => ClickCountCheck(2, () => opencloseWindow("internet"))} />
      </div>
      <div id={styles["taskbar"]}>
        <button id={styles["startBtn"]} className={styles["icon"]}>
          <img src={logo} alt="시작 버튼" />
          <span>시작</span>
        </button>
        <div id={styles["taskIcons"]}>
          <TaskIcon />
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
      <Window width={1024} height={768} id="internet">
        <iframe className={styles["fullsize"]} src="https://daum.net" title="브라우저" />
      </Window>
    </div>
    </>
  )
}

let clickCount = 0

export function ClickCountCheck(n: number, callback: () => void) {
	clickCount++
	setTimeout(() => {
		clickCount = 0
	}, 500)
	if (clickCount === n) {
    callback()
	}
}
export function opencloseWindow(id: string) {
  const elem = document.getElementById(id)
  if (elem) elem.classList.toggle(styles["invisibility"])
}
export function maximumWindow(id: string) {
  const elem = document.getElementById(id)
  if (elem) {
    elem.classList.toggle(styles["maximumsize"])
    elem.style.top = "0"
  }
}
export default Main