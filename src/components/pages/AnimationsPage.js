import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AnimationsPage = () => {
  return (
    <div className="fa-animations-container">
      <h1>Animations</h1>

      <div className="animations-wrapper">
        <FontAwesomeIcon
          icon="fa-solid fa-heart"
          beat
          border
          style={{ borderColor: "black" }}
        />
        <FontAwesomeIcon icon="fa-solid fa-basketball" bounce />
        <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" fade />
        <FontAwesomeIcon icon="fa-solid fa-bell" shake />
        <FontAwesomeIcon icon="fa-solid fa-cog" spin />
      </div>
    </div>
  );
};

export default AnimationsPage;
