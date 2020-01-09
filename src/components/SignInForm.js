import React, {useState} from "react"
import { useForm } from "react-hook-form"
import {axiosWithAuth} from "../utils/axiosWithAuth"
import { Route, Link } from "react-router-dom"
import {PrivateRoute} from "../utils/PrivateRoute"
import {userContext} from "../contexts/userContext"


export default function SignInForm(props) {
  console.log(props)
  
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data, "hello")
    axiosWithAuth().post('/auth/login/',data)
    .then(res=>{console.log(res)
    localStorage.setItem('token',res.data.token)
   localStorage.setItem('userID', res.data.user.id)
   localStorage.setItem('userName',res.data.user.username)
    })
    .catch(err =>console.log(err))
    props.history.push('/DashBoard')
  }
  // const handleClick = () =>{
  //   this.history.push("/DashBoard")
  // }
  
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
     
      <button type="submit" >Sign In</button>
      <br/>
    </form>
    
    
   </div>
  )
}
