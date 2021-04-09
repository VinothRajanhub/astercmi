import DoctorProfile from './containers/DoctorProfile/DoctorProfile';
import Footer from './containers/Footer/Footer';

import './App.css';
import BoneMarrow from './containers/BoneMarrow/BoneMarrow';
import ImmuneDeficieny from './containers/ImmuneDeficieny/ImmuneDeficieny';
import BoneMarrowTransplant from './containers/BoneMarrowTransplant/BoneMarrowTransplant';
import TestimonalContact from './containers/TestimonalContact/TestimonalContact';
import Banner from './containers/Banner/Banner';
import Conditions from './containers/Conditions/Conditions';

function App() {
  return (
    <div>
      <Banner />
        <BoneMarrowTransplant />
        <DoctorProfile />
        <BoneMarrow />
        <ImmuneDeficieny />
        <Conditions />
        <TestimonalContact />
        <Footer />
    </div>
  );
}

export default App;
