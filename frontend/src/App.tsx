import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import MainContainer from "./components/MainContainer/MainContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App: React.FC = () => {
    return (
        <div>
            <div>
                <HeaderContainer/>
                <MainContainer/>
            </div>
        </div>
    )
}

const ReactApp01: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
}

export default ReactApp01;
