import { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
import { IoLogoSlack } from "react-icons/io5";
import "./navbar.css"


function Navbar(){

    return(
        <>

            <div id="navbar">
                <h1><IoLogoSlack />Calculate</h1>
                <button><MdOutlineSpaceDashboard />Dashboard</button>
                <button><MdCalculate />Calculate</button>
            </div>


        </>
    )

}

export default Navbar;