import React from 'react'
import styles from './MainHeader.module.css'
import Image from 'next/image'
import Logo from '../../public/LogoPaydala.svg'
import cn from 'classnames'

const MainHeader = ({ classname, ...props }) => {
  return (
    <div {...props} className={cn(styles.wrapper, classname)} >
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