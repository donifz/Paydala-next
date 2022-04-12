import React from 'react'
import styles from './TerminalErrorCard.module.css'


const TerminalErrorCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textBlock}>
                <p className={styles.title}>Терминал <br />
                    завис/отключился</p>
                <p className={styles.description}>Платеж автоматически будет проведен, если были введены данные и внесена сумма</p>
                <p className={styles.link}>Проверить</p>
            </div>
            <div className={styles.cardImg}><div className={styles.terminalErrorImg}><p>Устройство временно
                не работеат</p></div></div>
        </div>
    )
}

export default TerminalErrorCard
