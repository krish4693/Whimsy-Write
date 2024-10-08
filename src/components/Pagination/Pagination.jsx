"use client";

import React from "react";
import styles from "./pagination.module.css";
import { useRouter } from "next/navigation";

const Pagination = ({ page, hasPrev, hasNext,cat }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => hasPrev && router.push(`?page=${page - 1}&cat=${cat}`, { scroll: false })}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className={styles.button}
        onClick={() => hasNext && router.push(`?page=${page + 1}&cat=${cat}`, { scroll: false })}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;