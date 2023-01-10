import styles from "./Landing.module.scss"

const Landing = () => {
  return (
    <div className={styles.landing}>
        <div className={`${styles.name} font-800`}>gandi subara</div>
        <div className={`${styles.title} font-700`}><span className={styles.highlight}>ui/ux</span> designer</div>
        <p className={`${styles.description} font-400`}>I'm gandi subara those who are currently focusing on the field of ui/ux design, saga is very creative in design so my ui skills don't need to be doubted.</p>
    </div>
  )
}

export default Landing