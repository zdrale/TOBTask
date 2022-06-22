import styles from "./Property.module.css";
import map from "../assets/map.png";

function Property() {
  return (
    <div className={styles.parent}>
      <h2>Property Overview</h2>
      <img src={map}></img>
    </div>
  );
}

export default Property;
