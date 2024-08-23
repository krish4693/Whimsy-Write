import React from "react";
import styles from "./card.module.css";
import Image from "next/image";

const Card = ({ item }) => {
  const imageUrl = item.img || "https://via.placeholder.com/400x300?text=No+Image+Available";

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={item.title}
        width={400}
        height={300}
        className={styles.cardImage}
      />
      <h2 className={styles.cardTitle}>{item.title}</h2>
      <p className={styles.cardDescription}>{item.desc}</p>
    </div>
  );
};

export default Card;
