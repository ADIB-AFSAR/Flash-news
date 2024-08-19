import React from "react";
import { Link } from "react-router-dom";

export default function NewsItems(props) {
  return (
    <>
      {props?.item && (
        <>
          <img
            src={props.item.urlToImage}
            className="card-img-top"
            alt={props.item.title}
          />
          <div className="card-body mb-4 mt-2 text-center">
            <h5 className="card-title">{props.item.title}</h5>
            <p className="card-text">{props.item.description}</p>
            <div className="card col-4 mx-auto">
              <Link to={props.item.url} className="btn btn-primary">
                <small className="text-body-primary ">Read more</small>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}