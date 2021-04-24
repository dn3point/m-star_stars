import {_createUserDB, _getUserDB} from '../utils/db'

export const CREATE_USER = 'CREATE_USER'
export const GET_USER = 'GET_USER'

function createUser(name) {
  return {
    type: CREATE_USER,
    name,
  }
}

export function handleCreateUser(name) {
  return (dispatch) => {
    dispatch(createUser(name))
    return _createUserDB(name)
  }
}

function getUser(user) {
  return {
    type: GET_USER,
    user
  }
}

export function handleGetUser() {
  return (dispatch) => {
    return _getUserDB().then((data) => {
      dispatch(getUser(data))
    })
  }
}
