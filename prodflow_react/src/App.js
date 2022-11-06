import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
  return <Home />;
  /*const [pageToRender, setPageToRender] = useState("HomePage");

  const handlePageChange = (page) => {
    setPageToRender(page);
  };

  const renderPage = () => {
    if (pageToRender === "HomePage") {
      return <Homepage />;
    } else if (pageToRender === "Modify") {
      // return <Modify />
    } else if (pageToRender === "Update") {
      //return <Update />
    }
  };*/
}

export default App;
