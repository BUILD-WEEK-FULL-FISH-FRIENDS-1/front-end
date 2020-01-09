import React from "react"
import { Route } from "react-router-dom"
import Landing from "./components/Landing.js"
import "bootstrap/dist/css/bootstrap.min.css"
import DashBoard from "./components/DashBoard.js"
import {PrivateRoute} from "./utils/PrivateRoute"
import {userContext} from "./contexts/userContext"
function App() {
  return (
    <main>
    
      <Route exact path="/" component={Landing}/>
      
      <PrivateRoute exact path="/DashBoard" component={DashBoard}/>
      
    </main>
  )
}

export default App
