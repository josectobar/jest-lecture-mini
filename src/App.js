import React, { Component } from "react"
import FontAwesome from "react-fontawesome"
import { products } from "./db.json"
import "./App.css"
//You will need to require in the functions for this project here
import { toggle, addToCart } from "./Logic/logic"

import Item from "./Components/Item"
import Cart from "./Components/Cart"

class App extends Component {
  constructor() {
    super()

    this.state = {
      cart: [],
      products: products,
      total: "0.00",
      showCart: false
    }
  }

  addToCart = itemToAdd => {
    this.setState(prevState => {
      return {
        cart: addToCart(prevState.cart, itemToAdd)
      }
    })
  }

  showCart = () => {
    this.setState(prevState => {
      return { showCart: toggle(prevState.showCart) }
    })
  }

  calculateTotal = cart => {
    //Build Logic for this then implement it here
  }

  removeItem = id => {
    //Build Logic for this then implement it here
    //  Look into setState callback function.
    //  Run this.calculateTotal after each setState so the total is accurate
  }

  renderProducts = products => {
    return products.map(product => (
      <Item key={product.id} product={product} addToCart={this.addToCart} />
    ))
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="content">
            <div className="title">
              <figure>
                <img
                  src="https://media.giphy.com/media/j2rCxv6luaLq8/giphy.gif"
                  alt=""
                />
              </figure>
              <h1>CatBug Mart</h1>
            </div>
            <nav>
              <li>Total: {this.state.total}</li>
              <FontAwesome name="shopping-cart" onClick={this.showCart} />
            </nav>
          </div>
        </header>
        <Cart
          show={this.state.showCart}
          hideCart={this.showCart}
          cart={this.state.cart}
          removeItem={this.removeItem}
        />
        <div className="items">{this.renderProducts(this.state.products)}</div>
      </div>
    )
  }
}

export default App
