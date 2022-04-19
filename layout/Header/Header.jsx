import React from 'react'
import styles from './header.module.css'
import cn from 'classnames'
import Image from 'next/image'
import MainHeader from '../../components/MainHeader/MainHeader'
import SubHeader from '../../components/SubHeader/SubHeader'
import logo from '../../public/LogoPaydala.svg'
import burger from '../../public/icons/burgerOrange.svg'

const Header = ({ className, ...props }) => {

    return (
        <header {...props} className={cn(className, styles.header)}>
            <div className={styles.mobileLogoHeader}><Image src={burger} /><div className={styles.logo}><Image src={logo} /></div> </div>
            <MainHeader classname={styles.mainHeader} />
            <SubHeader classname={styles.subHeader} />
        </header>
    )
}

export default Header