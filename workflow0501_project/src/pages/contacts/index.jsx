import styles from "../contacts/styles.module.css";
import snapchatContacts from "../../assets/socialIcons/snapchatContacts.svg";
import fbContacts from "../../assets/socialIcons/fbContacts.svg";
import XContacts from "../../assets/socialIcons/XContacts.svg";

function ContactsPage() {
  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h1 className={styles.title}>Contacts</h1>

        <ul className={styles.list}>
          <li>8 800 000 00 00</li>
          <li>emailexample@email.com</li>
        </ul>

        <form className={styles.form}>
          <div className={styles.row}>
            <input
              className={styles.input}
              type="email"
              placeholder="Your email"
            />
            <input
              className={styles.input}
              placeholder="Your name"
              type="text"
            />
          </div>

          <textarea
            className={styles.textarea}
            placeholder="Enter your message"
          />

          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>

      <div className={styles.right}>
        <div className={styles.socialBox}>
          <p className={styles.findUs}>Find us on:</p>

          <div className={styles.socials}>
            <a href="#" aria-label="Snapchat">
              <img src={snapchatContacts} alt="Snapchat" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src={fbContacts} alt="Facebook" />
            </a>
            <a href="#" aria-label="X">
              <img src={XContacts} alt="X" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactsPage;
