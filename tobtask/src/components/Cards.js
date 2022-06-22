import Card from "./Card";
import styles from "./Cards.module.css";
import { useState } from "react";

function NewComp() {
  const [numberOfCards, setNumberOfCards] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div className={styles.parent}>
      {numberOfCards.map(() => {
        return <Card />;
      })}
    </div>
  );
}

export default NewComp;
