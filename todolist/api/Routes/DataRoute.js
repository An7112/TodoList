const express = require('express')
const TodoList = require('../Controller/TodoController')
const router = express.Router()

router.get('/todo', TodoList.GetData)
router.post('/todo', TodoList.PostData)
router.get('/todo/:_id', TodoList.GetById)
router.patch('/todo/:_id', TodoList.UpdateData)
router.delete('/todo/:_id', TodoList.DeleteData)

module.exports = router