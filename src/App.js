import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route } from 'react-router-dom';

import React from 'react';
import axios from 'axios';


function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])

  const [searchValue, setSearchValue] = React.useState([])


  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    axios.get('https://6327800c5731f3db995a67d9.mockapi.io/items').then((res) => {
      setItems(res.data)
    });
    axios.get('https://6327800c5731f3db995a67d9.mockapi.io/cart').then((res) => {
      setCartItems(res.data)
    });
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://6327800c5731f3db995a67d9.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }
  const onAddToFavorite = (obj) => {
    axios.post('https://6327800c5731f3db995a67d9.mockapi.io/favorites', obj)
    setFavorites((prev) => [...prev, obj])
  }

  const onRemoveItem = (id) => {
    axios.delete(`https://6327800c5731f3db995a67d9.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className="wrapper">
      <div className="container">
        {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
        <Header onClickCart={() => setCartOpened(true)} />

        {/* <Route path="/favorites" exact></Route>  */}
        
        <div className="content">
          <div className="content__block">
            <h1>{searchValue ? `Пошук: "${searchValue}"` : 'Всі кросівки'}</h1>
            <div className="content__search">
              <img src="/img/main/search.svg" alt="Search" />
              {searchValue && <img onClick={() => setSearchValue('')} className="content__remove-img" src="/img/main/remove.svg" alt="Clear" />}
              <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Пошук..." />

            </div>
          </div>

          <div className="card">
            {
              items.filter(item => item.title.toLowerCase().includes(searchValue)).map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavorite={(obj) => onAddToFavorite(item)}
                  onPlus={(obj) => onAddToCart(item)}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
