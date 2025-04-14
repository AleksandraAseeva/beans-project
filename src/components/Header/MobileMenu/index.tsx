import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/reviews" onClick={handleLinkClick}>
              Reviews
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
