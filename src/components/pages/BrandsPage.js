import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BrandsPage = () => {
  return (
    <div className="brand-icons-container">
      <h1>Brands</h1>

      <div className="brand-icons-wrapper">
        <FontAwesomeIcon icon="fa-brands fa-amazon" />
        <FontAwesomeIcon icon="fa-brands fa-audible" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-twitch" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
      </div>
    </div>
  );
};

export default BrandsPage;
