import React from 'react'
import Header from './Header/Header'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <div className={styles.body}>
                {children}
            </div>

        </div>
    )
}

const LayoutHoc = (Component) => {
    return function withLayoutComponent(props) {
        return (
            <Layout>
                <Component {...props} />
            </Layout>)
    }
}
export default LayoutHoc

