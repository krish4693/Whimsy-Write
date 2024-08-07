import React from 'react'
import styles from './categoryList.module.css'

const linklist=[{
  title:"fashion",
  imageLink:"./fashion.png"
},
{
  title:"culture",
  imageLink:"./culture.png"
},

]

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1>Popular Categories</h1>
      <div className={styles.categories}>
        {linklist.map((item,index)=>(
          <div key={index}>
          <img src={item.imageLink} alt={item.title} className="card-image" />
          <h3 className="card-title">{item.title}</h3>
        </div>
        ))}

      </div>
    </div>
  )
}

export default Featured