import React from "react";
import { NavLink } from "react-router-dom";
import PagePaul from "./PagePaul";

function PageLoik() {
    return (
        <div>
            <div>Loik
            </div>
            <NavLink to="/pagePaul">Ceci est un bouton</NavLink>
        </div>
    );
}

export default PageLoik;