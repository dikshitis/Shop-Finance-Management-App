    import { useState } from "react";
    import Navbar from "./dashboard/navbar";
    import './userinputs.css'

    function UserInputs(props){

        const [date, setDate] = useState("");
        const [five, setFive] = useState("");
        const [ten, setTen] = useState("");
        const [twenty, setTwenty] = useState("");
        const [fifty, setFifty] = useState("");
        const [hundred, setHundred] = useState("");
        const [fivehundred, setFivehundred] = useState("");
        const [thousand, setThousand] = useState("");
        const [inr, setInr] = useState("");
        const [day, setDay] = useState("")
        const [purchaseone, setPurchaseone] = useState("");
        const [purchasetwo, setPurhcasetwo] = useState("");
        const [purchasethree, setPurhcasethree] = useState("");

        const [totalSales,setTotalSales] = useState(0)
        
        
        

    
        const keys = Object.keys(props.data)
        const lastIndex = keys.length - 1


        const addData = () =>{

            if(day == "" || date == null || five == null || ten==null || twenty == null || fifty == null || hundred == null || fivehundred == null || thousand == null || inr == null || purchaseone == null || purchasetwo == null || purchasethree == null){
                alert("Please Enter All values")
            }
            else{

            const totalcash = Number(five)*5+Number(ten)*10+Number(twenty)*20+Number(fifty)*50+Number(hundred)*100+Number(fivehundred)*500+Number(thousand)*1000+Number(inr)*1.6+Number(purchaseone)+Number(purchasetwo)+Number(purchasethree)
            const LastTotal = props.data[lastIndex].total
            const totalSalesNot = totalcash - LastTotal

            fetch("http://localhost:3001/users", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },  
                body: JSON.stringify({date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day,purchaseone,purchasetwo,purchasethree,totalSalesNot})

            })
            .then(res => res.json())
            .then(data => console.log(date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day,purchaseone,purchasetwo,purchasethree,totalSalesNot));
            
             

            setTotalSales(totalSalesNot)




        } }
            


        return(
            <>

            <div id="calculateContainer">
                <Navbar />

            <div id="secondContainer">
                <div id="calculate">

                    <input type="date" onChange={(e) => setDate(e.target.value)} className="inputElements"/>

                    <input type="text"  className="inputElements"placeholder="Enter Rs Five" onChange={(e) => setFive(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Rs Ten" onChange={(e) => setTen(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Rs Twenty" onChange={(e) => setTwenty(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Rs Fifty" onChange={(e) => setFifty(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Rs Hundred" onChange={(e) => setHundred(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Rs Five Hundred" onChange={(e) => setFivehundred(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Rs 1000" onChange={(e) => setThousand(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Inr" onChange={(e) => setInr(e.target.value)} />
                    
                    <input type="number" className="inputElements" placeholder="Enter Purchase One" onChange={(e) => setPurchaseone(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Purchase Two" onChange={(e) => setPurhcasetwo(e.target.value)} />
                    <input type="number" className="inputElements" placeholder="Enter Purchase Three" onChange={(e) => setPurhcasethree(e.target.value)} />
                    


                    <select className="inputElements" type="option" for="days" name="days" onChange={(e)=> setDay(e.target.value)}>
                        <option disabled selected hidden  > Choose Day </option>
                        <option value="sunday" > Sunday </option>
                        <option value="Monday" > Monday </option>
                        <option value="Tuesday" > Tuesday </option>
                        <option value="Wednesday" > Wednesday</option>
                        <option value="Thurday" > Thurday </option>
                        <option value="Friday" > Friday</option>
                        <option value="Saturday" > Saturday </option>
                    
                    </select> 
            
            
            
                    <button className="inputElements" id="addData" onClick={addData}>Calculate</button>
                </div>

                        <h1>Total Sales For today: {totalSales}</h1>

            </div>
        </div>
            </>
        )
    }

    export default UserInputs;