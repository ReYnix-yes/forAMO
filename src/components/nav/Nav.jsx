import React from "react";
import "./nav.css"
import logo from "../img/navImg/logo.png"
import name from "../img/navImg/name.png"

import tg from "../img/navImg/telegram.png"
import wa from "../img/navImg/whatsapp.png"
import tp from "../img/navImg/phone.png"

function Nav() {

    return (
        <div className="navbar">
            <a className="nav__links" href="" id="hide">
                <div className="">
                    <div className="logo__container">
                        <img className="logo" id="logo__logo" src={logo} alt="" />
                        <img className="logo" id="logo__name" src={name} alt="" />
                    </div>
                    <p className="nav__subtitle">крупный интегратор CRM в Росcии и ещё 8 странах</p>
                </div>
            </a>
            <div className="nav__container">
                <a className="nav__links" href="#">Услуги</a>
                <a className="nav__links" href="#">Виджеты</a>
                <a className="nav__links" href="#">Интеграции</a>
                <a className="nav__links" href="#">Кейсы</a>
                <a className="nav__links" href="#" id="hide">Сертификаты</a>

            </div>
            <div className="nav__contact">
                <a className="nav__links" id="num" href="#">+7 555 555-55-55</a>
                <a className="nav__links" href="#"><img src={tg} alt="" /></a>
                <a className="nav__links" href="#"><img src={tp} alt="" /></a>
                <a className="nav__links" href="#"><img src={wa} alt="" /></a>
            </div>

        </div>
    );
}

export default Nav;