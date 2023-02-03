import { opencloseWindow, maximumWindow } from "../main"
import styles from "./../styles/main.module.scss"

function Window({width, height, children, id}: {width: number, height: number, children: JSX.Element, id: string}) {
  return (
    <div id={id} className={`${styles["window"]} ${styles["invisibility"]}`} style={{width: width, height: height}}>
      <div className={styles["header"]}>
        <button className={`${styles["maximum"]} ${styles["button"]}`} onClick={() => maximumWindow(id)} />
        <button className={`${styles["close"]} ${styles["button"]}`} onClick={() => opencloseWindow(id)} />
      </div>
      <div className={styles["content"]}>
        {children}
      </div>
    </div>
  )
}
Window.defaultProps = {
  width: 500,
  height: 300
}

export default Window