import React from "react";
import Search from "./Search";

function Crousel(props) {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide mb-6 pointer-event"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className="active"
            aria-current="true"
          ></button>
        </div>
        <div className="carousel-inner carousel-container">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-6">
                <div className="fixed-search col-8">
                  <Search />
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item crouselItem">
            <img
              className="crouselImg"
              src={props?.item1?.urlToImage}
              alt={props?.item1?.description}
            ></img>
            <div className="container">
              <div className="carousel-caption text-start">
                <h1 className="text-white">{props?.item1?.title}</h1>
                {/* <p className="text-dark">{props?.item1?.description}</p> */}
                <p>
                  <a
                    className="btn btn-lg btn-primary btn-sm"
                    href={props?.item1?.url}
                  >
                    Visit
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item crouselItem">
            <img
              className="crouselImg"
              src={props?.item2?.urlToImage}
              alt={props?.item2?.description}
            ></img>
            <div className="container">
              <div className="carousel-caption">
                <h1 className="text-white">{props?.item2?.title}</h1>
                {/* <p className="text-dark">{props?.item2?.description}</p> */}
                <p>
                  <a
                    className="btn btn-lg btn-sm btn-primary"
                    href={props?.item2?.url}
                  >
                    Visit
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item active crouselItem">
            <img
              src={props?.item3.urlToImage}
              alt={props?.item3?.description}
              className="crouselImg"
            ></img>
            <div className="container">
              <div className="carousel-caption text-end">
                <h1 className="text-white">{props?.item3?.title}</h1>
                {/* <p className="text-white fw-bold">{props?.item3?.description}</p> */}
                <p>
                  <a
                    className="btn btn-lg btn-sm btn-primary"
                    href={props?.item3?.url}
                  >
                    Read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Crousel;
