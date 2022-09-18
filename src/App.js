import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { title: 'Чоловічі кросівки Nike Blazer Mid Suede', price: 12999, imageUrl: "/img/main/sneakers/01.jpg" },
  { title: 'Чоловічі кросівки Nike Air Max 270', price: 15199, imageUrl: "/img/main/sneakers/02.jpg" },
  { title: 'Чоловічі кросівки Nike Blazer Mid Suede', price: 10199, imageUrl: "/img/main/sneakers/03.jpg" },
  { title: 'Кросівки Puma X Aka Boku Future Rider', price: 8199, imageUrl: "/img/main/sneakers/04.jpg" },
];

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
          {
            arr.map((obj) => (
              <Card
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
              />
            ))
          }

        </div>


      </div>
    </div>
  );
}

export default App;
