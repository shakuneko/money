import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,ImageBackground,ScrollView,} from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
//import LinearGradient from 'react-native-linear-gradient';
import { MonoText } from '../components/StyledText';



export default function HomeScreen({ navigation }) {
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
                  <Image style = {{width:130,height:118}} source = {require("../assets/images/discount.png")}/>
                  <Image style = {{width:130,height:118}} source = {require("../assets/images/discount2.png")}/>
              </View>
            </View>
          </View>

        </View>
       </ScrollView> 
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
});
