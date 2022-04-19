import React from 'react'
import styles from './SubHeader.module.css'
import Image from 'next/image'
import Logo from '../../public/LogoPaydala.svg'
import cn from 'classnames'


const SubHeader = ({ classname, ...props }) => {
  return (
    <div {...props} className={cn(styles.wrapper, classname)}>
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