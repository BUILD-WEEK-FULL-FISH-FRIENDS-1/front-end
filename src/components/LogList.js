import React from "react"
import LogCard from "./LogCard.js"

export default function LogList(props) {
  return (
    <div className="log-car">
      {props.feed.map(log => {
        return <LogCard log={log} />
      })}
    </div>
  )
}
