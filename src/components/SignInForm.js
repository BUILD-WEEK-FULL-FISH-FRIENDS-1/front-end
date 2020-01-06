import React from "react"
import { useForm } from "react-hook-form"

export default function SignInForm() {
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = data => {
    console.log(data, "hello")
  }
  return (
    // <div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">
        <p>username</p>
        <input name="username" ref={register} />
      </label>
      <label htmlFor="password">
        <p>password</p>
        <input type="password" name="password" ref={register} />
      </label>
      <button type="submit">Sign In</button>
    </form>

    // </div>
  )
}
