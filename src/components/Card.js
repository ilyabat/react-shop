function Card() {
    return (
        <div className="card__block">
            <div className="card__favorite">
                <img src="/img/main/unlike.svg" alt="UnLike" />
            </div>
            <img className="card__img" src="/img/main/sneakers/01.jpg" alt="Sneakers" />
            <p className="card__text">Чоловічі кросівки Nike Blazer Mid Suede</p>
            <div className="card__down">
                <div className="card__price">
                    <p>Ціна:</p>
                    <b>12 999грн.</b>
                </div>
                <button className="card__btn">
                    <img className="card__button-img" src="/img/main/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}
export default Card;
