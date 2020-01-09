import React, { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import NavBar from "./NavBar.js"
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import LogList from "./LogList.js"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import { UserContext } from "../contexts/userContext"
export default function DashBoard(props) {
  const [feed, setFeed] = useState([])
  const userName = localStorage.getItem("userName")
  const apiName = "https://fish-friends-2020.herokuapp.com/api/logs/"

  const { register, handleSubmit, errors } = useForm()

  let id = localStorage.getItem("userID")
  const onSubmit = data => {
    console.log(data, "added log")
    data = { ...data, userID: id }
    axiosWithAuth()
      .post(`/user/${id && id}/logs/`, data)
      .then(res => {
        setRefresh(!refresh)
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  const { buttonLabel, className } = props

  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  const [refresh, setRefresh] = useState(false)

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
<<<<<<< HEAD
  }, [])

  function addLogToFeed(e) {
    e.preventDefault()

    //axios with auth here
    //.finally(() => toggle())
    toggle()
  }
=======
  }, [modal])
>>>>>>> 391738ef9a034a853d5bf824a59cb1d42656970b

  return (
    <div className="feed">
      <UserContext.Provider value={userName}>
        <NavBar />
      </UserContext.Provider>
      <div className="mode">
        <Button color="success" onClick={toggle}>
          Add Log
        </Button>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Add Log</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="title">
                <p>Title</p>
                <input name="title" ref={register({ required: true })} />
              </label>
              <br />
              <label htmlFor="bait">
                <p>Bait Used</p>
                <input name="bait" ref={register({ required: true })} />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="fish">
                <p>Fish Caught</p>
                <input name="fish" ref={register({ required: true })} />
              </label>
              <br />
              <label htmlFor="location">
                <p>Location</p>
                <input name="location" ref={register({ required: true })} />
              </label>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <label htmlFor="score">
                <p>score (1-100)</p>
                <input name="score" ref={register({ required: true })} />
              </label>
              <br />
              <label htmlFor="log">
                <p>Log Description</p>
                <input name="log" ref={register({ required: true })} />
              </label>
              <br />
              <button type="submit">Add Log</button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <LogList feed={feed} />
    </div>
  )
}
