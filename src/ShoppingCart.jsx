import React, { Component } from "react";
import Product from "./Product";

class ShoppingCart extends Component {
  //Executes when the component is mounted
  constructor(props) {
    //console.log("Constructor - ShoppingCart");
    super(props); //calling the super class's constructor
    //initiation of the state
    this.state = {
      products: [
        { id: 1, productName: "hat", price: 20, quantity: 0 },
        { id: 2, productName: "tshirt1", price: 25, quantity: 0 },
        { id: 3, productName: "tshirt2", price: 25, quantity: 0 },
        { id: 4, productName: "tshirt3", price: 25, quantity: 0 },
        { id: 5, productName: "hoodie", price: 50, quantity: 0 },
        { id: 6, productName: "mug", price: 215, quantity: 0 },
      ],
    };
  }

  render() {
    //console.log("Rendor - ShoppingCart")
    return (
      <div>
        <div className="container-fluid">
          <h4>Shopping Cart</h4>

          <div className="row d-flex">
            {this.state.products.map((prod) => {
              return (
                <Product
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onDelete={this.handleDelete}
                >
                  <button className="btn btn-primary">Buy Now</button>
                </Product>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  //render ends here

  //Executes after constructor and rendor method (includes lifecycle of child 
  //conponents, if any) of current component
  componentDidMount() {
    //fetch data from data source
    //console.log("componentDidMount - ShoppingCart")
  };

  componentDidUpdate(prevProps, prevState) {
    //console.log("componentDidUpdate",prevProps,prevState,this.props,this.state);

    if (prevProps.x !== this.props.x) {
        //make http call
    }
  };

  componentWillUnmount() {
      //console.log("componentWillUnmount - Shopping Cart")
  };

  componentDidCatch(error,info) {
    console.log("componentDidCatch - ShoppingCart");
    console.log(error,info);

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`;
  }

  //executes when user clicks on + button
  handleIncrement = (product, maxValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;
      //updates the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };

  handleDecrement = (product, minValue) => {
    //get index of selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      //updates the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };
  //execute when the user clicks the delete (x) button in the Product component
  handleDelete = (product) => {
    //get index of select product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete this item?")) {
      //delete product based on index
      allProducts.splice(index, 1);
      //updates the state of the current component (parent component)
      this.setState({ products: allProducts });
    }
  };
}

export default ShoppingCart;
