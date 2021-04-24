import {CREATE_STAR, GET_STARS, RATE_STAR} from '../actions/star'

export default function star(state = {}, action) {
  switch (action.type) {
    case GET_STARS:
      return action.stars
    // case RATE_STAR:
    //   return  {
    //     ...state,
    //     ...action.star,
    //   }
    case CREATE_STAR:
      return  {
        ...state,
        ...action.star,
      }
    default:
      return state
  }
}
