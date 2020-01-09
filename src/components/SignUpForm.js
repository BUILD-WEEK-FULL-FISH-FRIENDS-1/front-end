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
      .then(res => console.log(`NEW USER POST RESPONSE ${res}`))
      .catch(err => console.log(err))
    props.history.push("")
  }
  return (
    <form className="supForm" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        <p>Username</p>
        <input
          name="username"
          ref={register({ required: true, maxLength: 20 })}
        />
        <br />
        {errors.username &&
          errors.username.type === "required" &&
          "Username is required"}
        {errors.username &&
          errors.username.type === "maxLength" &&
          "Username must not exceed 20 characters"}
      </label>
      <br />

      <label htmlFor="password">
        <p>Password</p>
        <input
          name="password"
          type="password"
          ref={register({ required: true, minLength: 8 })}
        />
        <br />
        {errors.password &&
          errors.password.type === "required" &&
          "Password is required"}
        {errors.password &&
          errors.password.type === "minLength" &&
          "Password must be at least 8 characters long"}
      </label>
      <br />

      <button type="submit">Sign Up</button>
    </form>
  )
}
