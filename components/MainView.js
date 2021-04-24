import React, {useEffect} from 'react'
import {connect, useDispatch} from 'react-redux'
import {createStackNavigator} from '@react-navigation/stack'
import CreateUser from './CreateUser'
import StarList from './StarList'
import AddStar from './AddStar'
import {handleGetUser} from '../actions/user'
import {handleGetStars} from '../actions/star'

const Stack = createStackNavigator()

const MainView = ({hasUser, dispatch}) => {
  useEffect(() => {
    dispatch(handleGetUser())
    dispatch(handleGetStars())
  })

  return hasUser ? (
    <Stack.Navigator>
      <Stack.Screen name='star_list' component={StarList} options={{headerTitle: 'Star Rate'}}/>
      <Stack.Screen name='new_star' component={AddStar} options={{headerTitle: 'Add Star'}}/>
      {/*<Stack.Screen name='deck' component={DeckDetail}*/}
      {/*              options={({ route }) => ({ title: route.params.title })}/>*/}
      {/*<Stack.Screen name='add' component={AddCard} options={{headerTitle: 'Add Card'}}/>*/}
      {/*<Stack.Screen name='quiz' component={QuizView} options={{headerTitle: 'Quiz'}}/>*/}
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name='create_user' component={CreateUser} options={{headerTitle: 'Create User'}}/>
    </Stack.Navigator>
  )
}

function mapStateToProps({user}) {
  return {
    hasUser: user !== null
  }
}

export default connect(mapStateToProps)(MainView)
