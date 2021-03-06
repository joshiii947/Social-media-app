const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
dotenv.config()
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan=require('morgan')
const expressValidator=require('express-validator')

// app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
.then(()=>console.log('DATABSE CONNECTION SUCESSFULLY UPDATED'))
.catch(err=>console.log(err))

const port=process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(expressValidator())


const postRoutes=require('./routes/post')



app.use("/",postRoutes)




app.listen(port,()=>console.log('SERVER IS RUNNING'))