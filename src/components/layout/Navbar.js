import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Navbar extends Component {
  static defaultProps = {
    title: 'Default',
    icon: 'fab fa-github'
  };

  // going to compile anyway, only warnings
  static propTypes = {
    title: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon}></i>
          {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Navbar;
