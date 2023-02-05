import { useState } from "react"
import styles from "./../../styles/browser.module.scss"

let location = "about:blank"
function Browser() {
  return (
    <div className="content">
      <div className={styles["header"]}>
        <button>◀</button>
        <button>▶</button>
        <button>⟳</button>
        <div className={styles["locationContainer"]}>
          <input type="text" onChange={(e) => location = e.target.value}/>
        </div>
      </div>
      <iframe src={location} title="브라우저" id="browserBrowser" />
    </div>
  )
}
export function reset() {
  location = ""
}
export default Browser