import Header from "./components/Header"
import Landing from "./components/Landing"
import Lighting from "./components/Lighting"
import Wraps from "./components/Wraps"
import styles from "./HeroSection.module.scss"

import frameOne from "../../assets/frame-1.png"
import frameTwo from "../../assets/frame-2.png"

const HeroSection = () => {
  return (
   <section className={styles.section}>
    <Header />
    <Landing />
    <Lighting />
    <Wraps />
    <div className={styles.frameone}>
      <img src={frameOne} alt="frameone" />
    </div>
    <div className={styles.frametwo}>
      <img src={frameTwo} alt="frametwo" />
    </div>
   </section>
  )
}

export default HeroSection