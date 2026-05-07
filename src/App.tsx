import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import NotFound from "./Pages/NotFound";
import Cart from "./Components/cart";
import Menu from "./Pages/Menu";
import Order from "./Components/Order";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Cart />
      </BrowserRouter>


    </>
  );
};

export default App;
