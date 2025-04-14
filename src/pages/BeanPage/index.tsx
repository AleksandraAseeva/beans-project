import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { beanSelector } from "../../Redux/bean/beanSelector";
import { useAppDispatch } from "../../Redux/store";
import "./styles.css";
import { getBean } from "../../api/bean";

export const BeanPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { data, isLoading, isError } = useSelector(beanSelector);

  useEffect(() => {
    if (!id) return;
    
    dispatch(getBean(id));
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}

      {data && (
        <div
          className="bean_container"
          style={{ background: data.backgroundColor }}
        >
          <img src={data.imageUrl} alt="" />
          <div className="info">
            <h1>{data.flavorName}</h1>
            <h3>{data.description}</h3>
            <p>Ingredients: {data.ingredients.map((item) => item + " , ")}</p>
            <p>{data.glutenFree ? "No gluten" : "With gluten"}</p>
          </div>
        </div>
      )}
      {isError && <Error />}
    </>
  );
};
