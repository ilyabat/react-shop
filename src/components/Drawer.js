import React from "react";
import Info from "./info";
import axios from "axios";


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

function Drawer({ onClose, onRemove, items = [], setCartItems, cartItems }) {
    const [orderId, setOrderId] = React.useState(null)

    const [isOrder, setIsOrder] = React.useState(false)
    const [isLoading, setIsLoading] = React.useState(false)
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    const onClickOrder = async () => {
        setIsLoading(true)

        const { data } = await axios.post('https://6327800c5731f3db995a67d9.mockapi.io/orders', { items: cartItems })
        setOrderId(data.id)
        setIsOrder(true)
        setCartItems([]);
        for (let index = 0; index < cartItems.length; index++) {
            const item = cartItems[index];
            axios.delete(`https://6327800c5731f3db995a67d9.mockapi.io/cart/${item.id}`)
            delay(1000)
        }
        setIsLoading(false)
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <div className="drawer__up">
                    <div className="drawer__title">
                        Кошик
                    </div>
                    <img onClick={onClose} className="drawer__remove-img" src="/img/main/remove.svg" alt="Remove" />
                </div>
                {
                    items.length > 0 ?
                        <div className="drawer__main">
                            <div className="drawer__items">
                                {items.map((obj) => (
                                    <div key={obj.id} className="drawer__item">
                                        <img className="drawer__sneakers-img" src={obj.imageUrl} alt="Sneakers" />
                                        <div className="drawer__text">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} грн</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="drawer__remove-img" src="img/main/remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="drawer__down">
                                <ul className="drawer__ul">
                                    <li className="drawer__li">
                                        <span>Ціна:</span>
                                        <div></div>
                                        <b>{totalPrice}грн.</b>
                                    </li>
                                    <li className="drawer__li">
                                        <span>Податок 5%: </span>
                                        <div></div>
                                        <b>{Math.round(totalPrice / 100 * 5)}грн.</b>
                                    </li>
                                </ul>
                                <button disabled={isLoading} onClick={onClickOrder} className="greenBtn">Оформити замовлення <img src="img/main/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div> :
                        <Info
                            title={isOrder ? "Замовлення оформлено!" : "Кошик порожній"}
                            description={isOrder ? `Ваше замовлення #${orderId} скоро буде передано кур'єрській доставці` : "Додайте хоча б одну пару кросівок, щоб зробити замовлення."}
                            image={isOrder ? "img/main/offer.png" : "img/main/boxCart.png"}
                            onClose={onClose}
                        />

                }



            </div>
        </div>
    );
}
export default Drawer;
