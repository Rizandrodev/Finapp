import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import './App.css'
import { Dashboard } from "./pages/dashboard"
import { Auth } from "./pages/auth"

function App() {

  return (
   <div className="containe">
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>}></Route>
          <Route path="/auth" element={<Auth/>}></Route>
        </Routes>
     </Router>
   </div>  
      
  )
}

export default App
