import "./App.css";
import Tabmenu from "./components/Tabmneu/Tabmenu";
import Centerpages from "./components/Banner/Banner";
import Header from "./components/header/Header";
import Topheader from "./components/topheader/Topheader";
import Brand from "./components/Brand/Brand";
import Feature from "./components/Featuredproducts/Feature";
import MotorBanner from "./components/MotorBanner.js/MotorBanner";
import SpecialProd from "./components/specialproducts/SpecialProd";
import CustomerSupport from "./components/customersupport/CustomerSupport";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <Topheader />
      <Header />
      <Tabmenu />
      <Centerpages />
      <Brand />
      <Feature />
      <MotorBanner />
      <SpecialProd />
      <CustomerSupport />
      <Footer />
     
    </div>
  );
}

export default App;
