import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    item: ""
  };

 

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    alert("this is working!");

    //needs sequelize query to return aisles for the item selected. 
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        {/* not sure if we want to have a long drop down list or just have a text item for inputs */}
        <form className="form">
        
          <input type="text"></input>
          <select>
            <option value="A/C Filters">A/C Filters</option>
<option value="Air Freshener">Air Freshener</option>
<option value="Aluminum Foil"></option>
<option value="Appliances"></option>
<option value="Asian Foods"></option>
<option value="Auto Supplies"></option>
<option value="Baby Accessories"></option>
<option value="Baby Food"></option>
<option value="Baby Formula"></option>
<option value="Baby Medication"></option>
<option value="Baby Wipes"></option>
<option value="Bags/Wrap"></option>
<option value="Bakeware"></option>
<option value="Band-Aids"></option>
<option value="Barbecue Sauce"></option>
<option value="Bath Soap"></option>
<option value="Bath Tissue"></option>
<option value="Batteries"></option>
<option value="Beans (Canned)"></option>
<option value="Beans (Dry)"></option>
<option value="Beer"></option>
<option value="Birdseed"></option>
<option value="Biscuit Mix"></option>
<option value="Bleach"></option>
<option value="Boxed Dinners"></option>
<option value="Bread"></option>
<option value="Brooms/Mops"></option>
<option value="Cake Mixes"></option>
<option value="Candles"></option>
<option value="Candy"></option>
<option value="Canned Chili"></option>
<option value="Canned Fish"></option>
<option value="Canned Fruit"></option>
<option value="Canned Meat"></option>
<option value="Canned Tomato"></option>
<option value="Canned Vegetables"></option>
<option value="Canning Supplies"></option>
<option value="Cat Food"></option>
<option value="Cat Litter"></option>
<option value="Cereal"></option>
<option value="Cereal (Hot)"></option>
<option value="Charcoal"></option>
<option value="Chips"></option>
<option value="Cleaners/Cleansers"></option>
<option value="Closet Items"></option>
<option value="Coffee"></option>
<option value="Coffee Creamer"></option>
<option value="Coffee Filters"></option>
<option value="Condiments"></option>
<option value="Cookies"></option>
<option value="Cosmetics"></option>
<option value="Cotton Balls"></option>
<option value="Cough/Cold"></option>
<option value="Crackers"></option>
<option value="Dental/Oral Care"></option>
<option value="Deodorant"></option>
<option value="Diapers"></option>
<option value="Diet Aids"></option>
<option value="Dish Soap"></option>
<option value="Dog Food"></option>
<option value="Dried Fruit"></option>
<option value="Electrical/Lighting"></option>
<option value="Eye Care"></option>
<option value="Fabric Softener"></option>
<option value="Facial Care"></option>
<option value="Facial Tissue"></option>
<option value="Facial Tissue"></option>
<option value="First Aid"></option>
<option value="Floor Wax"></option>
<option value="Flour"></option>
<option value="Flour Bakeware"></option>
<option value="Food Wrap/Containers"></option>
<option value="Foot Care"></option>
<option value="Fruit Snacks"></option>
<option value="Gift Cards"></option>
<option value="Glue"></option>
<option value="Goya"></option>
<option value="Gravy Mixes"></option>
<option value="Greeting Cards"></option>
<option value="Grilling"></option>
<option value="Hair Accessories"></option>
<option value="Hair Care"></option>
<option value="Hair Color"></option>
<option value="Hardware"></option>
<option value="Hispanic Foods"></option>
<option value="Honey"></option>
<option value="Hosiery"></option>
<option value="Hot Cocoa"></option>
<option value="Ice"></option>
<option value="Incontinence"></option>
<option value="Insecticides"></option>
<option value="Instant Breakfast"></option>
<option value="Jam/Jelly"></option>
<option value="Jell-O"></option>
<option value="Juice"></option>
<option value="Ketchup"></option>
<option value="Kitchen Gadgets"></option>
<option value="Kool-Aid"></option>
<option value="Kosher Foods"></option>
<option value="Laundry Detergent"></option>
<option value="Laxatives"></option>
<option value="Light Bulbs"></option>
<option value="Lotion/Cream"></option>
<option value="Macaroni & Cheese"></option>
<option value="Marshmallows"></option>
<option value="Matches"></option>
<option value="Mayonnaise"></option>
<option value="Men’s Toiletries"></option>
<option value="Microwaveable Food"></option>
<option value="Milk (Canned/Powdered)"></option>
<option value="Drink Mixers"></option>
<option value="Mustard"></option>
<option value="Napkins"></option>
<option value="Nutritional Aids/Bars"></option>
<option value="Nuts (Baking)"></option>
<option value="Nuts (Snacking)"></option>
<option value="Oil/Shortening"></option>
<option value="Olives"></option>
<option value="Pancake Mix"></option>
<option value="Paper Towels"></option>
<option value="Party Supplies"></option>
<option value="Pasta (Canned)"></option>
<option value="Pasta (Dry)"></option>
<option value="Pastries"></option>
<option value="Peanut Butter"></option>
<option value="Pet Supplies"></option>
<option value="Picante Sauce"></option>
<option value="Pickles"></option>
<option value="Pie Filling"></option>
<option value="Pimentos"></option>
<option value="Plates/Cups"></option>
<option value="Pop Tarts"></option>
<option value="Popcorn"></option>
<option value="Potatoes/Stuffing"></option>
<option value="Powdered Drink Mix"></option>
<option value="Pudding"></option>
<option value="Q-Tips"></option>
<option value="Religious Candles"></option>
<option value="Rice"></option>
<option value="Rice Cakes"></option>
<option value="Salad Dressing"></option>
<option value="Salsa"></option>
<option value="Salt"></option>
<option value="Sauce/Gravy Mix"></option>
<option value="School/Office Supplies"></option>
<option value="Seasonal Items"></option>
<option value="Sewing Needs"></option>
<option value="Shoe Care"></option>
<option value="Skin Care"></option>
<option value="Snacks"></option>
<option value="Sodas"></option>
<option value="Soup"></option>
<option value="Spices"></option>
<option value="Sports Drinks"></option>
<option value="Starch"></option>
<option value="Sugar"></option>
<option value="Syrup"></option>
<option value="Tea"></option>
<option value="Toaster Pastries"></option>
<option value="Toothpicks"></option>
<option value="Tortillas"></option>
<option value="Toys"></option>
<option value="Trash Bags"></option>
<option value="Vinegar"></option>
<option value="Vitamins"></option>
<option value="Water"></option>
<option value="Wine"></option>
          </select>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
