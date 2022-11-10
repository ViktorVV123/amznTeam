import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import {Menu} from "./Component/Menu/Menu";
import {Main} from "./Component/FirstPage/Main";
import {TwoPage} from "./Component/TwoPage/TwoPage";
import main1 from "./pictr/main1.jpg";


export type ItemType = {
    value: string,
    href: string
}

function App() {



    return (
        <BrowserRouter>
            <div className="App">

                <Main/>
                <TwoPage/>
                <Routes>
                    <Route path={'/about'}/>
                    <Route path={'/contact'}/>
                    <Route path={'/services'}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
