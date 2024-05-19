import { BrowserRouter, Routes, Route }  from "react-router-dom";
import Map from "./components/Map/Map"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Newsletter from "./components/Footer/Newsletter/Newsletter";
import AppContext from "./utils/context";

function App() {
    return(
        <BrowserRouter>
        <AppContext>
        <Header/>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="Map/:id" element={<Map></Map>} />
                <Route path="category/:id" element={<Category></Category>} />
                <Route path="/product/:id" element={<SingleProduct></SingleProduct>} />
            </Routes>
            <Map/>
            <Newsletter/>
            <Footer/>
        </AppContext>
        </BrowserRouter>
    );
}

export default App;
