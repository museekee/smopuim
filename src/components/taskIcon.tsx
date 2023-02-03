import styles from "./../styles/main.module.scss"
import xIcon from "./../assets/images/xIcon.svg"

function TaskIcon({icon}: {icon: string}) {
    return (
        <button className={styles["icon"]}>
            <img src={icon} />
        </button>
    )
}

TaskIcon.defaultProps = {
    icon: xIcon
}

export default TaskIcon