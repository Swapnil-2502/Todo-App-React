// Todo:{
//     title: string,
//     description: string,
//     completed: boolean
// }
/* eslint-disable no-undef */
const mongoose = require("mongoose")
require('dotenv').config();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)

const TodoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const userTodo = mongoose.model('userTodo',TodoSchema)

module.exports = {
    userTodo
}