import "./style.css";
import Empty from "../../assets/empty.svg";
import { BiTrash } from "react-icons/bi";
import CartProducts from "../CartProducts";

const CartList = ({ currentSale, removeProduct }) => {
  return (
    <section className="cartSection">
      <div className="cartHeader">
        <span className="cartTitle">Carrinho de compras</span>
      </div>
      <ul className="cartUl">
        {currentSale.length < 1 ? (
          <img src={Empty} alt=""/>
        ) : (
          currentSale.map((item) => (
            <>
              <CartProducts
                key={item.id}
                img={item.img}
                name={item.name}
                category={item.category}
              >
                {<BiTrash onClick={() => removeProduct(item)} />}
              </CartProducts>
            </>
          ))
        )}
      </ul>
    </section>
  );
};

export default CartList;
