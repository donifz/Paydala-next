import React from 'react'
import PageTitleCard from '../../../components/PageTitleCard'
import LayoutHoc from '../../../layout/Layout'
import Icon from '../../../public/noCheckIcon.svg'
import styles from './NoCheck.module.css'

const NoCheck = () => {
    return (
        <div className={styles.wrapper}>
            <PageTitleCard title='Проверка без чека' subtitle='Введите абонентский номер, дата (+-1день)
и сумма' icon={Icon} />
        </div>
    )
}

export default LayoutHoc(NoCheck)