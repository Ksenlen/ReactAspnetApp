import React, { Component } from 'react';


export class OrderDetails extends Component {

  render() {
    const { order, onClose } = this.props;

    return (
      <div>
        <h3>Просмотр созданного заказа</h3>
        <p><strong>ID:</strong> {order.id}</p>
        <p><strong>Город отправителя:</strong> {order.senderCity}</p>
        <p><strong>Адрес отправителя:</strong> {order.senderAddress}</p>
        <p><strong>Город получателя:</strong> {order.receiverCity}</p>
        <p><strong>Адрес получателя:</strong> {order.receiverAddress}</p>
        <p><strong>Вес груза, гр:</strong> {order.weight}</p>
        <p><strong>Дата забора груза:</strong> {order.pickupDate}</p>
        <button className="btn btn-primary" onClick={onClose}>Закрыть</button>
      </div>
    );
  }
};


