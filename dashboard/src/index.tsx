import React from "react";
import ReactDOM from "react-dom";

import DashboardLayout from "./components/layouts/dashboardLayout";

import "./index.css";

import Megalotron from "./assets/megalotron.svg";

ReactDOM.render(
  <React.StrictMode>
    <div className="flex flex-col w-screen h-screen ">
      <div className="flex flex-row items-center justify-start h-20 p-3 bg-blue-500">
        <img src={Megalotron} alt="megalotron" />
        <div className="w-4" />
        <p className="text-4xl font-normal leading-4 text-white">Megalotron</p>
      </div>
      <div className="flex-1 p-3 bg-gray-300">
        <DashboardLayout />
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
