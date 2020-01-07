import React from "react"
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap"

export default function LogCard(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.log.title}</CardTitle>
          <CardText>Type of Bait Used:{props.log.bait}</CardText>
          <CardText>Type of Fish Caught:{props.log.fish}</CardText>
          <CardText>Location:{props.log.location}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}
