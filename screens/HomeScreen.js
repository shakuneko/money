import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,ImageBackground,ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground  style = {{width:360,height:206,justifyContent:"center"}}source = {require("../assets/images/Top.png")}>
          <View style={{height:90,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
            <Image style = {styles.ring} source = {require("../assets/images/Ring.png")}/>
            <Image style = {{width:89,height:89}} source = {require("../assets/images/Head.png")}/>
            <Image style = {styles.logout} source = {require("../assets/images/logout.png")}/>
          </View>
          <View style={styles.circle}>
          <Text style={{fontSize:12,color:"#fff"}}>帳戶金額</Text>
              <Text style={{fontSize:20,color:"#fff"}}>$32000</Text>
            </View>
        </ImageBackground>
          <ScrollView style={{height:900}}>
          <View style={styles.frame1}>
              <Text style={{top:12,left:131,fontSize:20,color:"#707070"}}>回饋報告</Text>
              <View style={styles.line}></View>
                <View style={styles.square}>
                  <View style={styles.square1}>
                    <Text style={{top:5,left:28,fontSize:20,color:"#707070"}}>跨行次數</Text>
                  </View>
                  <View style={styles.square1}>
                    <Text style={{top:5,left:28,fontSize:20,color:"#707070"}}>紅利點數</Text>
                  </View>
                </View>
                <View style={styles.square2}>
                    <Text style={{fontSize:25,color:"#707070"}}>5</Text>
                    <Text style={{fontSize:25,color:"#707070"}}>10</Text>
                  </View>
            </View>
            <View style={styles.frame2}>
            <Text style={{top:12,left:131,fontSize:20,color:"#707070"}}>活動優惠</Text>
            <View style={styles.line}></View>
              <View style={styles.square}>
                <Image style = {{top:12,width:147,height:118}} source = {require("../assets/images/discount.png")}/>
                <Image style = {{top:12,width:147,height:118}} source = {require("../assets/images/discount2.png")}/>
              </View>
              <View style={styles.square}>
                <Image style = {{top:24,width:147,height:118}} source = {require("../assets/images/3.jpg")}/>
                <Image style = {{top:24,width:147,height:118}} source = {require("../assets/images/4.png")}/>
              </View>
              <View style={styles.square}>
                <Image style = {{top:36,width:147,height:118}} source = {require("../assets/images/5.png")}/>
                <Image style = {{top:36,width:147,height:118}} source = {require("../assets/images/6.jpg")}/>
              </View>


          </View>
          </ScrollView>
       
        </View>
        
      
  )}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  
 ring:{
  width:35,
  height:35,
 },
 logout:{
  width:35,
  height:35,
 },
 circle:{
  justifyContent:"flex-start",
  alignItems:"center",
  marginTop:10
 },
 frame1:{
   top:40,
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
 height:600,
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
