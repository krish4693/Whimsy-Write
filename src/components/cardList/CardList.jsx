import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../Pagination/Pagination";
import Card from "../Card/Card";

// Function to fetch posts data
const getData = async (page, cat) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=${page}&cat=${cat || ""}`,
    {
      cache: "no-store", // Disable caching to always fetch fresh data
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
};

const CardList = ({ posts, totalPosts, page, cat }) => {
  const POST_PER_PAGE = 4;

  // Calculate if previous or next pages exist
  const hasPrev = page > 1; // Can go to previous page if current page is greater than 1
  const hasNext = page * POST_PER_PAGE < totalPosts; // Can go to next page if the total posts fetched is less than the total count

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        {posts?.map((item) => (
          <Card item={item} key={item.id} className={styles.card} />
        ))}
      </div>
      {(!cat || cat === "") && (
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} cat={cat} />
      )}
    </div>
  );
};

// Fetch data server-side before rendering the page
export async function getServerSideProps({ query }) {
  const { page = 1, cat = "" } = query; // Default page to 1 if not provided

  try {
    const data = await getData(page, cat); // Fetch posts data from the API
    return {
      props: {
        posts: data.posts,
        totalPosts: data.totalPosts,
        page: parseInt(page), // Ensure page is an integer
        cat, // Pass category as prop
      },
    };
  } catch (error) {
    console.error("Error fetching posts data:", error);
    return {
      props: {
        posts: [],
        totalPosts: 0,
        page: parseInt(page),
        cat, // Pass category as prop
      },
    };
  }
}

export default CardList;
