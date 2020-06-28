import * as React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import Checkbox from 'react-native-custom-checkbox';



const ConfirmScreen = ({ navigation }) => {
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
        <View style={{width:"100%",alignItems:"center"}}>
              <View style={{marginTop:30}}>
                <Text style={{fontSize:17,color:"#707070"}}>確認帳號</Text>
                <View style={{width:310,height:45,backgroundColor:"#fff",marginTop:10}}></View>
              </View>
              <View style={{marginTop:15}}>
                <Text style={{fontSize:17,color:"#707070"}}>確認金額</Text>
                <View style={{width:310,height:45,backgroundColor:"#fff",marginTop:10}}></View>
              </View>
              <View style={{width:320,justifyContent:"flex-end",alignItems:"flex-end"}}>
                <View style={{flexDirection:"row",marginTop:15,width:130,justifyContent:"space-between"}}>
                  <Text style={{fontSize:15,color:"#707070"}}>是否需要延遲</Text>
                  <Checkbox
                  checked={true}
                  style={{backgroundColor: '#fff', color:'#15A7CC',borderRadius:2,borderColor:"#FFEB6C"}}/>
                </View>
              </View>
              <TouchableOpacity
                    onPress={() => navigation.push('FinishScreen')}>
                     <View style={styles.button3}>
                      <Text style={{fontSize:20,color:"#707070"}}>確認轉帳</Text>
                    </View>
          </TouchableOpacity>
             
              <View style={{width:335,height:3,backgroundColor:"#ADDEDA",marginTop:10}}></View>

              <View style={{width:"100%",alignItems:"flex-start",marginTop:20}}>
                <Image style = {{width:250,height:250}} source = {require("../assets/images/togeder.png")}/>
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
      //justifyContent:"center"
    },
    button3:{
      width:147,
      height:43,
      backgroundColor:"#FFEB6C",
      borderRadius:17,
      alignItems:"center",
      justifyContent:"center",
      marginTop:35,
      marginBottom:20
    }
  });
  export default ConfirmScreen;
  