import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconSizePage = () => {
  const [numTimes, setNumTimes] = useState(1);

  return (
    <div className="icons-size-container">
      <h1>Icon Size</h1>

      <div className="fa-size-wrapper">
        <div className="fa-item">
          <FontAwesomeIcon icon="fa-solid fa-jedi" size="xs" />
        </div>

        <div className="fa-item dynamic-size">
          <FontAwesomeIcon icon="fa-solid fa-jedi" size={`${numTimes}x`} />
        </div>

        <div className="fa-item">
          <FontAwesomeIcon icon="fa-solid fa-jedi" size="lg" />
        </div>
      </div>

      <div className="size-input-wrapper">
        <input
          type="number"
          min="1"
          max="10"
          value={numTimes}
          onChange={(e) => setNumTimes(e.target.value)}
        />
      </div>
    </div>
  );
};

export default IconSizePage;
