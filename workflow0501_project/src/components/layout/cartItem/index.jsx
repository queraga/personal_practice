import styles from "../cartItem/styles.module.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../store/cartSlice";
import trashIcon from "../../../assets/trashIcon.svg";

function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.image} alt={item.name} />

      <div className={styles.divider} />

      <div className={styles.info}>
        <div className={styles.name}>{item.name}</div>
      </div>

      <div className={styles.priceBlock}>
        <div className={styles.label}>PRICE:</div>
        <div className={styles.price}>{item.price} €</div>
      </div>

      <button
        className={styles.removeBtn}
        type="button"
        onClick={() => dispatch(removeFromCart(item.id))}
        aria-label="Remove item"
      >
        <img src={trashIcon} alt="Remove" width="30" height="31" />
      </button>
    </div>
  );
}

export default CartItem;
