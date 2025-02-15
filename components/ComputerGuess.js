import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ComputerGuess({roundNumber,guess}) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{roundNumber}.Tahmin</Text>
      <Text style={styles.text}>{guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderColor:'yellow',
        borderWidth:1,
        marginVertical:10,
        borderRadius:30,
        padding:15,
        elevation: 4,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    text:{
        marginHorizontal:10,
        fontSize:16,
        fontWeight:'bold'
    }
})