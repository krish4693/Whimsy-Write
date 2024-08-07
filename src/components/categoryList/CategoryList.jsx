import React from "react";
import styles from "./categoryList.module.css";
import Image from "next/image";
import Link from "next/link";

const linklist = [
  {
    title: "fashion",
    imageLink: "/fashion.png",
    href:'/fashion'
  },
  {
    title: "culture",
    imageLink: "/culture.png",
    href:'/fashion'

  },
  {
    title: "food",
    imageLink: "/food.png",
    href:'/fashion'

  },
  {
    title: "travel",
    imageLink: "./travel.png",
    href:'/fashion'

  },
  {
    title: "culture",
    imageLink: "/culture.png",
    href:'/fashion'

  },
];

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1>Popular Categories</h1>
      <div className={styles.categories}>
        {linklist.map((item, index) => (
          <Link href={`/blog?cat=${item.slug}`}  key={index}>
            <div key={index}>
              <Image
                src={item.imageLink}
                alt={item.title}
                className="card-image"
                width={32}
                height={32}
              />
              <h3 className="card-title">{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
