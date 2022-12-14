import React from "react";
import ContentLoader from "react-content-loader"

function Card({ id, title, imageUrl, price, onFavorite, onPlus, favorited = false, added = false, loading = false, itemAdded }) {

    const obj = { id, parentId: id, title, imageUrl, price };
    const [isFavorite, setIsFavorite] = React.useState(favorited)

    const onClickPlus = () => {
        onPlus(obj)
    }
    const onClickFavorite = () => {
        onFavorite(obj)
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="card__block">
            {
                loading ?
                    <ContentLoader
                        speed={2}
                        width={150}
                        height={200}
                        viewBox="0 0 160 210"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"

                    >
                        <rect x="4" y="140" rx="6" ry="6" width="150" height="15" />
                        <rect x="5" y="184" rx="6" ry="6" width="80" height="24" />
                        <rect x="124" y="179" rx="8" ry="8" width="32" height="32" />
                        <rect x="5" y="162" rx="6" ry="6" width="93" height="15" />
                        <rect x="2" y="5" rx="0" ry="0" width="154" height="117" />
                    </ContentLoader> :
                    <>
                        <div className="card__favorite" onClick={onFavorite}>
                            {onFavorite && <img onClick={onClickFavorite} src={isFavorite ? "img/like.svg" : "img/unlike.svg"} alt="UnLike" />}
                        </div>
                        <img className="card__img" src={imageUrl} alt="Sneakers" />
                        <p className="card__text">{title}</p>
                        <div className="card__down">
                            <div className="card__price">
                                <p>Ціна:</p>
                                <b>{price}грн</b>
                            </div>
                            {onPlus && <img onClick={onClickPlus} className="card__plus" src={itemAdded(id) ? "img/plusOn.svg" : "img/plus.svg"} alt="Plus" />}
                        </div>
                    </>
            }

        </div>
    );
}
export default Card;
