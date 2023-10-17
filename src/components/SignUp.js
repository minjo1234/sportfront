import React, { useState } from "react";
import { signUp } from "../api/AuthAPI";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: #e6e6fa; /* 배경색 추가 */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormWrapper = styled.div`
  background-color: #34495e;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 260px; 
  max-width: 100%; /* 최대 너비를 100%로 설정하여 화면 크기에 따라 조절될 수 있도록 함 */
`;

const Form = styled.form`
  .form-group {
    margin-bottom: 20px;
    text-align: left;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: #ecf0f1;
  }

  input[type="text"],
  input[type="password"] {
    width: 90%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    background-color: #ecf0f1;
    color: #2c3e50;
  }

  button {
    display: block;
    width: 90%;
    margin-top: 20px; 
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20;
    padding: 10px;
    font-size: 18px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  

   button:hover {
    background-color: #e74c3c; 
}
  }
`;

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
    e.preventDefault();
    try {
      const response = await signUp(values);
      // 회원가입 성공 로직 추가
    } catch (error) {
      // 오류 처리 로직 추가
      console.error(error);
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <h2 style={{ color: "#ecf0f1" }}>환영합니다!</h2>
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">아이디</label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleChange}
              value={values.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
          </div>
          <div className="form-group">
            <button type="submit">악마와 계약하기</button>
          </div>
        </Form>
      </FormWrapper>
    </FormContainer>
  );
}