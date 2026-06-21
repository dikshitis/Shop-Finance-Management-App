const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
require('dotenv').config();
const PASSWORD = process.env.PASSWORD

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: PASSWORD,
  database: "dokan",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Connection failed");
    return;
  }
  console.log("Connection successful");
});

app.get("/users", (req,res) =>{
  db.query("select * from datas", (err,result) => {
  if(err) return res.json(err) 
  else return res.json(result) 
  })
})





const addqry = "insert into datas (`date`,`five`,`ten`,`twenty`,`fifty`,`hundred`,`fivehundred`,`thousand`,`inr`,`day`,`totalcash`,`purchaseone`,`purchasetwo`,`purchasethree`, `totalpurchase`,`total`,`totalSalesNot`,`pl`) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";

app.post("/users", (req, res) => {
  const { date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day,purchaseone,purchasetwo,purchasethree,totalSalesNot} = req.body;
  const totalcash = five*5 +ten*10 +twenty*20 +fifty*50 +hundred*100 +fivehundred*500 +thousand*1000 +inr*1.6;
  const totatpurchase =  Number(purchaseone) + Number(purchasetwo) + Number(purchasethree)
  const total = totalcash + totatpurchase
  const pl = totalSalesNot - totatpurchase 

 


  db.query(
    addqry,
    [date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day,totalcash,purchaseone,purchasetwo,purchasethree,totatpurchase,total,totalSalesNot,pl],
    (err, result) => {
      if (err) return res.json(err);
      res.json({ message: "Data Added" });
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
