import styles from "./Main.module.css";
import search from "../assets/search.png";
import bell from "../assets/bell.png";

function Main() {
  return (
    <div className={styles.parent}>
      <div className={styles.about}>
        <h1>Property Dashboard</h1>
        <p>Welcome, Annete</p>
      </div>
      <div className={styles.imageParent}>
        <img className={styles.search} src={search}></img>
        <img className={styles.bell} src={bell}></img>
        <button className={styles.button}>+ Add New</button>
      </div>
    </div>
  );
}

export default Main;
