import React from 'react'
import checkAgain from '../../../../public/checkAgain.svg'
import styles from './StatusPage.module.css'
import ButtonUI from '../../../../components/ButtonUI/ButtonUI'
import StatusPaper from '../../../../components/StatusPaper'
import LayoutHoc from '../../../../layout/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import loadingSpinner from '../../../../public/loadingSpinner2.svg'

const StatusPage = (props) => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState()
    console.log(props)
    useEffect(() => {

        if (router.query.id) {
            setLoading(true)
            fetch(`https://paydala.kz/api/api/softlogic/ps/payment/statyus/${router.query.id}`).then(((res, rej) => {
                return res.json()
            })).then((data => {
                setLoading(false)
                setStatus(data)
                console.log(data)
            }))



        }
    }, [router])

    return (
        <div className={styles.wrapper}>
            {status ? status.error ? <h1>Нет такого чека</h1> : <StatusPaper status={status} /> : <Image src={loadingSpinner} />
            }

            {status && !status.error && <div className={styles.buttonsBlock}>
                <ButtonUI classname={styles.button} variant={'outlined'}>Ошибся в номере</ButtonUI>
                <ButtonUI classname={styles.button} icon={checkAgain} variant={'outlined'}>Проверить еще одну</ButtonUI>
                <ButtonUI classname={styles.button} variant={'outlined'}>Запросить возврат</ButtonUI>
                <ButtonUI classname={styles.button} variant={'outlined'}>Поделиться</ButtonUI>
            </div>}


        </div>
    )
}

export default LayoutHoc(StatusPage)



// export async function getServerSideProps({ query }) {
//     const res = await fetch(`https://paydala.kz/api/api/softlogic/ps/payment/statyus/${query.id}`)
//     const data = await res.json()
//     return {
//         props: res ? { data } : {}, // will be passed to the page component as props
//     }
// }
// export async function getStaticProps(params) {
//     console.log(params)
//     // const res = await fetch(`https://paydala.kz/api/api/softlogic/ps/payment/statyus/${query.id}`)
//     // const data = await res.json()
//     return {
//         props: res ? { data } : {}, // will be passed to the page component as props
//     }
// }

