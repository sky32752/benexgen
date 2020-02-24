import React from "react";
import { isMobile } from "react-device-detect";
const routes = [
  {
    title: "About Us",
    id: "#about"
  },
  {
    title: "Contact Us",
    id: "#contact"
  },
  {
    title: "Services",
    id: "#services"
  },
  {
    title: "Features",
    id: "#features"
  }
];

const TweenLite = window.TweenLite;

export const onClick = id => {
  TweenLite.to(window, 2, { scrollTo: { y: id }, ease: "Power2.easeOut" });
};

export default () => {
  return (
    <div className='conatiner'>
      <nav id='header' className='navbar header py-0 navbar-expand-lg px-4'>
        <a className='navbar-brand' href='/'>
          <img
            height={isMobile ? "50px" : "100px"}
            width={isMobile ? "100px" : "200px"}
            src={require("../img/benexgen.png")}
            alt='Company Logo'
          />
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <i
            className='lnr lnr-menu'
            style={{ fontWeight: 900, color: "orange" }}
          />
        </button>

        <div
          className='collapse navbar-collapse text-center'
          id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {routes.map(({ title, id }, key) => (
              <li
                key={key}
                data-toggle='collapse'
                data-target='.navbar-collapse.show'
                className='nav-item'>
                <p
                  onClick={() => onClick(id)}
                  className='mx-2 text-white nav-link'>
                  {title}
                </p>
              </li>
            ))}
          </ul>
          <div onClick={() => onClick("#contact")}>
            <button
              style={{
                background: `linear-gradient(45deg, ${"#fe6b8b"} 30%, ${"#ff8e53"} 90%)`,
                borderRadius: 3,
                border: 0,
                color: "white",
                height: 48,
                width: "100%",
                padding: "0px 20px",
                boxShadow: "0px 3px 5px 2px rgba(255, 105, 135, .3)",
                display: "flex",

                justifyContent: "center",
                outlined: "none",
                cursor: "pointer",
                textAlign: "center",
                fontSize: 12
              }}
              className='mx-2 btn demo-btn hvr-sweep-to-right'
              data-toggle='collapse'
              data-target='.navbar-collapse.show'>
              Book a demo
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
