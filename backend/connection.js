const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
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





const addqry = "insert into datas (`date`,`five`,`ten`,`twenty`,`fifty`,`hundred`,`fivehundred`,`thousand`,`inr`,`day`,`total`) values (?,?,?,?,?,?,?,?,?,?,?)";

app.post("/users", (req, res) => {
  const { date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day} = req.body;
  const total = five*5 +ten*10 +twenty*20 +fifty*50 +hundred*100 +fivehundred*500 +thousand*1000 +inr*1.6;
  console.log(total)
  console.log(req.body)



  db.query(
    addqry,
    [date,five,ten,twenty,fifty,hundred,fivehundred,thousand,inr,day,total],
    (err, result) => {
      if (err) return res.json(err);
      res.json({ message: "Data Added" });
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
