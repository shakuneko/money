import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import  React,{useState,useEffect,useContext} from 'react';
//import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image,TextInput,AsyncStorage,TouchableHighlight } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';
import {StoreContext} from "../stores/MoneyStore";
//import {useState,useEffect} from "react";
//import { TextInput } from 'react-native-paper';

const gradientHeight=500;
const gradientBackground  = '#FFF4AD';
const data = Array.from({ length: gradientHeight+1 });



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
   
      <View style={styles.header}>
          <View style={{width:200,flexDirection:"row",marginTop:20,justifyContent:"space-between",alignItems:"center"}}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Image style = {{width:24,height:24,marginLeft:15}} source = {require("../assets/images/back.png")}/>
            </TouchableOpacity>
            <Text style={{fontSize:20,color:"#2D2D2D"}}>轉帳</Text>
          </View>
      </View>
      <ScrollView> 
      <View style={{width:"100%",alignItems:"center"}}>
          <View style={{width:350,flexDirection:"row",justifyContent:"space-around",marginTop:15}}>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.button}>
              <Text style={{fontSize:18,color:"#2D2D2D"}}>立即轉帳</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.button}>
              <Text style={{fontSize:18,color:"#2D2D2D"}}>預約轉帳</Text>
            </View>
            </TouchableOpacity>
          </View>
          <View style={{width:335,height:3,backgroundColor:"#ADDEDA",marginTop:15}}></View>
          <View style={{marginTop:15}}>
         <Text style={{fontSize:17,color:"#2D2D2D"}}>轉出金額</Text>
            <TextInput 
                style={styles.input} 
                placeholder="金額 (Money)"
                onChangeText={(name) => setName(name)}
                  value={name}>
              </TextInput>
          </View>
          <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:17}}>
              <Text style={{fontSize:17,color:"#2D2D2D"}}>是否跨行集合轉帳</Text>
              <Checkbox
                  checked={true}
                  style={{backgroundColor: '#fff', color:'#15A7CC',borderRadius:2,borderColor:"#FFEB6C"}}/>
          </View>
          <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
              <Text style={{fontSize:17,color:"#2D2D2D"}}>選擇帳戶</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.button2}>
                  <Text  style={{fontSize:12,color:"#2D2D2D"}}>更多...</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View>
          <TouchableHighlight 
              onPress={() => {('someParams')}} 
              //activeOpacity={0.6}
              underlayColor="#ADDEDA"
              style={styles.heightlight}>
              <Text style={{fontSize:15,color:"#2D2D2D"}}>(810)3655-20-8903783-2</Text>
              
          </TouchableHighlight>

          <TouchableHighlight 
              onPress={() => {('someParams')}} 
              //activeOpacity={0.6}
              underlayColor="#ADDEDA"
              style={styles.heightlight}>
              <Text style={{fontSize:15,color:"#2D2D2D"}}>(415)4372-73-5073421-9</Text>
              
          </TouchableHighlight>
          </View>
          <View style={{width:335,height:3,backgroundColor:"#ADDEDA",marginTop:15}}></View>
              <View style={{width:310,justifyContent:"space-between",marginTop:17}}>
              <Text style={{fontSize:17,color:"#2D2D2D"}}>轉出對象</Text>
              
          </View>
          <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
              <View style={{width:110,flexDirection:"row",justifyContent:"space-between"}}>
                  <Image style = {{width:30,height:30}} source = {require("../assets/images/money.png")}/>
                  <Text  style={{fontSize:17,color:"#2D2D2D"}}>常用對象</Text>
              </View>
              <TouchableOpacity activeOpacity={0.6}>
                <View style={styles.button2}>
                  <Text  style={{fontSize:12,color:"#2D2D2D"}}>更多...</Text>
                </View>
              </TouchableOpacity>
          </View>
          <View>
            <View style={{width:310,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/son.png")}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#2D2D2D"}}>兒子</Text>
                    </View>
              </View>
              <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                      <TouchableOpacity activeOpacity={0.7}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/workwith.png")}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#2D2D2D"}}>建商</Text>
                      <Text style={{fontSize:10,color:"#2D2D2D"}}>(公司長期合作)</Text>
                    </View>
              </View>
              <View>
                    <View style={{width:89,height:80,backgroundColor:"#FFEB6C",alignItems:"center",justifyContent:"center"}}>
                      <TouchableOpacity activeOpacity={0.7}>
                        <Image style = {{width:69,height:59}} source = {require("../assets/images/wife.png")}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{width:89,height:30,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}}>
                      <Text style={{fontSize:10,color:"#2D2D2D"}}>老婆</Text>
                    </View>
              </View>
            </View>
          </View>
          <View style={{width:300,justifyContent:"flex-start"}}>
              <View style={{width:110,flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                  <Image style = {{width:30,height:30}} source = {require("../assets/images/money.png")}/>
                  <Text  style={{fontSize:17,color:"#2D2D2D"}}>輸入帳號</Text>
                  
              </View>
          </View>
             <TextInput 
                style={styles.input} 
                placeholder="帳號 (account number)"
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
    </View>
  );
};

      
      


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
  },
  heightlight:{
    width:300,
    height:40,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    justifyContent:"center",
    alignItems:"center",
    marginTop:15,
    paddingLeft:13
  }
});

export default TransferScreen;