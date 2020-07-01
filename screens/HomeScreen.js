import * as WebBrowser from 'expo-web-browser';
//import * as React from 'react';
import React, {Component, useState } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,ImageBackground,ScrollView,Alert, Modal,TouchableHighlight} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
//import LinearGradient from 'react-native-linear-gradient';
import { MonoText } from '../components/StyledText';



export default function HomeScreen({ navigation }) {

  const [modalVisible, setModalVisible] = useState(false);
  const [Visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground  style = {{width:360,height:206,justifyContent:"center"}}source = {require("../assets/images/Top.png")}>
          <View style={{height:90,flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image style = {styles.ring} source = {require("../assets/images/Ring.png")}/>
          </TouchableOpacity>
            <Image style = {{width:89,height:89}} source = {require("../assets/images/Head.png")}/>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.push("Login")}>
                <Image style = {styles.logout} source = {require("../assets/images/logout.png")}/>
            </TouchableOpacity>
            
          </View>
          <View style={styles.circle}>
          <Text style={{fontSize:12,color:"#fff"}}>帳戶金額</Text>
              <Text style={{fontSize:20,color:"#fff"}}>$32000</Text>
            </View>
        </ImageBackground>

        <ScrollView>
        <View style={{width:"100%",alignItems:"center"}}>
          <View>

            <View style={styles.square1}>
            
              <Text style={{fontSize:17,color:"#2D2D2D"}}>回饋報告</Text>
              <View style={{width:290,height:1.5,backgroundColor:"#ADDEDA",marginTop:15}}></View>
              <View style={{width:290,flexDirection:"row",justifyContent:"space-around",marginTop:15}}>
                  <View style={styles.frame}>
                    <Text style={{fontSize:15,color:"#F1AB86"}}>跨行次數</Text>
                  </View>
                  <View style={styles.frame}>
                    <Text style={{fontSize:15,color:"#F1AB86"}}>紅利點數</Text>
                  </View>
              </View>
              <View style={{width:290,flexDirection:"row",justifyContent:"space-around",marginTop:10}}>
                  <View >
                    <Text style={{fontSize:17,color:"#2D2D2D"}}>5</Text>
                  </View>
                  <View >
                    <Text style={{fontSize:17,color:"#2D2D2D"}}>10</Text>
                  </View>
              </View>
             
            </View>
            <View style={styles.square2}>
              <Text style={{fontSize:17,color:"#2D2D2D"}}>活動優惠</Text>
              <View style={{width:290,height:1.5,backgroundColor:"#ADDEDA",marginTop:15}}></View>
             
              <View style={{width:290,flexDirection:"row",justifyContent:"space-around",marginTop:20}}>
                  <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.plus}
                  onPress={() => {
                    setModalVisible(true);
                  }}
                  >
                  <Image style = {{width:130,height:118}} source = {require("../assets/images/discount.png")}/>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.plus}
                  onPress={() => {
                    setVisible(true);
                  }}
                  >
                  <Image style = {{width:130,height:118}} source = {require("../assets/images/discount2.png")}/>
                  </TouchableOpacity>
              </View>
            </View>
          </View>

        </View>
       </ScrollView> 
       <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Image style = {{width:250,height:250,}} source = {require("../assets/images/big2.png")}/>
                      <Text style={styles.modalText}>限時免費還不把握嗎?</Text>
                      <Text style={styles.modalText2}>一起跟上金毛的腳步開啟手機轉帳吧!</Text>
                      
                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#FFEB6C" }}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.textStyle}>知道了</Text>
                      </TouchableHighlight>
                     
                      </View>
                  </View>
                </Modal>


                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={Visible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Image style = {{width:250,height:250,}} source = {require("../assets/images/big1.png")}/>
                      <Text style={styles.modalText}>新活動!全新登場</Text>
                      <Text style={styles.modalText2}>現在加入會員即可免費體驗付費功能喔!</Text>
                      
                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#FFEB6C" }}
                        onPress={() => {
                          setVisible(!Visible);
                        }}
                      >
                        <Text style={styles.textStyle}>了解</Text>
                      </TouchableHighlight>
                     
                      </View>
                  </View>
                </Modal>
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
 square1:{
  width:330,
  height:161,
  backgroundColor:"#FFFCD8",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:30,
  marginTop:20,
 },
 frame:{
  justifyContent:"center",
  alignItems:"center",
  width:130,
  height:38,
  backgroundColor:"#fff"
 },
 square2:{
  width:330,
  height:223,
  backgroundColor:"#FFFCD8",
  justifyContent:"center",
  alignItems:"center",
  borderRadius:30,
  marginTop:30,
  marginBottom:25
 },


 centeredView: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: 22
},
modalView: {
  width:300,
  height:420,
  //margin: 20,
  backgroundColor: "#FFFCE2",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5
},
textStyle: {
   width:100,
  height:15,
  fontSize:12,
  color: "#2D2D2D",
  fontWeight: "bold",
  textAlign: "center",
},
modalText: {
  width:300,
  marginTop:15,
  textAlign: "center"
},
modalText2: {
  width:300,
  marginBottom:15,
  textAlign: "center"
},
openButton: {
  backgroundColor: "#F194FF",
  borderRadius: 10,
  padding: 10,
  elevation: 2
},
});
