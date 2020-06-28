import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';



const FinishScreen = ({ navigation }) => {
    return (
     
      <View style={styles.container}>
        
              <TouchableOpacity
                  onPress={() => navigation.goBack()}>
                  <Image style = {{width:40,height:40}} source = {require("../assets/images/moo.png")}/>
              </TouchableOpacity>
            <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
                <Image style = {{width:138,height:172}} source = {require("../assets/images/finished.png")}/>
                <Text  style={{fontSize:30,color:"#1CACD1",marginTop:40}}>轉帳成功</Text>


            </View>
           
  
       
      </View>
      
    )
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFCE2',
    },
 

  });
  export default FinishScreen;
  