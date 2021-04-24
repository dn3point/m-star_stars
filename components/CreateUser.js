import React, {useEffect, useState} from 'react'
import {SafeAreaView} from 'react-native'
import {Button, Text, TextInput } from 'react-native-paper'
import {connect, useDispatch} from 'react-redux'
import {handleCreateUser} from '../actions/user'

const CreateUser = ({dispatch}) => {
  const [name, setName] = useState('')

  const createUser = () => {
    const user = name.trim()
    if (user.length > 0) {
      dispatch(handleCreateUser(user))
    }
  }

  return (
    <SafeAreaView>
      <Text>Input username</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        mode='outlined'
        label='Name'
        placeholder="Input Your Name"
      />
      <Button
        mode='contained'
        onPress={createUser}
        disabled={name.trim().length === 0}>Submit</Button>
    </SafeAreaView>
  )
}

export default connect()(CreateUser)
