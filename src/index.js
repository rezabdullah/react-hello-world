import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const StatelessComponent = () =>
{
  return <p>Hello from functional/stateless component!</p>;
}

class StatefullComponen extends React.Component
{
  //function render gabisa pake format arrow function
  render()
  {
    return <p>Hello from class/statefull component!</p>;
  }
}

ReactDOM.render(<StatefullComponen />, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
