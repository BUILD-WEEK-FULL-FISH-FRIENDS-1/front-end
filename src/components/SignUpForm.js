import React from "react"
import { useForm } from "react-hook-form"
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap"

export default function SignUpForm() {
  const { register, handleSubmit } = useForm()
  const submit = data => {
    console.log(data)
  }
  return (
    <div>
      <form onSubmit={handleSubmit(submit())}>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="UserName">Username</label>
              <input
                type="username"
                name="username"
                id="username"
                placeholder="Enter Username"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="FirstName">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="LastName">Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="Email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                name="password"
                id="Password"
                placeholder="Enter Password"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label htmlFor="City">City</Label>
              <Input
                type="text"
                name="city"
                id="City"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label htmlFor="State">State</Label>
              <Input
                type="text"
                name="state"
                id="State"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label htmlFor="Zip">Zip</Label>
              <Input
                type="text"
                name="zip"
                id="Zip"
                ref={register({ required: true })}
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup check>
          <Input
            type="checkbox"
            name="check"
            id="Check"
            ref={register({ required: true })}
          />
          <Label for="Check" check>
            Terms Of Service
          </Label>
        </FormGroup>
      </form>
    </div>
  )
}
