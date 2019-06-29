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
  addItem = item => {
    if(this.state.selectedItems.includes(item)){
      let index = this.state.selectedItems.indexOf(item);
      if(index === 0){
        let updateSItems = this.state.selectedItems.slice(1);
        this.setState({selectedItems:  updateSItems});
      }else {
        let arr1 = this.state.selectedItems.slice(0, index);
        let arr2 = this.state.selectedItems.slice((index + 1));
        let updateSItems = arr1.concat(arr2);
        this.setState({selectedItems: updateSItems});
      }

      //remove it
    }else {
      this.setState({selectedItems: [...this.state.selectedItems, item]});
    }
    
  }


  getProducts = (storeId) => {
    //http://localhost:3001/api/aisles/${storeId} <---for running locally
   return fetch(`/api/aisles/${storeId}`)
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
    this.saveList();
    this.getList()
   .then(res => res.json())
   .then(response => console.log(response));    
  };

  // this is not working just yet. its hitting on postman but I have yet to figure out why it will not create a new entry
  // in the db
  saveList = () => {
    const selectedItems = this.state.selectedItems[0];
    console.log(selectedItems);
      return fetch(`/api/list`), {
      method: "POST",
      body: selectedItems,
      headers: {
        "Content-Type": "application/json"
      }
    }
  };

  getList = () => {
    // `http://localhost:3001/api/list` <--- running locally
    return fetch(`/api/list`)
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
        <div id="user-list">
          {this.state.selectedItems.map(item => <p>{item.name}</p>)}
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