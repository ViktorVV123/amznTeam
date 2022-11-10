import React from 'react';
import './Footer.css'

export const Footer = () => {
    return (
        <div className={'footer'}>
            <div  className={'footerContainer'}>
                <div data-aos="fade-right"><h2   className={'title'}>Victor Vlasjuk</h2></div>

                <div className={'socialBlock'}>
                    <div ><a target="_blank" href="https://t.me/gga123321"></a></div>
                    <div ><a target="_blank" href="https://vk.com/gans553"></a></div>


                </div>
                <span className={'copyRight'}>© 2022 All Rights Reserved.</span>
            </div>
        </div>
    );
};

