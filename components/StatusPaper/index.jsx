import React from 'react'
import styles from './StatusPaper.module.css'
import Image from 'next/image'
import logo from '../../public/LogoPaydala.svg'
import beeline from '../../public/BeelineIcon.svg'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import moment from 'moment'


const StatusPaper = ({ status }) => {
    return (<div className={styles.wrapper}>
        <div className={styles.polygonsTop}></div>
        <div className={styles.body}>
            <div className={styles.logo}><Image src={logo} /></div>
            <div className={styles.company}>
                <div className={styles.companyBlock}>
                    <div className={styles.companyLogo}><Image src={beeline} /></div>
                    <div className={styles.companyText}>
                        <p>{status?.serviceName || "Имя сервисной компании отсутствует"}</p>
                        <p>{status.account}</p>
                    </div>
                </div>
            </div>
            <div className={cn(styles.statusColor, {
                [styles.successColor]: status.paymentFinalStatusName === "SUCCESS",
                [styles.failedColor]: status.paymentFinalStatusName === "FAILED",
                [styles.inProcess]: status.paymentFinalStatusName === "INPROCESS",
            })}>{status.paymentFinalStatusName === "INPROCESS" ? "Платеж проводиться" : status.paymentFinalStatusName === "FAILED" ? "Платеж не проведен" : "Платеж успешно проводен"} </div>
            <div className={styles.paymentInfo}>
                <div className={styles.totals}>
                    <div className={styles.amount}>
                        <p className={styles.amountTitle}>Сумма платежа</p>
                        <p className={styles.amountMoney}>{status.paymentSum} ₸</p>
                    </div>
                    <div className={styles.commission}>
                        <p className={styles.commissionTitle}>Комиссия</p>
                        <p className={styles.commissionMoney}>{status.paymentFee} ₸</p>
                    </div>
                </div>
                <div className={styles.details}>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>Номер чека</p>
                        <p className={styles.detailsInfo}>P {status.operId}</p>
                    </div>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>Дата</p>
                        <p className={styles.detailsInfo}>{moment(status.operDateTime).format('D.MM.YYYY (HH:mm)')} </p>
                    </div>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>ФИО</p>
                        <p className={styles.detailsInfo}>{status?.accountName || "Имя отсутствует"}</p>
                    </div>
                    <div className={styles.detailsLine}>
                        <p className={styles.detailsLabel}>Терминал</p>
                        <p className={styles.detailsInfo}>ID {status.pointId}{status.pointCountry}{status.state} { }</p>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.polygonsBottom}></div>
    </div>
    )
}
StatusPaper.propTypes = {
    status: PropTypes.shape({
        account: PropTypes.string,
        accountName: PropTypes.string,
        checkNum: PropTypes.number,
        operDate: PropTypes.string,
        operDateTime: PropTypes.string,
        operId: PropTypes.number,
        operTime: PropTypes.string,
        operationNumber: PropTypes.number,
        paymentFee: PropTypes.number,
        paymentFinalStatus: PropTypes.number,
        paymentFinalStatusName: PropTypes.string,
        paymentSum: PropTypes.number,
        pointId: PropTypes.number,
        serviceId: PropTypes.number,
        serviceName: PropTypes.string,
        state: PropTypes.number,
        subState: PropTypes.number,
        serviceFullName: PropTypes.string,
        pointCountry: PropTypes.string
    })
}

export default StatusPaper

