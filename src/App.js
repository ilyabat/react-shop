import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])

  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://6327800c5731f3db995a67d9.mockapi.io/items').then((res) => {
      return res.json();
    }).then((json) => {
      setItems(json)
    })
  }, [])


  const onAddToCart = (obj) => {
    setCartItems([...cartItems, obj])

  }

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
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
            items.map((item) => (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={() => console.log('Zak')}
                onPlus={(obj) => onAddToCart(item)}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
