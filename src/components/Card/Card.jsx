import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <Image
        src={item.image}
        alt={item.title}
        width={400}
        height={300}
        className={styles.cardImage}
      />
      <h2 className={styles.cardTitle}>{item.title}</h2>
      <p className={styles.cardDescription}>{item.description}</p>
    </div>
  );
};

export default Card;
