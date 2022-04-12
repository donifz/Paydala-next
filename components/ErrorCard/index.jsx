import React from 'react'
import styles from './ErrorCard.module.css'
import Image from 'next/image'
import ErrorIcon from '../../public/ErrorIcon.svg'

const ErrorCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <p className={styles.title}>Ошибся номером</p>
                <p className={styles.description}>Возврат будет возможен только при неуспешном статусе</p>
                <p className={styles.link}>Проверить статус</p>
            </div>
            <div className={styles.cardImg}><Image src={ErrorIcon} /> <p>Ошибся номером</p></div>
        </div>
    )
}

export default ErrorCard
