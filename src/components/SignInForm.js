import React from "react"
import { useForm } from "react-hook-form"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { Route } from "react-router-dom"
import {PrivateRoute} from "../utils/PrivateRoute"

export default function SignInForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data, "hello")
    axiosWithAuth().post('/auth/login/',data)
    .then(res=>//console.log(res)
    localStorage.setItem('token',res.data.token)
    )
    .catch(err =>console.log(err))
    //this.history.push('/DashBoard')
  }
  return (
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        <p>username</p>
        <input name="username" ref={register} />
      </label>
      <br />
      <label htmlFor="password">
        <p>password</p>
        <input type="password" name="password" ref={register} />
      </label>
      <br />
      <button type="submit">Sign In</button>
    </form>
    <PrivateRoute path="/DashBoard" Route="/components/Dashboard"/>
    
   </div>
  )
}
