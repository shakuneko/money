import * as WebBrowser from 'expo-web-browser';
//import * as React from 'react';
import React, {Component, useState } from "react";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View , Alert, Modal,TouchableHighlight} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import{VictoryPie,VictoryLegend }from "victory-native"
import { MonoText } from '../components/StyledText';




const gradientHeight=500;
const gradientBackground  = '#FFF4AD';
const data = Array.from({ length: gradientHeight+1 });

const sampleData=[
  { x:"收入" , y:60 },
  { x:"支出" , y:40},
];
const dataColor =["#FFEB6C","#F8CB60"];
export default function PersonalScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView >
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
      <View style={styles.square}>
        <View style={styles.title}>
            <Image style = {{top:12,width:83,height:83}} source = {require("../assets/images/Head.png")}/>
          <TouchableOpacity
              activeOpacity={0.7}
              style={styles.plus}
              onPress={() => {
                setModalVisible(true);
              }}
              >
            <Image style = {{width:14,height:14}} source = {require("../assets/images/plus.png")}/>
            <Text style={{fontSize:12,color:"#15A7CC"}}>新增帳號</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.word}>
            <View style={styles.name}>
              <Text style={{fontSize:20,color:"#FFEB6C"}}>Memo</Text>
              <Text style={{fontSize:12,color:"#fff"}}>暱稱:</Text>
              <Text style={{fontSize:17,color:"#fff"}}>錢王</Text>

            </View>
            <View style={styles.account}>
            <Text style={{fontSize:12,color:"#fff"}}>帳號</Text>
              <Text style={{fontSize:15,color:"#fff"}}>(810)3655-20-8903783-2</Text>
              <Text style={{fontSize:15,color:"#fff"}}>(415)4372-73-5073421-9</Text>
              <Text style={{fontSize:15,color:"#fff"}}>(769)5609-86-6983531-4</Text>
            </View>
          </View>
        </View>
       
       
        <View style={{justifyContent:"center",display:"flex",alignItems:"center",width:"94.5%",marginBottom:30}}>
            <View  style={styles.square2}>
                <Text style={{fontSize:20,color:"#15A7CC",marginTop:15}}>帳務分析</Text>
                  <View style={{flexDirection:"row",alignItems:"center",width:220,justifyContent:"space-between",margin:20}}>
                    <View>
                    <VictoryPie
                    padding={{top:0,left:0}}
                      width={100}
                      height={100}
                      data={sampleData}
                      labels={()=>''}
                      colorScale={dataColor}
                      innerRadius={20}
                      />
                     </View>
                     <View style={{height:50}}>
                      <VictoryLegend 
                      padding={{ top: 0, left: 0 }} 
                      title="" orientation="vertical" 
                      style={{ labels: { fontSize: 12 }}} 
                      gutter={25} 
                      data={[ { name: '支出', symbol: { fill: '#FFEB6C', type: 'square' }, }, 
                      { name: '收入', symbol: { fill: '#F8CB60', type: 'square' }, }, ]} 
                      width={70} 
                      />
                     </View>
                  </View>
                <View style={styles.frame}>
                  <View style={styles.frame1}>
                    <Text style={{fontSize:12,color:"#787878"}}>三月總支出</Text>
                    <Text style={{fontSize:20,color:"#15A7CC",marginTop:5}}>4800</Text>
                  </View>
                  <View style={styles.frame1}>
                    <Text style={{fontSize:12,color:"#787878"}}>帳戶餘額</Text>
                    <Text style={{fontSize:20,color:"#15A7CC",marginTop:5}}>32000</Text>
                  </View>
                </View>
            </View>
            <View  style={styles.square3}>
              <View style={{width:330,alignItems:"flex-end"}}>
                  <View style={{flexDirection:"row",width:250,height:50,justifyContent:"space-around",alignItems:"center"}}>
                        <Text style={{fontSize:20,color:"#15A7CC"}}>我的群組</Text>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            onPress={() => {
                              setModalVisible(true);
                            }}
                            >
                        <Image style = {{width:14,height:14}} source = {require("../assets/images/plus.png")}/>
                        </TouchableOpacity>
                  </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-around",width:300,alignItems:"center",marginTop:20}}>
                  <View style={styles.family}> 
                    <Image style = {{width:80,height:80,borderRadius:13}} source = {require("../assets/images/family.png")}/>
                  </View>
                  <View>
                    <Text style={{lineHeight:30}}>家人</Text>
                    <Text style={{lineHeight:30}}>帳戶餘額:48500</Text>
                  </View>
              </View>
              <View style={{flexDirection:"row",justifyContent:"space-around",width:300,alignItems:"center",marginTop:20}}>
                  <View style={styles.family}> 
                    <Image style = {{width:80,height:80,borderRadius:13}} source = {require("../assets/images/company.png")}/>
                  </View>
                  <View>
                    <Text style={{lineHeight:30}}>公司-會計零用金</Text>
                    <Text style={{lineHeight:30}}>帳戶餘額:30000</Text>
                  </View>
              </View>

            </View>
            </View>
            <Modal
                  animationType="fade"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                    <Image style = {{width:50,height:60,marginLeft:110,marginTop:-35}} source = {require("../assets/images/personal.png")}/>
                      <Text style={styles.modalText}>尚未完成</Text>
                      
                      <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#FFEB6C" }}
                        onPress={() => {
                          setModalVisible(!modalVisible);
                        }}
                      >
                        <Text style={styles.textStyle}>返回</Text>
                      </TouchableHighlight>
                     
                      </View>
                  </View>
                </Modal>
            </View>
           
          
            </View>
      </ScrollView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFCE2',
    justifyContent:"center"
  },
  square:{
    paddingLeft:20,
    paddingRight:20,
    top:-35,
    width:"100%",
    height:230,
    backgroundColor:"#F1AB86",
    borderRadius:40,
    elevation:3
  },
  title:{
    top:45,
    width:"100%",
   flexDirection: "row",
   alignItems:"center",
   justifyContent:'space-between',
   
  },
  plus:{
    top:10,
    width:90,
    height:37,
    flexDirection: "row",
    padding:7,
    justifyContent:"space-around",
    backgroundColor:"#FFFFFF",
    alignItems:"center",
    borderRadius:10
  },
  word:{
    top:50,
    width:"100%",
    paddingLeft:15,
    flexDirection: "row",
    //justifyContent:"space-around",
    alignItems:"flex-end"
  },
  name:{
    marginRight:30,
  },
  square2:{
    left:10,
    width:330,
    height:290,
    backgroundColor:"#FFF",
    borderRadius:30,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  frame:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:280,
    height:89,
    backgroundColor:"#FFEB6C",
    borderRadius:16,
    
  },
  frame1:{
    flexDirection:"column",
    marginTop:21,
    alignItems:"center"
  },
  square3:{
    left:10,
    width:330,
    height:290,
    backgroundColor:"#FFF",
    borderRadius:30,
    marginTop:20,
    justifyContent:"flex-start",
    alignItems:"center"
  },
  family:{
      width:86,
      height:86,
      borderRadius:16,
      backgroundColor:"#FFEB6C",
      justifyContent:"center",
      alignItems:"center"
  },
   openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 10,
    padding: 10,
    elevation: 2
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    width:200,
    height:150,
    //margin: 20,
    backgroundColor: "#ADDEDA",
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
     width:70,
    height:15,
    fontSize:12,
    color: "#2D2D2D",
    //fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginTop:-10,
    marginBottom: 15,
    textAlign: "center"
  }
});

