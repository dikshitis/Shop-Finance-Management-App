import { useState } from "react";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCalculate } from "react-icons/md";
import { IoLogoSlack } from "react-icons/io5";
import "./navbar.css"
import { Link } from 'react-router-dom'

function Navbar(){

    return(
        <>

            <div id="navbar">
                <h1><IoLogoSlack />Calculate</h1>
                <Link to="/dashboard" style={{ textDecoration: 'none' }}><button><MdOutlineSpaceDashboard />Dashboard</button></Link>
                <Link to="/calculate" style={{ textDecoration: 'none' }}> <button><MdCalculate />Calculate</button></Link>
            </div>


        </>
    )

}

export default Navbar;