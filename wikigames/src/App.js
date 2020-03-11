import React from "react";
import Routes from "./routes";
import Menu from "./components/Menu";
import Header from "./components/Header";

const App = () => (
    <div className="wrapper-released-list w-100">
        <Menu/>
        <Header/>
        <Routes/>
    </div>
);

export default App;
