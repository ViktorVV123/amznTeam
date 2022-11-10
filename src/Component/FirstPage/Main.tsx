import React, {useState} from 'react';
import './Main.css'
import {Menu} from "../Menu/Menu";

import {NavLink} from "react-router-dom";
import {FourPage} from "../FourPage/FourPage";
import {ThreePage} from "../ThirdPage/ThreePage";
import {FivePage} from "../FivePage/FivePage";
import {Contacts} from "../Contacts/Contacts";

export type ItemType = {
    value: string,
    href: string
}
export const Main = () => {



    const [menuActive, setMenuActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const items: Array<ItemType> = [
        {value: 'Home ', href: '/amznTeam'},
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

                    <div  className={'divh1'}><h1 className={'h1'}>We are ready to help your
                      </h1></div>
                    <div className={'locationBut'}>

                        <button className="button" style={{verticalAlign: 'middle'}}> <NavLink style={{textDecoration: "none",color:'black'}} to={'/readMore'}><span>Read<div></div> More</span>
                        </NavLink ></button>
                       <button className="button1" style={{verticalAlign: 'middle'}}>  <NavLink style={{textDecoration: "none",color:'black'}} to={'/services'}><span>View Services</span>
                       </NavLink>  </button>

                    </div>

                </div>
            </div>
            <ThreePage/>
            <FourPage/>
            <FivePage/>
            <Contacts/>

        </div>


    );
};

