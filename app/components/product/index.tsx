import styles from './product.module.scss';
import { IProduct } from "@/app/shared/models";
import Image from 'next/image'

interface Props {
  product: IProduct;
}

const Product = ({ product }: Props) => {
  return (
    <div className={styles.product}>
      <Image
        src={product.img}
        width={80}
        height={80}
        alt={product.name}
      />

      <div className={styles.label}>
        <div className={styles.productId}>{product.id}</div>
        <div className={styles.productPrice}>{product.price.toFixed(2)}$</div>
      </div>
    </div>
  )
}

export default Product;