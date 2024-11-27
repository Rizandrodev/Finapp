import { useUser } from "@clerk/nextjs"
import { useState } from "react"

export function FinancialRecordList(){
    const [description,setDescription]=useState<string>("")
    const [amount,setAmount]=useState<string>("")
    const [category,setCategoryy]=useState<string>("")
    const [paymentMethod,setPay]=useState<string>("")
    const {user}=useUser()

    function handleSubmit(e:React.FocusEvent<HTMLFormElement>){
        e.preventDefault()
        const newRecord={
        userId:user?.id,
        date:new Date(),
        description:description,
        amount:parseFloat(amount),
        category:category,
        paymentMethod:paymentMethod
    }
    setDescription("")
    setAmount("")
    setPay("")
    setCategoryy("")
}
    return(
        <div className="form-conatiner">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label >Description</label>
                    <input type="text" required
                    className="input" value={description} onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label >Category</label>
                    <select required className="input"
                     value={category} onChange={(e)=>setCategoryy(e.target.value)} 
                    > 
                          <option value="Food">Food</option>
                            <option value="Rent">Rent</option>
                            <option value="Salary">Salary</option>
                            <option value="Utilities">Utilities</option>
                            <option value="Entertainment">Entertainment</option>
                            <option value="Other">Other</option>

                    </select>
                </div>
                <div className="form-field">
                    <label >Payment Method</label>
                    <select 
                    required className="input" 
                    value={paymentMethod} onChange={(e)=>setPay(e.target.value)}
                    >
                        <option value="">Select a Payment Method</option>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className="button">
                    Add Record
                </button>
            </form>
        </div>
    )   
}