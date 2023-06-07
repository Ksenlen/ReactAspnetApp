import React, { Component } from 'react';
import { OrderDetails } from './OrderDetails';


export class OrderList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      selectedOrder: null,
      isOrderDetailsOpen: false,
      isLoading: true
    };
  }

  componentDidMount = () => {
    this.fetchOrders();
  }


  fetchOrders() {
    fetch('http://localhost:5014/api/order')
      .then(response => response.json())
      .then(data => {
        this.setState({ orders: data , isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleRowClick = orderId => {
    const selectedOrder = this.state.orders.find(order => order.id === orderId);
    if (selectedOrder) {
      this.setState({
        selectedOrder: selectedOrder,
        isOrderDetailsOpen: true
      });
    }
  }


  render() {
    const { isOrderDetailsOpen, selectedOrder, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        {!isOrderDetailsOpen && (
          <div>
            <h3>Список заказов</h3>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Город отправителя</th>
                  <th>Адрес отправителя</th>
                  <th>Город получателя</th>
                  <th>Адрес получателя</th>
                  <th>Вес груза, гр</th>
                  <th>Дата забора груза</th>
                </tr>
              </thead>
              <tbody>
                {this.state.orders.map(order => (
                  <tr key={order.id} onClick={() => this.handleRowClick(order.id)}>
                    <td>{order.id}</td>
                    <td>{order.senderCity}</td>
                    <td>{order.senderAddress}</td>
                    <td>{order.receiverCity}</td>
                    <td>{order.receiverAddress}</td>
                    <td>{order.weight}</td>
                    <td>{order.pickupDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isOrderDetailsOpen && (
          <OrderDetails
            order={selectedOrder}
            onClose={() => this.setState({ isOrderDetailsOpen: false })}
          />
        )}
      </div>)
  }
};

