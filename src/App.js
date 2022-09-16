function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <div className="drawer__title">
            Кошик
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
        </div>
      </div>

      <header className="header">
        <div className="header__left">
          <img src="/img/header/logo.png" alt="Logo" />
          <div className="header__info">
            <h3>BOOST SNEAKERS</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>

        <ul className="header__right">
          <li><img src="/img/header/cart.svg" alt="Cart" /><span>1205грн.</span></li>
          <li><img src="/img/header/user.svg" alt="User" /></li>
        </ul>
      </header>
      <div className="content">
        <div className="content__block">
          <h1>Всі кросівки</h1>
          <div className="content__search">
            <img src="/img/main/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>

        <div className="card">
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
          <div className="card__block">
            <img className="card__img" src="/img/main/sneakers/02.jpg" alt="Sneakers" />
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
          <div className="card__block">
            <img className="card__img" src="/img/main/sneakers/03.jpg" alt="Sneakers" />
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
          <div className="card__block">
            <img className="card__img" src="/img/main/sneakers/04.jpg" alt="Sneakers" />
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
        </div>


      </div>
    </div>
  );
}

export default App;
