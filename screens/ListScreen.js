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
     <ScrollView >
      <View style={{alignItems:"center",marginTop:20}}>
          <View style={styles.record}>
              <View style={{width:320,height:70,alignItems:"flex-end",justifyContent:"center"}}>
                <Image style = {{width:61,height:60,marginTop:0}} source = {require("../assets/images/moo.png")}/>
              </View>
        <View style={styles.cost}>
          <View style={{width:300,justifyContent:"flex-start"}}>
            <Text style={{fontSize:15,color:"#15A7CC"}}>6月份</Text>
            <Text style={{fontSize:17,color:"#F8CB60",marginTop:10}}>26</Text>
          </View>
            <View style={styles.day}>
              <View style={styles.project}>
                <View style={{flex:1}}>
                  <Image style = {styles.picture} source = {require("../assets/images/starbucks.png")}/>
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.name}>星巴克-冷萃咖啡</Text>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                <   Text style={styles.money}>$-150</Text>
                </View>
              </View>
              <View style={styles.project}>
              <View style={{flex:1}}>
                <Image style = {styles.picture} source = {require("../assets/images/uniqlo.png")}/>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.name}>Uniqlo-衣服</Text>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                <Text style={styles.money}>$-2298</Text>
                </View>
              </View>
            </View>

            <View style={{width:300,justifyContent:"flex-start"}}>
            <Text style={{fontSize:17,color:"#F8CB60"}}>25</Text>
          </View>
            <View style={styles.day}>
              <View style={styles.project}>
              <View style={{flex:1}}>
                <Image style = {styles.picture} source = {require("../assets/images/rainbow.png")}/>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.name}>Rainbow-褲子</Text>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                <Text style={styles.money}>$-790</Text>
                </View>
              </View>
              <View style={styles.project}>
              <View style={{flex:1}}>
                <Image style = {styles.picture} source = {require("../assets/images/mrt.png")}/>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.name}>通勤</Text>
                </View>
                <View style={{flex:1,alignItems:"flex-end"}}>
                <Text style={styles.money}>$-60</Text>
                </View>
              </View>
            </View>
            <View style={{width:300,justifyContent:"flex-start"}}>
            <Text style={{fontSize:17,color:"#F8CB60"}}>24</Text>
          </View>
            <View style={styles.day}>
              <View style={styles.project}>
              <View style={{flex:1}}>
                <Image style = {styles.picture} source = {require("../assets/images/welcome.png")}/>
              </View>
              <View style={{flex:2}}>
                <Text style={styles.name}>歡迎來到錢之所向!!!</Text>
                </View>
            </View>
            </View>
      </View>
      </View>
         
      </View>
      </ScrollView>
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
    height:71,
    justifyContent:"center",
    alignItems:"center"
  },
  record:{
    width:330,
    height:530,
    backgroundColor:"#fff",
    borderRadius:26,
    marginBottom:30
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
    width:330,
    height:170,
    backgroundColor:"#fff",
    marginTop:23,
    alignItems:"center"

  },
  cost:{
    height:330,
    marginTop:-40,
    alignItems:"center",
     //backgroundColor:"pink",
     
  },
  day:{
    height:150,
    alignItems:"center",
    justifyContent:"flex-start",
    //backgroundColor:"pink",
    
  },
  project:{
    marginTop:20,
    width:290,
    height:50,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    //backgroundColor:"black",
  },
  picture:{
    width:42,
    height:42,
  },
  name:{
    fontSize:15,
    color:"#707070",
  },
  money:{
    fontSize:15,
    color:"#707070",
  }
});
