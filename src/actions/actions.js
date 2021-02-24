import { FETCH_MONSTERS, FETCH_ONE_MONSTER, GET_MONSTERS_BY_CR } from './types'

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

// dropdown list - selection sets CR variable
// CR variable is passed through to the fetch call
// the fetch passes that group of monsters into state
// then we update/render the new list of monsters in Display

export const getMonstersByCR = (CR) => dispatch => {
  fetch(`https://www.dnd5eapi.co/monsters?challenge_rating=${CR}`)
      .then(response => response.json())
      .then(CRMonsters => dispatch({
        type: GET_MONSTERS_BY_CR,
        payload: CRMonsters
    }))
    .catch(error => console.log(error))
}