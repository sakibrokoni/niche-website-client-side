import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const {
    handlePassword,
    handleEmail,
    handleResetPassword,
    signInWithGoogle,
    handleNameChange,
    toggleLogin,
    isLogin,
    setError,
    setUser,
    error,
    email,
    pass,
    user,
    name,
  } = useAuth();

  const auth = getAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_url = location.state?.from || "/home";
  // Handle Google Sign in or sign up
  const handleGoogleSignUp = () => {
    signInWithGoogle()
      .then((result) => {
        setUser(result.user);
        history.push(redirect_url);
        saveUser(
          result.user.email,
          result.user.displayName,
          result.user.photoURL,
          "PUT"
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Registration or Login  Section

  const handleRegister = (event) => {
    event.preventDefault();
    if (pass.length < 6) {
      setError("Password Must be 6 character long");
      return;
    }
    isLogin ? handleLogin(email, pass) : registerNewUser(email, pass);
  };
  const handleLogin = (email, pass) => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        setError("");
        const destination = location.state?.from || "/dashboard";
        history.push(destination);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  // Signed up with Email & Pass
  const registerNewUser = (email, pass, displayName, photoURL) => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log(userCredential);
        setError("");
        // setUserName(userCredential);
        const newUser = { email, displayName: name };
        setUser(newUser);
        // save user to the database
        saveUser(email, name, photoURL, "POST");
        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        history.push(redirect_url);
      })
      .catch((err) => {
        const errorMessage = err.message;
        setError(errorMessage);
      });
  };
  const saveUser = (email, displayName, photoURL, method) => {
    const user = { email, displayName, photoURL };
    fetch("https://rocky-sands-89317.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  console.log(user);
  return (
    <Container>
      <Row>
        <Col
          xs={11}
          md={4}
          className="mx-auto border border-3 p-5 m-5 rounded rounded-3 card-shadow"
        >
          <h4 className="fw-bolder fs-3">
            {isLogin ? "Login" : "Create New Account"}
          </h4>
          <Form onSubmit={handleRegister} className="w-xs-100">
            {!isLogin && (
              <Row>
                <Col>
                  <Form.Control
                    onBlur={handleNameChange}
                    placeholder="Full Name"
                    required
                  />
                </Col>
              </Row>
            )}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <br />
              <Form.Control
                onBlur={handleEmail}
                type="email"
                placeholder="Your Email"
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onBlur={handlePassword}
                type="password"
                placeholder="Password at least 6 characters"
                required
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </Form>
          <Form.Group className="my-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={toggleLogin}
              type="checkbox"
              label={
                isLogin ? "New to LAMPS LAND ?" : "Already Have an Account ?"
              }
            />
          </Form.Group>

          {isLogin && (
            <p>
              <Link to="/resetPassword" onClick={handleResetPassword}>
                Forget Password ?
              </Link>{" "}
              <br />
              <br />
              OR
            </p>
          )}
          <div className="container mt-5 mx-auto text-center">
            <Button
              onClick={handleGoogleSignUp}
              variant="outline-info"
              type="submit"
            >
              <p>Google SignIn</p>
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
