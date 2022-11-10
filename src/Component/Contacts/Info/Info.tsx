import React, {useState} from 'react';
import './info.css'
import {NavLink} from "react-router-dom";
import {Menu} from "../../Menu/Menu";
import {ThreePage} from "../../ThirdPage/ThreePage";
import {FourPage} from "../../FourPage/FourPage";
import {FivePage} from "../../FivePage/FivePage";
import {Contacts} from "../Contacts";
import {ItemType} from "../../FirstPage/Main";


export  const Info = () => {



        const [menuActive, setMenuActive] = useState(false)
        const [modalActive, setModalActive] = useState(false)
        const items: Array<ItemType> = [
            {value: 'Home ', href: '/'},
            {value: 'Services', href: '/services'},
            {value: 'info ', href: '/info/'},
            {value: 'Contact', href: '/contact'},
        ]


        return (

            <div className={'containerMain'} id={'main'} >
                <nav >
                    <div  className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                        <span />

                    </div>

                </nav>

                <Menu items={items} header={'Menu'} active={menuActive} setActive={setMenuActive}/>
                <div className={'background'}>

                    <div className={'locaionAll'}>

                        <div  className={'divh1'}><h1 className={'h1'}>Contact
                        </h1></div>
                        <div className={'locationBut'}>

                        </div>

                    </div>
                </div>
                <Contacts/>

            </div>


        );
    };



