import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Image from "next/image";
import Card from "../Card/Card";


const getData= async (page) =>{
  const res=await fetch(` http://localhost:3000/api/posts?page=${page}`,{
    cache:"no-store"
  })
  if(!res.ok){
    throw new Error("Failed")
  }
  return res.json()
}


const CardList =  async ({ page, cat }) => {
  // Dummy data
  const posts1   = [
    {
      _id: "1",
      title: "Exploring the Mountains",
      description: "A thrilling adventure in the rocky mountains.",
      image: "https://via.placeholder.com/400x300?text=Mountain+Adventure",
    },
    {
      _id: "2",
      title: "City Lights at Night",
      description: "The beautiful cityscape under the night sky.",
      image: "https://via.placeholder.com/400x300?text=City+Lights",
    },
    {
      _id: "3",
      title: "Sunny Beach Vibes",
      description: "Relaxing on a sunny beach with crystal clear waters.",
      image: "https://via.placeholder.com/400x300?text=Sunny+Beach",
    },
    {
      _id: "4",
      title: "Autumn in the Park",
      description: "Walking through the park during the autumn season.",
      image: "https://via.placeholder.com/400x300?text=Autumn+Park",
    },
  ];



  const POST_PER_PAGE = 4;

  

  const {posts,totalPosts}=await getData(page)
  // const count = data.length;
  // const count = 5;
  console.log("Count",totalPosts)
  const hasPrev = page > 1; // Can go to previous page if current page is greater than 1
  const hasNext = (page * POST_PER_PAGE) < totalPosts; // Can go to next page if the total posts fetched is less than the total count
  
  // const hasPrev=5
  // const hasNext=5


  console.log("Hello",posts)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
