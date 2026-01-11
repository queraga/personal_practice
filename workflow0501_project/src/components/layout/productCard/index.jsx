import styles from "../productCard/styles.module.css";

function ProductCard({ product, onAdd }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImgWrap}>
        <img
          className={styles.cardImg}
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardTitle}>{product.name}</div>

        <div className={styles.cardBottom}>
          <div className={styles.cardPriceBlock}>
            <div className={styles.cardLabel}>PRICE:</div>
            <div className={styles.cardPrice}>€ {product.price}</div>
          </div>

          <button
            className={styles.cardBtn}
            type="button"
            onClick={() => onAdd?.(product)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
