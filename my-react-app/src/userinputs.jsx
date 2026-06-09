    import { useState } from "react";

    function UserInputs(){

        const [date, setDate] = useState("");
        const [five, setFive] = useState("");
        const [ten, setTen] = useState("");
        const [twenty, setTwenty] = useState("");
        const [fifty, setFifty] = useState("");
        const [hundred, setHundred] = useState("");
        const [fivehundred, setFivehundred] = useState("");
        const [thousand, setThousand] = useState("");
        const [inr, setInr] = useState("");
        const [day, setDay] = useState("");
        
        

    



        const addData = () =>{


            fetch("http://localhost:3001/users", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day})

            })
            .then(res => res.json())
            .then(data => console.log(date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day));
            

            console.log("Button clicked")


        } 

        return(
            <>
                <input type="date" onChange={(e) => setDate(e.target.value)} />
                <input type="text" placeholder="Enter Rs Five" onChange={(e) => setFive(e.target.value)} />
                <input type="number" placeholder="Enter Rs Ten" onChange={(e) => setTen(e.target.value)} />
                <input type="number" placeholder="Enter Rs Twenty" onChange={(e) => setTwenty(e.target.value)} />
                <input type="number" placeholder="Enter Rs Fifty" onChange={(e) => setFifty(e.target.value)} />
                <input type="number" placeholder="Enter Rs Hundred" onChange={(e) => setHundred(e.target.value)} />
                <input type="number" placeholder="Enter Rs Five Hundred" onChange={(e) => setFivehundred(e.target.value)} />
                <input type="number" placeholder="Enter Rs 1000" onChange={(e) => setThousand(e.target.value)} />
                <input type="number" placeholder="Enter Inr" onChange={(e) => setInr(e.target.value)} />
                <select type="option" for="days" name="days" onChange={(e)=> setDay(e.target.value)}>
                    <option value="sunday" > Sunday </option>
                    <option value="Monday" > Monday </option>
                    <option value="Tuesday" > Tuesday </option>
                    <option value="Wednesday" > Wednesday</option>
                    <option value="Thurday" > Thurday </option>
                    <option value="Friday" > Friday</option>
                    <option value="Saturday" > Saturday </option>
                </select> 




                <button onClick={addData}>Add data</button>

            </>
        )
    }

    export default UserInputs;