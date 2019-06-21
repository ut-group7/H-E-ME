import React, { Component } from "react";

import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    storeValue: "",
    itemValue: ""
  };

  handleChange = event => {
    this.setState({ itemValue: event.target.value });
  };

  selectStore = event => {
    this.setState({ storeValue: event.target.value });
  };

  handleFormSubmit = event => {
    try{
      // Item.findOne({ where: {store})
    alert("this is working!" + this.state.itemValue); 
    }catch(e){
      console.log(e);
    };
    event.preventDefault();
    this.setState({itemValue: ""})
    //need to query database with value from form.
    //or just store value in local storage and query from somewhere else... still fuzzy on how this should work
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
        <p>Please select your store</p>
        <select onChange={this.selectStore}>
        <option disabled selected value> -- select an option -- </option>
          <option value="Mueller">Mueller</option>
          <option value="Lakeline">Lakeline</option>
          <option value="Canyon Ridge">Canyon Ridge</option>
          <option value="Round Rock">Round Rock</option>
        </select>
          <p>Use the dropdown menu or search here</p>
          <input
            type="text"
            value={this.state.value}
            placeholder="Search"
            onChange={this.handleChange}
          />
          <select onChange={this.handleChange}>
          <option disabled selected value> -- select an option -- </option>
            <option value="A/C Filters">A/C Filters</option>
            <option value="Air Freshener">Air Freshener</option>
            <option value="Aluminum Foil" />
            <option value="Appliances" />
            <option value="Asian Foods" />
            <option value="Auto Supplies" />
            <option value="Baby Accessories" />
            <option value="Baby Food" />
            <option value="Baby Formula" />
            <option value="Baby Medication" />
            <option value="Baby Wipes" />
            <option value="Bags/Wrap" />
            <option value="Bakeware" />
            <option value="Band-Aids" />
            <option value="Barbecue Sauce" />
            <option value="Bath Soap" />
            <option value="Bath Tissue" />
            <option value="Batteries" />
            <option value="Beans (Canned)" />
            <option value="Beans (Dry)" />
            <option value="Beer" />
            <option value="Birdseed" />
            <option value="Biscuit Mix" />
            <option value="Bleach" />
            <option value="Boxed Dinners" />
            <option value="Bread" />
            <option value="Brooms/Mops" />
            <option value="Cake Mixes" />
            <option value="Candles" />
            <option value="Candy" />
            <option value="Canned Chili" />
            <option value="Canned Fish" />
            <option value="Canned Fruit" />
            <option value="Canned Meat" />
            <option value="Canned Tomato" />
            <option value="Canned Vegetables" />
            <option value="Canning Supplies" />
            <option value="Cat Food" />
            <option value="Cat Litter" />
            <option value="Cereal" />
            <option value="Cereal (Hot)" />
            <option value="Charcoal" />
            <option value="Chips" />
            <option value="Cleaners/Cleansers" />
            <option value="Closet Items" />
            <option value="Coffee" />
            <option value="Coffee Creamer" />
            <option value="Coffee Filters" />
            <option value="Condiments" />
            <option value="Cookies" />
            <option value="Cosmetics" />
            <option value="Cotton Balls" />
            <option value="Cough/Cold" />
            <option value="Crackers" />
            <option value="Dental/Oral Care" />
            <option value="Deodorant" />
            <option value="Diapers" />
            <option value="Diet Aids" />
            <option value="Dish Soap" />
            <option value="Dog Food" />
            <option value="Dried Fruit" />
            <option value="Electrical/Lighting" />
            <option value="Eye Care" />
            <option value="Fabric Softener" />
            <option value="Facial Care" />
            <option value="Facial Tissue" />
            <option value="Facial Tissue" />
            <option value="First Aid" />
            <option value="Floor Wax" />
            <option value="Flour" />
            <option value="Flour Bakeware" />
            <option value="Food Wrap/Containers" />
            <option value="Foot Care" />
            <option value="Fruit Snacks" />
            <option value="Gift Cards" />
            <option value="Glue" />
            <option value="Goya" />
            <option value="Gravy Mixes" />
            <option value="Greeting Cards" />
            <option value="Grilling" />
            <option value="Hair Accessories" />
            <option value="Hair Care" />
            <option value="Hair Color" />
            <option value="Hardware" />
            <option value="Hispanic Foods" />
            <option value="Honey" />
            <option value="Hosiery" />
            <option value="Hot Cocoa" />
            <option value="Ice" />
            <option value="Incontinence" />
            <option value="Insecticides" />
            <option value="Instant Breakfast" />
            <option value="Jam/Jelly" />
            <option value="Jell-O" />
            <option value="Juice" />
            <option value="Ketchup" />
            <option value="Kitchen Gadgets" />
            <option value="Kool-Aid" />
            <option value="Kosher Foods" />
            <option value="Laundry Detergent" />
            <option value="Laxatives" />
            <option value="Light Bulbs" />
            <option value="Lotion/Cream" />
            <option value="Macaroni & Cheese" />
            <option value="Marshmallows" />
            <option value="Matches" />
            <option value="Mayonnaise" />
            <option value="Men’s Toiletries" />
            <option value="Microwaveable Food" />
            <option value="Milk (Canned/Powdered)" />
            <option value="Drink Mixers" />
            <option value="Mustard" />
            <option value="Napkins" />
            <option value="Nutritional Aids/Bars" />
            <option value="Nuts (Baking)" />
            <option value="Nuts (Snacking)" />
            <option value="Oil/Shortening" />
            <option value="Olives" />
            <option value="Pancake Mix" />
            <option value="Paper Towels" />
            <option value="Party Supplies" />
            <option value="Pasta (Canned)" />
            <option value="Pasta (Dry)" />
            <option value="Pastries" />
            <option value="Peanut Butter" />
            <option value="Pet Supplies" />
            <option value="Picante Sauce" />
            <option value="Pickles" />
            <option value="Pie Filling" />
            <option value="Pimentos" />
            <option value="Plates/Cups" />
            <option value="Pop Tarts" />
            <option value="Popcorn" />
            <option value="Potatoes/Stuffing" />
            <option value="Powdered Drink Mix" />
            <option value="Pudding" />
            <option value="Q-Tips" />
            <option value="Religious Candles" />
            <option value="Rice" />
            <option value="Rice Cakes" />
            <option value="Salad Dressing" />
            <option value="Salsa" />
            <option value="Salt" />
            <option value="Sauce/Gravy Mix" />
            <option value="School/Office Supplies" />
            <option value="Seasonal Items" />
            <option value="Sewing Needs" />
            <option value="Shoe Care" />
            <option value="Skin Care" />
            <option value="Snacks" />
            <option value="Sodas" />
            <option value="Soup" />
            <option value="Spices" />
            <option value="Sports Drinks" />
            <option value="Starch" />
            <option value="Sugar" />
            <option value="Syrup" />
            <option value="Tea" />
            <option value="Toaster Pastries" />
            <option value="Toothpicks" />
            <option value="Tortillas" />
            <option value="Toys" />
            <option value="Trash Bags" />
            <option value="Vinegar" />
            <option value="Vitamins" />
            <option value="Water" />
            <option value="Wine" />
          </select>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
        <div className="results">
          <ul>
            <li>item: {this.state.itemValue}</li>
            <li>store: {this.state.storeValue}</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Form;
