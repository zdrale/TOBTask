import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import styles from "./Global.module.css";
import Cards from "./components/Cards";
import Property from "./components/Property";
import Location from "./components/Location";
function App() {
  return (
    <div className={styles.parent}>
      <Sidebar />
      <div className={styles.child}>
        <Main />
        <Cards />
        <Property />
        <Location />
        <Location />
      </div>
    </div>
  );
}

export default App;
