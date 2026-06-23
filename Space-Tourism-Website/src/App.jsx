import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header, Home } from "./Components";
import { Destination, Crew, Technology } from "./Pages";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/destination" element={<Destination />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
      </Routes>
    </Router>
  )
}

export default App
