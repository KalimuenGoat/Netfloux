import React from "react";
import { NavLink } from "react-router-dom";
import PagePaul from "./PagePaul";
import Api from "../components/Api";

function PageLoik() {
    return (
        <div>
            <div>Loik
            </div>
            <NavLink to="/pagePaul">Ceci est un bouton</NavLink>
            <Api></Api>
        </div>
    );
}

export default PageLoik;