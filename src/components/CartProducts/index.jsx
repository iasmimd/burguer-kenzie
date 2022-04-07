import "./style.css";

const CartProducts = ({ img, name, category }) => {
  return (
    <li className="containerCart">
      <div>
        <img className="productImgCart" src={img} alt=""></img>
      </div>
      <h2 className="productNameCart">{name}</h2>
      <span className="productCategoryCart">{category}</span>
    </li>
  );
};

export default CartProducts
