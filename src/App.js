import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';
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
    axios.get('https://6327800c5731f3db995a67d9.mockapi.io/favorites').then((res) => {
      setFavorites(res.data)
    });
  }, []);


  const onAddToCart = (obj) => {
    axios.post('https://6327800c5731f3db995a67d9.mockapi.io/cart', obj)
    setCartItems((prev) => [...prev, obj])
  }


  const onAddToFavorite = async (obj) => {

    if (favorites.find(favObj => favObj.id === obj.id)) {
      axios.delete(`https://6327800c5731f3db995a67d9.mockapi.io/favorites/${obj.id}`)

    } else {
      const { data } = await axios.post('https://6327800c5731f3db995a67d9.mockapi.io/favorites', obj)
      setFavorites((prev) => [...prev, data])
    }

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

        <Routes>
          <Route
            path="/"
            exact
            element={
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
                    items.filter((item) => item.title.toLowerCase().includes(searchValue)).map((item, title) => (
                      <Card
                        key={title}
                        onFavorite={(obj) => onAddToFavorite(item)}
                        onPlus={(obj) => onAddToCart(item)}
                        {...item}
                      />
                    ))
                  }
                </div>
              </div>
            }
          ></Route>
          <Route
            path="/favorites"
            exact
            element={
              <div className="content">
                {favorites.length > 0 ?
                  <div>
                    <div className="content__block">
                      <h1>Мої улюблені товари</h1>
                    </div>

                    <div className="card">
                      {
                        favorites.map((item, index) => (
                          <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}
                          />
                        ))
                      }
                    </div>
                  </div> : <div className="content__block-favoriteOFF">
                    <img src="/img/favorite/sadSmile.png" alt="SadSmile" />
                    <h1>Улюблених товарів нема</h1>
                    <p>Ви нічого не добавили в улюблене</p>
                    <Link to='/'>
                      <button className="drawer__btn"><img src="/img/main/arrow.svg" alt="Arrow" />Повернутися назад</button>

                    </Link>
                  </div>
                }




              </div>

            }
          ></Route>
        </Routes>
      </div>
    </div>

  );
}

export default App;
