import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';

const gradientHeight=500;
const gradientBackground  = '#FFF4AD';
const data = Array.from({ length: gradientHeight+1 });

const FinishScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={{flex:1,zIndex:3}}> 
         {data.map((_, i) => (
                          <View
                              key={i}
                              style={{
                                  position: 'absolute',
                                  backgroundColor: gradientBackground,
                                  height: 1,
                                  bottom: (gradientHeight - i),
                                  right: 0,
                                  left: 0,
                                  zIndex: 0,
                                  opacity: (1 / gradientHeight) * (i + 1)
                              }}
                          />
                      ))} 
        
             

           
            <View style={{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"}}>
                <Image style = {{width:138,height:172}} source = {require("../assets/images/finished.png")}/>
                <Text  style={{fontSize:30,color:"#1CACD1",marginTop:40}}>轉帳成功</Text>
                <View>
                  <TouchableOpacity
                         onPress={() => navigation.push(" ")}>
                      <Text style={{color:"#707070",fontSize:10}}>返回主畫面</Text>
                  </TouchableOpacity>
              </View>   


            </View>
           
  
            </View>
            </View>
        
      
      
    )
  }
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFCE2',
    },
    header:{
      width:330,
      height:0,
      marginTop:30,
      justifyContent:"flex-start",
      alignItems:"flex-start",
    },

  });
  export default FinishScreen;
  