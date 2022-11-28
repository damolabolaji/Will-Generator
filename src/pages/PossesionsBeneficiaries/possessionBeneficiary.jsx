import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/WillContext";

const PersonalDetails = () => {
  const { handlePossession, beneficiaries } = useGlobalContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/download");
  };

  return (
    <div className="contactForm">
      <Link to="/">
        <button className="back-button">
          <span> &larr;</span> Back
        </button>
      </Link>
      <p>Beneficiary Details</p>
      <form id="my-form" onSubmit={handleSubmit}>
        <div id="name">
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
              value={beneficiaries.firstName}
              onChange={handlePossession}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
              value={beneficiaries.lastName}
              onChange={handlePossession}
              required
            />
          </div>
        </div>

        <div className="flex-col-full">
          <label htmlFor="relationship">Relationship</label>
          <input
            type="text"
            name="relationship"
            id="relationship"
            placeholder="relationship with the beneficiary"
            value={beneficiaries.relationship}
            onChange={handlePossession}
            required
          />
        </div>

        <div className="flex-col-full">
          <label htmlFor="message">Possession to be bequeath</label>
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="add Possession to be bequeath"
            value={beneficiaries.message}
            onChange={handlePossession}
            required
          />
        </div>

        <button id="btn__submit">Download Will</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
