import React from "react";
import './MainContent.css'
import alexa from './assets/alexa.jpg'
import facebook from './assets/facebook.svg'
import mail from './assets/Mail.svg'
import whatsapp from './assets/wptres.png'
import email from './assets/email.png'
import instagram from './assets/instagram.png'
import facebookDos from './assets/facebookDos.png'
import puntos from './assets/puntos.png'

export default function MainContent() {
    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img src={alexa} alt="alexa" className="main-img" />
                </div>
                <div className="sub-container">
                    <h2 className="name">Alexandra Aguirre</h2>
                    <h4 className="role">Fonoaudiologa</h4>
                    <h5 className="web">Universidad del Cauca.</h5>
                    <div className="connect">
                        <a href="mailto:aguirrealexandra32@gmail.com" className="email" title="Enviar Un correo electronico"><img src={email} alt="mail" /> Email</a>
                        <a href="https://api.whatsapp.com/send?phone=3187578020&text=Hola%20Alexandra%2C%20me%20gustaría%20hablar%20contigo%20acerca%20de%20tus%20servicios%20de%20fonoaudiología" className="whatsapp" title="Enviar un msj por Whatsapp"><img src={whatsapp} alt="mail" className="iconwp" /> Whatsapp</a>
                    </div>
                    <div className="about">
                        <h3>Acerca de mi</h3>
                        <p>Fonoaudiologa Universidad del Cauca, Diplomada en UCI, Diplomada en disfagia adultos y pediátrica, atención de alteraciones del lenguaje y más!!</p>
                    </div>
                    <div className="interest">
                        <h3>Servicios</h3>
                        <p><span class="heart">♡</span> Disfagia</p> <p><span class="heart">♡</span> Disfonía </p> <p><span class="heart">♡</span> Estimulación Infantil</p> <p><span class="heart">♡</span> Problemas de lenguaje</p> <p><span class="heart">♡</span> Transtornos de Aprendizaje</p> <p><span class="heart">♡</span> Transtornos de Alimentación.</p>
                    </div>
                </div>
                <div className="footer">
                    <a href="https://www.facebook.com/alexandra.aguirre.5876" title="Ingresar a Facebook"><img className='facebookDos' src={facebookDos} alt="facebook" /></a>
                    <img className="puntos" src={puntos} alt="puntos" />
                    <a href="https://www.instagram.com/ale_aguirre_fono/" title="Ingresar a Instagram"><img className="instagram" src={instagram} alt="instagram" /></a>
                    
                </div>
            </div>
        </>
    )
}