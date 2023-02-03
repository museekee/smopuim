import React from "react"
import xIcon from "./../assets/images/xIcon.svg"
import styles from "./../styles/main.module.scss"

function Icon({name, image}: {name: string, image: string}) {
    console.log(styles)
    return (
        <button className={styles["icon"]}>
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