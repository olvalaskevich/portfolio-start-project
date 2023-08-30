import './App.css';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Stack} from "./layout/sections/stack/Stack";
import {Projects} from "./layout/sections/projects/Projects";



function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <About/>
            <Stack/>
            <Projects/>
        </div>
    );
}

export default App;

