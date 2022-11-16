import React, {useState} from 'react';

import {Menu} from "../Menu/Menu";
import {ReadMoreTwo} from "./ReadMoreTwo/ReadMoreTwo";


export type ItemType = {
    value: string,
    href: string
}
export const ReadMore = () => {



    const [menuActive, setMenuActive] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const items: Array<ItemType> = [
        {value: 'Home ', href: '/amznTeam'},
        {value: 'Services', href: '/services'},
        {value: 'info ', href: '/info/'},
        {value: 'Contact', href: '/contact'},
        ]


    return (

        <div className={'containerMain'} id={'/readMore'} >
            <nav >
                <div  className='burger-btn' onClick={() => setMenuActive(!menuActive)}>
                    <span />

                </div>

            </nav>

            <Menu items={items} header={'Menu'} active={menuActive} setActive={setMenuActive}/>
            <div className={'background'}>

                <div className={'locaionAll'}>

                    <div  className={'divh1'}><h1 className={'h1'}>Read More
                      </h1></div>
                    <div className={'locationBut'}>


                    </div>

                </div>
            </div>

<ReadMoreTwo/>
        </div>


    );
};

