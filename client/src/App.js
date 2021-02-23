import {useEffect} from "react";
import axios from "axios";
import logo from './logo.svg';
import './app.css';
import { response } from "express";

function App() {
    useEffect (() => {
        axios.get("/api/config").then(response =)
    }, [])
}


return (
    <div className="App">
     <header className="App-header">
    <img src={logo} className="app-logo" alt="logo" />
    <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
     </header>
    </div>
)