import LayoutHoc from '../../layout/Layout'
import styles from './Support.module.css'
import StatusCard from '../../components/StatusCard/StatusCard'
import ErrorCard from '../../components/ErrorCard/index'

import TerminalErrorCard from '../../components/TerminalErrorCard/index'
import TerminalCard from '../../components/TerminalCard/TerminalCard'

const Support = () => {


    return (
        <div className={styles.wrapper}>
            <StatusCard />
            <ErrorCard />
            <TerminalCard />
            <TerminalErrorCard />
        </div>
    )
}

export default LayoutHoc(Support)