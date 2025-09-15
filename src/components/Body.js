import { HashRouter,Routes,Route } from "react-router-dom"
import Browse from "./Browse"
import Login from "./Login"
import Header from "./Header"
import "./body.css"

const Body = () =>{
    return (
    <div>
    <HashRouter>
        <Header />
         <div className="page-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </HashRouter>
    </div>)
}

export default Body



