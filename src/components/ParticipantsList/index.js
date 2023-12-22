import "./index.css";

const ParticipantsList = (props) => {
  const { participantDetails } = props;
  const { name, speed } = participantDetails;

  return (
    <li className="table-row">
      <p className="row-value">{name}</p>
      <p className="row-value">{speed}</p>
      <p className="row-value">-</p>
      <p className="row-value">-</p>
    </li>
  );
};

export default ParticipantsList;
