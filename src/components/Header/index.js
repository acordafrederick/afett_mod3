import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.scss";

import { motion } from "framer-motion";

const Header = ({ categoryList = [] }) => {
  const [open, setOpen] = useState(false);

  return (
    // <header className={styles["header"]}>
    <motion.header
      className={styles["header"]}
      animate={open ? "open" : "closed"}
    >
      <div className={styles["header__wrapper"]}>
        <div className={styles["header__itemLeft"]}>
          {/* MENU BUTTON WILL GO HERE*/}
          <button
            aria-label="Toggle Menu"
            className={styles["header__menuBtn"]}
            onClick={() => setOpen(!open)}
          >
            <svg width="40" height="40" viewBox="0 0 20 20">
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#ffffff"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 2.5 L 18 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#ffffff"
                strokeLinecap="round"
                d="M 2 9.423 L 18 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <motion.path
                fill="transparent"
                strokeWidth="3"
                stroke="#ffffff"
                strokeLinecap="round"
                variants={{
                  closed: { d: "M 2 16.346 L 18 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </div>

        <div className={styles["header__itemCenter"]}>
          <Link href="/">
            <a className={styles["header__title"]}>paradigm.</a>
          </Link>
        </div>
      </div>
      {/* NAVIGATION MENU WILL GO HERE */}
      <div
        className={`${styles["header__menu"]} ${
          open ? styles["header__menu--open"] : styles["header__menu--closed"]
        }`}
      >
        <nav className={styles["header__nav"]}>
          {categoryList.map(({ slug, name }) => (
            <Link key={slug} href={`/${slug}`}>
              <a
                className={styles["header__navlink"]}
                onClick={() => setOpen(false)}
              >
                {name}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
