import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styles from "./Global.module.css";
import Cards from "./components/Cards";
import Property from "./components/Property";
function App() {
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.child}>
        <Main />
        <Cards />
        <Property />
      </div>
    </div>
  );
}

export default App;
