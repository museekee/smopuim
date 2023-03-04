import { opencloseWindow, maximumWindow } from "../pages/main"
import styles from "./../styles/window.module.scss"
import Mstyles from "./../styles/main.module.scss"
import Draggable from "react-draggable"
import React from "react";

function Window({width, height, children, id, reset}: {width: number, height: number, children: JSX.Element | JSX.Element[], id: string, reset: () => void}) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable nodeRef={nodeRef} handle="header" defaultClassNameDragging={Mstyles["visibility"]} defaultClassNameDragged={Mstyles["visibility"]}>
      <div id={id} className={`${styles["window"]} no-cursor`} style={{width: width, height: height}} ref={nodeRef}>
        <header className={`${styles["header"]}`}>
          <button className={`${styles["maximum"]} ${styles["button"]}`} onClick={() => maximumWindow(id)} />
          <button className={`${styles["minimum"]} ${styles["button"]}`} onClick={() => opencloseWindow(id)} />
          <button className={`${styles["close"]} ${styles["button"]}`} onClick={() => {reset(); opencloseWindow(id)}} />
          {/* <button className={`${styles["close"]} ${styles["button"]}`} onClick={() => closeWindow(id, children)} /> */}
        </header>
        {children}
      </div>
    </Draggable>
  )
}
Window.defaultProps = {
  width: 500,
  height: 300
}

export default Window