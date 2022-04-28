import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PowerfulTransformations = () => {
  return (
    <div className="powerful-transform-container">
      <h1>Powerful Transformations</h1>

      <div className="transform-wrapper" style={{ display: "flex" }}>
        <div className="tform-item">
          <FontAwesomeIcon icon="fa-solid fa-jet-fighter" />
        </div>

        <div className="tform-item">
          <FontAwesomeIcon
            icon="fa-solid fa-jet-fighter"
            transform={{ rotate: 15 }}
          />
        </div>

        <div className="tform-item">
          <FontAwesomeIcon
            icon="fa-solid fa-jet-fighter"
            transform={{ rotate: 30 }}
          />
        </div>

        <div className="tform-item">
          <FontAwesomeIcon
            icon="fa-solid fa-jet-fighter"
            transform={{ rotate: 45 }}
          />
        </div>

        <div className="tform-item">
          <FontAwesomeIcon
            icon="fa-solid fa-jet-fighter"
            transform={{ rotate: 60 }}
          />
        </div>

        <div className="tform-item">
          <FontAwesomeIcon
            icon="fa-solid fa-jet-fighter"
            transform={{ rotate: 75 }}
          />
        </div>

        <div className="tform-item">
          <FontAwesomeIcon
            icon="fa-solid fa-jet-fighter"
            transform={{ rotate: 90 }}
          />
        </div>
      </div>

      <div className="jet-stream" />

      <div className="shrink-wrapper">
        <FontAwesomeIcon
          icon="fa-solid fa-jet-fighter"
          transform="grow-14 right-40"
        />
      </div>

      <div className="inverse-wrapper">
        <FontAwesomeIcon icon="fa-solid fa-jet-fighter" inverse />
      </div>
    </div>
  );
};

export default PowerfulTransformations;
