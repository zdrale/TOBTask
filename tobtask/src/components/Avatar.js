import styles from "./Avatar.module.css";
import avatar from "../assets/avatar.jpg";
import gear from "../assets/gear.png";
import exit from "../assets/exit.png";

function Avatar() {
  return (
    <div className={styles.parent}>
      <img className={styles.avatar} src={avatar}></img>
      <p>Anette Blac</p>
      <p className={styles.email}>email@anette.com</p>
      <div className={styles.options}>
        <div className={styles.gearWrapper}>
          <img src={gear} className={styles.gear}></img>
        </div>
        <img className={styles.avatar} src={exit}></img>
      </div>
    </div>
  );
}

export default Avatar;
