import React from 'react';

class AddForm extends React.Component {
     nameRef = React.createRef();
     priceRef = React.createRef();

  render() {
    return (
      <div>
        <input type="text" ref = {this.nameRef} />
        <input type="text" ref = {this.priceRef} />
        <button onClick={this.Add}>Click me</button>
      </div>
    )
  }
}


class App extends React.Component {

  state = {
    items: [
      { id: 1, name: 'apple', price: '100'},
      { id: 1, name: 'apple', price: '200'},
    ]
  }

  add = (name, price) => {
    let id = this.state.items.length + 1;
    this.setState({
      items: [
        ...this.state.items,
        {id, name, price},
      ]
    })
    
  }

  render() {

  }
}
