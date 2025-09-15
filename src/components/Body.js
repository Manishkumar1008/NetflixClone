import { HashRouter as BrowserRouter,Routes,Route } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Header from "./Header"
import "./body.css"

const Body = () =>{
    return (
    <div>
    <BrowserRouter>
        <Header />
         <div className="page-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </BrowserRouter>
    </div>)
}

export default Body



