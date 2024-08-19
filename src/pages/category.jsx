import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsItems from "../Component/NewsItems";
import {
  CategoriesnNewsSuccess,
} from "../redux/action/action";
import { Link, useParams } from "react-router-dom";
import Search from "../Component/Search";
import { newsStart } from "../redux/action/action";

export default function Category() {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  // const [filteredNews, setFilteredNews] = useState([]);
  const news = useSelector((state) => state.news);
  const categoryNews = useSelector((state) => state.categoryNews);
  const err = useSelector((state) => state.err);
  const { slug } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // setSelectedCategory(slug);
    // dispatch(CategoriesnNewsStart(selectedCategory));
    dispatch(newsStart());
  }, [slug, dispatch]);

  useEffect(() => {
    if (news && news.length > 0) {
      const lowerCaseSlug = slug.toLowerCase();
      const categoryFilteredNews =
        lowerCaseSlug === ""
          ? news
          : news.filter(
              (item) => item?.category?.toLowerCase() === lowerCaseSlug
            );

      // setFilteredNews(categoryFilteredNews);
      dispatch(CategoriesnNewsSuccess(categoryFilteredNews));
    }
  }, [slug, news, dispatch]);

  err && (
    <h1 className="alert alert-danger d-flex justify-content-center align-items-center">
      <span className="highlight">
        {err.message || "Error : An error occurred while fetching data"}
      </span>
    </h1>
  );
  return (
    <>
      <Search />
      <div className="container">
        <div className="row">
          {categoryNews.length === 0 ? (
            <p className="alert text-primary row justify-content-center align-items-center">
              No articles available in this category
              <Link className="text-center" to={"/"}>
                Back to home
              </Link>
            </p>
          ) : (
            categoryNews.map((item, index) => {
              return (
                <div className="col-sm-12 col-md-4 col-lg-6 mt-4 " key={index}>
                  <div className="card h-100 my-3">
                    <NewsItems item={item} index={index} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
