    import { useState } from "react";
    import "./middlepart.css"

    function Middlepart(props){

        const keys = Object.keys(props.data)
        const lastIndex = keys.length - 1
        console.log(props.data.total?.[lastIndex])

    if(!props.data || Object.keys(props.data).length === 0) return <div>Loading...</div>
    else{
        return(
            <>
                <div id="main"> 
                    
                    <div id="header">
                        <h1>Dashboard</h1>
                    </div>
                <div id="stats" >
                    <div id="monthlyReveneu" className="MoneyCards">
                        <p>Total Last Reveneu</p>
                        <h1>Rs.{props.data[lastIndex].total}</h1>
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
    }

    export default Middlepart;