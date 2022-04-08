import { BiTrash } from "react-icons/bi";
import "./style.css";

const CartProducts = ({ img, name, category, children }) => {
  return (
    <li className="containerCart">
      <div>
        <img className="productImgCart" src={img} alt=""></img>
      </div>
      <div className="containerCartDetails">
      <h2 className="productNameCart">{name}</h2>
      <span className="productCategoryCart">{category}</span>      
      </div>
     <span className="trashCan">{children}</span> 
    </li>
  );
};

export default CartProducts
