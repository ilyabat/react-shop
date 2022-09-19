import { Link } from 'react-router-dom';


function Header(props) {

    return (
        <header className="header">
            <Link to="/">
                <div className="header__left">
                    <img src="/img/header/logo.png" alt="Logo" />
                    <div className="header__info">
                        <h3>BOOST SNEAKERS</h3>
                        <p>Магазин найкращих кросівок</p>
                    </div>
                </div>
            </Link>
            <ul className="header__right">
                <li onClick={props.onClickCart}><img src="/img/header/cart.svg" alt="Cart" /><span>1205грн.</span></li>
                <li>
                    <Link to={"/favorites"}>
                        <img src="/img/header/favorite.svg" alt="Favorite" />
                    </Link>
                </li>
                <li><img src="/img/header/user.svg" alt="User" /></li>

            </ul>
        </header>
    );

}

export default Header;
