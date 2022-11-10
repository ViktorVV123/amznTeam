import React from 'react';
import {NavLink} from "react-router-dom";
import './Menu.css'
import {ItemType} from "../../App";
import {ThreePage} from "../ThirdPage/ThreePage";



type PropsType = {
    header: string;
    items: Array<ItemType>
    active: boolean;
    setActive: (active: boolean) => void;
}

export const Menu: React.FC<PropsType> = ({header, items, active, setActive}) => {

    return(
        <div className={`${active ? 'menuActive' : 'menu'}`} onClick={()=>setActive(false)}>
            <div className='blur'>
                <div className='menuContent' onClick={e=> e.stopPropagation()}> {/*не даем закрыться меню на ссылки*/}
                    <div className='menuHeader'>{header}</div>
                    <ul>

                        {items.map((item: { href: string | undefined; value: React.ReactNode; }) =>
                            <li>
                                <a href={item.href}>{item.value}</a>
                            </li>)}
                    </ul>
                </div>
            </div>


        </div>
    );
}

/*
<div className={'mm'}>
    <div style={{margin:'10px'}}><NavLink className={'textMenu'} to={'/'}>Home</NavLink></div>
    <div style={{margin:'10px'}}><NavLink className={'textMenu'} to={'/about'}>About</NavLink></div>
    <div style={{margin:'10px'}}><NavLink className={'textMenu'} to={'/contact'}>Contact</NavLink></div>
    <div style={{margin:'10px'}}><NavLink className={'textMenu'} to={'/Services'}>Services</NavLink></div>
</div>*/
