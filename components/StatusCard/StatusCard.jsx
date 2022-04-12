import React from 'react'
import styles from './StatusCard.module.css'
import Image from 'next/image'
import Brands from '../../public/Brands.png'
import Link from 'next/link'

const StatusCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <p className={styles.title}>Проверка
                    статуса платежа</p>
                <p className={styles.description}>По номеру чека или вводным данным</p>
                <Link href={'/CheckPaper'}><a className={styles.link}>Проверить</a></Link>

            </div>
            <div className={styles.cardImg}><Image src={Brands} /></div>
        </div>
    )
}

export default StatusCard