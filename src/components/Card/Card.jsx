import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";


const Card = ({ item }) => {
  const imageUrl = item.img || "https://via.placeholder.com/400x300?text=No+Image+Available";

  return (
    <div className={styles.card}>
      <Link href={`/posts/${item.slug}`} className={styles.link}>
        <Image
          src={imageUrl}
          alt={item.title}
          width={30}
          height={30}
          className={styles.cardImage}
          layout=""

        />
        <div>
          <h2 className={styles.cardTitle}>{item.title}</h2>
          <div className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
        </div>
      </Link>

    </div>
  );
};

export default Card;
