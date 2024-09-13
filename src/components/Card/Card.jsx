import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = ({ item }) => {
  const imageUrl = item.img || "https://via.placeholder.com/400x300?text=No+Image+Available";

  return (
    <div className={styles.card}>
      <Link href={`/posts/${item.slug}`}>
        <Image
          src={imageUrl}
          alt={item.title}
          width={400}
          height={300}
          className={styles.cardImage}
          layout=""
          style={{
            width: '100%',
            height: '400px',
          }}
        />
        <h2 className={styles.cardTitle}>{item.title}</h2>
        {/* <p className={styles.cardDescription}>{item.desc}</p> */}
      </Link>

    </div>
  );
};

export default Card;
