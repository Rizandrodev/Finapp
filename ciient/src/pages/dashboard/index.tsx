import { useUser } from "@clerk/clerk-react"
import { FinancialRecordList } from "./financial-record-form"

export const Dashboard=()=>{
   const {user}=useUser()
   return <div className="dashboard-container">
        
        <h1>Welcome {user?.firstName } ! Here are  Your Finance</h1>
      <FinancialRecordList/>
    </div>
}