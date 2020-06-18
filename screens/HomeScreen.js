import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,ImageBackground,ScrollView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground  style = {{width:360,height:206}}source = {require("../assets/images/Top.png")}>
          <Image style = {styles.ring} source = {require("../assets/images/Ring.png")}/>
          <View style={styles.circle}>
          <Image style = {{width:89,height:89}} source = {require("../assets/images/Head.png")}/>
            <Text style={{fontSize:12}}>帳戶金額</Text>
            <Text style={{fontSize:20}}>$32000</Text>
          </View>
          <View style={styles.frame1}>
              <Text style={{top:12,left:131,fontSize:20}}>回饋報告</Text>
              <View style={styles.line}></View>
                <View style={styles.square}>
                  <View style={styles.square1}>
                    <Text style={{top:5,left:28,fontSize:20}}>跨行次數</Text>
                  </View>
                  <View style={styles.square1}>
                    <Text style={{top:5,left:28,fontSize:20}}>紅利點數</Text>
                  </View>
                </View>
                <View style={styles.square2}>
                    <Text style={{fontSize:25}}>5</Text>
                    <Text style={{fontSize:25}}>10</Text>
                  </View>
            </View>
            <View style={styles.frame2}>
            <Text style={{top:12,left:131,fontSize:20}}>活動優惠</Text>
            <View style={styles.line}></View>
              <View style={styles.square}>
              <Image style = {{top:12,width:147,height:118}} source = {require("../assets/images/1.png")}/>
              <Image style = {{top:12,width:147,height:118}} source = {require("../assets/images/2.jpg")}/>
             
              </View>


          </View>
        </ImageBackground>
        </View>
        
      
  )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 ring:{
  width:40,
  height:40,
  top:24,
  left:18
 },
 circle:{
   justifyContent:"center",
   alignItems:"center",
 },
 frame1:{
   top:52,
   left:12,
  width:338,
  height:161,
  backgroundColor:"#FFFCE2",
  borderRadius:30
 },
 frame2:{
  top:75,
  left:12,
 width:338,
 height:233,
 backgroundColor:"#FFFCE2",
 borderRadius:30
},
 line:{
   marginTop:20,
   left:17.5,
   width:304,
   height:3,
   backgroundColor:"#17A7CD",
   opacity:0.35,
   borderRadius:10
 },
 square:{
   width:304,
   left:15,
  flexDirection: "row",
  //alignItems:"center",
  justifyContent:"space-around",
  
 },
 square1:{
   top:10,
  width:135,
  height:38,
  backgroundColor:"#FFFFFF",
 },
 square2:{
  top:20,
 flexDirection: "row",
 //alignItems:"center",
 justifyContent:"space-around",
 
},
});
