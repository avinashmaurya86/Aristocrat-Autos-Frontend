import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ data, id }) => {
    const navigate = useNavigate();
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                data.img.data[0].attributes.url
              }
                alt=""
                />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#8377;{data.price}</span>
            </div>
        </div>
    );
};

export default Product;


// import "./Product.scss";
// import bmw_m_1000_rr from "../../../assets/products/bmw_m_1000_rrrr.png";
// const Product = (id, data) => {
//     return <div className="product-card">
//         <div className="thumbnail">
//             <img src={process.env.REACT_APP_DEV_URL +
//                 data.img.data[0].attributes.url} alt="" />
//         </div>
//         <div className="prod-details">
//             <span className="name">Product Name</span>
//             <span className="price">&#8377;784</span>
//         </div>
//     </div>;
// };

// export default Product;