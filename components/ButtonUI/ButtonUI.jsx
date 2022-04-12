
import cn from 'classnames'
import React from 'react'
import styles from './ButtonUI.module.css'
import Image from 'next/dist/client/image'

const ButtonUI = ({ children, variant, icon, className, ...props }) => {
    return (
        <button className={cn({ [styles.outlined]: variant === 'outlined', [styles.noBorder]: variant === "default" },)}
            {...props}>
            {icon && <div className={styles.withIcon}>
                <Image src={icon} />
            </div>}{children}
        </button>
    )
}

export default ButtonUI