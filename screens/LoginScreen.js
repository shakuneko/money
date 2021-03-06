import * as React from 'react';
import { Image, Platform, StyleSheet, Text,Alert, TouchableOpacity, View,TextInput} from 'react-native';
import {Component} from "react";
import LinearGradient from 'react-native-linear-gradient';
import HomeScreen from './HomeScreen';
//import { render } from 'react-dom';

const userInfo={username:"meowmo", password:"12345678"}

const gradientHeight=500;
const gradientBackground  = '#FFF4AD';
const data = Array.from({ length: gradientHeight+1 });

export default class LoginScreen extends Component{

        constructor(props){
            super(props);
            this.state={
                username:'',
                password:''
            }
        }
    
render(){
    return(
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
        
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Image style = {{width:100,height:125}} source = {require("../assets/images/FUR.png")}/>
                <Text style={{fontSize:30,color:"#707070"}}>錢之所向</Text>
                <View>
                    <TextInput 
                        style={styles.frame}
                        placeholder="使用者名稱 (User Name)"
                        onChangeText={(username)=>this.setState({username})}
                        value={this.state.username}
                        autoCapitalize="none"
                    />
                    <TextInput 
                        style={styles.frame}
                        placeholder="密碼 (Passwords)"
                        secureTextEntry
                        onChangeText={(password)=>this.setState({password})}
                        value={this.state.password}
                    />
                </View>
                <View style={{width:300,flexDirection:"row",marginTop:28,justifyContent:"space-around"}}>
                    
                <TouchableOpacity 
                        activeOpacity={0.7}
                        style={{marginTop:0}}
                        onPress={this._Register}
                        //onPress={()=>navigation.push("Register")}
                        > 
                        <View style={styles.frame3}>
                        <Text style={{fontSize:20,color:"#FFF"}}>註冊</Text>
                        <Text style={{fontSize:12,color:"#FFF"}}>Sign Up</Text>
                        
                    </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                        activeOpacity={0.7}
                        style={{marginTop:0}}
                        onPress={this._login}
                        //onPress={()=>this.props.navigation.navigation.navigate(" ")}
                        >
                            <View style={styles.frame2}>
                            <Text style={{fontSize:20,color:"#FFF"}}>登入</Text>
                            <Text style={{fontSize:12,color:"#FFF"}}>Sign In</Text>
                            </View>
                    </TouchableOpacity>
                    
                   
                </View>
            </View>
        </View>
        </View>
   
    );
}
     _login = async() => {
         if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            //alert('Logged In');
            this.props.navigation.navigate(" ")
         }else{
            Alert.alert('','Username or Password is incorred');
         }
     };
     _Register = async() => {
        this.props.navigation.navigate("RegisterScreen")
     }
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
      marginTop:20,
      paddingLeft:16
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
