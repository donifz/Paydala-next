import LayoutHoc from "../layout/Layout";
import dynamic from "next/dynamic";
// import StatusCard from "../components/StatusCard/StatusCard";
// import TerminalCard from "../components/TerminalCard/TerminalCard";

import styles from "../styles/Home.module.css";
import ErrorCard from "../components/ErrorCard";
import TerminalErrorCard from "../components/TerminalErrorCard";

const StatusCard = dynamic(() => import("../components/StatusCard/StatusCard"));
const TerminalCard = dynamic(() =>
  import("../components/TerminalCard/TerminalCard"),
);

function Home() {
  return (
    <div className={styles.wrapper}>
      <StatusCard />
      <ErrorCard />
      <TerminalCard />
      <TerminalErrorCard />
    </div>
  );
}

export default LayoutHoc(Home);
