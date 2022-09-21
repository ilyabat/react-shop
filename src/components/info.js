import React from "react";

const Info = ({ image, title, description, onClose }) => {
    return (
        <div>
            <div className="drawer__box">
                <img src={image} alt="Box" />
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={onClose} className="drawer__btn"><img src="img/main/arrow.svg" alt="Arrow" />Повернутися назад</button>
            </div>
        </div>
    );
}

export default Info;