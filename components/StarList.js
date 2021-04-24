import React from 'react'
import {connect} from 'react-redux'
import {Button, DataTable, FAB, Portal, Text} from 'react-native-paper'
import {RATE_AVERAGE, RATE_GOOD, RATE_UGLY, TXT_AVERAGE, TXT_GOOD, TXT_UGLY} from '../utils/constants'
import {SafeAreaView, ScrollView, View} from 'react-native'
import {BarChart} from 'react-native-chart-kit'
import {Dimensions} from 'react-native-web'

const StarList = ({data, stars, navigation}) => {
  return stars && stars.length > 0 ? (
    <SafeAreaView>
      <ScrollView>
        <Button onPress={() => navigation.navigate('new_star')}>Go to add star</Button>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>明星</DataTable.Title>
            <DataTable.Title>{TXT_GOOD}</DataTable.Title>
            <DataTable.Title>{TXT_AVERAGE}</DataTable.Title>
            <DataTable.Title>{TXT_UGLY}</DataTable.Title>
          </DataTable.Header>
          {stars.map(star => (
            <DataTable.Row key={star.name}>
              <DataTable.Cell>{star.name}</DataTable.Cell>
              <DataTable.Cell>{star.rate === RATE_GOOD ? '✓' : ''}</DataTable.Cell>
              <DataTable.Cell>{star.rate === RATE_AVERAGE ? '✓' : ''}</DataTable.Cell>
              <DataTable.Cell>{star.rate === RATE_UGLY ? '✓' : ''}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>

        <BarChart
          data={data}
          width={Dimensions.get('window').width}
          height={220}
          fromZero={true}
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726"
            }
          }}
        />
        <Button onPress={() => navigation.navigate('new_star')}>Go to add star</Button>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <View>
      <Text>No record. Add one?</Text>
      <Button onPress={() => navigation.navigate('new_star')}>Go to add star</Button>
    </View>
  )
}

function mapStateToProps({star}) {
  const stars = star ? Object.values(star) : []
  const data = {
    labels: [TXT_GOOD, TXT_AVERAGE, TXT_UGLY],
    datasets: [
      {
        data: [
          stars.filter(star => star.rate === RATE_GOOD).length,
          stars.filter(star => star.rate === RATE_AVERAGE).length,
          stars.filter(star => star.rate === RATE_UGLY).length,
        ]
      }
    ]
  }
  return {
    stars,
    data,
  }
}

export default connect(mapStateToProps)(StarList)
