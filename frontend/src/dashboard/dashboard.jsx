import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./navbar";
import Middlepart from "./middlepart";
import "./dashboard.css"

function DashBoard(props){


    return(
    <>
        <div id="container">

            <Navbar/>

            <Middlepart data={props.name}/>

            

        </div>  
    </>
    )
}

export default DashBoard;