import './App.css';
import { CreateOrderForm } from './CreateOrderForm';
import { OrderList } from './OrderList';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          Приемка заказа на доставку
        </h3>
        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/createOrderForm">
                Создать заказ
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/orderList">
                Посмотреть все заказы
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/createOrderForm' Component={CreateOrderForm} />
          <Route path='/orderList' Component={OrderList} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
