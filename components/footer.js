import styles from "../styles/footer.module.css";

const Footer = () => (
  <footer>
    <a
      href="https://miro.com/app/board/o9J_kulYeX0=/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get Resume 2020 ©{" "}
    </a>
    <div>
      <ul className={`${styles.footerList}`}>
        <li className={`${styles.footerLi}`}>
          <small>
            <span className={`${styles.emoji}`}>👨‍💻</span>
            <a
              href="https://github.com/boriskirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </small>
        </li>
        <li className={`${styles.footerLi}`}>
          <small>
            <span className={`${styles.emoji}`}>👾</span>
            <a
              href="https://figma.com/@boriskirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Figma
            </a>
          </small>
        </li>
        <li className={`${styles.footerLi}`}>
          <small>
            <span className={`${styles.emoji}`}>📝</span>
            <a
              href="https://medium.com/@bkirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </a>
          </small>
        </li>
        <li className={`${styles.footerLi}`}>
          <small>
            <span className={`${styles.emoji}`}>🐙</span>
            <a
              href="https://dribbble.com/boriskirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </small>
        </li>
        <li className={`${styles.footerLi}`}>
          <small>
            <span className={`${styles.emoji}`}>🐦</span>
            <a
              href="https://twitter.com/boris_a_kirov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </small>
        </li>
        <li className={`${styles.footerLi}`}>
          <small>
            <span className={`${styles.emoji}`}>🔗</span>
            <a
              href="https://www.linkedin.com/in/boris-kirov-b6b110a4/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </small>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
