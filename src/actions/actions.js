import { FETCH_MONSTERS, FETCH_ONE_MONSTER } from './types'

export const getMonsters = () => dispatch =>{
  fetch('https://www.dnd5eapi.co/api/monsters')
    .then(response => response.json())
    .then(monsters => dispatch({
      type: FETCH_MONSTERS,
      payload: monsters
    }))
    .catch(error => console.log(error))
}

export const getOneMonster = (url) => dispatch => {
  fetch(`https://www.dnd5eapi.co${url}`)
      .then(response => response.json())
      .then(monster => dispatch({
        type: FETCH_ONE_MONSTER,
        payload: monster
    }))
    .catch(error => console.log(error))
}