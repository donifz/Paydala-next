import React from 'react'
import styles from './TerminalCard.module.css'
import Image from 'next/image'
import Brands from '../../public/Brands.png'
import Money from '../../public/money.png'

const TerminalCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <p className={styles.title}>Терминал
                    зажевал купюру</p>
                <p className={styles.description}>По чеку и без</p>
                <p className={styles.link}>Подать заявку</p>
            </div>
            <div className={styles.cardImg}><Image src={Money} /></div>
        </div>
    )
}

export default TerminalCard