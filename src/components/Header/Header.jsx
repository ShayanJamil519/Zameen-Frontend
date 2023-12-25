import React, { useRef, useState } from "react";
import "./Header.css";
import { Settings, AccountCircle } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 574;
  const [menuopened, setMenuopened] = useState(false);

  const text = "BUY >";
  const headerTab = useRef(null);
  const [show, setShow] = useState("yes");
  const history = useHistory();

  const switchTabs = (e, tab) => {
    if (tab === "yes") {
      headerTab.current.classList.add("null-container");
      headerTab.current.classList.remove("header-collapse");
      setShow("no");
    } else {
      headerTab.current.classList.add("header-collapse");
      headerTab.current.classList.remove("null-container");
      setShow("yes");
    }
  };

  return (
    <div className="mainHeader">
      {menuopened === false && mobile === true ? (
        <button
          className="barsNav"
          onClick={() => {
            setMenuopened(true);
          }}
        >
          <img
            style={{ height: "1.5rem", width: "1.9rem" }}
            src="/barz.png"
            alt=""
          />
        </button>
      ) : (
        <div className="Header">
          <div className="Header-1">
            <div className="left-Container">
              <img src="/Home-logo.png" alt="Home-logo" />
            </div>
            <div className="center-Container">
              <ul>
                <li>
                  <Link
                    className="Link-tag"
                    to=""
                    onClick={() => {
                      setMenuopened(false);
                    }}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    className="Link-tag"
                    to="/Blog"
                    onClick={() => {
                      setMenuopened(false);
                    }}
                  >
                    BLOG
                  </Link>
                </li>

                <li>
                  <Link
                    className="Link-tag"
                    to="/About"
                    onClick={() => {
                      setMenuopened(false);
                    }}
                  >
                    ABOUT
                  </Link>{" "}
                </li>

                <li>
                  <Link
                    className="Link-tag"
                    to="/contact"
                    onClick={() => {
                      setMenuopened(false);
                    }}
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-Container">
              <input
                type="button"
                value="+ Add Property"
                onClick={() => {
                  history.push("/reg-property");
                  setMenuopened(false);
                }}
              />
              <img src="/pak-flag.png" alt="Pak Flag" />
              <Link
                style={{
                  color: "white",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                to="/profile"
                onClick={() => {
                  setMenuopened(false);
                }}
              >
                {" "}
                <Settings style={{ fontSize: "30px" }} />
              </Link>
              <Link
                style={{ color: "white", paddingLeft: "10px" }}
                to="/register"
              >
                {" "}
                <AccountCircle
                  style={{ fontSize: "30px" }}
                  id="profileIcon"
                  onClick={() => {
                    setMenuopened(false);
                  }}
                />
              </Link>
            </div>
          </div>

          <div className="Header-2">
            <div className="left-header">
              <div className="second">
                <img className="logo-img" src="\logo.png" alt="logo" />
              </div>
            </div>
            <div className="right-header">
              <button
                className="header-collapse"
                onClick={(e) => switchTabs(e, show)}
              >
                <h4>{text} </h4>
              </button>
              <div className="options" ref={headerTab}>
                <ul>
                  <li className="Link-tagg">
                    <Link className="link-rem" to="/sell">
                      HOMES
                    </Link>
                  </li>
                  <li className="Link-tagg">
                    <Link className="link-rem" to="/projects">
                      PROJECTS
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="extends">
                <ul>
                  <li className="Link-tagg">
                    <Link className="link-rem" to="/sell">
                      RENT
                    </Link>
                  </li>
                  <li className="Link-tagg">
                    <Link
                      className="link-rem"
                      onClick={() => history.push("/book-property")}
                    >
                      BOOK PROJECT
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
