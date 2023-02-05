import React from "react"
import Draggable from "react-draggable"
import xIcon from "./../assets/images/xIcon.svg"
import styles from "./../styles/icon.module.scss"

function Icon({name, image, onclick}: {name: string, image: string, onclick: () => any}) {
  const nr = React.useRef(null)
  return (
    <Draggable nodeRef={nr} grid={[85, 95]}>
      <button className={styles["icon"]} onClick={onclick} ref={nr}>
        <div className={styles["iconPic"]} style={{backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}} />
        <span className={styles["desc"]}>{name}</span>
      </button>
    </Draggable>
  )
}

Icon.defaultProps = {
  name: "알 수 없음",
  image: xIcon
}

export default Icon