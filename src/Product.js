import React, { Component } from 'react';
import './Product.css';
import logo from './logo.svg';

class Product extends Component {
  render() {
    return (
        <div className="col m4">
          <div className="card">
            <div className="card-image">
              <img className="App-logo" src={logo}/>
              <br/>
              <span className="card-title grey-text">{this.props.judul}</span>
              <span className="red-text right"><i className="medium material-icons">add_circle</i></span>
            </div>
          <div className="card-content">
          <br/><br/>
            <p className="black-text">{this.props.keterangan}</p>
          </div>
          <div className="card-action">
          <a className="waves-effect waves-light btn red" onClick={this.props.hapusKartu}>Hapus</a>
          </div>
          </div>
        </div>
    );
  }
}

export default Product;
