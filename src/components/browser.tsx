import { useState } from "react"
import styles from "./../styles/browser.module.scss"

function Browser() {
  const [location, setLocation] = useState("about:blank")
  return (
    <div className="content">
      <div className={styles["header"]}>
        <button>◀</button>
        <button>▶</button>
        <button>⟳</button>
        <div className={styles["locationContainer"]}>
          <input type="text" onChange={(e) => setLocation(e.target.value)}/>
        </div>
      </div>
      <iframe src={location} title="브라우저" id="browserBrowser" />
    </div>
  )
}
export default Browser