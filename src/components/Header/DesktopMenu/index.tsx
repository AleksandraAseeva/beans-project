import { Link } from "react-router-dom";
import style from './styles.module.css'

export const DesktopMenu = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/beans">Beans</Link>
      <Link to="/facts">Facts</Link>
      <Link to="/recipes">Recipes</Link>
      <Link to="/combinations">Combinations</Link>
      <Link to="/history">History</Link>
      <Link to="/reviews">Reviews</Link>
    </nav>
  );
};
