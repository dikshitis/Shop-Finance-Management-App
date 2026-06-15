    import { useState } from "react";
    import "./middlepart.css"
    import { Bar } from 'react-chartjs-2';
    import {
        Chart as ChartJS,
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend,
        } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Middlepart(props){

    const keys = Object.keys(props.data)
    const lastIndex = keys.length - 1
    console.log(props.data)

    const Totalsales = props.data.slice(-7).map((item,index) => {
        if (index === 0) return 0
        return item.total - props.data.slice(-7)[index - 1].total
    })

    const barData = {
        labels: props.data.slice(-7).map(item => item.day),
        datasets: [
            {
            labels: "Total",
            data: Totalsales,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1, 
            }
    ]}

    const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Day wise Sales Charts',
      },
    },
  };



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
                        <h1>Rs. {props.data[lastIndex].total - props.data[lastIndex-1].total}</h1>
                    </div>
                        

                    <div id="day" className="MoneyCards">
                        <p>Last Calculated-Day</p>
                        <h1>{props.data[lastIndex].day}</h1>
                    </div>
                </div>

                <div id="charts">

                    <div id="salesCharts" style={{ width: '600px'}}>

                        <Bar data={barData} options={BarOptions} />
                        
                    </div>

                    

                </div>

                </div>
            </>
        )
    }
    }

    export default Middlepart;