import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React,{useState,useEffect,useContext} from 'react';
//import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,AsyncStorage} from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';
import {StoreContext} from "../stores/MoneyStore";
//import {useState,useEffect} from "react";
//import { TextInput } from 'react-native-paper';

const TransferScreen =({ navigation }) => {

  const { NameState } = useContext(StoreContext);
  const { MoneyState } = useContext(StoreContext);
  const [name,setName] = NameState;
  const [money,setMoney] = MoneyState;


  const save = async() => {
    try {
      await AsyncStorage.setItem("Myname",name)
    }catch (err){
      alert(err);   
    }
  };
  const load = async () =>{
      try{
          let name = await AsyncStorage.getItem("Myname");

          if(name !== null){
            setName(name);
          }
        }catch(err){
          alert(err);
        }
      };
    
      useEffect(() => {
        // load();
      },[]);
      return (
   
    <View style={styles.container}>
      <View style={styles.header}>
          <View style={{width:240,flexDirection:"row",marginTop:20,justifyContent:'space-around'}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image style = {{width:40,height:40}} source = {require("../assets/images/moo.png")}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,color:"#707070"}}>轉帳</Text>
          </View>
      </View>
      <ScrollView> 
      <View style={{width:"100%",alignItems:"center"}}>
          <View style={{width:350,flexDirection:"row",justifyContent:"space-around",marginTop:15}}>
            <View style={styles.button}>
              <Text style={{fontSize:18,color:"#707070"}}>立即轉帳</Text>
            </View>
            <View style={styles.button}>
              <Text style={{fontSize:18,color:"#707070"}}>預約轉帳</Text>
            </View>
          </View>
          <View style={{width:335,height:3,backgroundColor:"#ADDEDA",marginTop:15}}></View>
          <View style={{marginTop:15}}>
         <Text style={{fontSize:17,color:"#707070"}}>轉出金額</Text>
            <TextInput 
                style={styles.input} 
                onChangeText={(name) => setName(name)}
                  value={name}>
              </TextInput>
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
          <View style={{width:335,height:3,backgroundColor:"#ADDEDA",marginTop:15}}></View>
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
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/workwith.png")}/>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#707070"}}>建商</Text>
                      <Text style={{fontSize:10,color:"#707070"}}>(公司長期合作)</Text>
                    </View>
              </View>
              <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/wife.png")}/>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#707070"}}>老婆</Text>
                    </View>
              </View>
            </View>
          </View>
          <View style={{width:300,justifyContent:"flex-start"}}>
              <View style={{width:110,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                  <Image style = {{width:30,height:30}} source = {require("../assets/images/money.png")}/>
                  <Text  style={{fontSize:17,color:"#707070"}}>輸入帳號</Text>
                  
              </View>
          </View>
             <TextInput 
                style={styles.input} 
                onChangeText={(money) => setMoney(money)}
                  value={money}>
              </TextInput>
            
            <TouchableOpacity
                    
                    onPress={() => navigation.navigate('ConfirmScreen')}>
                    <View style={styles.button3}>
                      <Text style={{fontSize:20,color:"#707070"}}>立即轉帳</Text>
                    </View>
          </TouchableOpacity>
            
      </View>
      </ScrollView>
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
    height:71,
    backgroundColor:"#ADDEDA",
    flexDirection:"row",
    alignItems:"center",
    //justifyContent:"flex-start"
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
    marginTop:15,
    paddingLeft:13
  },
  button3:{
    width:150,
    height:40,
    backgroundColor:"#FFEB6C",
    borderRadius:17,
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    marginBottom:30
  },
  input:{
    width:310,
    height:39,
    backgroundColor:"#fff",
    marginTop:15,
    paddingLeft:13
  }
});

export default TransferScreen;