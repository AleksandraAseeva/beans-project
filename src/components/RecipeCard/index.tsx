import { FC } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../../types";
import styles from "./styles.module.css";

type Props = {
  data: Recipe;
};
export const RecipeCard: FC<Props> = ({ data }) => {
  return (
    <Link to={`/recipe/${data.recipeId}`} className={styles.wrapper}>
      <img src={data.imageUrl} alt="" />
      <div className={styles.info}>
        <h3>{data.name}</h3>
        <p className={styles.description}>
          {data.description.length > 100
            ? data.description.slice(0, 100) + "..."
            : data.description}
        </p>
        {data.makingAmount && (
          <p className={styles.additional_info}> Make: {data.makingAmount}</p>
        )}
        {data.cookTime && (
          <p className={styles.additional_info}>Cook Time: {data.cookTime}</p>
        )}
        {data.totalTime && (
          <p className={styles.additional_info}>Total Time: {data.totalTime}</p>
        )}
      </div>
    </Link>
  );
};
