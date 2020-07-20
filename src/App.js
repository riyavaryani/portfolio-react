import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from './components/home/home';
import Nav from "./components/shared/nav";
import Footer from "./components/shared/footer";
import About from "./components/about/about";
import Contact from "./components/contact/contact";

const Routing = () => {
    return(
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route exact path='/about'>
                <About/>
            </Route>
            <Route exact path='/contact'>
                <Contact/>
            </Route>
        </Switch>
    );
}

function App() {
    return (

            <BrowserRouter>
            <Nav/>
            <Routing/>
            <Footer/>
            </BrowserRouter>

    );
}

export default App;
