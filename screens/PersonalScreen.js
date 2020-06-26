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
        <ScrollView style={{top:-20,height:900}}>
            <View  style={styles.square2}>
                <Text style={{top:12,left:131,fontSize:20,color:"#15A7CC",marginTop:10}}>帳務分析</Text>
                <View style={{flexDirection:"row"}}>
                  <View style={{top:-90,left:70}}>
                    <VictoryPie
                      width={200}
                      data={sampleData}
                      colorScale={dataColor}
                      innerRadius={20}
                      />
                    </View>
                <View style={styles.frame}>
                  <View style={styles.frame1}>
                    <Text style={{fontSize:12,color:"#787878"}}>三月總支出</Text>
                    <Text style={{fontSize:12,color:"#787878"}}>帳戶餘額</Text>
                  </View>
                  <View style={styles.frame2}>
                    <Text style={{fontSize:20,color:"#15A7CC"}}>4800</Text>
                    <Text style={{fontSize:20,color:"#15A7CC",marginLeft:5}}>32000</Text>
                  </View>

                </View>
                </View>
            </View>
            <View  style={styles.square3}>
            <Text style={{fontSize:20,color:"#15A7CC",marginTop:10}}>我的群組</Text>
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
                    <Image style = {{width:80,height:80,borderRadius:13}} source = {require("../assets/images/family.png")}/>
                  </View>
                  <View>
                    <Text style={{lineHeight:30}}>公司-會計零用金</Text>
                    <Text style={{lineHeight:30}}>帳戶餘額:30000</Text>
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
    left:10,
    width:338,
    height:290,
    backgroundColor:"#FFF",
    borderRadius:30
  },
  frame:{
    width:311,
    height:89,
    top:155,
    left:-185,
    backgroundColor:"#FFEB6C",
    borderRadius:16,
  },
  frame1:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:300,
    marginTop:21
  },
  frame2:{
    flexDirection:"row",
    justifyContent:"space-around",
    width:300,
    marginTop:10,
    marginLeft:5
  },
  square3:{
    left:10,
    width:338,
    height:290,
    backgroundColor:"#FFF",
    borderRadius:30,
    marginTop:14,
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
  }
});
