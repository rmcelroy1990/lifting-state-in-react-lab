// src/components/IngredientList/IngredientList.jsx

const IngredientList = (props) => {
    return (
        <ul>
            {props.IngredientList.map((IngredientList, index) => {
                <li key={index}>{IngredientList}</li>
            })}
        </ul>
    );
};

const Ingredients({ name, onClick, buttonLabel }) {
    return (
        <li style={{background color: {name}
    <button
        onClick={onClick}
    >
        {buttonLabel}
    </button>
    </li>
    )
}
  export default IngredientList;