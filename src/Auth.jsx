import { useState, useRef } from "react";
import { signup, login, logout, useAuth } from "./firebase";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Auth() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();


  async function handleSignup() {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';
    
  }

  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
    emailRef.current.value = '';
    passwordRef.current.value = '';
  }

  return (
    <div>

    <h4 className="text-center">Currently logged in as: {currentUser?.email}</h4>
    <Form className="text-center m-3">
    <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control className='w-50 offset-3' type="email" placeholder='Enter email' ref={emailRef} />
        <Form.Text className='text-muted'><div>We will never share your email address with anyone else.</div></Form.Text>
        <Form.Label>Password</Form.Label>
        <Form.Control className="w-50 offset-3" type='password' placeholder='Enter password' ref={passwordRef} />
    </Form.Group>

    <Button type='submit' className="btn btn-primary m-3" disabled={loading || currentUser} onClick={handleSignup}>
        Sign Up
      </Button>
      <Button className="btn btn-primary m-3" disabled={loading || currentUser} onClick={handleLogin}>
        Log In
      </Button>
      <Button type="submit" className="btn btn-primary m-3" disabled={loading || !currentUser} onClick={handleLogout}>
        Log Out
      </Button>
    
  </Form>
    </div>
  );
}

export default Auth;

