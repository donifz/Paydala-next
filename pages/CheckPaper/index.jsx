import React from 'react'
import CheckCardNo from '../../components/CheckCardNo/CheckCardNo'
import CheckCardWith from '../../components/CheckCardWith/CheckCardWith'
import LayoutHoc from '../../layout/Layout'
import styles from './CheckPaper.module.css'

const CheckPaper = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Проверка статуса платежа</h2>
            <p className={styles.subtitle}>По номеру чека или вводным данным</p>
            <div className={styles.checkCardBlock}>
                <CheckCardWith />
                <CheckCardNo />
            </div>

        </div>
    )
}

export default LayoutHoc(CheckPaper)