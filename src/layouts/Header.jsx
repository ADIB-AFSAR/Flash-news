import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const [mode, setMode] = useState(document.body.getAttribute("data-bs-theme"));
  const changeMode = () => {
    const currentTheme = document.body.getAttribute("data-bs-theme");
    let newTheme = currentTheme === "light" ? "dark" : "light";
    document.body.setAttribute("data-bs-theme", newTheme);
    setMode(newTheme);
  };
  const category = useSelector((state) => state.categories);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mode]);

  return (
    <nav className="navbar sticky-top  navbar-expand-lg ">
      <div className="container">
        <div></div>
        <Link
          className={`navbar-brand fw-bold  heading ${
            mode === "light" ? "dark" : ""
          }`}
          to="/"
        >
          <span className="highlight" style={{ fontVariant: "all-small-caps" }}>
            {
              <img
                src={`${process.env.PUBLIC_URL}/flash.png`}
                alt="logo"
                height={15}
              />
            }
            Flash News
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-5 me-auto mb-2 mb-lg-0">
            {category.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <Link
                    className="nav-link active text-capitalize"
                    aria-current="page"
                    to={`/category/${item}`}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <button onClick={changeMode} className="btn btn-primary  mx-2">
          {mode === "dark" ? (
            <i className="bi bi-moon-stars-fill"></i>
          ) : (
            <i className="bi bi-sun-fill"></i>
          )}
        </button>
      </div>
    </nav>
  );
}

export default Header;
