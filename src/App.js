function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <div className="header__left">
          <img src="/img/header/logo.png" />
          <div className="header__info">
            <h3>BOOST SNEAKERS</h3>
            <p>Магазин найкращих кросівок</p>
          </div>
        </div>

        <ul className="header__right">
          <li><img src="/img/header/cart.svg" /><span>1205грн.</span></li>
          <li><img src="/img/header/user.svg" /></li>
        </ul>
      </header>
      <div className="content">
        <h1>Всі кросівки</h1>

        <div className="card">
          <div className="card__block">
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
