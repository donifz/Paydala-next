import React from 'react'
import styles from './CheckByNumber.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const CheckByNumber = () => {
    const [value, setValue] = useState('')

    console.log(value)
    return (
        <div className={styles.preWrapper}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Введите номер чека</h3>
                {/* <form > */}
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className={styles.numberInput} />
                <p className={styles.description}>Номер чека вводится без Р</p>
                <hr className={styles.line} />
                <div className={styles.buttonBlock}><span className={styles.buttonLabel}>Проверка после ввода номера чека</span>
                    <Link href={`/CheckPaper/WithCheck/StatusPage?id=${value}`}><a > <button className={styles.checkButton}>Проверить</button></a></Link>
                </div>
                {/* </form> */}

            </div>
        </div>
    )
}

export default CheckByNumber