import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TbSearch } from "react-icons/tb";
import { CgShoppingCart, cgShopping } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";

import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate()
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset > 200){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return(
    <>
        <header className={`main-header ${scrolled ? 'sticky-header': ""}`}>
            <div className="header-content">
                <ul className="left">
                    <li onClick={() => navigate("/")} >Home</li>
                    <li>About</li>
                    <li>Categories</li>
                    {/* <li>Map</li> */}
                    <li onClick={() => navigate("/client/src/components/Map")} >Map</li>
                </ul>
                <div className="center" onClick={() => navigate("/")} >ARISTOCRAT AUTOS.</div>
                <div className="right">
                    <TbSearch onClick={() => setShowSearch(true)} />
                    <AiOutlineHeart/>
                    <span className="cart-icon"
                    onClick={() => setShowCart(true)}>
                        <CgShoppingCart/>
                        {!!cartCount && <span>{cartCount}</span>}
                    </span>
                </div>
            </div>
        </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
    );
};

export default Header;


// 609f28e0520beffba73363ccab05a229b08f861daabfedfdaca954a4e872f9284277b9b64e65ab9151f4e764aaed3fef54c2bebcadac6308449f19a53ea0cef53129df6529fca931991ba5900c93891f2a81317f9ea4bf51e987f2be7f4e817253317b3c400cbecfe0b57d89bfa9101d791acf403c6856753895cda2d489578e