import styles from "./Skill.module.scss"
import { FunctionComponent } from "react"

type Skill = {
  skillName: string
}

const Skill: FunctionComponent<Skill> = ({ skillName }) => {
  return (
    <li className={styles.skill}>
      <div className={styles.icon}>
        <i className="bx bx-left-arrow-alt"></i>
        <i className="bx bx-right-arrow-alt"></i>
      </div>
      <div className={`${styles.skillname} font-500`}>{skillName}</div>
    </li>
  )
}

export default Skill
