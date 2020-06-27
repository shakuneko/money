import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
//import React, { useState } from 'react';
import * as React  from 'react';
import { StyleSheet, Text, View,Image,CheckBox } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
//import { CheckBox } from 'react-native-elements'
import Checkbox from 'react-native-custom-checkbox';




export default function LinksScreen() {
  
  return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Text style={{fontSize:20,color:"#fff"}}>交易明細</Text>
     </View>
      <View style={{alignItems:"center",marginTop:20}}>
          <View style={styles.record}>
              <View style={{width:340,height:70,alignItems:"flex-end",justifyContent:"center"}}>
                <Image style = {{width:61,height:60,marginTop:25}} source = {require("../assets/images/moo.png")}/>
              </View>
              <View style={styles.content}>
                <View style={{height:70,justifyContent:"center"}}>
                  <View style={{width:170,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text style={{color:"#707070",fontSize:20}}>3/19</Text>
                    <Text style={{color:"#707070",fontSize:20}}>ATM</Text>
                  </View>
                    <View style={{width:312,height:2,backgroundColor:"#AEDEDB",marginTop:15}}></View>
                </View>
                <View style={{height:70,justifyContent:"center"}}>
                  <View style={{width:200,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text style={{color:"#707070",fontSize:20}}>3/10</Text>
                    <Text style={{color:"#707070",fontSize:20}}>xxx轉入</Text>
                  </View>
                    <View style={{width:312,height:2,backgroundColor:"#AEDEDB",marginTop:15}}></View>
                </View>
                <View style={{height:70,justifyContent:"center"}}>
                  <View style={{width:185,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text style={{color:"#707070",fontSize:20}}>3/08</Text>
                    <Text style={{color:"#707070",fontSize:20}}>消費...</Text>
                  </View>
                    <View style={{width:312,height:2,backgroundColor:"#AEDEDB",marginTop:15}}></View>
                </View>
                <View style={{width:312,height:60,justifyContent:"center"}}>
                  <View style={{width:220,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Text style={{color:"#707070",fontSize:20}}>3/02</Text>
                    <Text style={{color:"#707070",fontSize:20}}>轉出給xxx</Text>
                  </View>
                </View>
              </View>
              <View style={{width:358,height:80,justifyContent:"center",alignItems:"center"}}>    
                <View style={styles.button}>
                  <Text style={{fontSize:15,color:"#15A7CC"}}>看更多</Text>
                </View>
              </View> 
                  <View style={{width:2,height:257,backgroundColor:"#AEDEDB",top:-340,left:100}}></View> 
          </View>

          <View style={styles.recycle}>
            <Text style={{fontSize:20,color:"#15A7CC",marginTop:13}}>收回項目</Text>
            <View style={{width:290,height:50,flexDirection:"row",justifyContent:"space-around",alignItems:"center",marginTop:10}}>
              <Text style={{fontSize:15,color:"#707070"}}>3/01     轉出給老闆</Text>
              <View style={{width:70,height:50,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                  <Text style={{fontSize:15,color:"#707070"}}>收回</Text>
                  <Checkbox
                  checked={true}
                  style={{backgroundColor: '#fff', color:'#15A7CC',borderRadius:2,borderColor:"#FFEB6C"}}/>
              </View>
            </View>

            <View style={{width:290,height:50,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
              <Text style={{fontSize:15,color:"#707070"}}>3/13     轉出給女兒</Text>
              <View style={{width:70,height:50,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                  <Text style={{fontSize:15,color:"#707070"}}>收回</Text>
                  <Checkbox
                  checked={true}
                  style={{backgroundColor: '#fff', color:'#15A7CC',borderRadius:2,borderColor:"#FFEB6C"}}/>
              </View>
            </View>


          </View>
      </View>
     
   </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCE2',
    
  },
  header:{
    backgroundColor: '#F1AB86',
    width:"100%",
    height:100,
    justifyContent:"center",
    alignItems:"center"
  },
  record:{
    width:358,
    height:440,
    backgroundColor:"#fff"
  },
  content:{
    width:358,
    justifyContent:"flex-end",
    alignItems:"center",
    //backgroundColor:"pink"
  },
  button:{
    width:101,
    height:42,
    backgroundColor:"#FFEB6C",
    borderRadius:18,
    alignItems:"center",
    justifyContent:"center"
  },
  recycle:{
    width:358,
    height:170,
    backgroundColor:"#fff",
    marginTop:23,
    alignItems:"center"

  },
  
});
