import React from "react";
import styled from "styled-components";

function SidebarRightLayout({ children }) {
  return <Content>{children}</Content>;
}

export default SidebarRightLayout;

const Content = styled.div`
  width: 10%;
  height: 80%;
  background-color: #ffffcc;
  border-bottom-color: rgb(188, 232, 241);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(188, 232, 241);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(188, 232, 241);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(188, 232, 241);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  display: block;
  font-family: Tahoma, sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 20px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 15px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  float: right;
`;
