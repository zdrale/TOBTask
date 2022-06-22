import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styles from "./Global.module.css";
import Cards from "./components/Cards";
function App() {
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.child}>
        <Main />
        <Cards />;
      </div>
    </div>
  );
}

export default App;
