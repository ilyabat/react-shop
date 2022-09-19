import React from "react";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {

    const [isAdded, setIsAdded] = React.useState(false)

    const [isFavorite, setIsFavorite] = React.useState(false)

    const onClickPlus = () => {
        onPlus({title, imageUrl, price})
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () =>{
        onFavorite({title, imageUrl, price})
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="card__block">
            <div className="card__favorite" onClick={onFavorite}>
                <img onClick={onClickFavorite} src={isFavorite ? "/img/main/like.svg" : "/img/main/unlike.svg"} alt="UnLike" />
            </div>
            <img className="card__img" src={imageUrl} alt="Sneakers" />
            <p className="card__text">{title}</p>
            <div className="card__down">
                <div className="card__price">
                    <p>Ціна:</p>
                    <b>{price}грн</b>
                </div>

                <img onClick={onClickPlus} className="card__plus" src={isAdded ? "/img/main/plusOn.svg" : "/img/main/plus.svg"} alt="Plus" />

            </div>
        </div>
    );
}
export default Card;
