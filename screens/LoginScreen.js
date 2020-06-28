import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, BVLinearGradient } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './HomeScreen';
import { render } from 'react-dom';

const LoginScreen = ({ navigation }) =>  {
    
    return(
        
       
        <View style={styles.container}>
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Image style = {{width:100,height:125}} source = {require("../assets/images/FUR.png")}/>
                <Text style={{fontSize:30,color:"#707070"}}>錢之所向</Text>
                <View>
                    <View style={styles.frame}></View>
                    <View style={styles.frame}></View>
                </View>
                <View style={{width:300,flexDirection:"row",marginTop:28,justifyContent:"space-around"}}>
                    <View style={styles.frame2}>
                        <TouchableOpacity 
                        style={{marginTop:0}}
                        onPress={()=>navigation.navigate(" ")}
                        >
                            <Text style={{fontSize:20,color:"#FFF"}}>登入</Text>
                            <Text style={{fontSize:12,color:"#FFF"}}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.frame3}>
                        <TouchableOpacity 
                        style={{marginTop:0}}
                        onPress={()=>navigation.navigate("Register")}
                        >
                            <Text style={{fontSize:20,color:"#FFF"}}>註冊</Text>
                            <Text style={{fontSize:12,color:"#FFF"}}>Sign Up</Text>
                        </TouchableOpacity>
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
    frame:{
      width:274,
      height:41,
      backgroundColor:"#fff",
      marginTop:20
    },
    frame2:{
      width:118,
      height:54,
      backgroundColor:"#F1AB86",
      alignItems:"center",
      justifyContent:"center"
    },
    frame3:{
        width:118,
        height:54,
        backgroundColor:"#F8CB60",
        alignItems:"center",
        justifyContent:"center"
      },
  });
export default LoginScreen;