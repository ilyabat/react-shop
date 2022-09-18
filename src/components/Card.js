
function Card(props) {

    const onClickButton = () =>{
        alert(props.title)
    }
    return (
        <div className="card__block">
            <div className="card__favorite">
                <img src="/img/main/unlike.svg" alt="UnLike" />
            </div>
            <img className="card__img" src={props.imageUrl} alt="Sneakers" />
            <p className="card__text">{props.title}</p>
            <div className="card__down">
                <div className="card__price">
                    <p>Ціна:</p>
                    <b>{props.price} грн</b>
                </div>
                <button className="card__btn" onClick={onClickButton}>
                    <img className="card__button-img" src="/img/main/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    );
}
export default Card;
