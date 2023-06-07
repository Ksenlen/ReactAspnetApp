import React, { Component } from 'react';


export class CreateOrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      senderCity: '',
      senderAddress: '',
      receiverCity: '',
      receiverAddress: '',
      weight: 0,
      pickupDate: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const { senderCity, senderAddress, receiverCity, receiverAddress, weight, pickupDate } = this.state;

    const newOrder = {
      senderCity: senderCity,
      senderAddress: senderAddress,
      receiverCity: receiverCity,
      receiverAddress: receiverAddress,
      weight: weight,
      pickupDate: pickupDate,
    };

    fetch('http://localhost:5014/api/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newOrder)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Очистка значений полей формы после успешного создания заказа
        this.setState({
          senderCity: '',
          senderAddress: '',
          receiverCity: '',
          receiverAddress: '',
          weight: 0,
          pickupDate: '',
        });
        this.setState({ showMessage: true });

        // Запускаем таймер, чтобы через 3 секунды сбросить состояние showMessage в false
        setTimeout(() => {
          this.setState({ showMessage: false });
        }, 3000);
      })
      .catch(error => {
        console.log(error);
      });
  }


  render() {
    const { showMessage } = this.state;
    const { senderCity, senderAddress, receiverCity, receiverAddress, weight, pickupDate } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="senderCity">Город отправителя:</label>
          <input
            type="text"
            className="form-control"
            id="senderCity"
            name="senderCity"
            value={senderCity}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="senderAddress">Адрес отправителя:</label>
          <input
            type="text"
            className="form-control"
            id="senderAddress"
            name="senderAddress"
            value={senderAddress}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverCity">Город получателя:</label>
          <input
            type="text"
            className="form-control"
            id="receiverCity"
            name="receiverCity"
            value={receiverCity}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="receiverAddress">Адрес получателя:</label>
          <input
            type="text"
            className="form-control"
            id="receiverAddress"
            name="receiverAddress"
            value={receiverAddress}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Вес груза, гр:</label>
          <input
            type="number"
            className="form-control"
            id="weight"
            name="weight"
            value={weight}
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="pickupDate">Дата забора груза:</label>
          <input
            type="date"
            className="form-control"
            id="pickupDate"
            name="pickupDate"
            value={pickupDate}
            onChange={this.handleChange}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">Создать заказ</button>
        {showMessage && <p>Заказ успешно создан!</p>}
      </form>
    );
  }
};

