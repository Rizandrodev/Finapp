import express,{Express} from "express"
import mongoose from "mongoose"
import FinancialRecordRouter from "./routes/financial-record"


const app:Express=express()
const port=process.env.PORT||3000

app.use(express.json())
const mongoURL="mongodb+srv://carvalhorizandro:0CZo6NLfbh3ItyvM@finapp1.tbxqp.mongodb.net"

mongoose.connect(String(mongoURL))
.then(()=>console.log("connected with Mongodb"))
.catch((err)=>(console.error("error"+err)))

app.use("/financial-records",FinancialRecordRouter)

app.listen(port,()=>console.log("Server is running"))