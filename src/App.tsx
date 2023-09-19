import './App.css';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Stack} from "./layout/sections/stack/Stack";
import {Projects} from "./layout/sections/projects/Projects";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Footer} from "./layout/footer/Footer";
import React from "react";




function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <About/>
            <Stack/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}



export default App;

