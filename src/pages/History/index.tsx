import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { historySelector } from "../../Redux/history/historySelector";
import { useAppDispatch } from "../../Redux/store";
import "./styles.css";
import { getHistory } from "../../api/history";

export const HistoryPage = () => {
  const dispatch = useAppDispatch();
  const { data, isLoading, totalPages, isError } = useSelector(historySelector);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getHistory(page));
  }, [page]);

  const load = () => {
    setPage(page + 1);
  };
  return (
    <div className="history_container">
      <h1>History ...</h1>
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
            <div className="item" key={`history_item_${item.mileStoneId}`}>
              <h3>{item.year}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </InfiniteScroll>
      )}
      {isError && <Error />}
    </div>
  );
};
