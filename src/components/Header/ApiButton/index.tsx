import { Link } from "react-router-dom";
import style from "./style.module.css";

export const ApiButton = () => {

  return (
    <button className={style.ApiB}>
        <Link to="/documentation" className={style.TextInB}>API Doc</Link>
    </button>
  );
};

