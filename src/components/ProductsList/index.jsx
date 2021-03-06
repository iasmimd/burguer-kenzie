import "./style.css";
import Products from "../Products";

const ProductsList = ({ products, handleClick, filteredProducts }) => {
  return (
    <ul className="ulProduct">
      {filteredProducts.length > 0 ? (
        <>
          {filteredProducts.map(({ id, name, category, price, img }) => (
            <Products
              key={id}
              handleClick={handleClick}
              id={id}
              name={name}
              category={category}
              price={price}
              img={img}
            />
          ))}
        </>
      ) : (
        products.map(({ id, name, category, price, img }) => (
          <Products
            key={id}
            handleClick={handleClick}
            id={id}
            name={name}
            category={category}
            price={price}
            img={img}
          />
        ))
      )}
    </ul>
  );
};

export default ProductsList;
