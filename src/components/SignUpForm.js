import React from "react"
import { useForm } from "react-hook-form"

//import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosWithAuth"

export default function SignUpForm(props) {
  //console.log(`LOG IN${props}`)
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data)

    axiosWithAuth()
      .post("/auth/register/", data)
      .then(res =>console.log(`NEW USER POST RESPONSE ${res}`))
      .catch(err => console.log(err))
    props.history.push("")
  }
  return (
    <form className="supForm" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        <p>Username</p>
        <input
          name="username"
          ref={register({ required: true, minLength: 6, maxLength: 20 })}
        />
      </label>
      <br />

      {/* <label htmlFor="firstname">
        <p>First Name</p>
        <input
          name="firstname"
          type="text"
          ref={register({ required: true, maxLength: 20 })}
        />
      </label>
      <br /> */}

      {/* <label htmlFor="lastname">
        <p>Last Name</p>
        <input
          name="laststname"
          type="text"
          ref={register({ required: true, maxLength: 20 })}
        />
      </label>
      <br /> */}

      {/* <label htmlFor="email">
        <p>Email</p>
        <input name="email" type="email" ref={register({ required: true })} />
      </label>
      <br /> */}

      <label htmlFor="password">
        <p>Password</p>
        <input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 8 })}
        />
      </label>
      <br />

      {/* <input
        type="checkbox"
        name="check"
        id="Check"
        ref={register({ required: true })}
      />
      <label htmlFor="Check" check>
        Terms Of Service
      </label>
      <br /> */}
      <button type="submit">Sign Up</button>
    </form>
  )
}
