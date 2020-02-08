import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Inventory: [
      //   {
      //     name: "Jordans",
      //     price: 125.99,
      //     image_url:
      //       "https://m.media-amazon.com/images/I/81-c4I0vcfL._SR500,500_.jpg"
      //   }
      // ]
    };
  }
  render() {
    return (
      <div>
        <Dashboard />

        <Form />

        <Header />

        <Product />
      </div>
    );
  }
}

export default App;
