import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content__block">
          <h1>Всі кросівки</h1>
          <div className="content__search">
            <img src="/img/main/search.svg" alt="Search" />
            <input type="text" placeholder="Пошук..." />
          </div>
        </div>

        <div className="card">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

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
