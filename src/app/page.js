import Image from "next/image";
import Link from "next/link";
import Featured from "@/components/featured/Featured";
import CategoryList from '@/components/categoryList/CategoryList'
import styles from './homepage.module.css'
import Pagination from '@/components/Pagination/Pagination'
import CardList from "@/components/cardList/CardList";
export default function Home() {
  return (
    <>
        <Featured/>
        <CategoryList/>
        <div className={styles.container}>
            <CardList/>
            <Pagination/>
            
        </div>
        
    </>
  );
}
