import { Button } from "../styles/buttons";
import { Input, Error } from "../styles/forms";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import DocumentMeta from "react-document-meta";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter your e-mail")
    .matches(
      /^[\w\-.]+@stud.?noroff.no$/,
      "Must be a student noroff e-mail (ending in @stud.noroff.no)"
    )
    .required("Please enter a valid email address")
    .typeError("Please enter a valid email address"),
  password: yup
    .string()
    .min(8, "Must contain more than 8 characters")
    .matches(
      /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]/,
      "Must contain at least one uppercase and lowercase letter, as well as a number"
    )
    .required("Please enter your password")
    .typeError("Please enter your password"),
}).required();

function Login() {
  const navigate = useNavigate();
  const url = "https://api.noroff.dev/api/v1/holidaze/auth/login";

  const meta = {
    title: "Holidaze | Login",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitHandler = async (data) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (json.accessToken) {
        localStorage.setItem("Token", json.accessToken);
        localStorage.setItem("Name", json.name);
        localStorage.setItem("Manager", json.venueManager);
        reset();
        navigate("/");
      } else if (json.errors) {
        alert(json.errors[0].message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DocumentMeta {...meta} />
      <main className="container d-flex justify-content-center align-items-center h-100">
        <div className="col-10 col-lg-6 col-xl-5 mb-5">
          <h1 className="mb-4">Log in</h1>
          <form
            className="d-flex flex-column gap-4"
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className="d-flex flex-column">
              <label className="fs-5" htmlFor="email">
                E-mail
              </label>
              <Input id="email" {...register("email")} />
              <Error>{errors.email?.message}</Error>
            </div>
            <div className="d-flex flex-column">
              <label className="fs-5" htmlFor="password">
                Password
              </label>
              <Input id="password" type="password" {...register("password")} />
              <Error>{errors.password?.message}</Error>
            </div>
            <Button className="align-self-center" type="submit">
              Log in
            </Button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
