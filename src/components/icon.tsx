import React from "react"
import xIcon from "./../assets/images/xIcon.svg"
import styles from "./../styles/main.module.scss"

function Icon({name, image, onclick}: {name: string, image: string, onclick: () => any}) {
    return (
        <button className={styles["icon"]} onClick={onclick}>
            <img className={styles["iconPic"]} src={image} alt={`${name} 이미지`} />
            <span className={styles["desc"]}>{name}</span>
        </button>
    )
}

Icon.defaultProps = {
    name: "알 수 없음",
    image: xIcon
}

export default Icon