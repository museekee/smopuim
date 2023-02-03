import styles from "./../styles/main.module.scss"
import xIcon from "./../assets/images/xIcon.svg"

function TaskIcon({icon}: {icon: string}) {
    return (
        <button className={styles["icon"]}>
            <img src={icon} alt="작업표시줄 아이콘" />
        </button>
    )
}

TaskIcon.defaultProps = {
    icon: xIcon
}

export default TaskIcon