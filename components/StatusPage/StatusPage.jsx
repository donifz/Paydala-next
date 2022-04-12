import React from 'react'
import ButtonUI from '../ButtonUI/ButtonUI'
import checkAgain from '../../public/checkAgain.svg'
import styles from './StatusPage.module.css'
import StatusPaper from '../StatusPaper'

const StatusPage = () => {
    return (
        <div>квитанция
            <StatusPaper />
            <div className={styles.buttonsBlock}> <ButtonUI variant={'outlined'}>Ошибся в номере</ButtonUI>
                <ButtonUI icon={checkAgain} variant={'outlined'}>Проверить еще одну</ButtonUI>
                <ButtonUI variant={'outlined'}>Запросить возврат</ButtonUI>
                <ButtonUI variant={'outlined'}>Поделиться</ButtonUI></div>


        </div>
    )
}

export default StatusPage