import styles from "./SkillSection.module.scss"
import topFrame from "../../assets/top-frame.svg"
import botFrame from "../../assets/bot-frame.svg"
import Skill from "./components/Skill"

const SkillSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.views}>
        <div className={styles.top}>
          <img src={topFrame} alt="topFrame" />
        </div>
        <div className={styles.bot}>
          <img src={botFrame} alt="botFrame" />
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.info}>
          <div className={`${styles.title} font-300`}>
            <span className="font-500">My Abillity</span> Skills
          </div>
          <p className={`${styles.description} font-300`}>
            Here I attach the skills that can support me in creating UI/UX designs
          </p>
        </div>
        <ul className={styles.tecSkills}>
          <Skill skillName="User Interface Design" />
          <Skill skillName="User Experience Design" />
          <Skill skillName="Graphic Design" />
          <Skill skillName="Basic HTML dan CSS" />
        </ul>
      </div>
    </section>
  )
}

export default SkillSection
