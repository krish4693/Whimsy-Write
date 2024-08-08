import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const linklist = [
  {
    title: "fashion",
    imageLink: "/fashion.png",
    href: '/fashion',
    className: styles.fashion
  },
  {
    title: "culture",
    imageLink: "/culture.png",
    href: '/culture',
    className: styles.culture
  },
  {
    title: "food",
    imageLink: "/food.png",
    href: '/food',
    className: styles.food
  },
  {
    title: "travel",
    imageLink: "/travel.png",
    href: '/travel',
    className: styles.travel
  },
  {
    title: "coding",
    imageLink: "/coding.png",
    href: '/coding',
    className: styles.coding
  },
];

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {linklist.map((item, index) => (
          <Link href={item.href} key={index}>
            <div className={`${styles.card} ${item.className}`}>
              <Image
                src={item.imageLink}
                alt={item.title}
                className={styles.cardImage}
                width={32}
                height={32}
              />
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
