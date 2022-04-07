import "./style.css";

const Products = ({ img, name, category, price, id, handleClick }) => {
  // console.log(id);

  return (
    <li className="productCard">
      <img className="productImg" src={img} alt=""></img>
      <h2 className="productName">{name}</h2>
      <span className="productCategory">{category}</span>
      <span className="productPrice">{price}</span>
      <button className="buttonAdd" onClick={() => handleClick(id)}>
        Adicionar
      </button>
    </li>
  );
};

export default Products;
