import "./style.css";

const Products = ({ name, category, price, img }) => {
  return (
    <li className="productCard">
      <h2 className="productName">{name}</h2>
      <span className="productCategory">{category}</span>
      <span className="productPrice">{price}</span>
      <img className="productImg"  src={img} alt=""></img>
    </li>
  );
};

export default Products