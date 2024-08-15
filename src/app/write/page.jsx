"use client"

import Image from "next/image"
import styles from './writePage.module.css'
import {useState} from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.bubble.css"




const writePage = () => {
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input} />
        <div className={styles.editor}>
            <button className={styles.button}>
                
            </button>
        </div>
    </div>
  )
}

export default writePage