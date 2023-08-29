import './App.css';

import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {About} from "./layout/sections/about/About";
import {Stack} from "./layout/sections/stack/Stack";


function App() {
    return (
        <div>
            <Header/>
            <Main/>
            <About/>
            <Stack/>
        </div>
    );
}

export default App;

