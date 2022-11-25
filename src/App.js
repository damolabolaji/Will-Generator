
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index";
import PersonalDetails from "./pages/PersonalDetails/index"
import PossBeneficiaries from "./pages/PossesionsBeneficiaries/possessionBeneficiary";



function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/personal-details' element={<PersonalDetails />}></Route>
        <Route
          path='/possessions-and-beneficiaries'
          element={<PossBeneficiaries />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
