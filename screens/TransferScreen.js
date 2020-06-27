import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';

const BagScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={{width:270,flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image style = {{width:40,height:40}} source = {require("../assets/images/moo.png")}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,color:"#707070"}}>轉帳</Text>
          </View>
      </View>
      <View style={{width:"100%",alignItems:"center"}}>
          <View style={{width:350,flexDirection:"row",justifyContent:"space-around",marginTop:15}}>
            <View style={styles.button}>
              <Text style={{fontSize:20,color:"#707070"}}>立即轉帳</Text>
            </View>
            <View style={styles.button}>
              <Text style={{fontSize:20,color:"#707070"}}>預約轉帳</Text>
            </View>
          </View>
          <View style={{width:370,height:3,backgroundColor:"#ADDEDA",marginTop:15}}></View>
          <View style={{marginTop:15}}>
            <Text style={{fontSize:17,color:"#707070"}}>轉出金額</Text>
            <View style={{width:310,height:39,backgroundColor:"#fff",marginTop:15}}></View>
          </View>
          <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:17}}>
              <Text style={{fontSize:17,color:"#707070"}}>是否跨行集合轉帳</Text>
              <Checkbox
                  checked={true}
                  style={{backgroundColor: '#fff', color:'#15A7CC',borderRadius:2,borderColor:"#FFEB6C"}}/>
          </View>
          <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
              <Text style={{fontSize:17,color:"#707070"}}>選擇帳戶</Text>
              <View style={styles.button2}>
                <Text  style={{fontSize:12,color:"#707070"}}>更多...</Text>
              </View>
          </View>
          <View>
            <View style={styles.frame}>
              <Text style={{fontSize:15,color:"#707070"}}>(810)3655-20-8903783-2</Text>
            </View>
            <View style={styles.frame}>
              <Text style={{fontSize:15,color:"#707070"}}>(415)4372-73-5073421-9</Text>
            </View>
          </View>
          <View style={{width:370,height:3,backgroundColor:"#ADDEDA",marginTop:15}}></View>
              <View style={{width:310,justifyContent:"space-between",marginTop:17}}>
              <Text style={{fontSize:17,color:"#707070"}}>轉出對象</Text>
          </View>
          <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
              <View style={{width:110,flexDirection:"row",justifyContent:"space-between"}}>
                  <Image style = {{width:30,height:30}} source = {require("../assets/images/money.png")}/>
                  <Text  style={{fontSize:17,color:"#707070"}}>常用對象</Text>
              </View>
              <View style={styles.button2}>
                <Text  style={{fontSize:12,color:"#707070"}}>更多...</Text>
              </View>
          </View>
          <View>
            <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/son.png")}/>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#707070"}}>兒子</Text>
                    </View>
              </View>
              <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/son.png")}/>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#707070"}}>兒子</Text>
                    </View>
              </View>
              <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/son.png")}/>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#707070"}}>兒子</Text>
                    </View>
              </View>
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
    width:"100%",
    height:100,
    backgroundColor:"#ADDEDA",
    flexDirection:"row",
    alignItems:"center",
    //justifyContent:"center"
  },
  button:{
    width:150,
    height:40,
    backgroundColor:"#FFEB6C",
    alignItems:"center",
    justifyContent:"center"
  },
  button2:{
    width:52,
    height:22,
    backgroundColor:"#FFEB6C",
    borderRadius:11,
    alignItems:"center",
    justifyContent:"center"

  },
  frame:{
    width:300,
    height:40,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    marginTop:15
  }
});
export default BagScreen;
