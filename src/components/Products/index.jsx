import "./style.css";

const Products = ({ img, name, category, price, id, handleClick }) => {

  return (
    <li className="productCard">
      <div className="containerImg">
      <img className="productImg" src={img} alt=""></img>
      </div>
      <div className="productDescription">
      <h2 className="productName">{name}</h2>
      <span className="productCategory">{category}</span>
      <span className="productPrice">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
      <button className="buttonAdd" onClick={() => handleClick(id)}>
        Adicionar
      </button>
      </div>
    </li>
  );
};

export default Products;
