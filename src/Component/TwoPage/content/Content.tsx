import React from 'react';
import one from "../../../pictr/one.svg";
import two from "../../../pictr/two.svg";
import three from "../../../pictr/three.svg";
import './content.css'


export  const Content = () => {
    return (
        <div className={'iconContainer'}>
            <div >
                <div className={'border'}>
                    <img className={'icon'} src={one}/>

                    <div className={'divContainer'}>
                        <div className={'textStyle'}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                </div>
            </div>
            <div>
                <div className={'border'}>
                    <img className={'icon'} src={two}/>
                    <div className={'divContainer'}>
                        <div className={'textStyle'}>dfvgdfsvdfvdfvdfv
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div></div>
                </div>
            </div>
            <div>
                <div className={'border'}>
                    <img className={'icon'} src={three}/>
                    <div className={'divContainer'}>
                        <div className={'textStyle'}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    </div>
                </div>
                </div>
            </div>

    );
};

