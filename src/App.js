import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';

class App extends Component {
  // render is a life cycle method, run at a certain point when the component is loaded, is required
  // foo = () => 'Bar2';
  // method that is part of the class
  render() {
    // return React.createElement(
    //   'div',
    //   { className: 'App' },
    //   React.createElement('h1', null, 'Hello from React')
    // );

    //javascript same as jsx
    // const name = 'John Doe';
    // const foo = () => 'Bar';
    // const loading = false;
    // const showName = true;
    // if (loading) {
    //   return <h4>Loading...</h4>;
    // }
    const num = 1;
    return (
      <div className='App'>
        {/* {loading ? (
          <h4>Loading...</h4>
        ) : (
          <h1>Hello {showName && name.toUpperCase()}</h1>
          // && show name only when showName is true, otherwise null
        )}
        <label htmlFor='name'>{foo()}</label>
        <label htmlFor='name'>{this.foo()}</label> */}

        <Navbar title={num} icon='fab fa-github' />
        {/* JSX value should be either an expression or a quoted JSX text */}
        <UserItem />
      </div>

      // <Fragment>
      //   <h3>Goodbye!</h3>
      // </Fragment>
      // <>
      //   <h3>Goodbye</h3>
      // </>

      // has to have one parent element, can be <div>, <React.Fragment>, <>
    );
  }
}

export default App;
