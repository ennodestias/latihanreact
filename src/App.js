import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [
      
      ]
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let judul = this.refs.judul.value;
    let keterangan = this.refs.keterangan.value;

    //console.log("keterangan = " +keterangan + " judul = " + judul);
    this.state.products.push({judul,keterangan});
    this.setState({products: this.state.products});

    this.refs.form.reset();
  }


  handleDelete = (key) => {
    this.state.products.splice(key,1);
    this.setState({products: this.state.products});
  }

  render() {
    return (
      <div className="row">
        <div className="col m4">
          <div className="row">
            <div className="col m12">
              <div className="card">
                <form action="#" ref="form" onSubmit={this.handleSubmit}>
                  <div className="card-content">
                    <div className="row">
                      <span className="card-title">Tambah Produk</span>
                      <div className="input-field col m12">
                        <input id="judul" type="text" ref="judul"/>
                        <label htmlFor="judul">Judul</label>
                      </div>
                        <div className="input-field col m12">
                          <textarea id="keterangan" type="textarea" ref="keterangan" className="materialize-textarea"></textarea>
                          <label htmlFor="keterangan">Keterangan</label>
                        </div>
                        </div>
                    </div>
                    <div className="card-action">
                      <button className="btn waves-effect waves-light" type="submit" name="action">
                        Tambah
                      </button>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col m8">
          <div className="row">
              {this.state.products.map((data,key) => {
                return (
                  <Product hapusKartu={()=>this.handleDelete(key)} key={key} judul={data.judul} keterangan={data.keterangan} />
                )
              })}
          </div>
        </div>
      </div>
      // <div className="row">
      //   <div className="col m6 offset-m3">
      //     <div className="row">
      //       <header className="App-header">
      //         <Product judul="Mini Cooper" harga="Rp. 12.000"/>
      //         <Product judul="Monitor Asus" harga="Rp. 12.000"/>
      //         <Product judul="Monitor Asus" harga="Rp. 12.000"/>
      //         <Product judul="Monitor Asus" harga="Rp. 12.000"/>
      //       </header>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
