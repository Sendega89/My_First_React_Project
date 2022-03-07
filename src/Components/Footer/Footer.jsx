import React from "react";
import s from "./Footer.module.css";
import logoImg from "../../assets/images/logoUkraine.png";


const  Footer = () => {
    return <footer className={s.footer}>
        <div >
            <img className={s.footer_logo}
                 src={logoImg} alt="logo"/>
        </div>
        <div className={s.footer_description}>
            <p>Это мой сайт</p>
            <p>Только мой</p>
        </div>
        <div className={s.footer_contacts}>
          <div> <a href="tel:+380953395977">+38 (095) 339-59-77</a> </div>
           <div> <a href="email:Sendega89@gmail.com">Sendega89@gmail.com</a></div>
    </div>

        <div className={s.footer_license}>
            <p>All rights reserved© </p>
        </div>

    </footer>
}
export default Footer;