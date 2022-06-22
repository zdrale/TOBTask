import Card from "./Card";
import styles from "./Cards.module.css";
import { useState } from "react";

function Cards() {
  const [numberOfCards, setNumberOfCards] = useState([1, 2, 3, 4]);
  return (
    <div className={styles.parent}>
      {numberOfCards.map(() => {
        return <Card />;
      })}
    </div>
  );
}

export default Cards;
