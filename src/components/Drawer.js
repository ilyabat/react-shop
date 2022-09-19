function Drawer({ onClose, onRemove, items = [] }) {
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
                        <div>
                            <div className="drawer__items">
                                {items.map((obj) => (
                                    <div className="drawer__item">
                                        <img className="drawer__sneakers-img" src={obj.imageUrl} alt="Sneakers" />
                                        <div className="drawer__text">
                                            <p>{obj.title}</p>
                                            <b>{obj.price} грн</b>
                                        </div>
                                        <img onClick={() => onRemove(obj.id)} className="drawer__remove-img" src="/img/main/remove.svg" alt="Remove" />
                                    </div>
                                ))}
                            </div>
                            <div className="drawer__down">
                                <ul className="drawer__ul">
                                    <li className="drawer__li">
                                        <span>Ціна:</span>
                                        <div></div>
                                        <b>21 999грн.</b>
                                    </li>
                                    <li className="drawer__li">
                                        <span>Податок 5%: </span>
                                        <div></div>
                                        <b> 1000грн.</b>
                                    </li>
                                </ul>
                                <button className="greenBtn">Оформити замовлення <img src="/img/main/arrow.svg" alt="Arrow" /></button>
                            </div>
                        </div> : <div className="drawer__box">
                            <img src="/img/main/boxCart.png" alt="Box" />
                            <h2>Кошик порожній</h2>
                            <p>Додайте хоча б одну пару кросівок, щоб зробити замовлення.</p>
                            <button onClick={onClose} className="drawer__btn"><img src="/img/main/arrow.svg" alt="Arrow" />Повернутися назад</button>
                        </div>
                }



            </div>
        </div>
    );
}
export default Drawer;
