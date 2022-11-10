import React from 'react';
import './content.css'


export const Content = () => {
    return (
        <div className={'divContainer'}>
            <div>

                <div className={'border'} style={{display: 'flex', flexDirection: 'column'}}>
                  <div data-aos="fade-right">  <span  className="material-symbols-outlined">
                        settings
                  </span></div>
                    <div data-aos="zoom-in" className={'textStyle'}>Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s.

                    </div>
                </div>
            </div>
            <div>

                <div className={'border'} style={{display: 'flex', flexDirection: 'column'}}>
                    <div data-aos="fade-left">  <span className="material-symbols-outlined">lightbulb</span></div>

                    <div className={'containerText'}>
                        <div data-aos="zoom-in" className={'textStyle'}>Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s.
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className={'border'} style={{display: 'flex', flexDirection: 'column'}}>
                    <div data-aos="fade-right">  <span className="material-symbols-outlined">schedule</span></div>

                    <div className={'containerText'}>
                        <div data-aos="zoom-in"  className={'textStyle'}>Lorem Ipsum has been the industry's standard dummy text ever since
                            the 1500s.
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

