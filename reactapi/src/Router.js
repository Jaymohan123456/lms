// import ReactDOM from "react-dom/client";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Regisration from "./regisration";
import Login from "./Login";
import Table from "./Table";
import Loginnew from "./Loginnew";
import Error from "./Error";

export default class router extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Regisration />} />
            <Route path="Login" element={<Login />} />
            <Route path="home" element={<Home />} />
            <Route path="table" element={<Table />} />
            <Route path="Loginnew" element={<Loginnew />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
