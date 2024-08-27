import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

// const linklist = [
//   {
//     title: "fashion",
//     imageLink: "/fashion.png",
//     href: '/fashion',
//     className: styles.fashion
//   },
//   {
//     title: "culture",
//     imageLink: "/culture.png",
//     href: '/culture',
//     className: styles.culture
//   },
//   {
//     title: "food",
//     imageLink: "/food.png",
//     href: '/food',
//     className: styles.food
//   },
//   {  
//     title: "travel",
//     imageLink: "/travel.png",
//     href: '/travel',
//     className: styles.travel
//   },
//   {
//     title: "coding",
//     imageLink: "/coding.png",
//     href: '/coding',
//     className: styles.coding
//   },
// ];

  const getData= async () =>{
    const res=await fetch("http://localhost:3000/api/categories",{
      cache:"no-store"
    })
    if(!res.ok){
      throw new Error("Failed")
    }
    return res.json()
  }


const Featured = async() => {
  const data=await getData()
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item, index) => (
          <Link href={`/blog?cat=${item.slug}`} key={index}>
            <div className={`${styles.card} ${styles[item.slug]}`}>
              <Image
                src={item.img}
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
