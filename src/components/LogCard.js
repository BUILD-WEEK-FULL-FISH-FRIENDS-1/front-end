import React,{useState} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {useForm} from "react-hook-form"
import { Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter,Button } from "reactstrap"

export default function LogCard(props) {
  const { buttonLabel, className } = props
  const [modal, setModal] = useState(false)
  const [form, setForm] = useState(props)


  const toggle = () => setModal(!modal)
  const {register, handleSubmit} = useForm() 

  console.log(props)
  const userId = localStorage.getItem('userID')
const aChange = 1
  const handleRemove= ()=>{
    axiosWithAuth().delete(`/user/${userId}/logs/${props.log.id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }
  const onSubmit = data =>{
    console.log(data) 
    axiosWithAuth().put(`/user/${userId}/logs/${props.log.id}`, data)
    .then(res=>console.log(res))
    .catch(err=>console.log(err))

  }
  const handleChange = () =>{
    setForm()

  }

  return (
    <Card>
      <CardBody>
        <CardTitle>{props.log.title}</CardTitle>
        <CardText>Type of Bait Used:{props.log.bait}</CardText>
        <CardText>Type of Fish Caught:{props.log.fish}</CardText>
        <CardText>Location:{props.log.location}</CardText>
        <CardText>Rating:{props.log.log}</CardText>
        <Button onClick={handleRemove}>Remove Log</Button>
        <Button color="success" onClick={toggle}>
          Edit Log 
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Edit Log </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="title">
                <p>Title</p>
                <input name="title" placeholder={props.log.title} />
              </label>
              <br />
              <label htmlFor="bait">
                <p>Bait Used</p>
                <input name="bait" placeholder={props.log.bait}  />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="fish">
                <p>Fish Caught</p>
                <input name="fish" placeholder={props.log.fish}  />
              </label>
              <br />
              <label htmlFor="location">
                <p>Location</p>
                <input name="location" placeholder={props.log.location}  />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="score">
                <p>score (1-100)</p>
                <input name="score" placeholder={props.log.score}  />
              </label>
              <br />
              <label htmlFor="log">
                <p>Log Description</p>
                <input name="log" placeholder={props.log.log}  />
              </label>
                <br/>
              <button type="submit">Confirm Edit</button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </CardBody>
    </Card>
  )
}
