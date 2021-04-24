import React, {useState} from 'react'
import {SafeAreaView, View} from 'react-native'
import {connect, useDispatch} from 'react-redux'
import {handleCreateStar} from '../actions/star'
import {Button, RadioButton, Text, TextInput } from 'react-native-paper'
import {RATE_AVERAGE, RATE_GOOD, RATE_UGLY, TXT_AVERAGE, TXT_GOOD, TXT_UGLY} from '../utils/constants'

const AddStar = ({navigation, dispatch}) => {
  const [name, setName] = useState('')
  const [rate, setRate] = React.useState(RATE_GOOD);

  const createUser = () => {
    const star = name.trim()
    if (star.length > 0) {
      dispatch(handleCreateStar(star, rate)).then(
        navigation.navigate('star_list')
      )
    }
  }

  return (
    <SafeAreaView>
      <Text>Input name</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        mode='outlined'
        label='Name'
        placeholder="Input Star's name"
      />
      <RadioButton.Group onValueChange={newRate => setRate(newRate)} value={rate}>
        <View>
          <Text>{TXT_GOOD}</Text>
          <RadioButton value={RATE_GOOD} />
        </View>
        <View>
          <Text>{TXT_AVERAGE}</Text>
          <RadioButton value={RATE_AVERAGE} />
        </View>
        <View>
          <Text>{TXT_UGLY}</Text>
          <RadioButton value={RATE_UGLY} />
        </View>
      </RadioButton.Group>
      <Button
        mode='contained'
        onPress={createUser}
        disabled={name.trim().length === 0}>Submit</Button>
    </SafeAreaView>
  )
}

export default connect()(AddStar)
