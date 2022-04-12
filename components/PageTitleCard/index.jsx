import React from 'react'
import styles from './PageTitleCard.module.css'
import Image from 'next/image'
import Icon from '../../public/checkIcon.svg'

const PageTitleCard = ({ title = "Дайте пропс", subtitle = "Надо", icon = Icon }) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
            <div className={styles.iconBlock}><Image src={icon} /></div>
        </div>
    )
}

export default PageTitleCard