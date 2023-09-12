import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { loginImg } from "../../assets/index";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const submit = (e) => {
    e.preventDefault();
    if (user.username === "akmal" && user.password === "9271999") {
     navigate('/debts')
    } else {
      toast.error("Password incorrect");
    }
  };
  const handleUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="container">
      <div className="flex items-center h-screen ">
        <div className="grid items-center grid-cols-2 gap-10 border rounded-md">
          <div className="px-32">
            <Form onSubmit={submit}>
              <Form.Group controlId="username">
                <Form.Label className="text-base font-bold md:text-xl">
                  User name
                </Form.Label>
                <Form.Control
                  onChange={handleUser}
                  className="mb-8 login-input"
                  required
                  type="text"
                  placeholder="User name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="password">
                <Form.Label className="text-base font-bold md:text-xl">
                  Password
                </Form.Label>
                <Form.Control
                  onChange={handleUser}
                  className="login-input"
                  required
                  type="password"
                  placeholder="Password"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Button className="mt-10 bg-primary " type="submit">
                Submit form
              </Button>
            </Form>
          </div>
          <div className="">
            <img
              src={loginImg}
              alt="login"
              className="rounded-md img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
