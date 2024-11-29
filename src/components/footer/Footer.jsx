import "./Footer.css"
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { TbWorldWww } from "react-icons/tb";
import { FaTelegram , FaFacebook  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
            <div className="container_f">
                <div className="f_box1">
                    <img className="f_logo" src="https://www.ishtixonttb.uz/static/media/footer_logo.b943815b8e313ef846ab.png" alt="Header_logo" />
                    <p className="loc"><FaLocationDot />  Manzil <br /></p>
                    <p className="sam">Samarqand viloyati Ishtixon tumani</p>
                    <div className="tel">
                        <p className="t1"><BsTelephone />  Telefon</p>
                        <p className="t2">+998666291000</p>
                        <p className="t2">+998666291000</p>
                    </div>
                </div>
                <div className="f_box2">
                    <p className="title1">Home</p>
                    <Link className="line1" to='/'>Bosh sahifa</Link>
                    <Link className="line1" to='/leaders'>Shifokorlar</Link>
                    <Link className="line1" to='/departments'>Bo'limlar</Link>
                    <Link className="line1" to='/news'>Yangiliklar</Link>
                    <Link className="line1" to='/vacancy'>Bo'sh ish o'rni</Link>
                    <Link className="line1" to='/qvp'>Qvp</Link>
                    <Link className="line1" to='/contact'>Aloqa</Link>
                </div>
                <div className="f_box3">
                    <img className="F_img2" src="https://www.ishtixonttb.uz/static/media/footer_location_img.fec024e74398b8803156.png" alt="location" />

                    <p className="p4"><TbWorldWww />   ishtixonttb.uz</p>
                    <p className="p5">Bizni kuzatib boring !</p>
                    <div className="asd">
                        <FaTelegram />
                        <FaFacebook  />
                        <MdEmail />

                    </div>

                </div>
            </div >
        </>
    )
}

export default Footer   