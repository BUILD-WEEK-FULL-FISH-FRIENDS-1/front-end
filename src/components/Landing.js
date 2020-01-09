import React, { useState } from "react"
import {
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap"
import SignUpForm from "./SignUpForm.js"
import SignInForm from "./SignInForm.js"

export default function Landing(props) {
  //Reactstrap Var
  const { buttonLabel, className } = props
  const [signUpModal, setSignUpModal] = useState(false)
  const [signInModal, setSignInModal] = useState(false)
  //React strap helper functions
  const toggleSignUp = () => setSignUpModal(!signUpModal)
  const toggleSignIn = () => setSignInModal(!signInModal)

  return (
    <div className="jumbo-land">
      <Jumbotron color="dark">
        <h1 className="display-3">Welcome to Fish Friends!</h1>
        <p className="lead">
          If this is your first time visiting us we encourage you to sign up to
          get the full experience.
        </p>
        <p className="lead">
          <Button color="success" onClick={toggleSignUp}>
            Sign Up
          </Button>
        </p>
        <hr className="my-2" />
        <br />
        <p>If you're a returning angler you already know what to do.</p>
        <p className="lead">
          <Button color="success" onClick={toggleSignIn}>
            Sign In
          </Button>
        </p>
        <Modal
          isOpen={signUpModal}
          toggleSignUp={toggleSignUp}
          className={className}
        >
          <ModalHeader toggleSignUp={toggleSignUp}>Sign Up</ModalHeader>
          <ModalBody>
            <SignUpForm history={props.history} />
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onSubmit={() => toggleSignUp}>
                Submit
              </Button>{" "} */}
            <Button color="secondary" onClick={toggleSignUp}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={signInModal}
          toggleSignIn={toggleSignIn}
          className={className}
        >
          <ModalHeader toggleSignIn={toggleSignIn}>Sign In</ModalHeader>
          <ModalBody>
            <SignInForm history={props.history}/>
          </ModalBody>
          <ModalFooter>
            {/* <Button type="submit" color="primary" onSubmit={toggleSignIn}>
                Submit
              </Button>{" "} */}
            <Button color="secondary" onClick={toggleSignIn}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </Jumbotron>
    </div>
  )
}
