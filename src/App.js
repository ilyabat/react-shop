import Header from './components/Header';
import Drawer from './components/Drawer';
import { Route, Routes, Link } from 'react-router-dom';
import Card from './components/Card';
import React from 'react';
import axios from 'axios';


export const AppContext = React.createContext({});

function App() {

  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [favorites, setFavorites] = React.useState([])
  const [orders, setOrders] = React.useState([])


  const [searchValue, setSearchValue] = React.useState('')


  const [cartOpened, setCartOpened] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      const { data } = await axios.get('https://6327800c5731f3db995a67d9.mockapi.io/orders')
      setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []))
      setIsLoading(false)
    })();
  }, [])


  React.useEffect(() => {
    async function fetchData() {
      const itemsResponse = await axios.get('https://6327800c5731f3db995a67d9.mockapi.io/items');
      const cartResponse = await axios.get('https://6327800c5731f3db995a67d9.mockapi.io/cart');
      const favoritesResponse = await axios.get('https://6327800c5731f3db995a67d9.mockapi.io/favorites');

      setIsLoading(false)

      setCartItems(cartResponse.data)
      setFavorites(favoritesResponse.data)
      setItems(itemsResponse.data)
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
      setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
      axios.delete(`https://6327800c5731f3db995a67d9.mockapi.io/cart/${obj.id}`)

    } else {
      axios.post('https://6327800c5731f3db995a67d9.mockapi.io/cart', obj)
      setCartItems((prev) => [...prev, obj])
    }


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

  const isItemAdded = (id) => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id))
  }

  const renderItems = () => {
    const filtredItems = items.filter((item) => item.title.toLowerCase().includes(searchValue));
    return (isLoading ? [...Array(8)] : filtredItems).map((item, title) => (
      <Card
        key={title}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onPlus={(obj) => onAddToCart(obj)}
        itemAdded={isItemAdded}
        loading={isLoading}
        {...item}
      />
    ))
  }

  return (
    <AppContext.Provider value={{ items, cartItems, favorites, setCartOpened }}>
      <div className="wrapper">
        <div className="container">
          {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} setCartItems={setCartItems} cartItems={cartItems} />}
          {<Header onClickCart={() => setCartOpened(true)} cartItems={cartItems} />}

          <Routes>
            <Route
              path=""
              exact
              element={
                <div className="content">
                  <div className="content__block">
                    <h1>{searchValue ? `Пошук: "${searchValue}"` : 'Всі кросівки'}</h1>
                    <div className="content__search">
                      <img src="img/search.svg" alt="Search" />
                      {searchValue && <img onClick={() => setSearchValue('')} className="content__remove-img" src="img/remove.svg" alt="Clear" />}
                      <input onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Пошук..." />
                    </div>
                  </div>

                  <div className="card">
                    {
                      renderItems()
                    }
                  </div>

                </div>
              }
            ></Route>
            <Route
              path="favorites"
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
                              itemAdded={isItemAdded}
                              {...item}
                            />
                          ))
                        }
                      </div>
                    </div> : <div className="content__block-favoriteOFF">
                      <img src="img/favorite/sadSmile.png" alt="SadSmile" />
                      <h1>Улюблених товарів нема</h1>
                      <p>Ви нічого не добавили в улюблене</p>
                      <Link to=''>
                        <button className="drawer__btn"><img src="img/arrow.svg" alt="Arrow" />Повернутися назад</button>
                      </Link>
                    </div>
                  }




                </div>

              }
            ></Route>
            <Route
              path="orders"
              exact
              element={
                <div className="content">
                  {orders.length > 0 ?
                    <div>
                      <div className="content__block">
                        <h1>Мої покупки</h1>
                      </div>

                      <div className="card">
                        {
                          (isLoading ? [...Array(8)] : orders).map((item, index) => (
                            <Card
                              key={index}
                              itemAdded={isItemAdded}
                              loading={isLoading}
                              {...item}
                            />
                          ))
                        }
                      </div>
                    </div> : <div className="content__block-favoriteOFF">
                      <img src="img/orders/smileOrder.png" alt="SadSmile" />
                      <h1>У вас немає замовлень</h1>
                      <p>Оформіть замовлення</p>
                      <Link to='/'>
                        <button className="drawer__btn"><img src="img/arrow.svg" alt="Arrow" />Повернутися назад</button>
                      </Link>
                    </div>
                  }




                </div>

              }
            ></Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>

  );
}

export default App;
