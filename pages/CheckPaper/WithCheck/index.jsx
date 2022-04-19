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
                <CheckByQr />
                {/* {data.map((item) => {
                    return <p key={item.id}>{item.title}</p>
                })} */}
            </div>
            {/* <StatusPage /> */}
        </div>
    )
}

export default LayoutHoc(WithCheck)

// export async function getStaticProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
//     const data = await res.json()

//     // Pass data to the page via props
//     return { props: { data } }
// }