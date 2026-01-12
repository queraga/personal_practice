import { useSelector } from "react-redux";
import styles from "../basketPage/styles.module.css";
import CartItem from "../../components/layout/cartItem";

function BasketPage() {
  const cartItems = useSelector((state) => state.cart.items);

  const total = cartItems.reduce((sum, item) => sum + Number(item.price), 0);

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Basket</h1>
        <div className={styles.divider} />

        <div className={styles.layout}>
          <div className={styles.list}>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <aside className={styles.summary}>
            <div className={styles.summaryTitle}>Total</div>

            <div className={styles.summaryItems}>
              {cartItems.map((item) => (
                <div key={item.id} className={styles.summaryItem}>
                  {item.name}
                </div>
              ))}
            </div>

            <div className={styles.summaryLine} />

            <div className={styles.summaryLabel}>Order Summary:</div>
            <div className={styles.summaryPrice}>{total} €</div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default BasketPage;
