import styles from "./styles/main.module.scss"
import Icon from "./components/icon"
import TaskIcon from "./components/taskIcon"
import logo from "./logo.svg"
import { useEffect, useState } from "react"

function Main() {
  const Clock = () =>{
    const [date, setDate] = useState(()=> new Date())

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
    <div id={styles["main"]}>
      <div id={styles["icons"]}>
        <Icon name="알 수 있을 수도 있고 없을 수도 있습니다"/>
        <Icon />
        <Icon />
        <Icon />
      </div>
      <div id={styles["taskbar"]}>
        <button id={styles["startBtn"]} className={styles["icon"]}>
          <img src={logo} />
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
  )
}

export default Main