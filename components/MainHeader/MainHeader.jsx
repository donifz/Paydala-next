import React from 'react'
import styles from './MainHeader.module.css'
import Image from 'next/image'
import Logo from '../../public/LogoPaydala.svg'

const MainHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}><Image src={Logo} /></div>
      <nav className={styles.nav}>
        <ul className={styles.menu} >
          <li>Плательщикам</li>
          <li>Предприятиям Торговли и Сервиса (или как в договорах)</li>
          <li>Платежным агентам</li>
        </ul></nav>
    </div>
  )
}

export default MainHeader