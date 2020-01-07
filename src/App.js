import React from "react"
import { Route } from "react-router-dom"
import Landing from "./components/Landing.js"
import "bootstrap/dist/css/bootstrap.min.css"
import DashBoard from "./components/DashBoard.js"

function App() {
  return (
    <main>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route path="/dashboard">
        <DashBoard />
      </Route>
    </main>
  )
}

export default App
