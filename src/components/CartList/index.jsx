import "./style.css"
import CartProducts from "../CartProducts"


const CartList = ({currentSale}) => {
    return(
        <ul>
            {currentSale.map(({img, name, category}) => (
                <CartProducts img={img} name={name} category={category}/>
            ))}
        </ul>
    )
}

export default CartList