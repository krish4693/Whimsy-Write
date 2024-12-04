import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";



const Card = ({ item }) => {
  const imageUrl = item.img || "https://via.placeholder.com/400x300?text=No+Image+Available";


  function formatDate(isoString) {
    const date = new Date(isoString);

    const day = date.getDate();
    const year = date.getFullYear();
    const month=date.getMonth()

    // const months = [
    //   "January", "February", "March", "April", "May", "June",
    //   "July", "August", "September", "October", "November", "December"
    // ];


    // Return the formatted string
    return `${day}.${month}.${year}`;
  }

  // Example usage
  const isoDate = "2024-12-04T10:45:53.254Z";
  console.log(formatDate(isoDate)); // Output: 4-December-2024


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
          <div className={styles.cardDescription} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }} />
          <div>Published on {formatDate(item?.createdAt)}</div>
        </div>
      </Link>

    </div>
  );
};

export default Card;
