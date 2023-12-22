import { Route, Routes } from "react-router-dom";

import { Component } from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";

import "./App.css";

class App extends Component {
  state = {
    participantsList: [
      { name: "Usain Bolt", speed: "60 KM/H", startTime: "10:00" },
      { name: "PT Usha", speed: "40 KM/H", startTime: "10:00" },
      { name: "Bill Gates", speed: "20 KM/H", startTime: "10:00" },
      //   { name: "Usain Bolt", speed: "60 KM/H", startTime: "10:00" },
      //   { name: "PT Usha", speed: "40 KM/H", startTime: "10:00" },
      //   { name: "Bill Gates", speed: "20 KM/H", startTime: "10:00" },
      //   { name: "Usain Bolt", speed: "60 KM/H", startTime: "10:00" },
      //   { name: "PT Usha", speed: "40 KM/H", startTime: "10:00" },
      //   { name: "Bill Gates", speed: "20 KM/H", startTime: "10:00" },
    ],
  };

  render() {
    // const { participantsList } = this.state;
    return (
      <div className="app-container">
        <Routes>
          <Route
            exact
            path="/"
            element={<FirstPage participantsList={this.participantsList} />}
          />
          <Route exact path="/secondPage" element={<SecondPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
