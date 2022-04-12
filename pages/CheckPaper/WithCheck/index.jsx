import React from 'react'
import PageTitleCard from '../../../components/PageTitleCard'
import LayoutHoc from '../../../layout/Layout'
import styles from './WithCheck.module.css'
import Icon from '../../../public/checkIcon.svg'
import CheckByNumber from '../../../components/CheckByNumber/CheckByNumber'
import CheckByQr from '../../../components/CheckByQr/CheckByQr'
import StatusPage from '../../../components/StatusPage/StatusPage'


const WithCheck = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitleCard title='Проверка по чеку ' subtitle='Введите номер чека или сканируйте чек камерой' icon={Icon} />
            <div className={styles.checkBlock}>
                <CheckByNumber />
                <CheckByQr /></div>
            <StatusPage />
        </div>
    )
}

export default LayoutHoc(WithCheck)