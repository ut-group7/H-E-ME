import React, { Component } from "react";

import "./style.css";

class Form extends Component {

  state = {
    storeValue: "",
    storeName: "",
    itemArr: [],
    dataArr: []
  };

  handleChange = event => {
    let {itemArr, dataArr} = this.state;
    itemArr.push(event.target.value);
    let index = event.target.selectedIndex;
    let element = event.target.childNodes[index].getAttribute('data-id');
    console.log(element);
    dataArr.push(element);
    this.setState({itemArr, dataArr});
    // console.log(dataArr);
  };

  selectStore = event => {
    this.setState({ storeValue: event.target.value });
    let index = event.target.selectedIndex;
    let element = event.target.childNodes[index].getAttribute("data-name");
    console.log(element);
    this.setState({storeName: element})
  };

  handleFormSubmit = event => {
    //prevent default form behavior
    event.preventDefault();
    //storing selected item ids from user
    let itemQuery = this.state.dataArr;

    alert("this is working" + itemQuery);
    //clearing out shopping list after from has submitted
    // this.clearList();
  };

  clearList = () => {
    let {itemArr, dataArr} = this.state;
    itemArr = [];
    dataArr = [];
    this.setState({itemArr, dataArr});
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
        {/* ITEM */}
          <p>Please select items from the menu to create your shopping list</p>
          <select onChange={this.handleChange}>
          <option disabled selected value> -- select an option -- </option>
            <option value="A/C Filters" data-id="1">A/C Filters</option>
            <option value="Air Freshener"data-id="2">Air Freshener</option>
            <option value="Aluminum Foil" data-id="3">Aluminum Foil</option>
            <option value="Appliances" data-id="4">Appliances</option>
            <option value="Asian Foods" data-id="5">Asian Foods</option>
            <option value="Auto Supplies" data-id="6">Auto Supplies</option>
            <option value="Baby Accessories" data-id="2"/>
            <option value="Baby Food" data-id="2"/>
            <option value="Baby Formula" data-id="2"/>
            <option value="Baby Medication" data-id="2"/>
            <option value="Baby Wipes" data-id="2"/>
            <option value="Bags/Wrap" data-id="2"/>
            <option value="Bakeware" data-id="2"/>
            <option value="Band-Aids" data-id="2"/>
            <option value="Barbecue Sauce" data-id="2"/>
            <option value="Bath Soap" data-id="2"/>
            <option value="Bath Tissue" data-id="2"/>
            <option value="Batteries" data-id="2"/>
            <option value="Beans (Canned)" data-id="2"/>
            <option value="Beans (Dry)" data-id="2"/>
            <option value="Beer" data-id="2"/>
            <option value="Birdseed" data-id="2"/>
            <option value="Biscuit Mix" data-id="2"/>
            <option value="Bleach" data-id="2"/>
            <option value="Boxed Dinners" data-id="2"/>
            <option value="Bread" data-id="2"/>
            <option value="Brooms/Mops" data-id="2"/>
            <option value="Cake Mixes" data-id="2"/>
            <option value="Candles" data-id="2"/>
            <option value="Candy" data-id="2"/>
            <option value="Canned Chili" data-id="2"/>
            <option value="Canned Fish" data-id="2"/>
            <option value="Canned Fruit" data-id="2"/>
            <option value="Canned Meat" data-id="2"/>
            <option value="Canned Tomato" data-id="2"/>
            <option value="Canned Vegetables" data-id="2"/>
            <option value="Canning Supplies" data-id="2"/>
            <option value="Cat Food" data-id="2"/>
            <option value="Cat Litter" data-id="2"/>
            <option value="Cereal" data-id="2"/>
            <option value="Cereal (Hot)" data-id="2"/>
            <option value="Charcoal" data-id="2"/>
            <option value="Chips" data-id="2"/>
            <option value="Cleaners/Cleansers" data-id="2"/>
            <option value="Closet Items" data-id="2"/>
            <option value="Coffee" data-id="2"/>
            <option value="Coffee Creamer" data-id="2"/>
            <option value="Coffee Filters" data-id="2"/>
            <option value="Condiments" data-id="2"/>
            <option value="Cookies" data-id="2"/>
            <option value="Cosmetics" data-id="2"/>
            <option value="Cotton Balls" data-id="2"/>
            <option value="Cough/Cold" data-id="2"/>
            <option value="Crackers" data-id="2"/>
            <option value="Dental/Oral Care" data-id="2"/>
            <option value="Deodorant"data-id="2" />
            <option value="Diapers" data-id="2"/>
            <option value="Diet Aids" data-id="2"/>
            <option value="Dish Soap" data-id="2"/>
            <option value="Dog Food" data-id="2"/>
            <option value="Dried Fruit" data-id="2"/>
            <option value="Electrical/Lighting" data-id="2"/>
            <option value="Eye Care"data-id="2" />
            <option value="Fabric Softener" data-id="2"/>
            <option value="Facial Care" data-id="2"/>
            <option value="Facial Tissue" data-id="2"/>
            <option value="Facial Tissue" data-id="2"/>
            <option value="First Aid" data-id="2"/>
            <option value="Floor Wax" data-id="2"/>
            <option value="Flour" data-id="2"/>
            <option value="Flour Bakeware" data-id="2"/>
            <option value="Food Wrap/Containers" data-id="2"/>
            <option value="Foot Care" data-id="2"/>
            <option value="Fruit Snacks" data-id="2"/>
            <option value="Gift Cards" data-id="2"/>
            <option value="Glue" data-id="2"/>
            <option value="Goya" data-id="2"/>
            <option value="Gravy Mixes"data-id="2" />
            <option value="Greeting Cards" data-id="2"/>
            <option value="Grilling"data-id="2" />
            <option value="Hair Accessories" data-id="2"/>
            <option value="Hair Care" data-id="2"/>
            <option value="Hair Color"data-id="2" />
            <option value="Hardware"data-id="2" />
            <option value="Hispanic Foods"data-id="2" />
            <option value="Honey" data-id="2"/>
            <option value="Hosiery" data-id="2"/>
            <option value="Hot Cocoa" data-id="2"/>
            <option value="Ice" data-id="2"/>
            <option value="Incontinence" data-id="2"/>
            <option value="Insecticides" data-id="2"/>
            <option value="Instant Breakfast" data-id="2"/>
            <option value="Jam/Jelly" data-id="2"/>
            <option value="Jell-O"data-id="2" />
            <option value="Juice" data-id="2"/>
            <option value="Ketchup" data-id="2"/>
            <option value="Kitchen Gadgets"data-id="2" />
            <option value="Kool-Aid" data-id="2"/>
            <option value="Kosher Foods" data-id="2"/>
            <option value="Laundry Detergent" data-id="2"/>
            <option value="Laxatives" data-id="2"/>
            <option value="Light Bulbs"data-id="2" />
            <option value="Lotion/Cream"data-id="2" />
            <option value="Macaroni & Cheese" data-id="2"/>
            <option value="Marshmallows"data-id="2" />
            <option value="Matches" data-id="2"/>
            <option value="Mayonnaise"data-id="2" />
            <option value="Men’s Toiletries" data-id="2"/>
            <option value="Microwaveable Food"data-id="2" />
            <option value="Milk (Canned/Powdered)" data-id="2"/>
            <option value="Drink Mixers"data-id="2" />
            <option value="Mustard" data-id="2"/>
            <option value="Napkins" data-id="2"/>
            <option value="Nutritional Aids/Bars"data-id="2" />
            <option value="Nuts (Baking)"data-id="2" />
            <option value="Nuts (Snacking)"data-id="2" />
            <option value="Oil/Shortening" data-id="2"/>
            <option value="Olives"data-id="2" />
            <option value="Pancake Mix" data-id="2"/>
            <option value="Paper Towels" data-id="2"/>
            <option value="Party Supplies" data-id="2"/>
            <option value="Pasta (Canned)" data-id="2"/>
            <option value="Pasta (Dry)" data-id="2"/>
            <option value="Pastries" data-id="2"/>
            <option value="Peanut Butter" data-id="2"/>
            <option value="Pet Supplies" data-id="2"/>
            <option value="Picante Sauce" data-id="2"/>
            <option value="Pickles" data-id="2"/>
            <option value="Pie Filling" data-id="2"/>
            <option value="Pimentos" data-id="2"/>
            <option value="Plates/Cups"data-id="2" />
            <option value="Pop Tarts" data-id="2"/>
            <option value="Popcorn" data-id="2"/>
            <option value="Potatoes/Stuffing"data-id="2" />
            <option value="Powdered Drink Mix"data-id="2" />
            <option value="Pudding" data-id="2"/>
            <option value="Q-Tips" data-id="2"/>
            <option value="Religious Candles" data-id="2"/>
            <option value="Rice" data-id="2"/>
            <option value="Rice Cakes" data-id="2"/>
            <option value="Salad Dressing" data-id="2"/>
            <option value="Salsa"data-id="2" />
            <option value="Salt" data-id="2"/>
            <option value="Sauce/Gravy Mix"data-id="2" />
            <option value="School/Office Supplies" data-id="2"/>
            <option value="Seasonal Items" data-id="2"/>
            <option value="Sewing Needs" data-id="2"/>
            <option value="Shoe Care" data-id="2"/>
            <option value="Skin Care"data-id="2" />
            <option value="Snacks" data-id="2"/>
            <option value="Sodas" data-id="2"/>
            <option value="Soup" data-id="2"/>
            <option value="Spices" data-id="2"/>
            <option value="Sports Drinks" data-id="2"/>
            <option value="Starch" data-id="2"/>
            <option value="Sugar" data-id="2"/>
            <option value="Syrup" data-id="2"/>
            <option value="Tea" data-id="2"/>
            <option value="Toaster Pastries"data-id="2" />
            <option value="Toothpicks"data-id="2" />
            <option value="Tortillas" data-id="2"/>
            <option value="Toys" data-id="2"/>
            <option value="Trash Bags"data-id="2" />
            <option value="Vinegar" data-id="2"/>
            <option value="Vitamins"data-id="2" />
            <option value="Water" data-id="2"/>
            <option value="Wine" data-id="2"/>
          </select>
          <button onClick={this.handleFormSubmit}>Submit Your Shopping List</button>
        </form>
        <button onClick={this.clearList}>Clear your shopping list</button>
        <div className="results">
          <ul>
            <li>item: {this.state.itemArr.toString()}</li>
            <li>store: {this.state.storeName}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;