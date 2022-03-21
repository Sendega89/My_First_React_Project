import React from "react";
import style from "../../common/CSS Modules/ThemeStyle.module.scss";
import logoImg from "../../assets/images/logoUkraine.png";


const Footer = () => {
    return <footer className={style.footer}>
        <div>
            <img className={style.footer_logo}
                 src={logoImg} alt="logo"/>
        </div>
        <div className={style.footer_description}>
            <p>IT-Kamasutra</p>
        </div>
        <div className={style.footer_contacts}>
                <a href="tel: +380953395977 ">tel: +38 (095) 339-59-77</a>
            <br/>
                <a href="mailto:Sendega89@gmail.com">email: Sendega89@gmail.com</a>
        </div>

        <div className={style.footer_license}>
            <p>All rights reserved© </p>
        </div>

    </footer>
}
export default Footer;