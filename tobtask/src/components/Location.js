import styles from "./Location.module.css";
import apart from "../assets/apart.png";
import bed from "../assets/bed.png";

function Location() {
  return (
    <div className={styles.parent}>
      <img src={apart}></img>
      <div className={styles.propertyText}>
        <p style={{ fontWeight: "bold" }}>White city Villa</p>
        <p>1901 Thornridge Shilah</p>
      </div>
      <p style={{ fontWeight: "bold" }}>For rent</p>
      <img
        src={bed}
        style={{ width: "2%", height: "10%", marginTop: "1%" }}
      ></img>
      <span style={{ marginLeft: "-10%", marginTop: "0.5%" }}>3</span>
      <p>420m</p>
      <p style={{ fontWeight: "bold", marginRight: "5%" }}>$48.0000/year</p>
    </div>
  );
}

export default Location;
