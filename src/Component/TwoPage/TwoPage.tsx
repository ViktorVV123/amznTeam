import React from 'react';
import './TwoPage.css'
import {Content} from "./content/Content";
import one from "../../pictr/one.svg";
import two from "../../pictr/two.svg";
import three from "../../pictr/three.svg";

export const TwoPage = () => {


    return (
        <div className={'container'}>
            <div className={'containerTwo'}>
            <div  >
                <div className={'picture'}>
                    <img className='img'  src={one}/>

                    <div  >
                        <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                </div>
            </div>
            <div>
                <div >
                    <img  src={two}/>
                    <div>
                        <div >dfvgdfsvdfvdfvdfv
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div></div>
                </div>
            </div>
            <div>
                <div >
                    <img src={three}/>
                    <div >
                        <div >Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                </div>
            </div>
            </div>
        </div>


    );
};

