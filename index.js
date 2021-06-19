const express = require('express')
const app = express()
const cors = require('cors')

const routerTodos = require('./router/Todo.js')
const routerUsers = require('./router/User.js')
const auth = require('./middleware/auth.js')

const corsOptions ={
    origin:'*',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/todo', auth, routerTodos)
app.use('/user', routerUsers)

app.listen(3000, () => {
    console.log('Server sudah berjalan pada port 3000')
})