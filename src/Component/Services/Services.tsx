import React, {useState} from 'react';
import {Menu} from "../Menu/Menu";
import {ServicesTwo} from "./ServicesTwo/ServicesTwo";

export type ItemType = {
    value: string,
    href: string
}
export const Services = () => {



    const [menuActive, setMenuActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const items: Array<ItemType> = [
        {value: 'Home ', href: '/amznTeam'},
        {value: 'Second', href: '/help'},
        {value: 'info ', href: '/info/'},
        {value: 'Contact', href: '/contact'},
        ]


    return (

        <div className={'containerMain'} id={'services'} >
            <nav >
                <div  className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span />

                </div>

            </nav>

            <Menu items={items} header={'Menu'} active={menuActive} setActive={setMenuActive}/>
            <div className={'background'}>

                <div className={'locaionAll'}>

                    <div  className={'divh1'}><h1 className={'h1'}>Services
                      </h1></div>
                    <div className={'locationBut'}>



                    </div>

                </div>
            </div>

<ServicesTwo/>
        </div>


    );
};

