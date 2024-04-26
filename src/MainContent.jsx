import React from "react";
import './MainContent.css'
import astrid from './assets/astrid2.jpg'
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
                    <img src={astrid} alt="astrid" className="main-img" />
                </div>
                <div className="sub-container">
                    <h2 className="name">Astrid Hernandez</h2>
                    <h4 className="role">Ingeniera Agronoma</h4>
                    <h5 className="web">Universidad del Cauca.</h5>
                    <div className="connect">
                        <a href="mailto:astridhernandez3@gmail.com" className="email" title="Enviar Un correo electronico"><img src={email} alt="mail" /> Email</a>
                        <a href={`https://api.whatsapp.com/send?phone=3195394714&text=${encodeURIComponent("Hola Lenis Astrid, me gustaría hablar contigo acerca de tus servicios de Seguridad y salud en el trabajo")}`} className="whatsapp" title="Enviar un mensaje por Whatsapp">
                            <img src={whatsapp} alt="mail" className="iconwp" /> Whatsapp
                        </a>

                    </div>
                    <div className="about">
                        <h3>Acerca de mi</h3>
                        <p>Especialista en gestión ambiental.</p>
                        <p>Especialista en seguridad y salud en el trabajo.</p>
                    </div>
                    <div className="interest">
                        {/* <h3>Servicios</h3> */}
                    </div>
                    <br />
                </div>
                <div className="footer">
                    <a href="https://es-la.facebook.com/astrid.h.ordonez/" title="Ingresar a Facebook"><img className='facebookDos' src={facebookDos} alt="facebook" /></a>
                    <img className="puntos" src={puntos} alt="puntos" />
                    <a href="https://www.instagram.com/astridhernandez3/" title="Ingresar a Instagram"><img className="instagram" src={instagram} alt="instagram" /></a>
                    
                </div>
            </div>
        </>
    )
}