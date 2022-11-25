import { useState } from "react";
import { createContext, useContext } from "react";

const Will = createContext();

const WillContextProvider = ({ children }) => {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    nameExecutor: "",
    addressExecutor: "",
  });

  const [beneficiaries, setBeneficiaries] = useState({
    firstName: "",
    lastName: "",
    relationship: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setPersonalDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handlePossession = (e) => {
    const { name, value } = e.target;
    setBeneficiaries((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <Will.Provider
      value={{
        personalDetails,
        onChange,
        beneficiaries,
        handlePossession,
      }}
    >
      {children}
    </Will.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(Will);
};

export default WillContextProvider;
