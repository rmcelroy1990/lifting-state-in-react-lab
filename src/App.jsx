import './App.css';
import IngredientList from './components/IngredientList/IngredientList';'src/components/IngredientList/IngredientList.jsx';
import BurgerStack from './components/BurgerStack/BurgerStack';'src/components/BurgerStack/BurgerStack.jsx'
import {useState} from 'react' 

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  const [stack, setStack] = useState([]);
  const addToBurger = (ingredient) => {
    setStack((prevStack) => [...prevStack, ingredient]);
  };

  const removeFromBurger = (ingredient) => {
    setStack((prevStack) => prevStack.filter(item => item !==  ingredient));
  }
  return (
    <div className="App">
      <h1>Burger Stack</h1>
      <IngredientList
      availableIngredients={availableIngredients}
      addToBurger={addToBurger}
      />
      <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
    </div>
  )
}


 return (
  <div className="">
    <h1>Available Ingredients</h1>
    <ul>
      {availableIngredients.map((ingredient, index) => (
        <li
          key={index}
          style={{backgroundColor: ingredient.color}}
          >
            {ingredient.name}
          </li>
      ))}
    </ul>
  </div>
)


    
        
  // return (
  //   <div>
  //     <h1>Burger Stacker</h1>
  //     <ul>
  //       {availableIngredients.map((ingredient, index) => (
  //         <li key={index}>
  //           <button onClick={() => addToBurger(ingredient)}>
  //             Add
  //           </button>
  //         </li>
  //       ))}
  //     </ul>
  //     </div>
  // );

export default App;
