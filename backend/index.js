
const express = require("express");
const { createTodo, updateTodo } = require("./types");

const app = express();
app.use(express.json)
const PORT = 8000;

// body{
//     title:
//     description:
// }

app.post("/todo",(req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return ;
    }
    //put it in mongodb

    return res.send("Hi There")
})

app.get("/todos",(req,res)=>{
    return res.send("Hi There")
})

//This is updating something in MongoDB
app.put("/completed",(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return ;
    }

    return res.send("Hi There")
})

app.listen(PORT, () => {
    console.log("Server running on PORT "+PORT)
})