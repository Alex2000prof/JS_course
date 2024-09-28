import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    throw new Error('Ошибка в MyComponent!');
  }

  render() {
    return <h2>Этот компонент генерирует ошибку при монтировании</h2>;
  }
}

export default MyComponent;
