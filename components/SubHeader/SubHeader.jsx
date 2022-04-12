import React from 'react'
import styles from './SubHeader.module.css'
import Image from 'next/image'
import Logo from '../../public/LogoPaydala.svg'

const SubHeader = () => {
  return (
    <div className={styles.wrapper}>
      {/* <div className={styles.logo}><Image src={Logo} /></div> */}
      <nav className={styles.nav}>
        <ul className={styles.menu} >
          <li>Проблема с платежом</li>
          <li>Проблема с терминалом</li>
          <li>Проблема с кассой</li>
          <li>Посмотреть статус по запросу</li>
          <li>Мы на Карте</li>
        </ul></nav>
    </div>
  )
}

export default SubHeader