import React, { Component } from "react";

class Product extends Component {
    //console.log(constructor - Product)
    constructor(props) {
    super(props);
  this.state = {
    product: this.props.product,
  };
};
  render() {
    //console.log(this.state)
    return (
      <div className="col-lg-6">
        <div className="card d-flex m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              <span
                className="fa fa-times float-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              ></span>
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          {/*card body ends here*/}

          <div className="card-footer">
            <div className="float-left">
              <span className="badge text-dark">
                {this.state.product.quantity}
              </span>

              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 5);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount - Product')
  };

  componentDidUpdate() {
    console.log('componentDidUpdate - Product')
  }

   //Executes when the current instance of the current component is being deleted
  //from memory
  componentWillUnmount() {
    //console.log("componentWillUnmount - Shopping Cart")
  };
}

export default Product;
