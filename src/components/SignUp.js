import React, { useState } from "react";
import { signUp } from "../api/AuthAPI";
import styled from "styled-components";
import {Form, FormContainer, FormWrapper} from "./SignIn";

// const FormContainer = styled.div`
//   background-color: #e6e6fa; /* 배경색 추가 */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
// `;
//
// const FormWrapper = styled.div`
//   background-color: #34495e;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   width: 260px;
//   max-width: 100%; /* 최대 너비를 100%로 설정하여 화면 크기에 따라 조절될 수 있도록 함 */
// `;
//
// const Form = styled.form`
//   .form-group {
//     margin-bottom: 20px;
//     text-align: left;
//   }
//
//   label {
//     display: block;
//     margin-bottom: 5px;
//     color: #ecf0f1;
//   }
//
//   input[type="text"],
//   input[type="password"] {
//     width: 90%;
//     padding: 10px;
//     font-size: 16px;
//     border: 1px solid #bdc3c7;
//     border-radius: 5px;
//     background-color: #ecf0f1;
//     color: #2c3e50;
//   }
//
//   button {
//     display: block;
//     width: 90%;
//     margin-top: 20px;
//     margin-left: auto;
//     margin-right: auto;
//     margin-bottom: 20px;
//     padding: 10px;
//     font-size: 18px;
//     background-color: #e74c3c;
//     color: white;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//   }
//
//    button:hover {
//     background-color: #e74c3c;
// }
// `

export default function SignUp() {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    signUp(values)
        .then((response) => {
          if (response){
            alert("가입 성공")
            window.location.href = `/Login`;
          }else{
            alert("이미 가입된 ID 입니다.")
          }
        }).catch((error) => {
      console.log(error);
    });
    e.preventDefault()
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2 style={{ color: "#ecf0f1" }}>Sign Up</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="ID"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign up</button>
          </div>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}