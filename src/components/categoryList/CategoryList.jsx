import React from 'react'
import styles from './categoryList.module.css'

const linklist=[{
  title:"style",
  imageLink:"./style.png"
},
{
  title:"fashion",
  imageLink:"./fashion.png"
},

]

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1>Popular Categories</h1>
      <div className={styles.categories}>

      </div>
    </div>
  )
}

export default Featured