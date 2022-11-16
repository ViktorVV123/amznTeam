import React from 'react';
import './Contacts.css'
import {NavLink} from "react-router-dom";

export const Contacts = () => {

    return (
        <div className={'contacts'}>
            <h2 className={'h1Three'}>Contact us
                <div className={'moduleLine'}></div>
            </h2>
            <div className={'containerContacts'}>

<div className={'contact'}>

    <div  data-aos="fade-right"   className={'contactText'}>phone: 8 (800)-888-88-88</div>
   <div data-aos="fade-right"  className={'contactText'}>e-maile: amzn@mail.ru</div>
  <div data-aos="fade-right"   className={'contactText'}>adress: Slavakia 1k2</div>
</div>
                <div data-aos="fade-left" className={'imageContact'}>
                    image or mb map
                </div>

            </div>
            <div ><a className={'button2'} href="#"  title="Вернуться к началу">&#11014;</a></div>

            </div>
    );
};

