import React, { Component } from "react";
import Item from '../Item';

import "./style.css";

class Form extends Component {

  state = {
    storeValue: "",
    storeName: "",
    itemArr: [],
    dataArr: [],
    aisles: [],
    loading: false,
    selectedItems: [],
  };


  componentDidMount = () => {
    fetch("/api/locations")
    .then(res => res.json())
    .then(res => this.setState({ returnedData: res }));
  
  }

  //the "..."" concactenates the value next to the final value of the array
  addItem = item => this.setState({selectedItems: [...this.state.selectedItems, item]});



  getProducts = (storeId) => {
   return fetch(`http://localhost:3001/api/aisles/${storeId}`)
  }

  selectStore = event => {
    const storeId= event.target.value;
    this.setState({loading: true});
    this.getProducts(storeId)
    .then(res => res.json())
    .then(returned => this.setState({aisles: returned, loading: false}));

  };

  renderFormItems = () => (
    this.state.aisles.map(aisle => <Item aisle={aisle} addItem={this.addItem} />)
  );

  handleFormSubmit = event => {
    //prevent default form behavior
    event.preventDefault();
   
    
  };
  

  render() {
    console.log(this.state)
    return (
      <div className="center">
        <form className="form" onSubmit={this.handleFormSubmit}>
        {/* STORE */}
        <p>Please select a store</p>
        <select onChange={this.selectStore} required>
        <option disabled selected value> -- select an option -- </option>
          <option value="2" data-name="Mueller" >Mueller</option>
          <option value="4" data-name="Lakeline">Lakeline</option>
          <option value="1" data-name="Canyon Ridge">Canyon Ridge</option>
          <option value="3" data-name="Round Rock">Round Rock</option>
        </select>
        <div id="scroller">
        {this.state.loading ? <p>Loading...</p> : this.renderFormItems()}
        </div>
          <button onClick={this.handleFormSubmit}>Submit Your Shopping List</button>
        </form>

        {/* {this.state.selectedItems.map(item => <p>{JSON.stringify(item)}</p>)} */}
        <div className="results">
    
        </div>
      </div>
    );
  }
}

export default Form;