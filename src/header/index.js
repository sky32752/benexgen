import React from "react";
import { Typography } from "@material-ui/core";

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
    title: "Our Work",
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
    <div className='conatiner'>
      <nav id='header' className='navbar header navbar-expand-lg'>
        <a className='navbar-brand' href='/'>
          <img
            style={{ width: 150, height: 75 }}
            src={require("../img/fullyfinal.png")}
            alt='Benexgen_logo'
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
            style={{ fontWeight: 900, color: "#fff" }}
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
                <p onClick={() => onClick(id)} className='mx-2 nav-link'>
                  {title}
                </p>
              </li>
            ))}
          </ul>
          <button style={styles.button} onClick={onClick}>
            <Typography>Get In Touch</Typography>
          </button>
        </div>
      </nav>
    </div>
  );
};

const styles = {
  button: {
    background: `linear-gradient(45deg, ${"#fe6b8b"} 30%, ${"#ff8e53"} 90%)`,
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    width: 150,

    padding: "0px 20px",
    boxShadow: "0px 3px 5px 2px rgba(255, 105, 135, .3)",
    display: "flex",
    alignSelf: "center",
    justifyContent: "center",
    outlined: "none",
    cursor: "pointer",
    textAlign: "center",
    fontSize: 17,
    fontFamily: '"Gill Sans", sans-serif'
  }
};
