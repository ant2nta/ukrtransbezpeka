import React, { useState } from "react";
import "./Auth.scss";
import logo from "../../Images/logo.png";
import { authorization } from "../../api/login";

const Auth = ({ handleLogin }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    authorization({ login, password })
      .then(res => res.status === 200 && handleLogin(true));
  };

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={handleSubmit}>
        <h1>Укртрансбезпека</h1>

        <img
          src={logo}
          alt="ukrtransbezpeka logo"
          className="auth__logo"
        />

        <p>Для роботи із сайтом потрібно авторизуватись</p>

        <div className="auth__info">
          <div className="auth__input">
            <input
              id="login"
              type="text"
              value={login}
              placeholder=" "
              onChange={(event) => setLogin(event.target.value)}
            />

            <label htmlFor="login" className="auth__placeholder">Логін</label>
          </div>

          <div className="auth__input">
            <input
              id="password"
              type="password"
              value={password}
              placeholder=" "
              onChange={(event) => setPassword(event.target.value)}
            />
            
            <label htmlFor="password" className="auth__placeholder">Пароль</label>
          </div>
        </div>
        
        <button className="auth__button">Вхід</button>
      </form>
    </div>
  );
};

export default Auth;
