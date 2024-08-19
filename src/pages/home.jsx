import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItems from "../Component/NewsItems";
import { newsStart } from "../redux/action/action";
import Crousel from "../Component/Crousel";

export default function Home() {
  const news = useSelector((state) => state.news);
  const err = useSelector((state) => state.err);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(newsStart());
  }, [dispatch]);

  err && (
    <h1 className="alert alert-danger d-flex justify-content-center align-items-center">
      <span className="highlight">
        {err.message || "Error : An error occurred while fetching data"}
      </span>
    </h1>
  );
  return (
    <>
      {news?.length > 0 && (
        <Crousel item1={news[47]} item2={news[52]} item3={news[8]} />
      )}
      <div className="container">
        <div className="row d-flex justify-content-center">
          {news?.length > 0 &&
            news.map((item, index) => {
              return (
                <div
                  className="col-sm-6 col-md-4 col-lg-3 mt-4 "
                  style={{ width: "22rem", fontSize: ".9rem" }}
                  key={index}
                >
                  <div className="card h-100 ">
                    <NewsItems item={item} />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
