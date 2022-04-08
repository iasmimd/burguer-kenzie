import './style.css'

const CartPrice = ({currentSale, removeAllProducts}) => {

const price = currentSale.reduce((a, {price}) => a + price, 0)

    return(
        <div className='containerPrice'>
            <hr></hr>
            <div className='containerTotal'>
            <span className='cartTotal'>Total:</span>
            <span className='productPriceCart'>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            </div>
            <div className='removeAll'>
                <button className='buttonRemoveAll'  onClick={(e) => removeAllProducts(e.target)}>Remover todos</button>
            </div>
        </div>
    )
}

export default CartPrice