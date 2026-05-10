import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Menu from "./Pages/Menu";
import Order from "./Pages/Order";
import Footer from './Components/Footer';
import Contact from "./Pages/Contact";
<<<<<<< HEAD
import InfoForm from "./Components/infoForm";
=======
import InfoForm from "../Components/infoForm";
>>>>>>> efe9ecee65918cc2027c5f2b46253dbe75694eca

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order-now" element={<Order />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/delivery" element={<InfoForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
};

export default App;
