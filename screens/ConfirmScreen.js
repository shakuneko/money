
import React, { useContext, useState } from 'react';
// import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput, Input } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';
import { StoreContext } from "../stores/MoneyStore";

const gradientHeight=500;
const gradientBackground  = '#FFF4AD';
const data = Array.from({ length: gradientHeight+1 });

const ConfirmScreen = ({ navigation }) => {

  const { NameState } = useContext(StoreContext);
  const { MoneyState } = useContext(StoreContext);
  let [name, setName] = NameState;
  let [money,setMoney] = MoneyState;


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
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 17, color: "#707070" }}>確認金額</Text>
          <TextInput 
          style={styles.input}
            value={name}
            onChangerText={(name) => setName(name)}
            />

           
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ fontSize: 17, color: "#707070" }}>確認帳號</Text>
          <TextInput 
          style={styles.input}
            value={money}
            onChangerText={(money) => setMoney(money)}
            />
        </View>
        <View style={{ width: 320, justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row", marginTop: 15, width: 130, justifyContent: "space-between" }}>
            <Text style={{ fontSize: 15, color: "#707070" }}>是否需要延遲</Text>
            <Checkbox
              checked={true}
              style={{ backgroundColor: '#fff', color: '#15A7CC', borderRadius: 2, borderColor: "#FFEB6C" }} />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.push('FinishScreen')}>
          <View style={styles.button3}>
            <Text style={{ fontSize: 20, color: "#707070" }}>確認轉帳</Text>
          </View>
        </TouchableOpacity>

        <View style={{ width: 335, height: 3, backgroundColor: "#ADDEDA", marginTop: 10 }}></View>

        <View style={{ width: "100%", alignItems: "flex-start", marginTop: 20 }}>
          <Image style={{ width: 250, height: 250 }} source={require("../assets/images/togeder.png")} />
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
    height:71,
    backgroundColor:"#ADDEDA",
    flexDirection:"row",
    alignItems:"center",
    
    //justifyContent:"flex-start"
  },
  button3: {
    width: 147,
    height: 43,
    backgroundColor: "#FFEB6C",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 35,
    marginBottom: 20
  },
  input: {
    width: 310,
    height: 45,
    backgroundColor: "#fff",
    marginTop: 10,
    paddingLeft:13
  }
});

export default ConfirmScreen;

