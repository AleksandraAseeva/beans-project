import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { BeanCard } from "../../components/BeanCard";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { beansSelector } from "../../Redux/beans/beansSelector";
import { useAppDispatch } from "../../Redux/store";
import "./styles.css";
import { getBeans } from "../../api/beans";

export const BeansPage = () => {
  const dispatch = useAppDispatch();
  const { data, totalPages, isLoading, isError } = useSelector(beansSelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getBeans(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className="beans_container">
      <h1>Explore All Beans ...</h1>
      {isLoading && data.length === 0 ? (
        <Loader />
      ) : (
        <InfiniteScroll
          next={load}
          dataLength={data.length}
          loader={<Loader />}
          hasMore={page < totalPages}
        >
          {data.map((item) => (
            <BeanCard key={`beans_item_${item.beanId}`} data={item} />
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
