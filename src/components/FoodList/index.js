import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

function addTeamAction(title) {
  return { type: 'ADD_FOOD', title }
}

function removeTeamAction (title) {
  return { type: 'REMOVE_FOOD', title}
}

export default function TeamList() {
  const teams = useSelector(state => state.data);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  function addTeam(e) {
    e.preventDefault();
    dispatch(addTeamAction(value))
  }

  function removeTeam (e) {
    dispatch(removeTeamAction(e.currentTarget.parentNode.id))
  }

  return (
    <>
    <h1>Lista de Alimentos</h1>
    <ul>
      { teams.map(team => 
      <li id={team} key={team}>
        {team}
        <button onClick={removeTeam}>Remover</button>
      </li>
      )}
    </ul>
    <form onSubmit={addTeam}>
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
