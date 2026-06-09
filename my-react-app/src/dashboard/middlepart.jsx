import { useState } from "react";
import "./middlepart.css"

function Middlepart(){
    return(
        <>
            <div id="main">
                
                <div id="header">
                    <h1>Dashboard</h1>
                </div>
            <div id="stats" >
                <div id="monthlyReveneu" className="MoneyCards">
                    <p>Total Monthly Reveneu</p>
                    <h1>Rs. 50000</h1>
                </div>
                <div id="netProfit" className="MoneyCards">
                    <p>Net Profit</p>
                    <h1>Rs 8000</h1>    
                </div>    

                <div id="expenses" className="MoneyCards">
                    <p>Expenses</p>
                    <h1>Rs 2000</h1>
                </div>
            </div>

            <div id="charts">

                

            </div>

            </div>
        </>
    )
}

export default Middlepart;