import mongoose from 'mongoose'

interface FinancialRecord{
    userID:string,
    date:Date,
    description:string,
    category:string,
    amount:number,
    paymentMethod:string
}

const FinancialRecordSchema=new mongoose.Schema<FinancialRecord>({
    userID:{type:String,required:true},
    date:{type:Date,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    amount:{type:Number,required:true},
    paymentMethod:{type:String,required:true}
})

export const FinancialRecordModel=mongoose.model<FinancialRecord>(
    "FinancialRecord",
    FinancialRecordSchema
)