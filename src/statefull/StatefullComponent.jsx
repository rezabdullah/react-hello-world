import React from 'react';
import './StatefullComponent.css';

class StatefullComponent extends React.Component
{
  //function render gabisa pake format arrow function
  render()
  {
    return <p className='text-p'>Hello from class/statefull component!</p>;
  }
}

export default StatefullComponent;