import React from 'react'
import styles from './CheckByQr.module.css'

const CheckByQr = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Сканировать QR -код</h3>
            <p className={styles.description}>Наведите камеру на QR - код чека</p>
            <hr className={styles.line} />
            <div className={styles.buttonBlock}><span className={styles.buttonLabel}>Функция не доступна
                на данном устройстве</span>
                <button className={styles.checkButton}>Сканировать</button></div>


        </div>
    )
}

export default CheckByQr