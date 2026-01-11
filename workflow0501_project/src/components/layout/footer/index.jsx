import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left */}
        <div className={styles.left}>
          <div className={styles.title}>Contacts</div>
          <div className={styles.text}>8 800 000 00 00</div>
          <div className={styles.text}>emailexample@email.com</div>
        </div>

        {/* Right */}
        <div className={styles.right}>
          <div className={styles.socials}>
            <a href="#" aria-label="Facebook">
              <img src="src/assets/socialIcons/fb.svg" alt="Facebook" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src="src/assets/socialIcons/twitter.svg" alt="Twitter" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="src/assets/socialIcons/instagram.svg" alt="Instagram" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className={styles.copy}>
          2024 Sneaker shop. All rights reserved
        </div>

        <div className={styles.subscribe}>
          <input type="email" placeholder="Enter your email:" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
