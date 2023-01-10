import Header from "./components/Header"
import Landing from "./components/Landing"
import Lighting from "./components/Lighting"
import Wraps from "./components/Wraps"
import styles from "./HeroSection.module.scss"

const HeroSection = () => {
  return (
   <section className={styles.section}>
    <Header />
    <Landing />
    <Lighting />
    <Wraps />
   </section>
  )
}

export default HeroSection