import React from 'react'
import styles from './MainTitleCard.module.css'
import Image from 'next/image'
import logo from '../../../public/PDLOGO.svg'
const MainTitleCard = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}><Image src={logo} /></div>
            <div className={styles.mainText}><h1 className={styles.title}>PayDala</h1> <p className={styles.lozung}>PayDala - лозунг</p></div>
            <div className={styles.copyRight}>© 2022 PayDala</div>
        </div>
    )
}

export default MainTitleCard