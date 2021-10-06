import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/components/Header.styl';

const Header = props => (
  <div className="Header">
    <h1 className="Header-title">
      <Link to="/">
        Challenge
      </Link>
      <p
        style={{fontSize: 12, textAlign: 'center'}}
      >
        <Link to="/teoric">
          Teoric
        </Link>
      </p>
    </h1>
    <h4 className="Header-title">
    </h4>
    <div className="Header-checkout">
      <Link to="/checkout">
        <i className="fas fa-shopping-basket" />
      </Link>
      {props.cart.length > 0 &&
        <div className="Header-alert">{props.cart.length}</div>
      }
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Header);
