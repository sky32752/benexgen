import React from "react";

const routes = [
  {
    title: "About Us",
    id: "#about"
  },
  {
    title: "Services",
    id: "#services"
  },
  {
    title: "Features",
    id: "#features"
  },
  {
    title: "Contact Us",
    id: "#contact"
  }
];

const TweenLite = window.TweenLite;

export const onClick = id => {
  TweenLite.to(window, 2, { scrollTo: { y: id }, ease: "Power2.easeOut" });
};

export default () => {
  return (
    <div className="conatiner">
      <nav id="header" className="navbar header navbar-expand-lg">
        <a className="navbar-brand" href="/">
          <img src="./images/logo.png" alt="Company Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i
            className="lnr lnr-menu"
            style={{ fontWeight: 900, color: "#fff" }}
          />
        </button>

        <div
          className="collapse navbar-collapse text-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            {routes.map(({ title, id }, key) => (
              <li
                key={key}
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                className="nav-item"
              >
                <p onClick={() => onClick(id)} className="mx-2 nav-link">
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
