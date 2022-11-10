import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {Main} from "./Component/FirstPage/Main";
import {TwoPage} from "./Component/TwoPage/TwoPage";
import {Footer} from "./Component/Footer/Footer";
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css'
import {ThreePage} from "./Component/ThirdPage/ThreePage";
import {FourPage} from "./Component/FourPage/FourPage";
import {FivePage} from "./Component/FivePage/FivePage";
import {Info} from "./Component/Contacts/Info/Info";
import {ReadMore} from "./Component/ReadMore/ReadMore";
import {Services} from "./Component/Services/Services";

export type ItemType = {
    value: string,
    href: string
}

function App() {

    AOS.init();


    return (

            <div className="App">


                    <Routes>
                        <Route path='/amznTeam' element={<Main/>} />
                        <Route path='/amznTeam' element={<ThreePage/>} />
                        <Route path='/amznTeam' element={<FourPage/>} />
                        <Route path='/amznTeam' element={<FivePage/>} />
                        <Route path='/contact' element={<Info/>} />
                        <Route path='/readMore' element={<ReadMore/>} />
                        <Route path='/services' element={<Services/>} />
                    </Routes>
                <Footer/>



            </div>

    );
}

export default App;
