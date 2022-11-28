import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context/WillContext";

const PersonalDetails = () => {
  const { personalDetails, onChange } = useGlobalContext();

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/possessions-and-beneficiaries");
  };

  return (
    <div className="contactForm">
      <Link to="/">
        <button className="back-button">
          <span> &larr;</span> Back
        </button>
      </Link>
      <p>
        A last will and testament or will allows a person (“testator”) to make a
        sworn statement about which person or people (“beneficiary”) will
        receive real estate and personal property after their death. Most states
        require two disinterested witnesses to sign in order for the will to be
        valid. After signing, copies should be given to all beneficiaries and
        the testator&apos;s attorney. please fill your personal details below as
        a testator
      </p>
      <form id="my-form" onSubmit={(e) => onSubmit(e)}>
        <div id="name">
          <div>
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              id="first_name"
              name="firstName"
              placeholder="Enter your first name"
              value={personalDetails.firstName}
              onChange={onChange}
              required
            />
          </div>

          <div>
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="lastName"
              id="last_name"
              placeholder="Enter your last name"
              value={personalDetails.lastName}
              onChange={onChange}
              required
            />
          </div>
        </div>

        <div className="flex-col-full">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Your Address"
            value={personalDetails.address}
            onChange={onChange}
            required
          />
        </div>

        <div className="flex-col-full">
          <label htmlFor="nameExecutor">Full Name of executors</label>
          <input
            type="text"
            name="nameExecutor"
            id="nameExecutor"
            placeholder="Full name of executor"
            value={personalDetails.nameExecutor}
            onChange={onChange}
            required
          />
          <label htmlFor="addressExecutor">Address of executors</label>
          <input
            type="text"
            name="addressExecutor"
            id="addressExecutor"
            placeholder="Address of executor"
            value={personalDetails.addressExecutor}
            onChange={onChange}
            required
          />
        </div>

        <button id="btn__submit">Next - Possesions and Beneficiaries</button>
      </form>
    </div>
  );
};

export default PersonalDetails;
