import styles from "./Header.module.scss"
import profilePic from "../../../../assets/profile.jpeg"
import { useRef, useState } from "react"
import { gsap } from "gsap"

const Header = () => {
    const [navbar,setNavbar] = useState(false)
    const navbarDiv = useRef(null)

    const closeNavbar = () => {
        setNavbar(false)
        gsap.to(navbarDiv.current, {
          left: "-25rem",
        })
      }
    
      const openNavbar = () => {
        setNavbar(true)
        gsap.to(navbarDiv.current, {
          left: "0",
        })
      }

  return (
    <header>
        <nav className={`${styles.nav} container`}>
            <div className={styles.profile}>
                <div className={styles.picture}>
                    <img src={profilePic} alt="profile" />
                </div>
                <div className={`${styles.headtitle} font-700`}>portfolio</div>
            </div>
            <div className={styles.hamburgermenu} onClick={openNavbar}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={styles.mobilenav} ref={navbarDiv}>
                <div className={`${styles.exit} font-500`} onClick={closeNavbar}>X</div>
                <li>
                    <a className="font-500" href="#">profile</a>
                    </li>
                    <li>
                        <a className="font-500" href="#">portofolio</a>
                    </li>
                    <li>
                        <a className="font-500" href="#">testimonial</a>
                    </li>
                    <li>
                        <a className="font-500" href="#">about</a>
                </li>
            </ul>
            <ul className={styles.pcnav}>
                <li>
                    <a className="font-500" href="#">profile</a>
                </li>
                <li>
                    <a className="font-500" href="#">portofolio</a>
                </li>
                <li>
                    <a className="font-500" href="#">testimonial</a>
                </li>
                <li>
                    <a className="font-500" href="#">about</a>
                </li>
            </ul>
        </nav>
        <div className={styles.shadow} onClick={closeNavbar} style={{ display:`${navbar ? "block": "none"}` }}></div>
    </header>
  )
}

export default Header