import React from "react"
import { Route } from "react-router-dom"
import Landing from "./components/Landing.js"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <main>
      <Route exact path="/">
        <Landing />
      </Route>
    </main>
  )
}

export default App
