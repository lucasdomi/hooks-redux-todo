import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addFoodAction(title) {
  return { type: 'ADD_FOOD', title }
}

function removeFoodAction (title) {
  return { type: 'REMOVE_FOOD', title}
}

export default function TeamList() {
  const foods = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function addFood(e) {
    e.preventDefault();
    dispatch(addFoodAction(value))
  }

  function removeFood (e) {
    dispatch(removeFoodAction(e.currentTarget.parentNode.id))
  }

  return (
    <>
    <h1>Lista de Alimentos</h1>
    <ul>
      { foods.map(team => 
      <li id={team} key={team}>
        {team}
        <button onClick={removeFood}>Remover</button>
      </li>
      )}
    </ul>
    <form onSubmit={addFood}>
      <label>
        Adicionar Item:
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </>
  );
}
