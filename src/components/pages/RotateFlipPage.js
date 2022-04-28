import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RotateFlipPage = () => {
  return (
    <div className="rotate-flip-container">
      <h1>Rotate and Flip</h1>

      <div className="rotation-wrapper">
        <FontAwesomeIcon icon="fa-solid fa-universal-access" />
        <FontAwesomeIcon icon="fa-solid fa-universal-access" rotation={90} />
        <FontAwesomeIcon icon="fa-solid fa-universal-access" rotation={180} />
        <FontAwesomeIcon icon="fa-solid fa-universal-access" rotation={270} />
        <FontAwesomeIcon icon="fa-solid fa-universal-access" />
      </div>

      <div className="flip-wrapper">
        <FontAwesomeIcon icon="fa-solid fa-truck" />
        <FontAwesomeIcon icon="fa-solid fa-truck" flip="vertical" />
        <FontAwesomeIcon icon="fa-solid fa-truck" flip="both" />
        <FontAwesomeIcon icon="fa-solid fa-truck" flip="horizontal" />
      </div>
    </div>
  );
};

export default RotateFlipPage;

<FontAwesomeIcon />;
