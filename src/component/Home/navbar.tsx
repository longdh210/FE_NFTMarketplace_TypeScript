/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useEffect } from "react";
import logo from "../../asset/logo.svg";
import { useState } from "react";
import "../../styles/pages/Home/home.scss";
import searchIcon from "../../asset/search.svg";
import LoggedUI from "../../component/Home/logged";
import { useNavigate, useParams, createSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { selectAccount } from "features/connect_wallet/connectWallet";
import { connect } from "features/connect_wallet/connectWalletAPI";

const Navbar = () => {
  const log = useAppSelector(selectAccount);
  const [logged, setlogged] = useState<boolean>(false);
  const navigate = useNavigate();
  let { userId } = useParams();
  const dispatch = useAppDispatch();

  const fetch = useCallback(() => {
      dispatch(connect())
    }, [])
  
    useEffect(() => {
      fetch();
    }, [fetch])

  useEffect(() => {

    if (log == null) {
      setlogged(false);
    } else setlogged(true);
  }, [log]);

  return (
    <nav className="navbar shadow navbar-expand-lg bg-light sticky-top ">
      <div className="container-fluid">
        <img
          src={logo}
          className="logo"
          alt="logo"
          onClick={() => {
            navigate(`/`);
          }}
        />
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse px-3 textHome "
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav centerNavItems   py-2 col-12">
            <div className="form-control searchBar ">
              <img src={searchIcon} alt="search" />
              <input
                key="address"
                placeholder="Search"
                className="searchInput"
                onKeyDown={(e) => {
                  userId = e.currentTarget.value;
                  if (e.key === "Enter") {
                    e.preventDefault();
                    e.stopPropagation();
                    navigate(`/personal/${userId}`);
                    e.currentTarget.value = "";
                    e.currentTarget.blur();
                  }
                }}
              />
            </div>

            {/* <li className="nav-item">Explore</li>

            <li className="nav-item dropdown  custom-dropdown">
              <a
                className="nav-link needhover"
                type="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="true"
                aria-expanded="false"
              >
                Stats
              </a>
              <ul className="dropdown-menu custom-dropdown-menu">
                <li className="customLi">
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Ranking
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item custom-dropdown-item" href="#">
                    Activity
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item">Resources</li> */}
            <li
              className="nav-item"
              onClick={() => {
                navigate(`/mint`);
              }}
            >
              Create
            </li>
            <li className="nav-item">
              {logged ? (
                <LoggedUI />
              ) : (
                <button
                  type="button"
                  className="btn btn-dark loginBtn"
                  onClick={() => {
                    dispatch(connect());
                  }}
                >
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
