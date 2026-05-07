import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Cart from "./Components/cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Cart />
      </BrowserRouter>


    </>
  );
};

export default App;
