import logo from "../assets/House.png";
import styles from "./Sidebar.module.css";
import Navigation from "./Navigation";
import Avatar from "./Avatar";

function Sidebar() {
  return (
    <div className={styles.parent}>
      <img src={logo} className={styles.logo}></img>
      <Navigation />
      <Avatar />
    </div>
  );
}

export default Sidebar;
