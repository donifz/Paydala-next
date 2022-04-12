import React from 'react'
import styles from './CheckByNumber.module.css'

const CheckByNumber = () => {
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Введите номер чека</h3>
            <form >
                <input type="text" className={styles.numberInput} />
                <p className={styles.description}>Номер чека вводится без Р</p>
                <hr className={styles.line} />
                <div className={styles.buttonBlock}><span className={styles.buttonLabel}>Проверка после ввода номера чека</span>
                    <button className={styles.checkButton}>Проверить</button></div>
            </form>

        </div>
    )
}

export default CheckByNumber