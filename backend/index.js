const express = require("express")

const app = express();
app.use(express.json)
const PORT = 8000;

// body{
//     title:
//     description:
// }

app.post("/todo",(req,res)=>{
    return res.send("Hi There")
})

app.get("/todos",(req,res)=>{
    return res.send("Hi There")
})

app.put("/completed",(req,res)=>{
    return res.send("Hi There")
})

app.listen(PORT, () => {
    console.log("Server running on PORT "+PORT)
})