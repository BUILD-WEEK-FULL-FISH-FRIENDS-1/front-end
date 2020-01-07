import React, { useState, useEffect } from "react"
import NavBar from "./NavBar.js"
import axios from "axios"
import LogList from "./LogList.js"

export default function DashBoard() {
  const [feed, setFeed] = useState([])
  const [search, setSearch] = useState("")
  const apiName = "https://fish-friends-2020.herokuapp.com/api/logs/"

  useEffect(() => {
    axios
      .get(`${apiName}`)
      .then(response => {
        console.log(response.data)
        setFeed(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [search])

  return (
    <div className="feed">
      <NavBar />
      <LogList feed={feed} />
    </div>
  )
}
