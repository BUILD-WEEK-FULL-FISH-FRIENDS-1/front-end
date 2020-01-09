import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { axiosWithAuth } from "../utils/axiosWithAuth"
import { Route, Link } from "react-router-dom"
import { PrivateRoute } from "../utils/PrivateRoute"
import { userContext } from "../contexts/userContext"

export default function SignInForm(props) {
  console.log(props)
  //React strap use form
  const { register, handleSubmit, errors } = useForm()
  //submit helper
  const onSubmit = data => {
    console.log(data, "hello")
    axiosWithAuth()
      .post("/auth/login/", data)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        localStorage.setItem("userID", res.data.user.id)
        localStorage.setItem("userName", res.data.user.username)
      })
      .catch(err => console.log(err))
    //props.history.push("/DashBoard")
  }
  const handleClick = () =>{
    props.history.push("/DashBoard")
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">
          <p>Username</p>
          <input name="username" ref={register({ required: true })} />
          <br />
          {errors.username && "Username is required"}
        </label>
        <br />

        <label htmlFor="password">
          <p>Password</p>
          <input
            type="password"
            name="password"
            ref={register({ required: true })}
          />
          <br />
          {errors.password && "Password is required"}
        </label>
        <br />

        <button type="submit">Sign In</button>
        &nbsp;&nbsp;
        <button onClick={handleClick}>Enter Site</button>
        <br />
      </form>
    </div>
  )
}
