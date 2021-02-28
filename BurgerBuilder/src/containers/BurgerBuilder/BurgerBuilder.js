import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salid: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salid: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchaseable: false,
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const updatedPrice = oldPrice + priceAddition;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.updatePurchaseableState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      updatedIngredients[type] = updatedCount;
      const priceChange = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const updatedPrice = oldPrice - priceChange;
      this.setState({
        ingredients: updatedIngredients,
        totalPrice: updatedPrice,
      });
      this.updatePurchaseableState(updatedIngredients);
    }
  };

  updatePurchaseableState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey=> {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return (sum + el);
      }, 0);
      this.setState({purchaseable: sum > 0});
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] < 1;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          disabled={disabledInfo}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          totalPrice={this.state.totalPrice}
          purchaseable={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
