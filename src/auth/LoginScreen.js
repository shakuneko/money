import React,{Component} from 'react'
import { Text, View, Image,StyleSheet,ImageBackground,TouchableOpacity} from 'react-native';



export default function LoginScreen(){
        return (
          <View style={{ flex: 1 }}>
              <View style={{ flex: 2 }}></View>
              <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity
                  style={{marginTop:20,}}
                  onPress={() => navigation.navigate("")}
                >
                  <View style={styles.TextBoxStyle}>
                    <Text style={styles.TextStyle}>GO!</Text>
                  </View>
                </TouchableOpacity>
              </View>
          </View>
        );
    
}

const styles = StyleSheet.create({
  TextBoxStyle: {
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#FFFFFF50",
    width:100,
    height:40,
    zIndex:1
  },
  TextStyle:{
    color:"#fff",
    fontSize: 20,
    fontWeight:"bold",
    zIndex:4
  }
});