"use client";
import styles from './home.module.scss'
import { useEffect, useState } from "react";
import Product from "@/app/components/product";
import { IProduct } from "@/app/shared/models";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const data = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products`,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    setProducts((await data.json()).products);
  }

  return (
    <main className={styles.main}>
      <div className={styles.vendingMachine}>
        <div className={styles.name}>DXC Technology</div>

        <div className={styles.productsContainer}>
          {
            products.map((product: IProduct) => {
              return <Product product={product} key={product.id}/>
            })
          }
        </div>
      </div>
    </main>
  );
}
