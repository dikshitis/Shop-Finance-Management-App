    import { useState } from "react";
    import "./middlepart.css"
    import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

    function Middlepart(props){

        const keys = Object.keys(props.data)
        const lastIndex = keys.length - 1
        console.log(props.data)





    if(!props.data || Object.keys(props.data).length === 0) return <div>Loading...</div>
    else{
        const chartData =  props.data.map(item => ({ day : item.day, value: item.total }));
        return(
            <>
                <div id="main"> 
                    
                    <div id="header">
                        <h1>Dashboard</h1>
                    </div>
                <div id="stats" >

                    <div id="date" className="MoneyCards">
                        <p>Last Calculated-Date</p>
                        <h1>{props.data[lastIndex].date.split("T")[0]}</h1>    
                    </div>

                    <div id="monthlyReveneu" className="MoneyCards">
                        <p>Total Last Sales</p>
                        <h1>Rs. {props.data[lastIndex].total}</h1>
                    </div>
                        

                    <div id="day" className="MoneyCards">
                        <p>Last Calculated-Day</p>
                        <h1>{props.data[lastIndex].day}</h1>
                    </div>
                </div>

                <div id="charts">

                    <div id="salesCharts">

                        
                    </div>

                </div>

                </div>
            </>
        )
    }
    }

    export default Middlepart;