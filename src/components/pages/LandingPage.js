import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <h1>
        <FontAwesomeIcon icon="fa-solid fa-hand-peace" className="hand-icon" />
        Welcome to the React FontAwesome Lunch-N-Learn
        <FontAwesomeIcon icon="fa-solid fa-hand" className="hand-icon" />
      </h1>
    </div>
  );
};

export default LandingPage;
