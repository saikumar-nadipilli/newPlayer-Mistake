import { Component } from "react";

import "./index.css";

class SecondPage extends Component {
  render() {
    const { participantsList } = this.props;

    return (
      <div className="container">
        <h1 className="head">{participantsList.length}</h1>
      </div>
    );
  }
}
export default SecondPage;
