import React, {useState} from 'react';
import './Main.css'
import main1 from '../../pictr/main1.jpg'
import {Menu} from "../Menu/Menu";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css'
import {ItemType} from "../../App";


export const Main = () => {

    AOS.init();

    const [menuActive, setMenuActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const items: Array<ItemType> = [
        {value: 'First ', href: '/one'},
        {value: 'Second', href: '/two'},
        {value: 'Third ', href: '/three'},
        {value: 'Fourth', href: '/four'},
        {value: 'Fifth ', href: '/five'}]

    return (

        <div className={'containerMain'}>
            <nav>
                <div className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>
            <Menu items={items} header={'Menu'} active={menuActive} setActive={setMenuActive}/>
            <div className={'background'}>


                <div className={'locaionAll'}>


                    <div  className={'divh1'}><h1 className={'h1'}>We are ready to help your
                      </h1></div>
                    <div className={'locationBut'}>
                        <button className="button" style={{verticalAlign: 'middle'}}><span>Read<div></div> More</span>
                        </button>
                        <button className="button1" style={{verticalAlign: 'middle'}}><span>View Services</span>
                        </button>
                    </div>

                </div>
            </div>
        </div>


    );
};

