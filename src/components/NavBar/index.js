/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./style.scss";
import i18n from "../../i18n";

const Navbar = () => {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <nav>
      <ul id="menu">
        <li>
          <Link to="/home">{t("menu.home")}</Link>|
        </li>
        <li>
          <Link to="/asteroids">{t("menu.asteroids")}</Link>|
        </li>
        <li>
          <Link to="/astronomy">{t("menu.astronomy")}</Link>|
        </li>
        <li>
          <Link to="/planet">{t("menu.planet")}</Link>|
        </li>
      </ul>
      <ul className="lang-bar">
        <li>
          <a href="#" onClick={() => changeLanguage("en")}>
            {t("languages.en")}
          </a>
          |
        </li>
        <li>
          <a href="#" onClick={() => changeLanguage("ru")}>
            {t("languages.ru")}
          </a>
          |
        </li>
        <li>
          <a href="#" onClick={() => changeLanguage("hy")}>
            {t("languages.hy")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
