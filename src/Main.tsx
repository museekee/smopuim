import styles from "./styles/main.module.scss"
import Icon from "./components/icon"
import logo from "./logo.svg"
import { useEffect, useState } from "react"

function Main() {
  const Clock = () =>{
    const [date, setDate] = useState(()=> new Date())

    useEffect(() => {
      const timeId = setInterval(() => tick(), 1000)
      console.log('setInteval')

      return () => {
        clearInterval(timeId)
        console.log('clearInterval')
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

        </div>
        <div id={styles["taskTime"]}>
          <span>{Clock().toTimeString()}</span>
        </div>
      </div>
    </div>
  )
}

export default Main