import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <div>
      <ul className={styles.navigation}>
        <li>Dashboard</li>
        <li>Properties</li>
        <li>Tenants</li>
        <li>Insurance</li>
        <li>Income</li>
        <li>Chat</li>
      </ul>
    </div>
  );
}

export default Navigation;
