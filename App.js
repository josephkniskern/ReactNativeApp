
import React from "react";
import { View } from "react-native";


export default function App() {
  return (

      <View style={{
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center"
      }}>

        <View style={{
          backgroundColor: "chocolate",
          width: 100,
          height: 100
        }}></View>
        <View style={{
          backgroundColor: "darkkhaki",
          width: 100,
          height: 100
        }}></View>
        <View style={{
          backgroundColor: "darkgoldenrod",
          width: 100,
          height: 100
        }}></View>
      </View>  
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });