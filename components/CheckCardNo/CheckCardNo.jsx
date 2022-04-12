import React from 'react'
import styles from './CheckCardNo.module.css'
import Image from 'next/image'
import Brands from '../../public/Brands.png'
import noCheckIcon from '../../public/noCheckIcon.svg'
import Link from 'next/link'

const CheckCardNo = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <p className={styles.title}>Проверка без чека</p>
                <p className={styles.description}>Ввести:
                    абонентский номер
                    дата (+ - 1 день)
                    сумма</p>
                <Link href={`/CheckPaper/NoCheck`}><a className={styles.link}>Проверить</a></Link>
            </div>
            <div className={styles.cardImg}><Image src={noCheckIcon} /></div>
        </div>
    )
}

export default CheckCardNo