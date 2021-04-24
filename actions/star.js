import {_createStarDB, _getStarsDB} from '../utils/db'

// export const RATE_STAR = 'RATE_STAR'
export const GET_STARS = 'GET_STARS'
export const CREATE_STAR = 'CREATE_STAR'

function getStars(stars) {
  return {
    type: GET_STARS,
    stars,
  }
}

export function handleGetStars() {
  return (dispatch) => {
    return _getStarsDB().then((data) => {
      const star = JSON.parse(data)
      dispatch(getStars(star))
    })
  }
}

function createStar(star) {
  return {
    type: CREATE_STAR,
    star,
  }
}

export function handleCreateStar(name, rate) {
  const star = {
    [name]: {
      name,
      rate,
    },
  }

  return (dispatch) => {
    dispatch(createStar(star))
    return _createStarDB(star)
  }
}

// function rateStar(star) {
//   return {
//     type: RATE_STAR,
//     star,
//   }
// }
//
// export function handleRateStar(user, star, rate) {
//   const rateArr = star[rate]
//   rateArr.push(user)
//   star[rate] = rateArr
//   return (dispatch) => {
//     dispatch(rateStar(star))
//     return _updateRateDB(star)
//   }
// }
