import React from 'react'
import styles from './header.module.css'
import cn from 'classnames'
import Image from 'next/image'
import MainHeader from '../../components/MainHeader/MainHeader'
import SubHeader from '../../components/SubHeader/SubHeader'


const Header = ({ className, ...props }) => {

    return (
        <header {...props} className={cn(className, styles.header)}>
            <MainHeader />
            <SubHeader />
        </header>
    )
}

export default Header