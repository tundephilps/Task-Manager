import React from "react";
import "./App.scss";
import AddTask from "./components/AddTask";
import Calendar from "./components/Calendar";
import Header from "./components/Header";
import Mail from "./components/Mail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div class="container">
      <Sidebar />

      <div class="main-area">
        <Header />

        <div class="main-container">
          <AddTask />

          <Mail />

          <div class="calendar-container">
            <Calendar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
