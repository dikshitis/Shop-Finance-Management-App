import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./navbar";
import Middlepart from "./middlepart";
import "./dashboard.css"

function DashBoard(){

    const [datas, setData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3001/users")
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

    return(
    <>
        <div id="container">

            <Navbar/>

            <Middlepart />

            

        </div>
    </>
    )
}

export default DashBoard;
