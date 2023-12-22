import { Link } from "react-router-dom";

import { Component } from "react";

import { v4 as uuidv4 } from "uuid";

import ParticipantsList from "../ParticipantsList";
// import SecondPage from "../SecondPage";

import "./index.css";

class FirstPage extends Component {
  state = {
    name: "",
    speed: "",
    startTime: "",
    isTrue: false,
  };

  onAddRunner = (event) => {
    event.preventDefault();
    const { name, speed, startTime } = this.state;
    const { participantsList } = this.props;
    const newRunner = {
      id: uuidv4(),
      name: name,
      speed: speed,
      startTime: startTime,
    };
    if (participantsList.length > 9) {
      this.setState((prevState) => ({
        name: "",
        speed: "",
        startTime: "",
        isTrue: true,
      }));
    } else {
      
      this.setState((prevState) => ({
        participantsList: [...prevState.participantsList, newRunner],
        name: "",
        speed: "",
        startTime: "",
      }));
    }
  };

  const onAddPlayer = () => {
        participantsList(newRunner);
      };

  onChangeNameInput = (event) => {
    this.setState({ name: event.target.value });
  };

  onChangeSpeedInput = (event) => {
    this.setState({ speed: event.target.value });
  };

  onChangeStartTime = (event) => {
    this.setState({ startTime: event.target.value });
  };

  render() {
    const { participantsList, name, speed, startTime, isTrue } = this.state;

    return (
      <div className="container">
        <form className="runner-form" onSubmit={this.onAddRunner}>
          <h1 className="head">RUNNER DETAILS</h1>
          <p className="description">*You can add maximum 10 participants</p>
          <label className="input-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={this.onChangeNameInput}
            className="input"
            placeholder="Sai Kumar"
          />

          <label className="input-label" htmlFor="speed">
            Speed
          </label>
          <input
            type="text"
            id="speed"
            value={speed}
            onChange={this.onChangeSpeedInput}
            className="input"
            placeholder="30 KM/H"
          />

          <label className="input-label" htmlFor="startTime">
            Start Time
          </label>
          <input
            type="text"
            id="startTime"
            value={startTime}
            onChange={this.onChangeStartTime}
            className="input"
            placeholder="10:00"
          />

          <button type="submit" className="button" onClick={onAddPlayer}>
            + ADD RUNNER
          </button>
          {isTrue ? <h1 className="warning-msg">*Tracks are Full</h1> : ""}
        </form>

        <div className="participants-container">
          <h1 className="list-header">LIST OF PARTICIPANTS</h1>
          <div className="participants-table-container">
            <ul className="participants-table">
              <li className="table-heading">
                <p className="table-heading-cell">Name</p>
                <p className="table-heading-cell">Speed</p>
                <p className="table-heading-cell">Start Time</p>
                <p className="table-heading-cell">End Time</p>
              </li>

              {participantsList.map((eachParticipant) => (
                <ParticipantsList
                  key={eachParticipant.id}
                  participantDetails={eachParticipant}
                />
              ))}
            </ul>
            <hr className="hr-line" />
            <div className="btn-container">
              <Link to="/secondPage">
                <button className="start-btn">Start Race ➜</button>
                {/* <SecondPage playerLength={participantsList.length} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FirstPage;
