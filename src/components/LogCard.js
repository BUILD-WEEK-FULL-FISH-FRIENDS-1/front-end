<<<<<<< HEAD
import React, { useState } from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { useForm } from "react-hook-form"
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap"
=======
import React,{useState, useEffect} from "react"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import {useForm} from "react-hook-form"
import { Card, CardBody, CardTitle, CardText, Modal, ModalHeader, ModalBody, ModalFooter,Button } from "reactstrap"
>>>>>>> 391738ef9a034a853d5bf824a59cb1d42656970b

export default function LogCard(props) {
  //Reactstrap variables
  const { buttonLabel, className } = props
  const [modal, setModal] = useState(false)
<<<<<<< HEAD
  const [form, setForm] = useState(props)

  const toggle = () => setModal(!modal)

  const { register, handleSubmit } = useForm()

  console.log(props)
  const userId = localStorage.getItem("userID")
  const aChange = 1
  const handleRemove = () => {
    axiosWithAuth()
      .delete(`/user/${userId}/logs/${props.log.id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
  const onSubmit = data => {
    console.log(data)
    const payload = {
      title: data.title === "" ? props.log.title : data.title,
      bait: data.bait === "" ? props.log.bait : data.bait,
      fish: data.fish === "" ? props.log.fish : data.fish,
      location: data.location === "" ? props.log.location : data.location,
      rating: data.log === "" ? props.log.log : data.log,
      score: data.score === "" ? props.log.score : data.score
    }
    axiosWithAuth()
      .put(`/user/${userId}/logs/${props.log.id}`, payload)
      .then(res => console.log(res))
      .catch(err => console.log(err))
=======
  const toggle = () => setModal(!modal)
  const {register, handleSubmit} = useForm() 

  //Localstorage get for handle remove 
  const userId = localStorage.getItem('userID')
  //helper functions 

  
  const [refresh, setRefresh]=useState(false)
  useEffect(()=>{console.log(refresh)},[refresh])
  

  const handleRemove= ()=>{
    axiosWithAuth().delete(`/user/${userId}/logs/${props.log.id}`)
    .then(res=>{console.log(res)
      window.location.reload(false);
    })
    .catch(err=>console.log(err))
    }

  const onSubmit = data =>{
    console.log(data)
    const payload = {
      title: data.title === '' ? props.log.title : data.title,
      bait: data.bait === '' ? props.log.bait : data.bait,
      fish: data.fish === '' ? props.log.fish : data.fish,
      location: data.location === '' ? props.log.location : data.location,
      log: data.log === '' ? props.log.log : data.log,
      score: data.score === '' ? props.log.score : data.score 
    } 
    
    axiosWithAuth().put(`/user/${userId}/logs/${props.log.id}`, payload)
    .then(res=>{console.log(res)
      window.location.reload(false);
    })
    .catch(err=>console.log(err))
<<<<<<< HEAD
    //setRefresh(!refresh)

    
     
    
>>>>>>> 391738ef9a034a853d5bf824a59cb1d42656970b
=======
>>>>>>> 79799cc6be1b1876deddb5bafbed0d39a89fefee
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>{props.log.title}</CardTitle>
        <CardText>Type of Bait Used: {props.log.bait}</CardText>
        <CardText>Type of Fish Caught: {props.log.fish}</CardText>
        <CardText>Location: {props.log.location}</CardText>
        <CardText>Log: {props.log.log}</CardText>
        <CardText>Score: {props.log.score}</CardText>
        <Button onClick={handleRemove} color="danger">Remove Log</Button>
        &nbsp;&nbsp;
        <Button color="success" onClick={toggle}>
          Edit Log
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Edit Log </ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="title">
                <p>Title</p>
                <input
                  name="title"
                  placeholder={props.log.title}
                  ref={register}
                />
              </label>
              <br />
              <label htmlFor="bait">
                <p>Bait Used</p>
                <input
                  name="bait"
                  placeholder={props.log.bait}
                  ref={register}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="fish">
                <p>Fish Caught</p>
                <input
                  name="fish"
                  placeholder={props.log.fish}
                  ref={register}
                />
              </label>
              <br />
              <label htmlFor="location">
                <p>Location</p>
                <input
                  name="location"
                  placeholder={props.log.location}
                  ref={register}
                />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="score">
                <p>score (1-100)</p>
                <input
                  name="score"
                  placeholder={props.log.score}
                  ref={register}
                />
              </label>
              <br />
              <label htmlFor="log">
                <p>Log Description</p>
                <input name="log" placeholder={props.log.log} ref={register} />
              </label>
              <br />
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
