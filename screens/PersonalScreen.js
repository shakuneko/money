import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import{VictoryPie,VictoryBar, VictoryAnimation, VictoryArea, VictoryAxis, VictoryBoxPlot}from "victory-native"
import { MonoText } from '../components/StyledText';
const sampleData=[
  { x:"收入" , y:60 },
  { x:"支出" , y:40},
];
const dataColor =["#FFEB6C","#F8CB60"];
export default function PersonalScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <View style={styles.title}>
            <Image style = {{top:12,width:83,height:83}} source = {require("../assets/images/Head.png")}/>
            <View style={styles.plus}>
            <Image style = {{width:14,height:14}} source = {require("../assets/images/plus.png")}/>
            <Text style={{fontSize:12}}>新增帳號</Text>
            </View>
        </View>
        <View style={styles.word}>
            <View style={styles.name}>
              <Text style={{fontSize:20,color:"#15A7CC"}}>Memo</Text>
              <Text style={{fontSize:12,color:"#787878"}}>暱稱:</Text>
              <Text style={{fontSize:17,color:"#787878"}}>錢王</Text>

            </View>
            <View style={styles.account}>
            <Text style={{fontSize:12,color:"#787878"}}>帳號</Text>
              <Text style={{fontSize:15,color:"#787878"}}>(810)3655-20-8903783-2</Text>
              <Text style={{fontSize:15,color:"#787878"}}>(415)4372-73-5073421-9</Text>
              <Text style={{fontSize:15,color:"#787878"}}>(769)5609-86-6983531-4</Text>
            </View>
          </View>
        </View>
        <View  style={styles.square2}>
          <Text style={{top:12,left:131,fontSize:20}}>帳務分析</Text>
          <View style={{flexDirection:"row"}}>
            <View style={{top:-95,left:30}}>
              <VictoryPie
                width={200}
                data={sampleData}
                colorScale={dataColor}
                innerRadius={20}/>
              </View>
             
            <View style={styles.s1}>
                <View style={{width:10,height:10, backgroundColor:"#FFEB6C",}}></View>
                <Text>支出</Text>
            </View>
            <View style={styles.s2}>
                <View style={{width:10,height:10, backgroundColor:"#F8CB60"}}></View>
                <Text>收入</Text>
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
  square:{
    paddingLeft:20,
    paddingRight:20,
    top:-35,
    width:"100%",
    height:230,
    backgroundColor:"#FFEB6C",
    borderRadius:40
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
    
    width:338,
    height:280,
    backgroundColor:"#FFF",
    borderRadius:30
  },
  s1:{
    flexDirection: "row",

  },
  s2:{
    flexDirection: "row",

  }
});
