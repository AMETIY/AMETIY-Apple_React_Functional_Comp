import Header from "./Components/Sections/Header/Header";
import Sections from "./Components/Sections/Sections";
import Footer from "./Components/Sections/Footer/Footer";
// import "./Common_Resource/css/bootstrap.css";
import './Common_Resource/css/styles.css'

import "./Common_Resource/css/styles.css";
import { Route, Routes } from "react-router-dom";
import Ipad from "./Components/Sections/Pages/Ipad/Ipad";
import Iphone from "./Components/Sections/Pages/Iphones/Iphone";
import Mac from "./Components/Sections/Pages/Mac/Mac";
import Music from "./Components/Sections/Pages/Music/Music";
import Support from "./Components/Sections/Pages/Support/Support";
import Tv from "./Components/Sections/Pages/Tv/Tv";
import Watch from "./Components/Sections/Pages/Watch/Watch";
import Cart from "./Components/Sections/Pages/Cart/Cart";
import Four04 from "./Components/Sections/Pages/Four04/Four04";
import SharedLayOut from "./Components/Sections/Pages/SharedLayOut";
import ProductPage from "./Components/Sections/Pages/Iphones/ProductPage/ProductPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayOut />}>
        <Route path="/" element={<Sections />} />
        <Route path="Mac" element={<Mac />} />
        <Route path="Iphone" element={<Iphone />} />
        <Route path="iphone/:productParam" element = {<ProductPage />} />
        <Route path="Ipad" element={<Ipad />} />
        <Route path="Watch" element={<Watch />} />
        <Route path="Tv" element={<Tv />} />
        <Route path="Music" element={<Music />} />
        <Route path="Support" element={<Support />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="*" element={<Four04 />} />
      </Route>
    </Routes>
  );
}

export default App;
