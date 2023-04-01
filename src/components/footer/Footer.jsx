import React from "react";
import "./footer.css"

import tg from "../img/navImg/telegram.png"
import wh from "../img/navImg/whatsapp.png"
import tl from "../img/navImg/phone.png"
function Footer() {
    return (
        <div className="footer">
            <div className="footer__item">
                <h4 className="foot__subtitle">О компании</h4>
                <a className="foot__links">Партнёрская программа</a>
                <a className="foot__links">Вакансии</a>
            </div>

            <div className="footer__item">
                <h4 className="foot__subtitle">Меню</h4>
                <div className="menu__container">
                    <div className="menu__text__container">
                        <a className="foot__links">Расчёт стоимости</a>
                        <a className="foot__links">Услуги</a>
                        <a className="foot__links">Виджеты</a>
                        <a className="foot__links">Интеграции</a>
                        <a className="foot__links">Наши клиенты</a>
                    </div>
                    <div className="menu__text__container">
                        <a className="foot__links">Кейсы</a>
                        <a className="foot__links">Благодарственные письма</a>
                        <a className="foot__links">Сертификаты</a>
                        <a className="foot__links">Блог на Youtube</a>
                        <a className="foot__links">Вопрос / Ответ</a>
                    </div>
                </div>
            </div>


            <div className="contacts">
                <h4 className="foot__subtitle">Контакты</h4>
                <a className="foot__links" href="">+7 555 555-55-55</a>
                <div className="foot__img__container">
                    <a className="foot__img" href=""><img src={tg} alt="" /></a>
                    <a className="foot__img" href=""><img src={tl} alt="" /></a>
                    <a className="foot__img" href=""><img src={wh} alt="" /></a>
                </div>
                <p className="foot__links">Москва, Путевой проезд 3с1, к 902</p>
            </div>

            <div className="privacy">
                <p className="privacy__text">©WELBEX 2022. Все права защищены.</p>
                <a className="privacy__text" href="">Политика конфиденциальности</a>
            </div>

        </div>
    );
}

export default Footer;