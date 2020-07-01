import * as React from 'react';
import { Image, Platform, StyleSheet, Text,Alert, TouchableOpacity, View,TextInput} from 'react-native';
import {Component} from "react";
import LinearGradient from 'react-native-linear-gradient';

//import { render } from 'react-dom';

        
    const userInfo={username:"1", password:"2",mail:"@"}
    const gradientHeight=500;
    const gradientBackground  = '#FFF4AD';
    const data = Array.from({ length: gradientHeight+1 });

export default class RegisterScreen extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            mail:''
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
            <View style={{top:30,left:15}}>
                  <TouchableOpacity
                          onPress={this.onPress}>
                      <Image style = {{width:24,height:24}} source = {require("../assets/images/back.png")}/>
                  </TouchableOpacity>
              </View>   
            <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            
            <Image style = {{width:100,height:125}} source = {require("../assets/images/FUR.png")}/>
                <Text style={{fontSize:30,color:"#707070"}}>錢之所向</Text>
                <View>
                <TextInput 
                        style={styles.frame}
                        placeholder="信箱 (Email)"
                        onChangeText={(mail)=>this.setState({mail})}
                        value={this.state.mail}
                        autoCapitalize="none"
                    />
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
                <View>
                     <TouchableOpacity 
                        activeOpacity={0.7}
                        style={styles.frame2}
                        onPress={this._Signup}
                        //onPress={()=>this.props.navigation.navigation.navigate(" ")}
                        >
                            <Text style={{fontSize:20,color:"#FFF"}}>註冊</Text>
                            <Text style={{fontSize:12,color:"#FFF"}}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
               
               
                </View>
            </View>
        </View>
    
    
   
    );
}
    _Signup = async() => {
        if(userInfo.username === this.state.username && userInfo.password === this.state.password && userInfo.mail === this.state.mail){
            Alert.alert('','Registration success')
            this.props.navigation.navigate(" ")
        }else{
            Alert.alert('','Errow');
        }
    };
    onPress = () => {
        this.props.navigation.goBack()
     };
    
}

   


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFCE2',
    },
    header:{
        width:330,
        height:0,
        marginTop:30,
        justifyContent:"flex-start",
        alignItems:"flex-start",
      },
    frame:{
      width:274,
      height:41,
      backgroundColor:"#fff",
      marginTop:20,
      paddingLeft:16
    },
    frame2:{
      width:271,
      height:54,
      backgroundColor:"#F1AB86",
      alignItems:"center",
      justifyContent:"center",
      marginTop:16,
      elevation:2
    },
   
  });

