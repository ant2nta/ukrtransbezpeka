import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import './Header.scss';

const Header = ({ handleLogin }) => {
  return (
    <header className="header">
      <img src={logo} alt="ukrtransbezpeka logo" className='header__logo'/>

      <div className="header__right">
        <ul className="header__list">
          <li className="header__item">
            <Link to="/" >
              <button>
                Видача
              </button>
            </Link>
          </li>

          <li className="header__item">
            <Link to="/officials" >
              <button>
                Посадові особи
              </button>
            </Link>
          </li>

          <li className="header__item">
            <Link to="/things" >
              <button>
                Обладнання
              </button>
            </Link>
          </li>
        </ul>

        <div className="header__line" />

        <button className="header__logout" onClick={() => handleLogin(false)}>
          Вийти
        </button>
      </div>
    </header>
  );
};

export default Header;
