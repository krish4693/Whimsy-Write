import React from "react";
import styles from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
import MenuPosts from "../menuPosts/MenuPosts";
import MenuCategories from "../menuCategories/MenuCategories";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>z
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill className={styles.image} fill></Image>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}` }>Travel</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet consecteur adipisicing</h3>
          <div className={styles.detail}>
            <span className={styles.username}>John Doe</span>
            <span className={styles.date}>24.03.24</span>
          </div>
          </div>
        </Link>
      </div>

    </div>
  );
};

export default Menu;
