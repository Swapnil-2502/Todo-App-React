/* eslint-disable no-undef */
const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { userTodo } = require("./db");

const app = express();
app.use(express.json)
const PORT = 8000;

// body{
//     title:
//     description:
// }

app.post("/todo",async (req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return ;
    }
    //put it in mongodb
    await userTodo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos",async (req,res)=>{
    const todos = await userTodo.find({})

    console.log(todos)

    return res.json({
        todos
    })
})

//This is updating something in MongoDB
app.put("/completed",async (req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You send a wrong inputs"
        })
        return ;
    }

    await userTodo.update({
        _id: updatePayload.id
    },{
        completed: true
    })

    res.json({
        msg: "Todo is marked as completed"
    })
})

app.listen(PORT, () => {
    console.log("Server running on PORT "+PORT)
})