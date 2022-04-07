import "./style.css";
import Products from "../Products";

const ProductsList = ({ products, handleClick }) => {
  return (
    <ul>
      {products.map(({ id, name, category, price, img }) => (
        <Products
          handleClick={handleClick}
          id={id}
          name={name}
          category={category}
          price={price}
          img={img}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
