function Drawer() {
    return (
        <div style={{ display: 'none' }} className="overlay">
            <div className="drawer">
                <div className="drawer__up">
                    <div className="drawer__title">
                        Кошик
                    </div>
                    <img className="drawer__remove-img" src="/img/main/remove.svg" alt="Remove" />
                </div>



                <div className="drawer__items">

                    <div className="drawer__item">
                        <img className="drawer__sneakers-img" src="/img/main/sneakers/01.jpg" alt="Sneakers" />
                        <div className="drawer__text">
                            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                            <b>12 999грн.</b>
                        </div>
                        <img className="drawer__remove-img" src="/img/main/remove.svg" alt="Remove" />
                    </div>

                    <div className="drawer__item">
                        <img className="drawer__sneakers-img" src="/img/main/sneakers/01.jpg" alt="Sneakers" />
                        <div className="drawer__text">
                            <p>Чоловічі кросівки Nike Blazer Mid Suede</p>
                            <b>12 999грн.</b>
                        </div>
                        <img className="drawer__remove-img" src="/img/main/remove.svg" alt="Remove" />
                    </div>

                </div>
                <div className="drawer__down">
                    <ul className="drawer__ul">
                        <li className="drawer__li">
                            <span>Ціна:</span>
                            <div></div>
                            <b>21 999грн.</b>
                        </li>
                        <li className="drawer__li">
                            <span>Налог 5%: </span>
                            <div></div>
                            <b> 1000грн.</b>
                        </li>
                    </ul>
                    <button className="greenBtn">Оформити замовлення <img src="/img/main/arrow.svg" alt="Arrow" /></button>
                </div>
            </div>
        </div>
    );
}
export default Drawer;
