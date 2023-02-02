import React from "react"
import xIcon from "./../Assets/Images/xIcon.svg"

function Icon({name, image}: {name: string, image: string}) {
    return (
        <button className="icon">
            <img className="iconPic" src={image} />
            <span className="desc">{name}</span>
        </button>
    )
}

Icon.defaultProps = {
    name: "알 수 없음",
    image: xIcon
}

export default Icon