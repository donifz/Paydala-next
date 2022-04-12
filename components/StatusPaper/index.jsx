import React from 'react'
import styles from './StatusPaper.module.css'
import Image from 'next/image'
import logo from '../../public/LogoPaydala.svg'
import beeline from '../../public/BeelineIcon.svg'
const StatusPaper = () => {
    return (<div className={styles.wrapper}>
        <div className={styles.polygonsTop}></div>
        <div className={styles.body}>
            <div className={styles.logo}><Image src={logo} /></div>
            <div className={styles.company}>
                <div className={styles.companyBlock}>
                    <div className={styles.companyLogo}><Image src={beeline} /></div>
                    <div className={styles.companyText}>
                        <p>Beeline</p>
                        <p>+7 (776) 006-04-90</p>
                    </div>
                </div>
            </div>
            <div className={styles.statusColor}>Платеж проводиться</div>
            <div className={styles.paymentInfo}>
                <div className={styles.totals}>
                    <div className={styles.amount}>
                        <p className={styles.amountTitle}>Сумма платежа</p>
                        <p className={styles.amountMoney}>30 000 ₸</p>
                    </div>
                    <div className={styles.commission}>
                        <p className={styles.commissionTitle}>Комиссия</p>
                        <p className={styles.commissionMoney}>500 ₸</p>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>Номер чека</p>
                        <p className={styles.detailsInfo}>P 4230</p>
                    </div>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>Дата</p>
                        <p className={styles.detailsInfo}>27.04.2021 (16:30) </p>
                    </div>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>ФИО</p>
                        <p className={styles.detailsInfo}>Петров С. А.</p>
                    </div>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>Терминал</p>
                        <p className={styles.detailsInfo}>ID 117KZ23</p>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.polygonsBottom}></div>
    </div>
    )
}

export default StatusPaper