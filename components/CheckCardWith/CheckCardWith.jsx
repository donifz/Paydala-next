import React from 'react'
import styles from './CheckCardWith.module.css'
import Image from 'next/image'
import checkIcon from '../../public/checkIcon.svg'
import Link from 'next/link'

const CheckCardWith = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <p className={styles.title}>Проверка по чеку</p>
                <p className={styles.description}>Ввести:
                    номера чека или
                    сканировать чек камерой</p>
                <Link href={`/CheckPaper/WithCheck`}><a className={styles.link}>Проверить</a></Link>
            </div>
            <div className={styles.cardImg}><Image src={checkIcon} /></div>
        </div>
    )
}

export default CheckCardWith