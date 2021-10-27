import React from 'react'
import { View, StyleSheet } from 'react-native'

export default props => {
     return (
          // Tem-se um array, e em caso de existir a propriedade bigger, ele adiciona o styles.Bigger
          <View style={styles.container}>
               <View astyle={[styles.flagpole, props.bigger? slyles.flagpoleBigger : null]}/>
               <View style={[styles.flag, props.bigger? slyles.flagBigger : null]}/>
               <View style={[styles.base1, props.bigger? slyles.base1Bigger : null]}/>
               <View style={[styles.base2, props.bigger? slyles.base2Bigger : null]}/>
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          marginTop:2,
     },
     flagpole: {
          position: 'absolute',
          height:14,
          width: 2,
          backgroundColor: "#222",
          marginLeft: 9,
     },
     flag:{
          position: 'absolute',
          height: 5,
          width: 6,
          backgroundColor : "#F22",
          marginLeft: 3
     },
     base1 : {
          position: 'absolute',
          height: 2,
          width: 6,
          backgroundColor : "#222",
          marginLeft: 7,
          marginTop: 10,
     },
     base2 : {
          position: 'absolute',
          height: 2,
          width: 10,
          backgroundColor : "#222",
          marginLeft: 5,
          marginTop: 12,
     },
     flagpoleBigger: {
          height: 28,
          width: 4,
          marginLeft: 16
     },
     flagBigger: {
          height: 10,
          width: 14,
          marginLeft: 3,
     },
     base1Bigger: {
          height: 4,
          width: 12,
          marginTop: 20,
          marginLeft: 12,
     },
     base2Bigger: {
          height: 4,
          width: 20,
          marginLeft: 8,
          marginTop: 24,
     }
})