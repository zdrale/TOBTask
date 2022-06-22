import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styles from "./Global.module.css";
import NewComp from "./components/NewComp";
function App() {
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.child}>
        <Main />
        <NewComp />
      </div>
    </div>
  );
}

export default App;
