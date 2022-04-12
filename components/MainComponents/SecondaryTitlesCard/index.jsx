import React from 'react'
import styles from './SecondaryTitlesCard.module.css'
import iconE from '../../../public/icons/settingLight.svg'
import Image from 'next/image'
import Brands from '../../../public/Brands.png'
import cn from 'classnames'
const SecondaryTitlesCard = ({ variant = 'terminal', title = "Техподдержка", subtitle = "Своевременное техническая поддержка", menu = ["Плательщикам", "Провайдерам", "Платёжным агентам"], icon = `` }) => {
    return (
        <div className={cn({
            [styles.support]: variant === "support",
            [styles.kassa]: variant === "kassa",
            [styles.terminal]: variant === "terminal",
            [styles.payment]: variant === "payment",
            [styles.internet]: variant === "internet",
            [styles.agrigation]: variant === "agrigation",

        })} id={styles.wrapper}>
            <div className={styles.logo}></div>
            <div className={styles.textBlock}>
                <div className={styles.mainText}>
                    <div className={styles.titleBlock}>
                        <div className={styles.icon}>
                            {/* <Image src={iconE} /> */}
                        </div>
                        <h1 className={styles.title}>{title}</h1>
                    </div>
                    <p className={styles.subtitle}>{subtitle}</p>
                    <nav className={styles.menu}>
                        <ul>
                            {menu.map((item, i) => {
                                return <li key={i}>{item}</li>
                            })}

                        </ul>
                    </nav>
                </div>
            </div>

            <div className={styles.imgBlock}> </div>
            {/* <div></div> */}
        </div>

    )
}

export default SecondaryTitlesCard