import React from "react";
import { Route,useLocation } from "react-router-dom";

import HomeComponent from "./home"
import NavbarComponent from './navbar';
import DestinationComponent from "./destination";
import CrewComponent from "./crew"
import TechnologyComponent from "./technology";
const App =() =>{

    const URL = "https://raw.githubusercontent.com/Fernando0654/FEM_1_Tip_Calculator/main/data_fem_13.json";
    const getData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    const location = useLocation().pathname;
    const newClass = location.split('/')[1];
    return(
        <div className={"menu"+ newClass}>
            <NavbarComponent currentRoute={newClass}/>
            <Route path="/">
                <HomeComponent/>            
            </Route>
            <Route path="/destination">
                <DestinationComponent data={getData()}/>
            </Route>            
            <Route path="/crew">
                <CrewComponent data={getData()}/>
            </Route>
            
            <Route path="/technology">
                <TechnologyComponent/>
            </Route>
        </div>
    );
}

export default App;