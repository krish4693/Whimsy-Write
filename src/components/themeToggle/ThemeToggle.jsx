"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="Moon icon" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: '3px', backgroundColor: "#0f172a" }
            : { right: '3px', backgroundColor: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="Sun icon" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
