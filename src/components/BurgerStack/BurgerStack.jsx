// src/components/BurgerStack/BurgerStack.jsx
import React from "react";
import IngredientList from '../IngredientList';


const BurgerStack = ({ stack, removeFromBurger }) => {
    return (
        <div>
        <h1>Stack Your Burger</h1>
        {stack.length === 0 ? (
            <p>No Ingredients</p>
        ) : (
        <ul>
            {stack.map((ingredient, index) => (
                <li key={index}>
                    name={ingredient.name}
                    <button onClick={() => removeFromBurger(ingredient)}>
                        Remove
                    </button>
                </li>
            ))}
        </ul>
        )}
        </div>
    );
  };
  
  export default BurgerStack;
  